import * as THREE from 'three';
import { BODY_ROWS, GRID_H, GRID_W } from './floor-vision';

/**
 * Bản đồ sàn/tường quanh người dùng: chiếu mặt nạ sàn từ camera xuống mặt đất thành lưới ô,
 * từ đó biết tường cách bao xa theo từng hướng (để đo trần, giữ hoa trong phòng).
 *
 * Giới hạn đã biết: chỉ biết vật cản đã lọt vào camera; vật đứng trên sàn được chiếu dài ra
 * phía sau nên trông như kéo dài hơn thật.
 */
export const CELL = 0.2; // m
export const MAP_SIZE = 48;
const HALF = MAP_SIZE / 2;
const MAX_OBSERVE = 4.5; // m, phải nhỏ hơn tầm của mặt nạ sàn, nếu không sàn xa sẽ bị coi là vật cản
/** Quanh chân người dùng luôn coi là đi được (chân, tay lọt khung hình dễ bị tính là vật cản). */
const NEAR_FREE = 0.7; // m
/** Vùng không phải sàn dính liền mép dưới khung hình và ở gần hơn mức này là chân, tay người cầm máy. */
const BODY_RANGE = 1.6; // m
const OBSERVE_RATE = 0.35;
const FORGET_AFTER = 10; // giây, vật cản ngoài khung hình mờ dần (người đã đi qua)
/** Dải vật cản dài từ chừng này (m) trở lên mới được coi là tường. */
const WALL_RUN = 1.0;
const BLOCKED_BELOW = -0.25;

const _dir = new THREE.Vector3();

export class RoomMap {
  /** −1 = vật cản, +1 = sàn trống, 0 = chưa biết. */
  readonly score = new Float32Array(MAP_SIZE * MAP_SIZE);
  private shiftBuf = new Float32Array(MAP_SIZE * MAP_SIZE);
  private body = new Uint8Array(GRID_W * GRID_H);
  /** @param forgetAfter số giây bản đồ mờ dần; đo phòng cần nhớ lâu hơn dẫn đường */
  constructor(private forgetAfter = FORGET_AFTER) {}
  private bodyStack = new Int32Array(GRID_W * GRID_H);
  private cx = 0; // ô tâm bản đồ, theo toạ độ thế giới
  private cz = 0;

  reset() {
    this.score.fill(0);
    this.cx = this.cz = 0;
  }

  private index(x: number, z: number): number {
    const c = Math.floor(x / CELL) - this.cx + HALF;
    const r = Math.floor(z / CELL) - this.cz + HALF;
    return c < 0 || r < 0 || c >= MAP_SIZE || r >= MAP_SIZE ? -1 : r * MAP_SIZE + c;
  }

  /** Dời bản đồ khi người dùng đi xa tâm, giữ lại phần đã thấy. */
  recenter(x: number, z: number) {
    const nx = Math.floor(x / CELL), nz = Math.floor(z / CELL);
    const dx = nx - this.cx, dz = nz - this.cz;
    if (Math.abs(dx) < 6 && Math.abs(dz) < 6) return;
    this.shiftBuf.fill(0);
    for (let r = 0; r < MAP_SIZE; r++) {
      for (let c = 0; c < MAP_SIZE; c++) {
        const c2 = c - dx, r2 = r - dz;
        if (c2 >= 0 && r2 >= 0 && c2 < MAP_SIZE && r2 < MAP_SIZE) this.shiftBuf[r2 * MAP_SIZE + c2] = this.score[r * MAP_SIZE + c];
      }
    }
    this.score.set(this.shiftBuf);
    this.cx = nx;
    this.cz = nz;
  }

  /** Đánh dấu các ô không phải sàn nối liền với mép dưới khung hình. */
  private markBody(mask: Float32Array) {
    const { body, bodyStack: stack } = this;
    body.fill(0);
    let top = 0;
    const visit = (i: number) => {
      if (body[i] || mask[i] > 0.6) return;
      body[i] = 1;
      stack[top++] = i;
    };
    for (let c = 0; c < GRID_W; c++) visit((GRID_H - 1) * GRID_W + c);
    while (top > 0) {
      const i = stack[--top];
      const c = i % GRID_W;
      if (c > 0) visit(i - 1);
      if (c < GRID_W - 1) visit(i + 1);
      if (i >= GRID_W) visit(i - GRID_W);
      if (i < GRID_W * (GRID_H - 1)) visit(i + GRID_W);
    }
  }

  /** Cập nhật bản đồ từ mặt nạ sàn hiện tại. */
  observe(mask: Float32Array, projInv: THREE.Matrix4, q: THREE.Quaternion, cam: THREE.Vector3, dt: number) {
    const keep = Math.exp(-dt / this.forgetAfter);
    for (let i = 0; i < this.score.length; i++) this.score[i] *= keep;
    this.markBody(mask);
    for (let r = 0; r < GRID_H; r++) {
      const ny = 1 - ((r + 0.5) / GRID_H) * 2;
      for (let c = 0; c < GRID_W; c++) {
        const m = mask[r * GRID_W + c];
        const free = m > 0.6;
        if (!free && (m > 0.3 || r >= BODY_ROWS)) continue; // chưa rõ, hoặc mép dưới hay có chân tay
        _dir.set(((c + 0.5) / GRID_W) * 2 - 1, ny, 0.5).applyMatrix4(projInv).applyQuaternion(q).normalize();
        if (_dir.y >= -0.02) continue;
        const t = cam.y / -_dir.y;
        const dx = _dir.x * t, dz = _dir.z * t;
        const d = Math.hypot(dx, dz);
        if (d > MAX_OBSERVE || (!free && (d < NEAR_FREE || (d < BODY_RANGE && this.body[r * GRID_W + c])))) continue;
        const i = this.index(cam.x + dx, cam.z + dz);
        if (i >= 0) this.score[i] += ((free ? 1 : -1) - this.score[i]) * OBSERVE_RATE;
      }
    }
  }

  /**
   * Khoảng cách tới tường theo hướng (dx, dz), null nếu chưa thấy tường hướng đó.
   * Tường = một dải vật cản dài. Bàn ghế chỉ che một đoạn ngắn rồi lại thấy sàn phía sau nên không tính.
   */
  wallAlong(x: number, z: number, dx: number, dz: number, maxDist = MAX_OBSERVE): number | null {
    const step = CELL * 0.5;
    let runStart = -1;
    for (let d = NEAR_FREE; d <= maxDist; d += step) {
      const i = this.index(x + dx * d, z + dz * d);
      if (i < 0) break;
      if (this.score[i] < BLOCKED_BELOW) {
        if (runStart < 0) runStart = d;
        if (d - runStart >= WALL_RUN) return runStart;
      } else {
        runStart = -1;
      }
    }
    return runStart >= 0 && maxDist - runStart < WALL_RUN + step ? runStart : null;
  }

  /** Điểm (px, pz) có nằm trong phòng nhìn từ (x, z) không; chưa thấy tường thì coi là có. */
  isInside(x: number, z: number, px: number, pz: number): boolean {
    const dist = Math.hypot(px - x, pz - z);
    if (dist < NEAR_FREE) return true;
    const wall = this.wallAlong(x, z, (px - x) / dist, (pz - z) / dist);
    return wall === null || dist < wall;
  }
}
