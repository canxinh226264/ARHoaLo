import * as THREE from 'three';
import { room, HALF_W, type BranchAnchor } from '../config/room';
import { theme, BRAND_PETAL_RATIO } from '../config/theme';
import { getPetalAtlas, CELL } from './petal-textures';
import { createPetalMaterial, type Emitter } from '../physics/petal-system';

/**
 * Tán đào phủ trần hành lang (procedural – 0 byte tải về): cành mọc từ mép trên
 * hai bên tường, vươn qua giữa, kèm một lớp bóng cây mờ ở trên cùng.
 * Tán luôn hiện nên khi nhìn thẳng vẫn thấy ở mép trên khung hình, xa dần theo
 * hành lang; ngẩng lên thì thấy ngay trên đầu.
 * Không có thân cây: gốc cành nằm sau mép tường và mờ dần về phía gốc
 * (camera thật không che được vật ảo nên phải làm mờ thay vì "giấu").
 */

/** Độ cao lớp bóng cây, trên các cành một chút (m). */
const SHADE_Y = 3.15;
const SHADE_X0 = -6;
const SHADE_X1 = room.corridor.length + 2;
const SHADE_HALF_Z = HALF_W + 0.15;
const SHADE_PX_PER_M = 48;

/** Nét vẽ bóng cây trên mặt phẳng XZ, toạ độ phòng. */
interface ShadeSketch {
  limbs: { pts: THREE.Vector3[]; width: number }[];
  spots: THREE.Vector3[];
}

function buildShade(sk: ShadeSketch) {
  const W = Math.round((SHADE_X1 - SHADE_X0) * SHADE_PX_PER_M);
  const H = Math.round(SHADE_HALF_Z * 2 * SHADE_PX_PER_M);
  const c = document.createElement('canvas');
  c.width = W;
  c.height = H;
  const ctx = c.getContext('2d')!;
  const px = (x: number) => (x - SHADE_X0) * SHADE_PX_PER_M;
  const pz = (z: number) => (z + SHADE_HALF_Z) * SHADE_PX_PER_M;
  // đốm mềm dùng lại cho mọi cụm hoa
  const blob = document.createElement('canvas');
  blob.width = blob.height = 32;
  const bx = blob.getContext('2d')!;
  const g = bx.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0, 'rgba(0,0,0,1)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  bx.fillStyle = g;
  bx.fillRect(0, 0, 32, 32);
  ctx.globalAlpha = 0.16;
  const size = 0.42 * SHADE_PX_PER_M;
  for (const s of sk.spots) ctx.drawImage(blob, px(s.x) - size / 2, pz(s.z) - size / 2, size, size);
  ctx.globalAlpha = 0.5;
  ctx.strokeStyle = '#000';
  ctx.lineCap = 'round';
  for (const l of sk.limbs) {
    ctx.lineWidth = l.width * SHADE_PX_PER_M;
    ctx.beginPath();
    l.pts.forEach((p, i) => (i ? ctx.lineTo(px(p.x), pz(p.z)) : ctx.moveTo(px(p.x), pz(p.z))));
    ctx.stroke();
  }
  // mờ dần về phía tường để không có mép cắt thẳng
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'destination-in';
  const edge = ctx.createLinearGradient(0, 0, 0, H);
  edge.addColorStop(0, 'rgba(0,0,0,0)');
  edge.addColorStop(0.14, 'rgba(0,0,0,1)');
  edge.addColorStop(0.86, 'rgba(0,0,0,1)');
  edge.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = edge;
  ctx.fillRect(0, 0, W, H);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, side: THREE.DoubleSide, opacity: 0 });
  const geo = new THREE.PlaneGeometry(SHADE_X1 - SHADE_X0, SHADE_HALF_Z * 2).rotateX(-Math.PI / 2);
  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.set((SHADE_X0 + SHADE_X1) / 2, SHADE_Y, 0);
  mesh.renderOrder = -1;
  return mesh;
}

function rng(seed: number) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
    return ((s >>> 0) % 100000) / 100000;
  };
}

function taperedTube(curve: THREE.Curve<THREE.Vector3>, segs: number, radial: number, r0: number, r1: number, fadeLen: number, fadeFrom: number) {
  const frames = curve.computeFrenetFrames(segs, false);
  const pos: number[] = [];
  const nrm: number[] = [];
  const fade: number[] = [];
  const idx: number[] = [];
  const len = curve.getLength();
  for (let i = 0; i <= segs; i++) {
    const u = i / segs;
    const c = curve.getPointAt(u);
    const r = THREE.MathUtils.lerp(r0, r1, Math.pow(u, 0.8));
    const f = THREE.MathUtils.smoothstep(fadeFrom + u * len, 0.05, fadeLen);
    for (let j = 0; j <= radial; j++) {
      const a = (j / radial) * Math.PI * 2;
      const n = new THREE.Vector3()
        .addScaledVector(frames.normals[i], Math.cos(a))
        .addScaledVector(frames.binormals[i], Math.sin(a));
      pos.push(c.x + n.x * r, c.y + n.y * r, c.z + n.z * r);
      nrm.push(n.x, n.y, n.z);
      fade.push(f);
    }
  }
  for (let i = 0; i < segs; i++)
    for (let j = 0; j < radial; j++) {
      const a = i * (radial + 1) + j, b = a + radial + 1;
      idx.push(a, b, a + 1, b, b + 1, a + 1);
    }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('aFade', new THREE.Float32BufferAttribute(fade, 1));
  g.setIndex(idx);
  return g;
}

function mergeGeometries(geos: THREE.BufferGeometry[]) {
  const pos: number[] = [], nrm: number[] = [], fade: number[] = [], idx: number[] = [];
  let off = 0;
  for (const g of geos) {
    const p = g.getAttribute('position'), n = g.getAttribute('normal'), f = g.getAttribute('aFade');
    for (let i = 0; i < p.count; i++) {
      pos.push(p.getX(i), p.getY(i), p.getZ(i));
      nrm.push(n.getX(i), n.getY(i), n.getZ(i));
      fade.push(f.getX(i));
    }
    const ix = g.getIndex()!;
    for (let i = 0; i < ix.count; i++) idx.push(ix.getX(i) + off);
    off += p.count;
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3));
  g.setAttribute('aFade', new THREE.Float32BufferAttribute(fade, 1));
  g.setIndex(idx);
  return g;
}

const barkMaterial = new THREE.ShaderMaterial({
  uniforms: { uColor: { value: new THREE.Color(theme.branch) }, uOpacity: { value: 0 }, uLight: { value: new THREE.Color(1, 1, 1) } },
  vertexShader: `
    attribute float aFade; varying float vFade; varying vec3 vN;
    void main(){ vFade = aFade; vN = normalize(mat3(modelMatrix) * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
  fragmentShader: `
    uniform vec3 uColor; uniform float uOpacity; uniform vec3 uLight; varying float vFade; varying vec3 vN;
    void main(){ float l = 0.62 + 0.38 * clamp(vN.y * 0.5 + 0.5, 0.0, 1.0);
      float a = vFade * uOpacity; if (a < 0.02) discard;
      gl_FragColor = vec4(uColor * l * uLight, a);
      #include <colorspace_fragment>
    }`,
  transparent: true,
  depthWrite: true,
});

export class Branches {
  readonly group = new THREE.Group();
  readonly emitter: Emitter = { points: [], rate: 0 };
  private blossomMat: THREE.ShaderMaterial;
  private budMat = new THREE.MeshBasicMaterial({ color: 0xe0587f, transparent: true, opacity: 0 });
  private leafMat = new THREE.MeshBasicMaterial({ color: 0x86a95e, transparent: true, opacity: 0, side: THREE.DoubleSide });
  private sways: { g: THREE.Group; seed: number }[] = [];
  private blossoms: { mesh: THREE.InstancedMesh; full: number }[] = [];
  private details: THREE.InstancedMesh[] = [];
  private shade: THREE.Mesh<THREE.BufferGeometry, THREE.MeshBasicMaterial>;
  private t = 0;
  visibility = 0;

  constructor(parent: THREE.Object3D) {
    this.blossomMat = createPetalMaterial(getPetalAtlas().texture);
    this.blossomMat.uniforms.uCurl.value = 0;
    this.blossomMat.depthWrite = false;
    const zones = room.exclusionZones.filter((z) => z.forbid.includes('branches'));
    const sketch: ShadeSketch = { limbs: [], spots: [] };
    for (const a of room.branchAnchors) {
      const blocked = zones.some((z) => a.x >= z.min[0] && a.x <= z.max[0]);
      if (blocked) continue;
      this.build(a, sketch);
    }
    this.shade = buildShade(sketch);
    this.group.add(this.shade);
    this.group.visible = false;
    parent.add(this.group);
  }

  /** Giảm chi tiết theo mức chất lượng: 1 = đầy đủ. */
  setDetail(k: number) {
    for (const b of this.blossoms) b.mesh.count = Math.round(b.full * THREE.MathUtils.clamp(k, 0.55, 1));
    for (const m of this.details) m.visible = k > 0.7;
  }

  private build(a: BranchAnchor, sketch: ShadeSketch) {
    const R = rng(a.seed);
    const top = room.corridor.ceiling != null ? Math.min(a.y, room.corridor.ceiling - 0.45) : a.y;
    const inward = a.z >= 0 ? -1 : 1; // mọc từ tường vào giữa hành lang
    const root = new THREE.Vector3(a.x, top - 0.05, a.z - inward * 0.3);
    const holder = new THREE.Group();
    holder.position.copy(root);
    const g = new THREE.Group();
    holder.add(g);
    this.group.add(holder);
    this.sways.push({ g, seed: a.seed });

    const dir = R() < 0.5 ? 1 : -1;
    const local = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
    const reach = Math.min(a.reach, room.corridor.width + 0.3);
    const main = new THREE.CatmullRomCurve3([
      local(0, 0, 0),
      local(dir * 0.15, 0.12, inward * 0.5),
      local(dir * (0.35 + R() * 0.25), 0.22 + R() * 0.12, inward * reach * 0.55),
      local(dir * (0.6 + R() * 0.35), 0.12 + R() * 0.15, inward * reach * 0.82),
      local(dir * (0.85 + R() * 0.35), -0.12 + R() * 0.12, inward * reach),
    ]);
    const geos = [taperedTube(main, 40, 7, 0.085, 0.012, 0.55, 0)];
    const flowerSpots: THREE.Vector3[] = [];
    const mainLen = main.getLength();
    const addLimb = (curve: THREE.Curve<THREE.Vector3>, width: number) => {
      sketch.limbs.push({ pts: curve.getPoints(8).map((p) => p.clone().add(root)), width });
    };
    addLimb(main, 0.11);

    /** Cành con mọc ra từ `limb`, mỗi cành mang một chùm hoa. */
    const addTwigs = (limb: THREE.Curve<THREE.Vector3>, limbLen: number, baseFade: number, count: number) => {
      for (let k = 0; k < count; k++) {
        const u = 0.3 + (k / count) * 0.65 + R() * 0.04;
        const p = limb.getPointAt(Math.min(u, 0.97));
        const lat = (k % 2 ? 1 : -1) * (0.22 + R() * 0.3);
        const twig = new THREE.CatmullRomCurve3([
          p.clone(),
          p.clone().add(local(lat * 0.5 + dir * 0.06, -0.03 + R() * 0.1, inward * (0.08 + R() * 0.12))),
          p.clone().add(local(lat + dir * 0.1, -0.14 - R() * 0.2, inward * (0.18 + R() * 0.28))),
        ]);
        geos.push(taperedTube(twig, 8, 4, 0.016, 0.004, 0.55, baseFade + u * limbLen));
        for (let s = 0; s <= 8; s++) flowerSpots.push(twig.getPointAt(0.1 + (s / 8) * 0.9));
      }
    };

    // cành nhánh toả dọc hành lang để tán liền nhau giữa các điểm mọc
    const limbCount = 5 + Math.floor(R() * 2);
    for (let k = 0; k < limbCount; k++) {
      const u = 0.24 + (k / limbCount) * 0.58 + R() * 0.05;
      const p = main.getPointAt(u);
      const side = k % 2 ? 1 : -1;
      const len = 0.95 + R() * 0.6;
      const limb = new THREE.CatmullRomCurve3([
        p.clone(),
        p.clone().add(local(side * len * 0.45, 0.05 + R() * 0.06, inward * len * 0.12)),
        p.clone().add(local(side * len * 0.8, -0.02 - R() * 0.08, inward * len * 0.25)),
        p.clone().add(local(side * len, -0.14 - R() * 0.14, inward * len * 0.34)),
      ]);
      geos.push(taperedTube(limb, 18, 5, 0.04, 0.008, 0.55, u * mainLen));
      addLimb(limb, 0.06);
      addTwigs(limb, limb.getLength(), u * mainLen, 6 + Math.floor(R() * 2));
    }
    addTwigs(main, mainLen, 0, 7);
    for (let s = 0; s < 16; s++) flowerSpots.push(main.getPointAt(0.34 + (s / 15) * 0.66));
    for (const s of flowerSpots) sketch.spots.push(s.clone().add(root));
    const bark = new THREE.Mesh(mergeGeometries(geos), barkMaterial);
    for (const geo of geos) geo.dispose();
    bark.renderOrder = 0;
    g.add(bark);

    // hoa trên cành: instanced quads dùng chung atlas (không uốn cong nên 2 tam giác là đủ)
    // Trộn vị trí để giảm chất lượng vẫn giữ hoa phủ đều trên mọi nhánh.
    for (let i = flowerSpots.length - 1; i > 0; i--) {
      const j = Math.floor(R() * (i + 1));
      [flowerSpots[i], flowerSpots[j]] = [flowerSpots[j], flowerSpots[i]];
    }
    const n = Math.round(flowerSpots.length * 2.8);
    const geo = new THREE.PlaneGeometry(1, 1);
    const cells = new Float32Array(n);
    const tints = new Float32Array(n * 4);
    geo.setAttribute('aCell', new THREE.InstancedBufferAttribute(cells, 1));
    geo.setAttribute('aTint', new THREE.InstancedBufferAttribute(tints, 4));
    const flowers = new THREE.InstancedMesh(geo, this.blossomMat, n);
    flowers.renderOrder = 3;
    const m = new THREE.Matrix4();
    const q = new THREE.Quaternion();
    const e = new THREE.Euler();
    const budGeo = new THREE.IcosahedronGeometry(1, 0);
    const buds = new THREE.InstancedMesh(budGeo, this.budMat, Math.ceil(flowerSpots.length / 2));
    const leafShape = new THREE.Shape();
    leafShape.moveTo(0, 0);
    leafShape.quadraticCurveTo(0.45, 0.5, 0, 1);
    leafShape.quadraticCurveTo(-0.45, 0.5, 0, 0);
    const leaves = new THREE.InstancedMesh(new THREE.ShapeGeometry(leafShape, 4), this.leafMat, Math.ceil(flowerSpots.length / 3));
    let li = 0;
    for (let i = 0; i < n; i++) {
      const base = flowerSpots[i % flowerSpots.length];
      const p = base.clone().add(new THREE.Vector3((R() - 0.5) * 0.2, (R() - 0.5) * 0.1, (R() - 0.5) * 0.2));
      e.set(Math.PI / 2 + (R() - 0.5) * 1.2, R() * 6.28, (R() - 0.5) * 1.2);
      q.setFromEuler(e);
      const brand = R() < BRAND_PETAL_RATIO;
      const s = brand ? 0.14 : 0.12 + R() * 0.065;
      m.compose(p, q, new THREE.Vector3(s, s, s));
      flowers.setMatrixAt(i, m);
      cells[i] = brand ? CELL.blossomBrand : CELL.blossomPink[(R() * 2) | 0];
      tints.set([1, 1, 1, 1], i * 4);
      // điểm rụng hoa (toạ độ phòng; x < 0 nằm ngoài hành lang nên hoa rơi sẽ bị loại ngay)
      const world = p.clone().add(root);
      if (i % 3 === 0 && world.x > 0.1) this.emitter.points.push(world);
    }
    for (let i = 0; i < flowerSpots.length; i++) {
      const p = flowerSpots[i].clone().add(new THREE.Vector3((R() - 0.5) * 0.1, -0.01, (R() - 0.5) * 0.1));
      const s = 0.007 + R() * 0.004;
      m.compose(p, q.identity(), new THREE.Vector3(s, s * 1.3, s));
      if (i % 2 === 0) buds.setMatrixAt(i / 2, m);
      if (i % 3 === 0 && li < leaves.count) {
        e.set(R() * 1.2 - 0.3, R() * 6.28, R() * 1.5);
        q.setFromEuler(e);
        const ls = 0.07 + R() * 0.04;
        m.compose(p, q, new THREE.Vector3(ls, ls, ls));
        leaves.setMatrixAt(li++, m);
      }
    }
    leaves.count = li;
    // tính trước khi setDetail giảm count, và nới ra một chút cho phần lắc theo gió
    for (const mesh of [flowers, buds, leaves]) {
      mesh.computeBoundingSphere();
      mesh.boundingSphere!.radius += 0.25;
    }
    this.blossoms.push({ mesh: flowers, full: n });
    this.details.push(buds, leaves);
    g.add(flowers, buds, leaves);
  }

  /**
   * @param visibility độ hiện của tán (0..1), không phụ thuộc vào việc đang ngẩng lên
   * @param lookUp 0..1 khi ngẩng lên: nhìn lên thì hoa rụng nhiều hơn
   */
  update(dt: number, visibility: number, lookUp: number, light: THREE.Color, reduceMotion: boolean) {
    this.t += dt;
    this.visibility += (visibility - this.visibility) * Math.min(1, dt * 4);
    const v = this.visibility;
    this.group.visible = v > 0.01;
    barkMaterial.uniforms.uOpacity.value = v;
    (barkMaterial.uniforms.uLight.value as THREE.Color).copy(light);
    this.blossomMat.uniforms.uOpacity.value = v;
    (this.blossomMat.uniforms.uLight.value as THREE.Color).copy(light);
    this.budMat.opacity = v;
    this.leafMat.opacity = v * 0.9;
    this.shade.material.opacity = v * 0.38;
    const amp = reduceMotion ? 0.004 : 0.015;
    for (const s of this.sways) {
      s.g.rotation.x = Math.sin(this.t * 0.9 + s.seed) * amp;
      s.g.rotation.y = Math.sin(this.t * 0.6 + s.seed * 2) * amp * 0.7;
    }
    // hoa rụng từ cành: lúc nào cũng lác đác, nhìn lên thì nhiều hơn
    this.emitter.rate = v > 0.3 ? (3 + 7 * lookUp) * v : 0;
  }
}

/** Dùng trong debug: nửa bề rộng hành lang để vẽ khung tham chiếu. */
export const _HALF_W = HALF_W;
