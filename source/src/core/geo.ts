import * as THREE from 'three';

/**
 * Toán vị trí và hướng cho dải sáng dẫn đường ngoài trời (GPS + la bàn).
 *
 * Quy ước góc trên mặt đất: θ = atan2(x, −z), tăng theo chiều kim đồng hồ khi nhìn từ trên xuống,
 * hướng tương ứng là (sin θ, −cos θ). La bàn cũng tính theo chiều kim đồng hồ từ hướng Bắc,
 * nên hướng Bắc trong hệ toạ độ cảnh = góc của camera − góc la bàn.
 */
const EARTH_R = 6371008.8;
const D2R = Math.PI / 180;

/** Toạ độ mét Đông/Bắc của (lat, lng) so với gốc (lat0, lng0). Đủ chính xác trong vài km. */
export function toEnu(lat: number, lng: number, lat0: number, lng0: number) {
  return {
    e: (lng - lng0) * D2R * EARTH_R * Math.cos(lat0 * D2R),
    n: (lat - lat0) * D2R * EARTH_R,
  };
}

const _euler = new THREE.Euler();
const _q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
const _qs = new THREE.Quaternion();
const _zee = new THREE.Vector3(0, 0, 1);
const _f = new THREE.Vector3();

/** Quaternion camera từ alpha/beta/gamma của DeviceOrientation (độ) và góc xoay màn hình (radian). */
export function deviceQuaternion(out: THREE.Quaternion, alpha: number, beta: number, gamma: number, screenAngle: number) {
  _euler.set(beta * D2R, alpha * D2R, -gamma * D2R, 'YXZ');
  return out.setFromEuler(_euler).multiply(_q1).multiply(_qs.setFromAxisAngle(_zee, -screenAngle));
}

/** Góc ngang (radian) của hướng camera nhìn: θ = atan2(x, −z). */
export function groundAngle(q: THREE.Quaternion) {
  _f.set(0, 0, -1).applyQuaternion(q);
  return Math.atan2(_f.x, -_f.z);
}

/**
 * Hướng la bàn (radian, theo chiều kim đồng hồ từ Bắc) của camera sau, từ alpha tuyệt đối
 * (sự kiện deviceorientationabsolute: alpha = 0 khi đỉnh máy chỉ về Bắc).
 */
export function compassFromAbsolute(alpha: number, beta: number, gamma: number, screenAngle: number) {
  const q = deviceQuaternion(new THREE.Quaternion(), alpha, beta, gamma, screenAngle);
  return wrapAngle(groundAngle(q));
}

export function wrapAngle(a: number) {
  return Math.atan2(Math.sin(a), Math.cos(a));
}

/**
 * Ước lượng hướng Bắc trong hệ toạ độ cảnh, trung bình theo thời gian vì la bàn trong
 * thành phố rung và lệch (khung sắt, xe cộ). Lấy trung bình vector đơn vị để không bị
 * lỗi nhảy 359° → 0°.
 */
export class NorthEstimate {
  private x = 0;
  private y = 0;
  samples = 0;

  reset() {
    this.x = this.y = 0;
    this.samples = 0;
  }

  /** @param camAngle góc ngang của camera trong cảnh, @param compass góc la bàn của camera */
  add(camAngle: number, compass: number, dt: number, timeConstant = 2) {
    const north = camAngle - compass;
    const k = this.samples < 5 ? 1 / (this.samples + 1) : 1 - Math.exp(-dt / timeConstant);
    this.x += (Math.sin(north) - this.x) * k;
    this.y += (Math.cos(north) - this.y) * k;
    this.samples++;
  }

  get ready() {
    return this.samples >= 5;
  }

  /** Góc ngang của hướng Bắc trong cảnh. */
  get angle() {
    return Math.atan2(this.x, this.y);
  }
}

/** Đổi mét Đông/Bắc sang toạ độ cảnh (x, z) khi biết góc hướng Bắc. */
export function enuToWorld(e: number, n: number, north: number, out = new THREE.Vector2()) {
  const s = Math.sin(north), c = Math.cos(north);
  // Bắc = (sin, −cos); Đông = Bắc quay phải 90° = (cos, sin)
  return out.set(n * s + e * c, -n * c + e * s);
}

/** Phép ngược của enuToWorld. */
export function worldToEnu(x: number, z: number, north: number) {
  const s = Math.sin(north), c = Math.cos(north);
  return { e: x * c + z * s, n: x * s - z * c };
}
