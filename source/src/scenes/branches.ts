import * as THREE from 'three';
import { theme, BRAND_PETAL_RATIO } from '../config/theme';
import { getPetalAtlas, CELL } from './petal-textures';
import { createPetalMaterial, type Emitter } from '../physics/petal-system';
import { CEILING_GLSL, ceilingUniforms, clipToCeiling } from './ceiling-clip';

/**
 * Tán đào phủ trần (procedural – 0 byte tải về), không phụ thuộc kích thước phòng định trước:
 * các cụm cành xếp theo lưới quanh người xem, treo ở độ cao trần đo được, và ẩn cụm nằm ngoài
 * tường đã thấy. Lưới "cuộn" theo người xem nên đi tới đâu trên đầu cũng có cành. Khi có mô hình
 * phân vùng thì cành chỉ hiện ở hướng là trần thật, nên tường và đồ vật che được tán hoa.
 * Mỗi cụm kèm một lớp bóng cây mờ sát trần.
 * Không có thân cây: gốc cành mờ dần (camera thật không che được vật ảo nên phải làm mờ thay vì "giấu").
 */

const GRID = 6; // số cụm mỗi cạnh
const SPACING = 2; // m
const SPAN = GRID * SPACING;
/** Gốc cành thấp hơn trần chừng này (m) để tán không xuyên lên trên trần. */
const ROOT_BELOW = 0.35;
const SHADE_SIZE = 6; // m
const SHADE_PX = 256;

/** Nét vẽ bóng cây trên mặt phẳng XZ, toạ độ cục bộ của một cụm. */
interface ShadeSketch {
  limbs: { pts: THREE.Vector3[]; width: number }[];
  spots: THREE.Vector3[];
}

interface Holder {
  group: THREE.Group;
  baseX: number;
  baseZ: number;
  /** Lệch từ gốc tới giữa cụm, dùng để xét cụm có nằm trong phòng không. */
  midZ: number;
  scale: number;
  target: number;
  local: THREE.Vector3[];
  world: THREE.Vector3[];
}

function buildShade(sk: ShadeSketch) {
  const c = document.createElement('canvas');
  c.width = c.height = SHADE_PX;
  const ctx = c.getContext('2d')!;
  const k = SHADE_PX / SHADE_SIZE;
  const px = (v: number) => (v + SHADE_SIZE / 2) * k;
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
  const size = 0.42 * k;
  for (const s of sk.spots) ctx.drawImage(blob, px(s.x) - size / 2, px(s.z) - size / 2, size, size);
  ctx.globalAlpha = 0.5;
  ctx.strokeStyle = '#000';
  ctx.lineCap = 'round';
  for (const l of sk.limbs) {
    ctx.lineWidth = l.width * k;
    ctx.beginPath();
    l.pts.forEach((p, i) => (i ? ctx.lineTo(px(p.x), px(p.z)) : ctx.moveTo(px(p.x), px(p.z))));
    ctx.stroke();
  }
  // mờ dần ra rìa để không có mép cắt thẳng
  ctx.globalAlpha = 1;
  ctx.globalCompositeOperation = 'destination-in';
  const edge = ctx.createRadialGradient(SHADE_PX / 2, SHADE_PX / 2, SHADE_PX * 0.3, SHADE_PX / 2, SHADE_PX / 2, SHADE_PX / 2);
  edge.addColorStop(0, 'rgba(0,0,0,1)');
  edge.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = edge;
  ctx.fillRect(0, 0, SHADE_PX, SHADE_PX);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return clipToCeiling(new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, side: THREE.DoubleSide, opacity: 0 }));
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
  uniforms: {
    uColor: { value: new THREE.Color(theme.branch) },
    uOpacity: { value: 0 },
    uLight: { value: new THREE.Color(1, 1, 1) },
    uSurface: ceilingUniforms.uSurface,
    uClip: ceilingUniforms.uClip,
  },
  vertexShader: `
    ${CEILING_GLSL}
    attribute float aFade; varying float vFade; varying vec3 vN;
    void main(){ vFade = aFade * ceilingMask((modelMatrix * vec4(position, 1.0)).xyz); vN = normalize(mat3(modelMatrix) * normal);
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
  private budMat = clipToCeiling(new THREE.MeshBasicMaterial({ color: 0xe0587f, transparent: true, opacity: 0 }));
  private leafMat = clipToCeiling(new THREE.MeshBasicMaterial({ color: 0x86a95e, transparent: true, opacity: 0, side: THREE.DoubleSide }));
  private sways: { g: THREE.Group; seed: number }[] = [];
  private blossoms: { mesh: THREE.InstancedMesh; full: number }[] = [];
  private details: THREE.InstancedMesh[] = [];
  private shade: THREE.MeshBasicMaterial;
  readonly holders: Holder[] = [];
  private t = 0;
  visibility = 0;
  /** 1 = chỉ hiện ở hướng là trần thật; 0 = chưa có dữ liệu trần, hiện cả tán. */
  clipTarget = 0;

  constructor(parent: THREE.Object3D) {
    this.blossomMat = createPetalMaterial(getPetalAtlas().texture, true);
    this.blossomMat.uniforms.uCurl.value = 0;
    this.blossomMat.depthWrite = false;
    const sketch: ShadeSketch = { limbs: [], spots: [] };
    for (let r = 0; r < GRID; r++) {
      for (let c = 0; c < GRID; c++) {
        const seed = 11 + (r * GRID + c) * 7;
        const R = rng(seed + 1);
        const x = (c - GRID / 2 + 0.5) * SPACING + (R() - 0.5) * 0.7;
        const z = (r - GRID / 2 + 0.5) * SPACING + (R() - 0.5) * 0.7;
        this.build(x, z, seed, (r + c) % 2 ? 1 : -1, 2.3 + (c % 3) * 0.25, r === 0 && c === 0 ? sketch : null);
      }
    }
    this.shade = buildShade(sketch);
    // chia nhỏ vì mức trần được tính theo đỉnh
    const shadeGeo = new THREE.PlaneGeometry(SHADE_SIZE, SHADE_SIZE, 12, 12).rotateX(-Math.PI / 2);
    this.holders.forEach((h, i) => {
      const plane = new THREE.Mesh(shadeGeo, this.shade);
      plane.position.y = ROOT_BELOW;
      plane.rotation.y = i * 1.57;
      plane.renderOrder = -1;
      h.group.add(plane);
    });
    this.group.visible = false;
    parent.add(this.group);
  }

  /** Giảm chi tiết theo mức chất lượng: 1 = đầy đủ. */
  setDetail(k: number) {
    for (const b of this.blossoms) b.mesh.count = Math.round(b.full * THREE.MathUtils.clamp(k, 0.55, 1));
    for (const m of this.details) m.visible = k > 0.7;
  }

  /**
   * Đặt tán theo vị trí người xem và phòng đo được.
   * @param cx, cz vị trí người xem
   * @param ceiling chiều cao trần (m)
   * @param isInside điểm có nằm trong phòng không
   */
  layout(cx: number, cz: number, ceiling: number, isInside: (x: number, z: number) => boolean) {
    const wrap = (d: number) => ((((d + SPAN / 2) % SPAN) + SPAN) % SPAN) - SPAN / 2;
    this.emitter.points.length = 0;
    for (const h of this.holders) {
      const x = cx + wrap(h.baseX - cx);
      const z = cz + wrap(h.baseZ - cz);
      h.group.position.set(x, ceiling - ROOT_BELOW, z);
      h.target = isInside(x, z + h.midZ) ? 1 : 0;
      if (!h.target) continue;
      for (let i = 0; i < h.local.length; i++) this.emitter.points.push(h.world[i].copy(h.local[i]).add(h.group.position));
    }
  }

  private build(baseX: number, baseZ: number, seed: number, inward: number, reach: number, sketch: ShadeSketch | null) {
    const R = rng(seed);
    const holder = new THREE.Group();
    const g = new THREE.Group();
    holder.add(g);
    this.group.add(holder);
    this.sways.push({ g, seed });
    const local_: THREE.Vector3[] = [];
    this.holders.push({ group: holder, baseX, baseZ, midZ: inward * reach * 0.5, scale: 1, target: 1, local: local_, world: [] });

    const dir = R() < 0.5 ? 1 : -1;
    const local = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
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
      sketch?.limbs.push({ pts: curve.getPoints(8), width });
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
    if (sketch) sketch.spots.push(...flowerSpots);
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
      // điểm rụng hoa (toạ độ cục bộ của cụm, layout() đổi sang toạ độ phòng)
      if (i % 3 === 0) local_.push(p.clone());
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
    this.holders[this.holders.length - 1].world = local_.map(() => new THREE.Vector3());
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
    ceilingUniforms.uClip.value += (this.clipTarget - ceilingUniforms.uClip.value) * Math.min(1, dt * 3);
    this.group.visible = v > 0.01;
    barkMaterial.uniforms.uOpacity.value = v;
    (barkMaterial.uniforms.uLight.value as THREE.Color).copy(light);
    this.blossomMat.uniforms.uOpacity.value = v;
    (this.blossomMat.uniforms.uLight.value as THREE.Color).copy(light);
    this.budMat.opacity = v;
    this.leafMat.opacity = v * 0.9;
    this.shade.opacity = v * 0.38;
    for (const h of this.holders) {
      h.scale += (h.target - h.scale) * Math.min(1, dt * 4);
      h.group.visible = h.scale > 0.01;
      h.group.scale.setScalar(Math.max(0.001, h.scale));
    }
    const amp = reduceMotion ? 0.004 : 0.015;
    for (const s of this.sways) {
      s.g.rotation.x = Math.sin(this.t * 0.9 + s.seed) * amp;
      s.g.rotation.y = Math.sin(this.t * 0.6 + s.seed * 2) * amp * 0.7;
    }
    // hoa rụng từ cành: lúc nào cũng lác đác, nhìn lên thì nhiều hơn
    this.emitter.rate = v > 0.3 ? (3 + 7 * lookUp) * v : 0;
  }
}
