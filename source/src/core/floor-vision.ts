import * as THREE from 'three';

/**
 * Nhận diện vùng sàn từ hình camera, cho chế độ không có WebXR (iOS, trình duyệt
 * trong app, Android không bật AR nâng cao). Ở đó không có dữ liệu độ sâu, nên dùng
 * màu sắc kết hợp hướng điện thoại:
 *  - Cảm biến cho biết ô ảnh nào có thể là sàn (nằm dưới đường chân trời) và cách xa bao nhiêu.
 *  - Màu sàn là màu chiếm ưu thế ở phần sàn gần người, bỏ qua mép dưới khung hình nơi hay có chân/tay.
 *  - Vùng sàn là các ô liền nhau cùng màu đó, nên tường, tủ, bàn, ghế khác màu bị loại.
 * Kết quả là mặt nạ theo toạ độ màn hình; PetalSystem chỉ cho hoa đọng hiện trên mặt nạ.
 *
 * Đây là ước lượng màu + hướng, không phải cảm biến độ sâu. Chưa đủ bằng chứng thì ẩn hoa đọng.
 */
export const GRID_W = 36;
export const GRID_H = 64;

const SEED_NEAR = 0.6; // m
const SEED_FAR = 2.8; // Không học từ vùng xa/chân tường khi nhìn ngang.
const MIN_SEEDS = 10;
const MAX_SEEDS = 150;
/** Bỏ mép dưới màn hình khi lấy màu sàn: hay có chân, tay của chính người cầm máy. */
export const BODY_ROWS = Math.floor(GRID_H * 0.82);
const MAX_FLOOR_DIST = 5; // m
const MODE_TOL_C = 6;
const MODE_TOL_Y = 35;
const MIN_DOMINANCE = 0.55;
const ACQUIRE_AFTER = 0.7;
const MODEL_RATE = 0.15;
/** Màu mới phải kéo dài chừng này (giây) mới thay màu sàn: lia qua mặt bàn không làm đổi. */
const REPLACE_AFTER = 3;
const MASK_RATE = 8; // 1/giây

interface Model {
  y: number;
  cb: number;
  cr: number;
  tolY: number;
  tolC: number;
}

const clamp = THREE.MathUtils.clamp;
const _dir = new THREE.Vector3();

/** Khoảng cách ngang từ camera tới điểm sàn của từng ô; Infinity nếu ô nằm trên chân trời. */
export function floorDistances(out: Float32Array, projInv: THREE.Matrix4, q: THREE.Quaternion, eye: number) {
  for (let r = 0; r < GRID_H; r++) {
    const ny = 1 - ((r + 0.5) / GRID_H) * 2;
    for (let c = 0; c < GRID_W; c++) {
      _dir.set(((c + 0.5) / GRID_W) * 2 - 1, ny, 0.5).applyMatrix4(projInv).applyQuaternion(q).normalize();
      out[r * GRID_W + c] = _dir.y < -0.02 ? (eye / -_dir.y) * Math.hypot(_dir.x, _dir.z) : Infinity;
    }
  }
}

export class FloorVision {
  readonly mask = new Float32Array(GRID_W * GRID_H);
  private Y = new Float32Array(GRID_W * GRID_H);
  private Cb = new Float32Array(GRID_W * GRID_H);
  private Cr = new Float32Array(GRID_W * GRID_H);
  private target = new Uint8Array(GRID_W * GRID_H);
  private scratch = new Uint8Array(GRID_W * GRID_H);
  private stack = new Int32Array(GRID_W * GRID_H);
  private model: Model | null = null;
  private candidate: Model | null = null;
  private candidateTime = 0;

  /** Đã có màu sàn; trước đó mặt nạ không có giá trị. */
  get ready() {
    return !!this.model;
  }

  reset() {
    this.model = null;
    this.candidate = null;
    this.candidateTime = 0;
    this.mask.fill(0);
  }

  /** @param rgba ảnh GRID_W × GRID_H khớp với màn hình, dòng 0 ở trên cùng. */
  update(rgba: Uint8ClampedArray, dist: Float32Array, dt: number) {
    this.toYCbCr(rgba);
    const seeds = this.pickSeeds(dist);
    dt = clamp(dt, 0, 0.25);
    if (seeds.length >= MIN_SEEDS) this.learn(seeds, dt);
    else { this.candidate = null; this.candidateTime = 0; }
    if (!this.model) return;
    this.grow(seeds, dist);
    const k = 1 - Math.exp(-dt * MASK_RATE);
    // Vật chắn/chân trời mới phải che ngay; chỉ làm mượt khi hiện hoa trở lại.
    for (let i = 0; i < this.mask.length; i++) this.mask[i] = this.target[i] ? this.mask[i] + (1 - this.mask[i]) * k : 0;
  }

  /** Mức "là sàn" (0..1) tại điểm NDC trên màn hình. */
  sample(ndcX: number, ndcY: number): number {
    if (!this.model || !Number.isFinite(ndcX) || !Number.isFinite(ndcY) || Math.abs(ndcX) > 1 || Math.abs(ndcY) > 1) return 0;
    const x = clamp((ndcX * 0.5 + 0.5) * GRID_W - 0.5, 0, GRID_W - 1.001);
    const y = clamp((0.5 - ndcY * 0.5) * GRID_H - 0.5, 0, GRID_H - 1.001);
    const x0 = x | 0, y0 = y | 0, fx = x - x0, fy = y - y0;
    const i = y0 * GRID_W + x0, m = this.mask;
    const top = m[i] + (m[i + 1] - m[i]) * fx;
    const bot = m[i + GRID_W] + (m[i + GRID_W + 1] - m[i + GRID_W]) * fx;
    return top + (bot - top) * fy;
  }

  /** Đổi sang độ sáng + sắc độ (làm mờ 3×3 để bớt nhiễu): vệt nắng đổi độ sáng nhưng ít đổi sắc độ. */
  private toYCbCr(d: Uint8ClampedArray) {
    for (let r = 0; r < GRID_H; r++) {
      for (let c = 0; c < GRID_W; c++) {
        let R = 0, G = 0, B = 0, n = 0;
        for (let v = Math.max(0, r - 1); v <= Math.min(GRID_H - 1, r + 1); v++) {
          for (let u = Math.max(0, c - 1); u <= Math.min(GRID_W - 1, c + 1); u++) {
            const p = (v * GRID_W + u) * 4;
            R += d[p]; G += d[p + 1]; B += d[p + 2];
            n++;
          }
        }
        R /= n; G /= n; B /= n;
        const i = r * GRID_W + c;
        this.Y[i] = 0.299 * R + 0.587 * G + 0.114 * B;
        this.Cb[i] = -0.169 * R - 0.331 * G + 0.5 * B;
        this.Cr[i] = 0.5 * R - 0.419 * G - 0.081 * B;
      }
    }
  }

  private pickSeeds(dist: Float32Array) {
    const seeds: number[] = [];
    for (let r = Math.floor(GRID_H * 0.55); r < BODY_ROWS; r++) {
      for (let c = Math.floor(GRID_W * 0.18); c < GRID_W * 0.82; c++) {
        const i = r * GRID_W + c;
        if (dist[i] >= SEED_NEAR && dist[i] <= SEED_FAR) seeds.push(i);
      }
    }
    return seeds;
  }

  /** Tìm màu chiếm ưu thế trong các ô gần rồi cập nhật màu sàn. */
  private learn(seeds: number[], dt: number) {
    const { Y, Cb, Cr } = this;
    const near = (i: number, y: number, cb: number, cr: number) =>
      Math.abs(Cb[i] - cb) < MODE_TOL_C && Math.abs(Cr[i] - cr) < MODE_TOL_C && Math.abs(Y[i] - y) < MODE_TOL_Y;
    const step = Math.max(1, Math.floor(seeds.length / MAX_SEEDS));
    let best = -1, bestScore = 0;
    for (let a = 0; a < seeds.length; a += step) {
      const i = seeds[a];
      let score = 0;
      for (let b = 0; b < seeds.length; b += step) if (near(seeds[b], Y[i], Cb[i], Cr[i])) score++;
      if (score > bestScore) {
        bestScore = score;
        best = i;
      }
    }
    if (best < 0) return;

    // ô đầu tiên có thể nằm giữa hai màu (gỗ và da chân): dịch dần về tâm nhóm màu đông nhất
    let my = Y[best], mb = Cb[best], mr = Cr[best];
    let n = 0, vy = 0, vb = 0, vr = 0;
    for (let iter = 0; iter < 4; iter++) {
      let sy = 0, sb = 0, sr = 0;
      n = vy = vb = vr = 0;
      for (const j of seeds) {
        if (!near(j, my, mb, mr)) continue;
        n++; sy += Y[j]; sb += Cb[j]; sr += Cr[j];
        vy += Y[j] * Y[j]; vb += Cb[j] * Cb[j]; vr += Cr[j] * Cr[j];
      }
      if (!n) return;
      my = sy / n; mb = sb / n; mr = sr / n;
    }
    if (n / seeds.length < MIN_DOMINANCE) { this.candidate = null; this.candidateTime = 0; return; }
    const sy = Math.sqrt(Math.max(0, vy / n - my * my));
    const sc = Math.sqrt(Math.max(0, Math.max(vb / n - mb * mb, vr / n - mr * mr)));
    const next: Model = { y: my, cb: mb, cr: mr, tolY: clamp(sy * 2.5, 30, 70), tolC: clamp(sc * 2.5, 6, 14) };

    const m = this.model;
    if (m && Math.abs(m.cb - mb) < m.tolC && Math.abs(m.cr - mr) < m.tolC && Math.abs(m.y - my) < m.tolY) {
      this.candidate = null;
      this.candidateTime = 0;
      m.y += (my - m.y) * MODEL_RATE;
      m.cb += (mb - m.cb) * MODEL_RATE;
      m.cr += (mr - m.cr) * MODEL_RATE;
      m.tolY += (next.tolY - m.tolY) * MODEL_RATE;
      m.tolC += (next.tolC - m.tolC) * MODEL_RATE;
    } else {
      const c = this.candidate;
      if (!c || Math.abs(c.cb - mb) > MODE_TOL_C || Math.abs(c.cr - mr) > MODE_TOL_C || Math.abs(c.y - my) > MODE_TOL_Y) {
        this.candidate = next;
        this.candidateTime = 0;
      }
      this.candidateTime += dt;
      if (this.candidateTime >= (m ? REPLACE_AFTER : ACQUIRE_AFTER)) {
        this.model = next;
        this.mask.fill(0);
        this.candidate = null;
        this.candidateTime = 0;
      }
    }
  }

  private matches(i: number) {
    const m = this.model!;
    return Math.abs(this.Cb[i] - m.cb) < m.tolC && Math.abs(this.Cr[i] - m.cr) < m.tolC && Math.abs(this.Y[i] - m.y) < m.tolY;
  }

  /** Loang từ các ô gần đúng màu sàn sang ô liền kề, rồi lấp các lỗ nhỏ. */
  private grow(seeds: number[], dist: Float32Array) {
    const { target, stack, scratch } = this;
    target.fill(0);
    let top = 0;
    for (const i of seeds) {
      if (this.matches(i)) {
        target[i] = 1;
        stack[top++] = i;
      }
    }
    const visit = (j: number) => {
      if (target[j] || !Number.isFinite(dist[j]) || dist[j] > MAX_FLOOR_DIST || !this.matches(j)) return;
      target[j] = 1;
      stack[top++] = j;
    };
    while (top > 0) {
      const i = stack[--top];
      const c = i % GRID_W;
      if (c > 0) visit(i - 1);
      if (c < GRID_W - 1) visit(i + 1);
      if (i >= GRID_W) visit(i - GRID_W);
      if (i < GRID_W * (GRID_H - 1)) visit(i + GRID_W);
    }
    // ô trống có ≥ 3 cạnh là sàn (vật nhỏ, nhiễu) được tính là sàn
    scratch.set(target);
    for (let i = 0; i < target.length; i++) {
      if (scratch[i] || !Number.isFinite(dist[i]) || dist[i] > MAX_FLOOR_DIST || !this.matches(i)) continue;
      const c = i % GRID_W;
      const around = (c > 0 ? scratch[i - 1] : 0) + (c < GRID_W - 1 ? scratch[i + 1] : 0) +
        (i >= GRID_W ? scratch[i - GRID_W] : 0) + (i < GRID_W * (GRID_H - 1) ? scratch[i + GRID_W] : 0);
      if (around >= 3) target[i] = 1;
    }
  }
}
