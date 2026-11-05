import * as THREE from 'three';
import { route, room } from '../config/room';
import { theme } from '../config/theme';
import { getPetalAtlas, CELL } from './petal-textures';
import { createPetalMaterial } from '../physics/petal-system';

/**
 * Chế độ ngoài phòng (wayfinding).
 *  - Hệ toạ độ = hệ của route.json (gốc tại mốc P).
 *  - Đường ánh sáng mảnh trên sàn, nội suy Catmull-Rom, "chảy" về phía cổng G1,
 *    phủ cánh hoa và hạt lấp lánh.
 *  - Hoa đào trang trí quanh viền màn hình (gắn vào camera, có parallax nhẹ),
 *    chừa trống vùng giữa để không che pano/cổng.
 *  - Vị trí: căn tại pano P, sau đó cộng dồn bước chân dọc tuyến (dead-reckoning).
 */
export class OutdoorScene {
  readonly root = new THREE.Group();
  readonly frame = new THREE.Group(); // gắn vào camera
  readonly curve: THREE.CatmullRomCurve3;
  readonly length: number;
  progress = 0; // m đã đi dọc tuyến
  private ribbonMat: THREE.ShaderMaterial;
  private sparkMat: THREE.ShaderMaterial;
  private sparks: THREE.Points;
  private framePetals: THREE.InstancedMesh;
  private fp: { x: number; y: number; vx: number; vy: number; rot: number; vr: number; s: number; cell: number }[] = [];
  private frameClusters: THREE.InstancedMesh;
  private parallax = new THREE.Vector2();
  private t = 0;
  private gateGlow: THREE.Sprite;

  constructor(scene: THREE.Scene, camera: THREE.Camera) {
    scene.add(this.root);
    camera.add(this.frame);
    const pts = route.waypoints.map((w) => new THREE.Vector3(w[0], 0.012, w[2]));
    pts.push(new THREE.Vector3(route.gate.position[0], 0.012, route.gate.position[2]));
    this.curve = new THREE.CatmullRomCurve3(pts, false, 'catmullrom', 0.5);
    this.length = this.curve.getLength();

    // --- dải sáng ---
    const segs = Math.max(64, Math.round(this.length * 12));
    const W = route.ribbonWidth;
    const pos: number[] = [], uv: number[] = [], idx: number[] = [];
    for (let i = 0; i <= segs; i++) {
      const u = i / segs;
      const p = this.curve.getPointAt(u);
      const tg = this.curve.getTangentAt(u);
      const side = new THREE.Vector3(-tg.z, 0, tg.x).normalize();
      for (const s of [-1, 1]) {
        pos.push(p.x + side.x * W * s * 1.6, p.y, p.z + side.z * W * s * 1.6);
        uv.push(u * this.length, s * 0.5 + 0.5);
      }
      if (i < segs) {
        const a = i * 2;
        idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
      }
    }
    const rg = new THREE.BufferGeometry();
    rg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    rg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
    rg.setIndex(idx);
    this.ribbonMat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uLen: { value: this.length },
        uPink: { value: new THREE.Color(theme.petalDeep) },
        uGold: { value: new THREE.Color(theme.glow) },
        uOpacity: { value: 1 },
      },
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform float uTime, uProgress, uLen, uOpacity; uniform vec3 uPink, uGold; varying vec2 vUv;
        void main(){
          float x = abs(vUv.y - 0.5) * 2.0;
          float core = exp(-x * x * 26.0);
          float halo = exp(-x * x * 5.0) * 0.28;
          float flow = 0.72 + 0.28 * sin((vUv.x - uTime * 1.1) * 3.0);
          float ahead = vUv.x - uProgress;
          float vis = smoothstep(-1.5, 0.4, ahead) * (1.0 - smoothstep(14.0, 22.0, ahead));
          vec3 c = mix(uPink, uGold, core * 0.8);
          float a = (core * flow + halo) * vis * uOpacity;
          gl_FragColor = vec4(c * a, a);
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const ribbon = new THREE.Mesh(rg, this.ribbonMat);
    ribbon.frustumCulled = false;
    this.root.add(ribbon);

    // --- cánh hoa phủ trên dải sáng ---
    const { texture } = getPetalAtlas();
    const pmat = createPetalMaterial(texture);
    pmat.uniforms.uCurl.value = 0.08;
    const N = Math.round(this.length * 14);
    const pgeo = new THREE.PlaneGeometry(1, 1, 2, 2);
    const cells = new Float32Array(N);
    const tints = new Float32Array(N * 4);
    pgeo.setAttribute('aCell', new THREE.InstancedBufferAttribute(cells, 1));
    pgeo.setAttribute('aTint', new THREE.InstancedBufferAttribute(tints, 4));
    const carpet = new THREE.InstancedMesh(pgeo, pmat, N);
    const m = new THREE.Matrix4();
    const e = new THREE.Euler();
    const q = new THREE.Quaternion();
    for (let i = 0; i < N; i++) {
      const u = Math.random();
      const p = this.curve.getPointAt(u);
      const tg = this.curve.getTangentAt(u);
      const off = (Math.random() - 0.5) * W * 3 * Math.pow(Math.random(), 0.6);
      p.x += -tg.z * off;
      p.z += tg.x * off;
      p.y = 0.004 + Math.random() * 0.004;
      e.set(-Math.PI / 2 + (Math.random() - 0.5) * 0.4, 0, Math.random() * 6.28);
      q.setFromEuler(e);
      const r = Math.random();
      cells[i] = r < 0.12 ? CELL.petalBrand : r < 0.22 ? CELL.blossomPink[0] : CELL.petalPink[(Math.random() * 4) | 0];
      const s = cells[i] === CELL.blossomPink[0] ? 0.05 : 0.032 + Math.random() * 0.012;
      m.compose(p, q, new THREE.Vector3(s, s, s));
      carpet.setMatrixAt(i, m);
      tints.set([1, 1, 1, 0.92], i * 4);
    }
    carpet.frustumCulled = false;
    carpet.renderOrder = 2;
    this.root.add(carpet);

    // --- hạt lấp lánh chạy dọc ---
    const SN = Math.round(this.length * 10);
    const su = new Float32Array(SN), so = new Float32Array(SN * 2);
    const sp = new Float32Array(SN * 3);
    for (let i = 0; i < SN; i++) {
      su[i] = Math.random();
      so[i * 2] = (Math.random() - 0.5) * W * 2.2;
      so[i * 2 + 1] = Math.random();
    }
    const sgeo = new THREE.BufferGeometry();
    sgeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
    sgeo.setAttribute('aU', new THREE.BufferAttribute(su, 1));
    sgeo.setAttribute('aOff', new THREE.BufferAttribute(so, 2));
    // tra bảng điểm/tiếp tuyến của đường để shader dịch hạt theo thời gian
    const LUT = 256;
    const lut = new Float32Array(LUT * 4);
    for (let i = 0; i < LUT; i++) {
      const u = i / (LUT - 1);
      const p = this.curve.getPointAt(u);
      const tg = this.curve.getTangentAt(u);
      lut.set([p.x, p.z, tg.x, tg.z], i * 4);
    }
    const lutTex = new THREE.DataTexture(lut, LUT, 1, THREE.RGBAFormat, THREE.FloatType);
    lutTex.minFilter = lutTex.magFilter = THREE.NearestFilter; // iOS không lọc tuyến tính texture float
    lutTex.needsUpdate = true;
    this.sparkMat = new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 }, uLen: { value: this.length }, uLut: { value: lutTex }, uProgress: { value: 0 }, uPx: { value: 1 } },
      vertexShader: `
        attribute float aU; attribute vec2 aOff; uniform float uTime, uLen, uProgress, uPx; uniform sampler2D uLut;
        varying float vA;
        void main(){
          float u = fract(aU + uTime * 0.9 / uLen);
          vec4 s = texture2D(uLut, vec2(u, 0.5));
          vec2 n = normalize(vec2(-s.w, s.z));
          vec3 p = vec3(s.x + n.x * aOff.x, 0.03 + 0.06 * abs(sin(uTime * 2.0 + aOff.y * 30.0)), s.y + n.y * aOff.x);
          float ahead = u * uLen - uProgress;
          vA = smoothstep(-1.0, 0.5, ahead) * (1.0 - smoothstep(12.0, 18.0, ahead)) * (0.4 + 0.6 * abs(sin(uTime * 3.0 + aOff.y * 50.0)));
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_PointSize = uPx * 9.0 / -mv.z;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying float vA;
        void main(){ vec2 c = gl_PointCoord - 0.5; float d = length(c);
          float a = smoothstep(0.5, 0.0, d) * vA; if (a < 0.02) discard;
          gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, a); }`,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    this.sparks = new THREE.Points(sgeo, this.sparkMat);
    this.sparks.frustumCulled = false;
    this.root.add(this.sparks);

    // --- đích: quầng sáng nhẹ tại cổng G1 ---
    const gc = document.createElement('canvas');
    gc.width = 64; gc.height = 128;
    const g2 = gc.getContext('2d')!;
    const grad = g2.createRadialGradient(32, 84, 1, 32, 84, 31); // tắt hẳn trước mép canvas
    grad.addColorStop(0, 'rgba(255,231,184,0.9)');
    grad.addColorStop(1, 'rgba(255,193,214,0)');
    g2.fillStyle = grad;
    g2.fillRect(0, 0, 64, 128);
    this.gateGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(gc), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.gateGlow.scale.set(room.corridor.gateOpeningWidth * 1.6, 2.6, 1);
    this.gateGlow.position.set(route.gate.position[0], 1.2, route.gate.position[2]);
    this.root.add(this.gateGlow);

    // --- khung hoa quanh viền màn hình (trong không gian camera) ---
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
    this.root.visible = v;
    this.frame.visible = v;
  }

  setSparkles(on: boolean) {
    this.sparks.visible = on;
  }

  /** Vị trí mắt người dùng (toạ độ tuyến) tại tiến độ hiện tại. */
  eyePosition(out: THREE.Vector3, eye = 1.45) {
    const u = THREE.MathUtils.clamp(this.progress / this.length, 0, 1);
    return out.copy(this.curve.getPointAt(u)).setY(eye);
  }

  /** Góc (độ, có dấu) từ hướng nhìn tới điểm cách 2 m phía trước trên tuyến: + bên phải. */
  turnHint(camPos: THREE.Vector3, fwd: THREE.Vector3): number {
    const u = THREE.MathUtils.clamp((this.progress + 2) / this.length, 0, 1);
    const p = this.curve.getPointAt(u);
    const to = new THREE.Vector2(p.x - camPos.x, p.z - camPos.z);
    const f = new THREE.Vector2(fwd.x, fwd.z);
    if (to.lengthSq() < 0.01 || f.lengthSq() < 0.01) return 0;
    const a = Math.atan2(f.x * to.y - f.y * to.x, f.dot(to));
    return (a * 180) / Math.PI;
  }

  get remaining() {
    return Math.max(0, this.length - this.progress);
  }

  get arrived() {
    return this.remaining < route.gate.arriveRadius;
  }

  /** Một bước chân: tiến dọc tuyến nếu đang hướng theo chiều đường đi. */
  step(forward: THREE.Vector3) {
    const u = THREE.MathUtils.clamp(this.progress / this.length, 0, 1);
    const tg = this.curve.getTangentAt(u);
    const f = new THREE.Vector3(forward.x, 0, forward.z);
    if (f.lengthSq() < 0.04) return;
    f.normalize();
    const along = f.dot(new THREE.Vector3(tg.x, 0, tg.z).normalize());
    if (along > -0.2) this.progress = Math.min(this.length, this.progress + room.user.strideMeters * Math.max(0.5, along));
  }

  update(dt: number, angularVel: THREE.Vector3, reduceMotion: boolean, pixelRatio: number) {
    this.t += dt;
    this.ribbonMat.uniforms.uTime.value = this.t;
    this.ribbonMat.uniforms.uProgress.value = this.progress;
    this.sparkMat.uniforms.uTime.value = this.t;
    this.sparkMat.uniforms.uProgress.value = this.progress;
    this.sparkMat.uniforms.uPx.value = pixelRatio * innerHeight * 0.02;
    this.gateGlow.material.opacity = 0.55 + 0.25 * Math.sin(this.t * 1.6);
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
