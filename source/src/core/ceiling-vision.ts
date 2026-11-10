import * as THREE from 'three';
import { GRID_H, GRID_W } from './floor-vision';

/**
 * Ước lượng chiều cao trần từ hình camera, không cần biết trước kích thước phòng.
 *
 * Camera thường không đo được độ sâu, nên dựa vào hình học một ảnh:
 *  - Màu trần là màu chiếm ưu thế ở vùng gần đỉnh đầu khi ngẩng máy lên.
 *  - Loang vùng trần xuống tới mép tường, được góc ngẩng e của mép đó.
 *  - Bản đồ sàn cho biết tường cách bao xa (d) theo cùng hướng.
 *  - Chiều cao trần = mắt + d × tan(e). Lấy trung vị của nhiều lần đo.
 *
 * Có mô hình phân vùng (updateMask) thì vùng trần lấy từ mô hình; ước lượng theo màu chỉ dùng
 * khi mô hình chưa tải xong hoặc lỗi. Đồ đạc che chân tường làm khoảng cách đo được ngắn đi, nên
 * kết quả lấy phần trên của các hướng thay vì trung vị.
 *
 * Giới hạn: tỉ lệ dựa trên chiều cao mắt giả định; tường và trần cùng màu thì không tìm được
 * mép trần, khi đó giữ giá trị mặc định.
 */
export const DEFAULT_CEILING = 2.8;
const MIN_HEIGHT = 2.1;
const MAX_HEIGHT = 7;
const D2R = Math.PI / 180;
const SEED_ELEVATION = 55 * D2R;
const MIN_REGION_ELEVATION = 5 * D2R;
const EDGE_MIN = 10 * D2R;
const EDGE_MAX = 60 * D2R;
const MIN_SEEDS = 12;
const TOL_Y = 22;
const TOL_C = 7;
const MIN_DOMINANCE = 0.5;
const MAX_SAMPLES = 240;
const MIN_SAMPLES = 20;
const MIN_BINS = 2; // số hướng khác nhau đã đo
const BIN = 15 * D2R;
const SMOOTH = 0.2;
/** Phân vị lấy trên các hướng đã đo. */
const HEIGHT_PERCENTILE = 0.7;

const _dir = new THREE.Vector3();
const N = GRID_W * GRID_H;

export class CeilingVision {
  /** Chiều cao trần so với sàn (m). */
  height = DEFAULT_CEILING;
  /** Đã đo được từ hình ảnh; false nghĩa là đang dùng giá trị mặc định. */
  measured = false;
  private samples: { h: number; bin: number }[] = [];
  private Y = new Float32Array(N);
  private Cb = new Float32Array(N);
  private Cr = new Float32Array(N);
  private elev = new Float32Array(N);
  private hx = new Float32Array(N);
  private hz = new Float32Array(N);
  private region = new Uint8Array(N);
  private stack = new Int32Array(N);

  reset() {
    this.height = DEFAULT_CEILING;
    this.measured = false;
    this.samples.length = 0;
  }

  /**
   * @param rgba ảnh GRID_W × GRID_H khớp với màn hình
   * @param wallDistance khoảng cách tới tường theo hướng ngang (dx, dz), null nếu chưa biết
   */
  update(rgba: Uint8ClampedArray, projInv: THREE.Matrix4, q: THREE.Quaternion, eye: number, wallDistance: (dx: number, dz: number) => number | null) {
    const { Y, Cb, Cr, elev, region, stack } = this;
    this.computeRays(projInv, q);
    const seeds: number[] = [];
    for (let i = 0; i < N; i++) {
      const p = i * 4, R = rgba[p], G = rgba[p + 1], B = rgba[p + 2];
      Y[i] = 0.299 * R + 0.587 * G + 0.114 * B;
      Cb[i] = -0.169 * R - 0.331 * G + 0.5 * B;
      Cr[i] = 0.5 * R - 0.419 * G - 0.081 * B;
      if (elev[i] >= SEED_ELEVATION) seeds.push(i);
    }
    if (seeds.length < MIN_SEEDS) return;

    // màu chiếm ưu thế ở vùng gần đỉnh đầu
    const near = (i: number, y: number, b: number, c: number) => Math.abs(Y[i] - y) < TOL_Y && Math.abs(Cb[i] - b) < TOL_C && Math.abs(Cr[i] - c) < TOL_C;
    let best = seeds[0], bestN = 0;
    for (let a = 0; a < seeds.length; a += Math.max(1, seeds.length >> 5)) {
      let n = 0;
      for (const j of seeds) if (near(j, Y[seeds[a]], Cb[seeds[a]], Cr[seeds[a]])) n++;
      if (n > bestN) {
        bestN = n;
        best = seeds[a];
      }
    }
    if (bestN / seeds.length < MIN_DOMINANCE) return;
    const my = Y[best], mb = Cb[best], mr = Cr[best];

    // loang từ vùng đỉnh đầu ra tới mép
    region.fill(0);
    let top = 0;
    for (const i of seeds) {
      if (near(i, my, mb, mr)) {
        region[i] = 1;
        stack[top++] = i;
      }
    }
    const visit = (j: number) => {
      if (region[j] || elev[j] < MIN_REGION_ELEVATION || !near(j, my, mb, mr)) return;
      region[j] = 1;
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
    this.measure(eye, wallDistance);
  }

  /** Như update, nhưng vùng trần lấy từ mặt nạ của mô hình phân vùng (GRID_W × GRID_H). */
  updateMask(mask: Float32Array, projInv: THREE.Matrix4, q: THREE.Quaternion, eye: number, wallDistance: (dx: number, dz: number) => number | null) {
    this.computeRays(projInv, q);
    for (let i = 0; i < N; i++) this.region[i] = mask[i] > 0.5 && this.elev[i] >= MIN_REGION_ELEVATION ? 1 : 0;
    this.measure(eye, wallDistance);
  }

  private computeRays(projInv: THREE.Matrix4, q: THREE.Quaternion) {
    for (let r = 0; r < GRID_H; r++) {
      const ny = 1 - ((r + 0.5) / GRID_H) * 2;
      for (let c = 0; c < GRID_W; c++) {
        const i = r * GRID_W + c;
        _dir.set(((c + 0.5) / GRID_W) * 2 - 1, ny, 0.5).applyMatrix4(projInv).applyQuaternion(q).normalize();
        this.elev[i] = Math.asin(THREE.MathUtils.clamp(_dir.y, -1, 1));
        const len = Math.hypot(_dir.x, _dir.z) || 1;
        this.hx[i] = _dir.x / len;
        this.hz[i] = _dir.z / len;
      }
    }
  }

  /** Mép trần theo từng cột: ô thuộc trần ngay trên một ô không phải trần. */
  private measure(eye: number, wallDistance: (dx: number, dz: number) => number | null) {
    const { elev, hx, hz, region } = this;
    for (let c = 0; c < GRID_W; c++) {
      for (let r = 1; r < GRID_H; r++) {
        const above = (r - 1) * GRID_W + c, here = r * GRID_W + c;
        if (!region[above] || region[here]) continue;
        const e = (elev[above] + elev[here]) / 2;
        if (e < EDGE_MIN || e > EDGE_MAX) break;
        const d = wallDistance(hx[here], hz[here]);
        if (d !== null) {
          const h = eye + d * Math.tan(e);
          if (h >= MIN_HEIGHT && h <= MAX_HEIGHT) this.push(h, Math.round(Math.atan2(hx[here], hz[here]) / BIN));
        }
        break;
      }
    }
    this.estimate();
  }

  private push(h: number, bin: number) {
    this.samples.push({ h, bin });
    if (this.samples.length > MAX_SAMPLES) this.samples.shift();
  }

  private estimate() {
    if (this.samples.length < MIN_SAMPLES) return;
    const bins = new Map<number, number[]>();
    for (const s of this.samples) {
      const list = bins.get(s.bin);
      if (list) list.push(s.h);
      else bins.set(s.bin, [s.h]);
    }
    if (bins.size < MIN_BINS) return;
    const perBin = [...bins.values()].map((list) => list.sort((a, b) => a - b)[list.length >> 1]).sort((a, b) => a - b);
    const value = perBin[Math.floor((perBin.length - 1) * HEIGHT_PERCENTILE)];
    this.height = this.measured ? this.height + (value - this.height) * SMOOTH : value;
    this.measured = true;
  }
}
