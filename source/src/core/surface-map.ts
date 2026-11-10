import * as THREE from 'three';
import { GRID_H, GRID_W } from './floor-vision';
import type { SurfaceFrame } from './surface-classes';

/**
 * Bản đồ "hướng nào là sàn, hướng nào là trần" quanh người xem.
 *
 * Mô hình chạy vài lần mỗi giây, nên không dùng trực tiếp kết quả theo màn hình: mỗi khung hình
 * được đổi sang hướng trong không gian (nhờ cảm biến) rồi cộng dồn vào một bản đồ toàn cảnh.
 * Điện thoại xoay nhanh thế nào thì hoa vẫn bám đúng chỗ, và ranh giới không bị nhấp nháy.
 *
 * Cảm biến còn giúp sửa lỗi của mô hình: sàn không thể ở trên đường chân trời, trần không thể
 * ở dưới; mặt phẳng trơn ở gần đỉnh đầu mà mô hình gọi là "tường" thực ra là trần.
 */
export const SURF_W = 240;
export const SURF_H = 120;
const RATE = 0.55; // mức cập nhật mỗi khung hình
const D2R = Math.PI / 180;
const FLOOR_FADE_FROM = -6 * D2R;
const FLOOR_FADE_TO = -2 * D2R;
const CEIL_FADE_FROM = 6 * D2R;
const CEIL_FADE_TO = 12 * D2R;
const WALL_IS_CEILING_FROM = 58 * D2R;
const WALL_IS_CEILING_TO = 72 * D2R;

const smooth = THREE.MathUtils.smoothstep;
const _dir = new THREE.Vector3();
const _inv = new THREE.Quaternion();
const _m = new THREE.Matrix4();

function bilinear(a: Uint8Array, w: number, h: number, u: number, v: number) {
  const x = Math.min(u, w - 1.001), y = Math.min(v, h - 1.001);
  const x0 = x | 0, y0 = y | 0, fx = x - x0, fy = y - y0;
  const i = y0 * w + x0;
  const top = a[i] + (a[i + 1] - a[i]) * fx;
  const bot = a[i + w] + (a[i + w + 1] - a[i + w]) * fx;
  return (top + (bot - top) * fy) / 255;
}

const floorPrior = (p: number, elev: number) => p * (1 - smooth(elev, FLOOR_FADE_FROM, FLOOR_FADE_TO));
const ceilPrior = (p: number, wall: number, elev: number) => Math.max(p, wall * smooth(elev, WALL_IS_CEILING_FROM, WALL_IS_CEILING_TO)) * smooth(elev, CEIL_FADE_FROM, CEIL_FADE_TO);

export class SurfaceMap {
  /** R = sàn, G = trần; cột theo phương vị, dòng theo độ cao. */
  readonly texture: THREE.DataTexture;
  /** Mặt nạ theo màn hình của khung hình mới nhất, cho bản đồ phòng và đo trần. */
  readonly floorMask = new Float32Array(GRID_W * GRID_H);
  readonly ceilMask = new Float32Array(GRID_W * GRID_H);
  private frames = 0;
  private floor = new Float32Array(SURF_W * SURF_H);
  private ceil = new Float32Array(SURF_W * SURF_H);
  private data = new Uint8Array(SURF_W * SURF_H * 2);
  private sinEl = new Float32Array(SURF_H);
  private cosEl = new Float32Array(SURF_H);
  private sinAz = new Float32Array(SURF_W);
  private cosAz = new Float32Array(SURF_W);
  private elev = new Float32Array(SURF_H);

  constructor() {
    for (let r = 0; r < SURF_H; r++) {
      this.elev[r] = ((r + 0.5) / SURF_H - 0.5) * Math.PI;
      this.sinEl[r] = Math.sin(this.elev[r]);
      this.cosEl[r] = Math.cos(this.elev[r]);
    }
    for (let c = 0; c < SURF_W; c++) {
      const az = ((c + 0.5) / SURF_W - 0.5) * Math.PI * 2;
      this.sinAz[c] = Math.sin(az);
      this.cosAz[c] = Math.cos(az);
    }
    this.texture = new THREE.DataTexture(this.data, SURF_W, SURF_H, THREE.RGFormat, THREE.UnsignedByteType);
    this.texture.wrapS = THREE.RepeatWrapping;
    this.texture.wrapT = THREE.ClampToEdgeWrapping;
    this.texture.minFilter = this.texture.magFilter = THREE.LinearFilter;
    this.texture.generateMipmaps = false;
    this.texture.needsUpdate = true;
  }

  /** Đã có ít nhất một khung hình từ mô hình. */
  get ready() {
    return this.frames > 0;
  }

  reset() {
    if (!this.frames) return;
    this.frames = 0;
    this.floor.fill(0);
    this.ceil.fill(0);
    this.data.fill(0);
    this.floorMask.fill(0);
    this.ceilMask.fill(0);
    this.texture.needsUpdate = true;
  }

  /** Cộng một khung hình phân vùng vào bản đồ, với tư thế camera lúc chụp. */
  integrate(f: SurfaceFrame, proj: THREE.Matrix4, projInv: THREE.Matrix4, q: THREE.Quaternion) {
    const P = proj.elements, sx = P[0], sy = P[5];
    const R = _m.makeRotationFromQuaternion(_inv.copy(q).invert()).elements;
    const { floor, ceil, data, sinEl, cosEl, sinAz, cosAz, elev } = this;
    const uMax = f.w - 1, vMax = f.h - 1;
    for (let r = 0; r < SURF_H; r++) {
      const dy = sinEl[r], ce = cosEl[r], el = elev[r];
      for (let c = 0; c < SURF_W; c++) {
        const dx = ce * sinAz[c], dz = -ce * cosAz[c];
        const cz = R[2] * dx + R[6] * dy + R[10] * dz;
        if (cz > -0.05) continue;
        const nx = (sx * (R[0] * dx + R[4] * dy + R[8] * dz)) / -cz;
        if (nx < -1 || nx > 1) continue;
        const ny = (sy * (R[1] * dx + R[5] * dy + R[9] * dz)) / -cz;
        if (ny < -1 || ny > 1) continue;
        const u = (nx * 0.5 + 0.5) * uMax, v = (0.5 - ny * 0.5) * vMax;
        const i = r * SURF_W + c;
        floor[i] += (floorPrior(bilinear(f.floor, f.w, f.h, u, v), el) - floor[i]) * RATE;
        ceil[i] += (ceilPrior(bilinear(f.ceil, f.w, f.h, u, v), bilinear(f.wall, f.w, f.h, u, v), el) - ceil[i]) * RATE;
        data[i * 2] = floor[i] * 255;
        data[i * 2 + 1] = ceil[i] * 255;
      }
    }
    this.texture.needsUpdate = true;
    this.frames++;
    this.buildMasks(f, projInv, q);
  }

  private buildMasks(f: SurfaceFrame, projInv: THREE.Matrix4, q: THREE.Quaternion) {
    for (let r = 0; r < GRID_H; r++) {
      const ny = 1 - ((r + 0.5) / GRID_H) * 2;
      const v = ((r + 0.5) / GRID_H) * (f.h - 1);
      for (let c = 0; c < GRID_W; c++) {
        const u = ((c + 0.5) / GRID_W) * (f.w - 1);
        _dir.set(((c + 0.5) / GRID_W) * 2 - 1, ny, 0.5).applyMatrix4(projInv).applyQuaternion(q).normalize();
        const el = Math.asin(THREE.MathUtils.clamp(_dir.y, -1, 1));
        const i = r * GRID_W + c;
        this.floorMask[i] = floorPrior(bilinear(f.floor, f.w, f.h, u, v), el);
        this.ceilMask[i] = ceilPrior(bilinear(f.ceil, f.w, f.h, u, v), bilinear(f.wall, f.w, f.h, u, v), el);
      }
    }
  }

  private cell(dx: number, dy: number, dz: number) {
    const len = Math.hypot(dx, dy, dz) || 1;
    const c = Math.floor((Math.atan2(dx, -dz) / (Math.PI * 2) + 0.5) * SURF_W);
    const r = Math.floor((Math.asin(THREE.MathUtils.clamp(dy / len, -1, 1)) / Math.PI + 0.5) * SURF_H);
    return Math.min(SURF_H - 1, r) * SURF_W + Math.min(SURF_W - 1, c);
  }

  /** Mức "là sàn" (0..1) theo hướng (dx, dy, dz) tính từ camera. */
  sample(_ndcX: number, _ndcY: number, dx: number, dy: number, dz: number): number {
    return smooth(this.floor[this.cell(dx, dy, dz)], 0.35, 0.65);
  }
}
