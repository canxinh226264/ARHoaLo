/**
 * Phân biệt mặt sàn thật với mặt bàn/đồ vật từ các điểm hit-test của WebXR.
 * Không phụ thuộc WebXR hay three: chỉ nhận độ cao, nên kiểm thử được ngoài trình duyệt.
 *
 * Ý tưởng:
 *  - Gom các điểm chạm trên mặt phẳng ngửa lên thành từng "tầng" theo độ cao.
 *  - Sàn là tầng THẤP NHẤT có đủ bằng chứng (nhiều điểm, trong đủ lâu).
 *  - Sàn phải thấp hơn camera một khoảng hợp lý: người đứng cầm máy cách mặt bàn
 *    khoảng 0,5–0,8 m nhưng cách sàn hơn 0,9 m.
 *
 * Độ cao đo trong hệ 'local' của WebXR (gốc y = 0 gần vị trí máy lúc mở phiên).
 */
export const FLOOR = {
  /** Mặt phẳng nghiêng hơn ~23° (tường, dốc) không được tính. */
  minNormalY: 0.97,
  /** Khoảng cách camera → sàn hợp lệ (m). Gần hơn là mặt bàn, xa hơn là nhiễu. */
  minCameraHeight: 0.9,
  maxCameraHeight: 2.4,
  /** Hai điểm chạm chênh dưới ngưỡng này được coi là cùng một tầng (m). */
  mergeTolerance: 0.06,
  /** Bằng chứng để chọn sàn trước khi đặt. */
  minSamples: 10,
  minSpan: 0.5,
  /** Bằng chứng chặt hơn để đặt lại khi hoa đang rơi. */
  strongSamples: 30,
  strongSpan: 1,
  /** Sai lệch tối thiểu để đặt lại sàn (m). */
  correctBy: 0.12,
  /** Lệch trong khoảng này so với sàn vẫn tính là sàn (m). */
  floorTolerance: 0.1,
  /** Lấy độ cao camera lớn nhất trong khoảng này, để lúc cúi người không bị coi là "gần sàn". */
  cameraWindow: 10,
  evidenceWindow: 3,
  maxGap: 0.6,
  minSpread: 0.35,
} as const;

export type SurfaceKind = 'floor' | 'raised' | 'pending';

interface Tier {
  y: number;
  n: number;
  first: number;
  last: number;
  countedAt: number;
  points: { x: number; z: number; t: number }[];
}

const MAX_TIERS = 16;

export class FloorDetector {
  private tiers: Tier[] = [];
  private camera: { y: number; t: number }[] = [];
  private now = 0;

  reset() {
    this.tiers.length = 0;
    this.camera.length = 0;
    this.now = 0;
  }

  observeCamera(y: number, t: number) {
    if (!Number.isFinite(y) || !Number.isFinite(t)) return;
    this.now = t;
    this.tiers = this.tiers.filter(c => t - c.last <= FLOOR.maxGap);
    const last = this.camera[this.camera.length - 1];
    if (!last || t - last.t >= 0.25) this.camera.push({ y, t });
    else if (y > last.y) last.y = y;
    while (this.camera.length && t - this.camera[0].t > FLOOR.cameraWindow) this.camera.shift();
  }

  /** Nạp một điểm chạm. Trả về false nếu mặt phẳng không đủ nằm ngang. */
  addHit(y: number, normalY: number, t: number, x: number, z: number): boolean {
    if (![y, normalY, t, x, z].every(Number.isFinite) || normalY < FLOOR.minNormalY) return false;
    let best: Tier | null = null;
    let bestD: number = FLOOR.mergeTolerance;
    for (const c of this.tiers) {
      const d = Math.abs(c.y - y);
      if (d <= bestD) {
        bestD = d;
        best = c;
      }
    }
    if (best) {
      // Nhiều tia trong cùng một frame không phải nhiều lần xác nhận độc lập.
      if (t - best.countedAt >= 0.025) { best.n++; best.countedAt = t; }
      best.y += (y - best.y) / Math.min(best.n, 200);
      best.last = t;
      best.points = best.points.filter(p => t - p.t <= FLOOR.evidenceWindow);
      if (!best.points.some(p => Math.hypot(p.x - x, p.z - z) < 0.12)) best.points.push({ x, z, t });
    } else {
      if (this.tiers.length >= MAX_TIERS) {
        let oldest = 0;
        for (let i = 1; i < this.tiers.length; i++) if (this.tiers[i].last < this.tiers[oldest].last) oldest = i;
        this.tiers.splice(oldest, 1);
      }
      this.tiers.push({ y, n: 1, first: t, last: t, countedAt: t, points: [{ x, z, t }] });
    }
    return true;
  }

  private get cameraY() {
    let y = -Infinity;
    for (const s of this.camera) if (s.y > y) y = s.y;
    return y;
  }

  private lowest(samples: number, span: number): number | null {
    const cam = this.cameraY;
    let found: number | null = null;
    for (const c of this.tiers) {
      if (this.now - c.last > FLOOR.maxGap || c.n < samples || c.last - c.first < span) continue;
      const points = c.points.filter(p => this.now - p.t <= FLOOR.evidenceWindow);
      if (points.length < 3 || !points.some(a => points.some(b => Math.hypot(a.x - b.x, a.z - b.z) >= FLOOR.minSpread))) continue;
      const h = cam - c.y;
      if (h < FLOOR.minCameraHeight || h > FLOOR.maxCameraHeight) continue;
      if (found === null || c.y < found) found = c.y;
    }
    return found;
  }

  /** Độ cao sàn tốt nhất hiện có, null nếu chưa đủ bằng chứng. */
  get floorY(): number | null {
    return this.lowest(FLOOR.minSamples, FLOOR.minSpan);
  }

  /** Như floorY nhưng đòi hỏi bằng chứng chặt hơn, dùng khi đặt lại sàn. */
  get confirmedFloorY(): number | null {
    return this.lowest(FLOOR.strongSamples, FLOOR.strongSpan);
  }

  /** Điểm chạm ở độ cao y là sàn, là mặt cao hơn sàn, hay chưa kết luận được. */
  classify(y: number): SurfaceKind {
    const floor = this.floorY;
    if (floor !== null) {
      if (y > floor + FLOOR.floorTolerance) return 'raised';
      return y >= floor - FLOOR.floorTolerance ? 'floor' : 'pending';
    }
    return this.cameraY - y < FLOOR.minCameraHeight ? 'raised' : 'pending';
  }
}
