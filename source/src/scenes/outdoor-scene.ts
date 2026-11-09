import * as THREE from 'three';
import { getPetalAtlas, CELL } from './petal-textures';
import { createPetalMaterial } from '../physics/petal-system';

/**
 * Khung hoa đào trang trí quanh viền màn hình ở chế độ ngoài cổng (gắn vào camera, có parallax
 * nhẹ), chừa trống vùng giữa để không che đường đi. Dải sáng do GuideScene vẽ.
 */
export class OutdoorScene {
  readonly frame = new THREE.Group(); // gắn vào camera
  private framePetals: THREE.InstancedMesh;
  private fp: { x: number; y: number; vx: number; vy: number; rot: number; vr: number; s: number; cell: number }[] = [];
  private frameClusters: THREE.InstancedMesh;
  private parallax = new THREE.Vector2();
  private t = 0;

  constructor(camera: THREE.Camera) {
    camera.add(this.frame);
    const { texture } = getPetalAtlas();
    const fmat = createPetalMaterial(texture);
    fmat.depthTest = false;
    fmat.uniforms.uCurl.value = 0.12;
    const FN = 30;
    const fgeo = new THREE.PlaneGeometry(1, 1, 2, 2);
    fgeo.setAttribute('aCell', new THREE.InstancedBufferAttribute(new Float32Array(FN), 1));
    fgeo.setAttribute('aTint', new THREE.InstancedBufferAttribute(new Float32Array(FN * 4).fill(1), 4));
    this.framePetals = new THREE.InstancedMesh(fgeo, fmat, FN);
    this.framePetals.frustumCulled = false;
    this.framePetals.renderOrder = 10;
    const fc = fgeo.getAttribute('aCell') as THREE.InstancedBufferAttribute;
    for (let i = 0; i < FN; i++) {
      const r = Math.random();
      const cell = r < 0.12 ? CELL.petalBrand : r < 0.25 ? CELL.blossomPink[(Math.random() * 2) | 0] : CELL.petalPink[(Math.random() * 4) | 0];
      fc.setX(i, cell);
      this.fp.push(this.edgeSpawn({ x: 0, y: 0, vx: 0, vy: 0, rot: 0, vr: 0, s: 0, cell }, true));
    }
    this.frame.add(this.framePetals);
    // cụm hoa tĩnh ở 3 góc (trên trái, trên phải, dưới phải)
    const CN = 18;
    const cgeo = new THREE.PlaneGeometry(1, 1, 2, 2);
    const ccell = new Float32Array(CN), ctint = new Float32Array(CN * 4).fill(1);
    cgeo.setAttribute('aCell', new THREE.InstancedBufferAttribute(ccell, 1));
    cgeo.setAttribute('aTint', new THREE.InstancedBufferAttribute(ctint, 4));
    this.frameClusters = new THREE.InstancedMesh(cgeo, fmat, CN);
    this.frameClusters.frustumCulled = false;
    this.frameClusters.renderOrder = 9;
    for (let i = 0; i < CN; i++) ccell[i] = i % 7 === 0 ? CELL.blossomBrand : CELL.blossomPink[i % 2];
    this.frame.add(this.frameClusters);
    this.layoutFrame(camera as THREE.PerspectiveCamera);
  }

  /** Đặt cụm hoa vào góc màn hình theo FOV hiện tại (gọi khi resize). */
  layoutFrame(cam: THREE.PerspectiveCamera) {
    const D = 0.5;
    const hh = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * D;
    const hw = hh * cam.aspect;
    const corners: [number, number, number][] = [
      [-hw, hh, 0.9],
      [hw, hh, -0.7],
      [hw, -hh * 0.7, 2.6],
    ];
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const R = (i: number) => (Math.sin(i * 12.9898) * 43758.5453) % 1;
    for (let i = 0; i < this.frameClusters.count; i++) {
      const [cx, cy, ang] = corners[i % 3];
      const k = Math.floor(i / 3);
      const spread = 0.012 + k * 0.01;
      const a = ang + (R(i) - 0.5) * 1.6;
      const x = cx - Math.sign(cx) * Math.abs(Math.cos(a)) * spread * 1.4 + (R(i + 7) - 0.5) * 0.02;
      const y = cy - Math.sign(cy) * Math.abs(Math.sin(a)) * spread * 1.4 + (R(i + 3) - 0.5) * 0.02;
      e.set((R(i + 1) - 0.5) * 0.5, (R(i + 2) - 0.5) * 0.5, R(i + 4) * 6.28);
      q.setFromEuler(e);
      const s = 0.018 + Math.abs(R(i + 5)) * 0.016 - k * 0.0015;
      m.compose(new THREE.Vector3(x, y, -D), q, new THREE.Vector3(s, s, s));
      this.frameClusters.setMatrixAt(i, m);
    }
    this.frameClusters.instanceMatrix.needsUpdate = true;
    this.frameW = hw;
    this.frameH = hh;
  }
  private frameW = 0.2;
  private frameH = 0.35;

  private edgeSpawn(p: OutdoorScene['fp'][number], anywhere = false) {
    // sinh ở dải mép trái/phải/trên, trôi xuống và ra ngoài
    const side = Math.random();
    const w = this.frameW || 0.2, h = this.frameH || 0.35;
    if (side < 0.45) { p.x = -w * (0.82 + Math.random() * 0.25); p.y = anywhere ? (Math.random() * 2 - 1) * h : h * 1.05; }
    else if (side < 0.9) { p.x = w * (0.82 + Math.random() * 0.25); p.y = anywhere ? (Math.random() * 2 - 1) * h : h * 1.05; }
    else { p.x = (Math.random() * 2 - 1) * w; p.y = h * (0.85 + Math.random() * 0.25); }
    p.vx = (Math.random() - 0.5) * 0.01;
    p.vy = -0.012 - Math.random() * 0.014;
    p.rot = Math.random() * 6.28;
    p.vr = (Math.random() - 0.5) * 1.5;
    p.s = 0.009 + Math.random() * 0.009;
    return p;
  }

  setVisible(v: boolean) {
    this.frame.visible = v;
  }

  update(dt: number, angularVel: THREE.Vector3, reduceMotion: boolean) {
    this.t += dt;
    // parallax: khung hoa trễ nhẹ ngược hướng quay
    const k = reduceMotion ? 0.002 : 0.008;
    const tx = THREE.MathUtils.clamp(-angularVel.y * k, -0.02, 0.02);
    const ty = THREE.MathUtils.clamp(angularVel.x * k, -0.02, 0.02);
    this.parallax.x += (tx - this.parallax.x) * Math.min(1, dt * 5);
    this.parallax.y += (ty - this.parallax.y) * Math.min(1, dt * 5);
    this.frame.position.set(this.parallax.x, this.parallax.y, 0);
    // cánh hoa bay quanh viền
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const sp = reduceMotion ? 0.4 : 1;
    const w = this.frameW, h = this.frameH;
    for (let i = 0; i < this.fp.length; i++) {
      const p = this.fp[i];
      p.x += (p.vx + Math.sin(this.t * 1.3 + i) * 0.006) * dt * sp;
      p.y += p.vy * dt * sp;
      p.rot += p.vr * dt * sp;
      // giữ vùng giữa trống: đẩy ra khỏi elip trung tâm
      const ex = p.x / (w * 0.62), ey = p.y / (h * 0.7);
      const r2 = ex * ex + ey * ey;
      if (r2 < 1) p.x += Math.sign(p.x || 1) * (1 - r2) * dt * 0.08;
      if (p.y < -h * 1.1 || Math.abs(p.x) > w * 1.2) this.edgeSpawn(p);
      e.set(Math.sin(p.rot) * 0.8, p.rot * 0.5, p.rot);
      q.setFromEuler(e);
      m.compose(new THREE.Vector3(p.x, p.y, -0.5), q, new THREE.Vector3(p.s, p.s, p.s));
      this.framePetals.setMatrixAt(i, m);
    }
    this.framePetals.instanceMatrix.needsUpdate = true;
  }
}
