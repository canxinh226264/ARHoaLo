import * as THREE from 'three';
import { room, HALF_W } from '../config/room';

/**
 * Collider động (bàn tay, chân…). Nguồn nào cũng chỉ cần trả về danh sách
 * hình cầu / capsule kèm vận tốc – pose-tracker (chân) cắm vào cùng interface.
 */
export interface SphereCollider {
  kind: 'sphere';
  c: THREE.Vector3;
  r: number;
  vel: THREE.Vector3;
  /** Lòng bàn tay: cánh rơi từ trên xuống thì nằm lại trên tay thay vì trượt đi. */
  palm?: boolean;
}
export interface CapsuleCollider {
  kind: 'capsule';
  a: THREE.Vector3;
  b: THREE.Vector3;
  r: number;
  vel: THREE.Vector3;
}
export type DynamicCollider = SphereCollider | CapsuleCollider;

export interface ColliderSource {
  readonly active: boolean;
  colliders(): DynamicCollider[];
  /** Vùng "lòng bàn tay" để giữ hoa (null nếu nguồn không bắt được hoa). */
  cup?(): { center: THREE.Vector3; radius: number; quaternion: THREE.Quaternion; grabbing: boolean; vel: THREE.Vector3 } | null;
}

const tmp = new THREE.Vector3();
const ab = new THREE.Vector3();

/** Khoảng cách từ p tới collider, ghi điểm gần nhất vào `closest`. */
export function distanceTo(c: DynamicCollider, p: THREE.Vector3, closest: THREE.Vector3): number {
  if (c.kind === 'sphere') {
    closest.copy(c.c);
    return p.distanceTo(c.c);
  }
  ab.subVectors(c.b, c.a);
  const len2 = ab.lengthSq() || 1e-6;
  const t = THREE.MathUtils.clamp(tmp.subVectors(p, c.a).dot(ab) / len2, 0, 1);
  closest.copy(c.a).addScaledVector(ab, t);
  return p.distanceTo(closest);
}

/** Mặt đọng hoa tĩnh: sàn và mặt bàn D14. */
const table = room.colliders.find((c) => c.id === 'table-D14');
const tree = room.colliders.find((c) => c.id === 'real-peach-tree');

export function restSurfaceAt(x: number, z: number): number {
  if (table && table.min && table.max) {
    if (x >= table.min[0] && x <= table.max[0] && z >= table.min[2] && z <= table.max[2]) return table.max[1];
  }
  return 0;
}

/** Đẩy hoa ra khỏi thành bàn khi rơi ngang vào (không đi xuyên khối bàn). */
export function pushOutOfTable(p: THREE.Vector3, v: THREE.Vector3): boolean {
  if (!table || !table.min || !table.max) return false;
  const [x0, y0, z0] = table.min;
  const [x1, y1, z1] = table.max;
  if (p.x < x0 || p.x > x1 || p.z < z0 || p.z > z1 || p.y < y0 || p.y > y1 - 0.02) return false;
  const dx0 = p.x - x0, dx1 = x1 - p.x, dz0 = p.z - z0;
  const m = Math.min(dx0, dx1, dz0);
  if (m === dx0) { p.x = x0 - 0.005; v.x = Math.min(v.x, 0); }
  else if (m === dx1) { p.x = x1 + 0.005; v.x = Math.max(v.x, 0); }
  else { p.z = z0 - 0.005; v.z = Math.min(v.z, 0); }
  return true;
}

/** 0..1: hệ số mờ khi hoa ở trong tán cây đào thật (không đè lên cây thật). */
export function treeFade(p: THREE.Vector3): number {
  if (!tree || !tree.center) return 1;
  if (p.y < (tree.yMin ?? 0) || p.y > (tree.yMax ?? 99)) return 1;
  const d = Math.hypot(p.x - tree.center[0], p.z - tree.center[2]);
  const r = tree.radius ?? 1;
  return THREE.MathUtils.smoothstep(d, r * 0.7, r * 1.05) * 0.85 + 0.15;
}

/** 0..1: mờ dần khi gần mặt tường / panel trưng bày (không che chữ, ảnh). */
export function wallFade(z: number): number {
  const d = HALF_W - Math.abs(z);
  return THREE.MathUtils.smoothstep(d, 0.04, 0.38);
}
