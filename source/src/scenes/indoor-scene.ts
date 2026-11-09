import * as THREE from 'three';
import { room, HALF_W, LEN } from '../config/room';
import { theme } from '../config/theme';
import { PetalSystem } from '../physics/petal-system';
import { Branches } from './branches';

/**
 * Chế độ trong hành lang: hoa rơi + đọng + cành trên cao + (tuỳ chọn) khung
 * hành lang dạng nét mảnh để kiểm tra room.json khi không có camera.
 */
export class IndoorScene {
  readonly root = new THREE.Group();
  readonly petals: PetalSystem;
  readonly branches: Branches;
  readonly guide: THREE.Group;

  constructor(parent: THREE.Object3D) {
    parent.add(this.root);
    this.petals = new PetalSystem(this.root, { capacity: 1600 });
    this.petals.bounded = false; // không dùng kích thước cố định: phòng được đo từ camera
    this.branches = new Branches(this.root);
    this.petals.emitters.push(this.branches.emitter);
    this.guide = buildGuide();
    this.guide.visible = false;
    this.root.add(this.guide);
  }

  setVisible(v: boolean) {
    this.root.visible = v;
    this.petals.enabled = v;
  }
}

/** Khung hành lang vẽ nét – sàn, 2 tường, panel, bàn D14, cây đào thật. */
function buildGuide() {
  const g = new THREE.Group();
  const line = new THREE.LineBasicMaterial({ color: theme.cobalt, transparent: true, opacity: 0.55 });
  const faint = new THREE.LineBasicMaterial({ color: theme.cobalt, transparent: true, opacity: 0.2 });
  const H = room.corridor.wallHeight;
  const box = (x0: number, y0: number, z0: number, x1: number, y1: number, z1: number, m = line) => {
    const geo = new THREE.EdgesGeometry(new THREE.BoxGeometry(x1 - x0, y1 - y0, z1 - z0));
    const l = new THREE.LineSegments(geo, m);
    l.position.set((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2);
    g.add(l);
  };
  // sàn: lưới 1 m
  const pts: number[] = [];
  for (let x = 0; x <= LEN; x += 1) pts.push(x, 0, -HALF_W, x, 0, HALF_W);
  pts.push(0, 0, -HALF_W, LEN, 0, -HALF_W, 0, 0, HALF_W, LEN, 0, HALF_W, 0, 0, 0, LEN, 0, 0);
  const floor = new THREE.BufferGeometry();
  floor.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
  g.add(new THREE.LineSegments(floor, faint));
  // tường
  box(0, 0, HALF_W, LEN, H, HALF_W + 0.02, faint);
  box(0, 0, -HALF_W - 0.02, LEN, room.corridor.stoneWallHeight, -HALF_W, faint);
  // panel
  for (const p of room.panels) {
    const z = p.side === 'orange' ? HALF_W - 0.01 : -HALF_W + 0.05;
    box(p.x0 + 0.01, p.y0, z - 0.005, p.x1 - 0.01, p.y0 + p.height, z + 0.005);
  }
  // bàn + cây
  for (const c of room.colliders) {
    if (c.type === 'aabb' && c.min && c.max) box(c.min[0], c.min[1], c.min[2], c.max[0], c.max[1], c.max[2]);
    if (c.type === 'cylinder' && c.center && c.radius) {
      const cyl = new THREE.LineSegments(
        new THREE.EdgesGeometry(new THREE.CylinderGeometry(c.radius, c.radius, (c.yMax ?? 3) - (c.yMin ?? 0), 16, 1, true)),
        faint,
      );
      cyl.position.set(c.center[0], ((c.yMax ?? 3) + (c.yMin ?? 0)) / 2, c.center[2]);
      g.add(cyl);
    }
  }
  return g;
}
