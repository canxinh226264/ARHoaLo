import * as THREE from 'three';
import { BODY_ROWS, GRID_H, GRID_W } from './floor-vision';

/**
 * Tìm đường cục bộ cho dải sáng: chiếu mặt nạ sàn của FloorVision xuống mặt đất thành
 * bản đồ ô quanh người dùng, rồi chạy A* từ vị trí hiện tại về phía điểm đến.
 *
 * Giới hạn đã biết:
 *  - Chỉ biết vật cản đã lọt vào camera và khác màu sàn, không biết tường hay phòng ở xa.
 *  - Vật đứng trên sàn được chiếu dài ra phía sau, nên vùng cấm rộng hơn vật thật một chút.
 *    Dải sáng vì thế đi vòng hơi rộng, không đi xuyên.
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
const BLOCKED_BELOW = -0.25;
const INFLATE_HARD = 1; // ô, nửa bề ngang người
const INFLATE_SOFT = 2; // ô, ưu tiên đi cách vật cản
const SOFT_COST = 1.5;
/** Ưu tiên đi trên phần sàn đã thấy thay vì vòng ra chỗ chưa thấy (có thể là tủ, tường). */
const UNKNOWN_COST = 0.6;
const KNOWN_FREE_ABOVE = 0.3;
/** Đích nằm sát hoặc trên vật (đi tới cái bàn chẳng hạn): tới gần chừng này là đã tới (m). */
const GOAL_TOLERANCE = 0.8;
/** Đi xa đường cũ tốn thêm chi phí này, để dải sáng không nhảy trái phải khi hai bên gần bằng nhau. */
const OFF_PATH_COST = 0.3;
const ON_PATH_RADIUS = 3; // ô

export interface GuidePlan {
  points: THREE.Vector2[];
  /** Không có lối tới đích trong vùng đã thấy. */
  blocked: boolean;
}

const _dir = new THREE.Vector3();
const SQRT2 = Math.SQRT2;

export class GuidePlanner {
  /** −1 = vật cản, +1 = sàn trống, 0 = chưa biết. */
  readonly score = new Float32Array(MAP_SIZE * MAP_SIZE);
  private shiftBuf = new Float32Array(MAP_SIZE * MAP_SIZE);
  private body = new Uint8Array(GRID_W * GRID_H);
  private bodyStack = new Int32Array(GRID_W * GRID_H);
  private cost = new Float32Array(MAP_SIZE * MAP_SIZE);
  private offPath = new Float32Array(MAP_SIZE * MAP_SIZE);
  private g = new Float32Array(MAP_SIZE * MAP_SIZE);
  private from = new Int32Array(MAP_SIZE * MAP_SIZE);
  private closed = new Uint8Array(MAP_SIZE * MAP_SIZE);
  private heap: number[] = [];
  private cx = 0; // ô tâm bản đồ, theo toạ độ thế giới
  private cz = 0;
  private last: THREE.Vector2[] | null = null;

  reset() {
    this.score.fill(0);
    this.last = null;
    this.cx = this.cz = 0;
  }

  private index(x: number, z: number): number {
    const c = Math.floor(x / CELL) - this.cx + HALF;
    const r = Math.floor(z / CELL) - this.cz + HALF;
    return c < 0 || r < 0 || c >= MAP_SIZE || r >= MAP_SIZE ? -1 : r * MAP_SIZE + c;
  }

  private centerOf(i: number, out = new THREE.Vector2()) {
    const c = i % MAP_SIZE, r = (i - c) / MAP_SIZE;
    return out.set((c - HALF + this.cx + 0.5) * CELL, (r - HALF + this.cz + 0.5) * CELL);
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
    const keep = Math.exp(-dt / FORGET_AFTER);
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

  /** Đánh dấu ô bị chặn; ô quanh `start` luôn đi được để không bị kẹt tại chỗ. */
  private buildCost(sx: number, sz: number) {
    const { cost, score } = this;
    for (let i = 0; i < cost.length; i++) cost[i] = score[i] > KNOWN_FREE_ABOVE ? 0 : UNKNOWN_COST;
    for (let r = 0; r < MAP_SIZE; r++) {
      for (let c = 0; c < MAP_SIZE; c++) {
        if (score[r * MAP_SIZE + c] >= BLOCKED_BELOW) continue;
        for (let v = Math.max(0, r - INFLATE_SOFT); v <= Math.min(MAP_SIZE - 1, r + INFLATE_SOFT); v++) {
          for (let u = Math.max(0, c - INFLATE_SOFT); u <= Math.min(MAP_SIZE - 1, c + INFLATE_SOFT); u++) {
            const d = Math.max(Math.abs(u - c), Math.abs(v - r));
            const i = v * MAP_SIZE + u;
            if (d <= INFLATE_HARD) cost[i] = Infinity;
            else if (cost[i] !== Infinity) cost[i] = Math.max(cost[i], SOFT_COST);
          }
        }
      }
    }
    const p = new THREE.Vector2();
    for (let i = 0; i < cost.length; i++) {
      if (cost[i] !== Infinity) continue;
      this.centerOf(i, p);
      if (Math.hypot(p.x - sx, p.y - sz) < NEAR_FREE) cost[i] = UNKNOWN_COST;
    }
  }

  private push(i: number, f: Float32Array) {
    const h = this.heap;
    h.push(i);
    let k = h.length - 1;
    while (k > 0) {
      const p = (k - 1) >> 1;
      if (f[h[p]] <= f[h[k]]) break;
      [h[p], h[k]] = [h[k], h[p]];
      k = p;
    }
  }

  private pop(f: Float32Array): number {
    const h = this.heap;
    const top = h[0];
    const end = h.pop()!;
    if (h.length) {
      h[0] = end;
      let k = 0;
      for (;;) {
        const a = 2 * k + 1, b = a + 1;
        let m = k;
        if (a < h.length && f[h[a]] < f[h[m]]) m = a;
        if (b < h.length && f[h[b]] < f[h[m]]) m = b;
        if (m === k) break;
        [h[m], h[k]] = [h[k], h[m]];
        k = m;
      }
    }
    return top;
  }

  private fScore = new Float32Array(MAP_SIZE * MAP_SIZE);

  /** Chỉ số ô cuối cùng tới được, gần đích nhất nếu không tới được đích. */
  private search(start: number, goal: number) {
    const { g, from, closed, cost, fScore: f } = this;
    const gc = goal % MAP_SIZE, gr = (goal - gc) / MAP_SIZE;
    const h = (i: number) => {
      const c = i % MAP_SIZE, r = (i - c) / MAP_SIZE;
      const a = Math.abs(c - gc), b = Math.abs(r - gr);
      return Math.max(a, b) + (SQRT2 - 1) * Math.min(a, b);
    };
    g.fill(Infinity);
    closed.fill(0);
    from.fill(-1);
    this.heap.length = 0;
    g[start] = 0;
    f[start] = h(start);
    this.push(start, f);
    let best = start, bestH = f[start];
    while (this.heap.length) {
      const i = this.pop(f);
      if (closed[i]) continue;
      closed[i] = 1;
      const hi = h(i);
      if (hi < bestH) {
        bestH = hi;
        best = i;
      }
      if (i === goal) return { end: i, reached: true };
      const c = i % MAP_SIZE, r = (i - c) / MAP_SIZE;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (!dr && !dc) continue;
          const u = c + dc, v = r + dr;
          if (u < 0 || v < 0 || u >= MAP_SIZE || v >= MAP_SIZE) continue;
          const j = v * MAP_SIZE + u;
          if (closed[j] || cost[j] === Infinity) continue;
          // không cắt chéo qua góc vật cản
          if (dr && dc && (cost[r * MAP_SIZE + u] === Infinity || cost[v * MAP_SIZE + c] === Infinity)) continue;
          const ng = g[i] + (dr && dc ? SQRT2 : 1) * (1 + cost[j] + this.offPath[j]);
          if (ng < g[j]) {
            g[j] = ng;
            from[j] = i;
            f[j] = ng + h(j);
            this.push(j, f);
          }
        }
      }
    }
    return { end: best, reached: false };
  }

  /** Đoạn thẳng a→b không chạm vật cản và không đi qua ô đắt hơn `limit`. */
  private clearBetween(a: THREE.Vector2, b: THREE.Vector2, limit: number) {
    const n = Math.ceil(a.distanceTo(b) / (CELL * 0.5));
    for (let k = 0; k <= n; k++) {
      const t = n ? k / n : 0;
      const i = this.index(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
      if (i >= 0 && this.cost[i] > limit) return false;
    }
    return true;
  }

  private costAt(p: THREE.Vector2) {
    const i = this.index(p.x, p.y);
    return i >= 0 ? this.cost[i] : 0;
  }

  /** Đánh dấu ô nằm xa đường của lần trước. */
  private markOffPath() {
    const { offPath, last } = this;
    if (!last || last.length < 2) {
      offPath.fill(0);
      return;
    }
    offPath.fill(OFF_PATH_COST);
    for (let i = 1; i < last.length; i++) {
      const n = Math.ceil(last[i - 1].distanceTo(last[i]) / CELL);
      for (let k = 0; k <= n; k++) {
        const t = n ? k / n : 0;
        const at = this.index(last[i - 1].x + (last[i].x - last[i - 1].x) * t, last[i - 1].y + (last[i].y - last[i - 1].y) * t);
        if (at < 0) continue;
        const c = at % MAP_SIZE, r = (at - c) / MAP_SIZE;
        for (let v = Math.max(0, r - ON_PATH_RADIUS); v <= Math.min(MAP_SIZE - 1, r + ON_PATH_RADIUS); v++) {
          for (let u = Math.max(0, c - ON_PATH_RADIUS); u <= Math.min(MAP_SIZE - 1, c + ON_PATH_RADIUS); u++) offPath[v * MAP_SIZE + u] = 0;
        }
      }
    }
  }

  /** Tìm đường từ `from` về `target`. Đích ngoài bản đồ thì đi tới mép rồi nối thẳng. */
  plan(from: THREE.Vector2, target: THREE.Vector2): GuidePlan {
    this.buildCost(from.x, from.y);
    const start = this.index(from.x, from.y);
    let goalPt = target.clone();
    const span = (HALF - 2) * CELL;
    const d = from.distanceTo(target);
    if (d > span) goalPt = from.clone().add(target.clone().sub(from).multiplyScalar(span / d));
    const goal = this.index(goalPt.x, goalPt.y);
    if (start < 0 || goal < 0) return { points: [from.clone(), target.clone()], blocked: false };

    this.markOffPath();
    const found = this.search(start, goal);
    const end = found.end;
    const reached = found.reached || this.centerOf(end).distanceTo(goalPt) <= GOAL_TOLERANCE;
    const raw: THREE.Vector2[] = [];
    for (let i = end; i !== -1; i = this.from[i]) raw.push(this.centerOf(i));
    raw.reverse();
    raw[0] = from.clone();
    if (found.reached) raw[raw.length - 1] = goalPt.clone();

    // rút gọn: bỏ điểm thừa khi đi thẳng được tới điểm xa hơn mà không qua ô đắt hơn đường gốc,
    // nếu không dải sáng sẽ cắt ra vùng chưa thấy mà A* đã cố tránh
    const pts: THREE.Vector2[] = [raw[0]];
    for (let i = 0; i < raw.length - 1; ) {
      let j = i + 1, limit = this.costAt(raw[j]);
      for (let k = i + 2, kLimit = limit; k < raw.length; k++) {
        kLimit = Math.max(kLimit, this.costAt(raw[k]));
        if (this.clearBetween(raw[i], raw[k], kLimit)) {
          j = k;
          limit = kLimit;
        }
      }
      pts.push(raw[j]);
      i = j;
    }
    if (found.reached && d > span) pts.push(target.clone());

    this.last = reached ? pts : null;
    return { points: pts, blocked: !reached };
  }
}
