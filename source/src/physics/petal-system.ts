import * as THREE from 'three';
import { getPetalAtlas, CELL } from '../scenes/petal-textures';
import { BRAND_PETAL_RATIO } from '../config/theme';
import { HALF_W, LEN } from '../config/room';
import { Wind } from './wind';
import { CEILING_GLSL, ceilingUniforms } from '../scenes/ceiling-clip';
import {
  distanceTo,
  pushOutOfTable,
  restSurfaceAt,
  treeFade,
  wallFade,
  type ColliderSource,
} from './colliders';

/**
 * Shader cánh hoa: atlas + uốn cong nhẹ + giả trong mờ khi nhìn xiên.
 * @param ceilingOnly chỉ hiện ở hướng là trần thật (hoa trên cành)
 */
export function createPetalMaterial(texture: THREE.Texture, ceilingOnly = false) {
  return new THREE.ShaderMaterial({
    defines: ceilingOnly ? { CEILING_ONLY: '' } : {},
    uniforms: {
      map: { value: texture },
      uLight: { value: new THREE.Color(1, 1, 1) },
      uOpacity: { value: 1 },
      uCurl: { value: 0.18 },
      uSurface: ceilingUniforms.uSurface,
      uClip: ceilingUniforms.uClip,
    },
    vertexShader: /* glsl */ `
      #ifdef CEILING_ONLY
      ${CEILING_GLSL}
      #endif
      attribute float aCell;
      attribute vec4 aTint;
      uniform float uCurl;
      varying vec2 vUv;
      varying vec4 vTint;
      varying float vFacing;
      void main() {
        vec3 p = position;
        p.z += uCurl * (p.x * p.x * 2.2) - uCurl * 0.25 * (p.y + 0.5) * (p.y + 0.5);
        vec2 cell = vec2(mod(aCell, 4.0), 1.0 - floor(aCell / 4.0));
        vUv = (uv + cell) / vec2(4.0, 2.0);
        vec4 mv = modelViewMatrix * instanceMatrix * vec4(p, 1.0);
        vec3 n = normalize(normalMatrix * mat3(instanceMatrix) * vec3(0.0, 0.0, 1.0));
        vFacing = abs(dot(n, normalize(-mv.xyz)));
        vTint = aTint;
        #ifdef CEILING_ONLY
        vTint.a *= ceilingMask((modelMatrix * instanceMatrix * vec4(p, 1.0)).xyz);
        #endif
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: /* glsl */ `
      uniform sampler2D map;
      uniform vec3 uLight;
      uniform float uOpacity;
      varying vec2 vUv;
      varying vec4 vTint;
      varying float vFacing;
      void main() {
        vec4 t = texture2D(map, vUv);
        float a = t.a * vTint.a * uOpacity;
        if (a < 0.04) discard;
        float glow = 0.86 + 0.28 * pow(1.0 - vFacing, 2.0);
        gl_FragColor = vec4(t.rgb * vTint.rgb * uLight * glow, a);
        #include <colorspace_fragment>
      }
    `,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
  });
}

const enum S {
  Dead = 0,
  Falling = 1,
  Resting = 2,
  Held = 3,
  Fading = 4,
}

export interface PetalOptions {
  capacity?: number;
}

export interface Emitter {
  points: THREE.Vector3[];
  rate: number; // cánh/giây
}

const _v = new THREE.Vector3();
const _w = new THREE.Vector3();
const _c = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _s = new THREE.Vector3();
const _m = new THREE.Matrix4();
const _zero = new THREE.Matrix4().makeScale(0, 0, 0);
const _ndc = new THREE.Vector3();
/** Độ cao (m) dưới đó cánh hoa phải khớp với vùng sàn nhìn thấy. */
const GROUND_BAND = 0.3;

export class PetalSystem {
  readonly mesh: THREE.InstancedMesh;
  readonly shadows: THREE.InstancedMesh;
  readonly wind = new Wind();
  readonly material: THREE.ShaderMaterial;
  readonly cap: number;

  // tham số điều khiển
  density = 1; // 0..1.5 (nút mật độ)
  speed = 1; // hệ số tốc độ rơi
  maxFalling = 600;
  maxResting = 900;
  readingMode = false;
  reduceMotion = false;
  lookUp = 0; // 0..1 khi ngẩng lên
  lookDown = 0; // 0..1 khi cúi xuống
  enabled = true;
  bounded = true; // giới hạn trong hành lang cố định (room.json)
  /** Phòng đo được từ camera: hoa sinh trong phòng, rơi từ trần. */
  room: { ceilingY: number; isInside(x: number, z: number): boolean } | null = null;
  sources: ColliderSource[] = [];
  emitters: Emitter[] = [];
  /** Vùng sàn nhìn thấy (chế độ camera), tra theo điểm màn hình hoặc hướng từ camera; null = tin mặt sàn y = 0. */
  floorMask: { sample(ndcX: number, ndcY: number, dx: number, dy: number, dz: number): number } | null = null;
  heldCount = 0;
  onGrab?: (n: number) => void;

  // dữ liệu SoA
  private pos: Float32Array;
  private vel: Float32Array;
  private rot: Float32Array;
  private spin: Float32Array;
  private size: Float32Array;
  private state: Uint8Array;
  private alpha: Float32Array;
  private phase: Float32Array;
  private cell: Float32Array;
  private tint: Float32Array;
  private born: Float32Array;
  private hold: Float32Array;
  private noCatch: Float32Array;
  private tintAttr: THREE.InstancedBufferAttribute;
  private cellAttr: THREE.InstancedBufferAttribute;
  private t = 0;
  private cursor = 0;
  private fallingCount = 0;
  private restingCount = 0;
  private stack = new Map<number, number>();
  private emitAcc = 0;
  private prevGrabbing = false;
  private firstFill = true;
  private handAcc = 0;

  constructor(parent: THREE.Object3D, opts: PetalOptions = {}) {
    const N = (this.cap = opts.capacity ?? 1600);
    this.pos = new Float32Array(N * 3);
    this.vel = new Float32Array(N * 3);
    this.rot = new Float32Array(N * 3);
    this.spin = new Float32Array(N * 3);
    this.size = new Float32Array(N);
    this.state = new Uint8Array(N);
    this.alpha = new Float32Array(N);
    this.phase = new Float32Array(N);
    this.cell = new Float32Array(N);
    this.tint = new Float32Array(N * 4);
    this.born = new Float32Array(N);
    this.hold = new Float32Array(N * 3);
    this.noCatch = new Float32Array(N);

    const { texture, shadow } = getPetalAtlas();
    const geo = new THREE.PlaneGeometry(1, 1, 4, 4);
    this.cellAttr = new THREE.InstancedBufferAttribute(this.cell, 1);
    this.tintAttr = new THREE.InstancedBufferAttribute(this.tint, 4);
    this.cellAttr.setUsage(THREE.DynamicDrawUsage);
    this.tintAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('aCell', this.cellAttr);
    geo.setAttribute('aTint', this.tintAttr);
    this.material = createPetalMaterial(texture);
    this.mesh = new THREE.InstancedMesh(geo, this.material, N);
    this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 2;

    const sgeo = new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2);
    const smat = new THREE.MeshBasicMaterial({ map: shadow, transparent: true, depthWrite: false, opacity: 0.32, color: 0x000000 });
    this.shadows = new THREE.InstancedMesh(sgeo, smat, N);
    this.shadows.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.shadows.frustumCulled = false;
    this.shadows.renderOrder = 1;
    for (let i = 0; i < N; i++) {
      this.mesh.setMatrixAt(i, _zero);
      this.shadows.setMatrixAt(i, _zero);
    }
    parent.add(this.shadows, this.mesh);
  }

  setLight(c: THREE.Color) {
    (this.material.uniforms.uLight.value as THREE.Color).copy(c);
  }

  setVisible(v: boolean) {
    this.mesh.visible = v;
    this.shadows.visible = v;
  }

  clear() {
    this.state.fill(S.Dead);
    this.stack.clear();
    this.firstFill = true;
  }

  /** Số cánh đang rơi / đọng – để HUD debug và kiểm thử. */
  stats() {
    return { falling: this.fallingCount, resting: this.restingCount, held: this.heldCount };
  }

  private alloc(): number {
    for (let k = 0; k < this.cap; k++) {
      const i = (this.cursor + k) % this.cap;
      if (this.state[i] === S.Dead) {
        this.cursor = (i + 1) % this.cap;
        return i;
      }
    }
    return -1;
  }

  spawn(x: number, y: number, z: number, vx = 0, vy = -0.3, vz = 0): number {
    const i = this.alloc();
    if (i < 0) return -1;
    const i3 = i * 3;
    this.pos[i3] = x; this.pos[i3 + 1] = y; this.pos[i3 + 2] = z;
    this.vel[i3] = vx; this.vel[i3 + 1] = vy; this.vel[i3 + 2] = vz;
    this.rot[i3] = Math.random() * 6.28; this.rot[i3 + 1] = Math.random() * 6.28; this.rot[i3 + 2] = Math.random() * 6.28;
    const sp = this.reduceMotion ? 0.6 : 1.6;
    this.spin[i3] = (Math.random() - 0.5) * sp * 2;
    this.spin[i3 + 1] = (Math.random() - 0.5) * sp;
    this.spin[i3 + 2] = (Math.random() - 0.5) * sp * 2;
    const r = Math.random();
    let cell: number;
    let size: number;
    if (r < BRAND_PETAL_RATIO) {
      cell = Math.random() < 0.55 ? CELL.petalBrand : CELL.blossomBrand;
      size = cell === CELL.blossomBrand ? 0.066 : 0.044;
    } else if (r < BRAND_PETAL_RATIO + 0.16) {
      cell = CELL.blossomPink[(Math.random() * 2) | 0];
      size = 0.056 + Math.random() * 0.016;
    } else {
      cell = CELL.petalPink[(Math.random() * 4) | 0];
      size = 0.036 + Math.random() * 0.016;
    }
    this.cell[i] = cell;
    this.size[i] = size;
    const isBrand = cell === CELL.petalBrand || cell === CELL.blossomBrand;
    const b = isBrand ? 1 : 0.94 + Math.random() * 0.1;
    this.tint[i * 4] = b;
    this.tint[i * 4 + 1] = isBrand ? 1 : b * (0.95 + Math.random() * 0.06);
    this.tint[i * 4 + 2] = isBrand ? 1 : b * (0.96 + Math.random() * 0.06);
    this.tint[i * 4 + 3] = 1;
    this.alpha[i] = 0; // hiện dần
    this.phase[i] = Math.random() * 100;
    this.born[i] = this.t;
    this.state[i] = S.Falling;
    return i;
  }

  private stackKey(x: number, z: number) {
    return (Math.round(x / 0.12) << 12) ^ Math.round((z + 10) / 0.12);
  }

  private rest(i: number, surface: number) {
    const i3 = i * 3;
    const key = this.stackKey(this.pos[i3], this.pos[i3 + 2]);
    const n = (this.stack.get(key) ?? 0) + 1;
    this.stack.set(key, n);
    this.pos[i3 + 1] = surface + 0.003 + Math.min(n * 0.0032, 0.045) + Math.random() * 0.002;
    this.rot[i3] = -Math.PI / 2 + (Math.random() - 0.5) * 0.5;
    this.rot[i3 + 2] = (Math.random() - 0.5) * 0.5;
    this.vel[i3] = this.vel[i3 + 1] = this.vel[i3 + 2] = 0;
    this.state[i] = S.Resting;
    this.born[i] = this.t;
  }

  private unrest(i: number) {
    const i3 = i * 3;
    const key = this.stackKey(this.pos[i3], this.pos[i3 + 2]);
    const n = this.stack.get(key) ?? 0;
    if (n <= 1) this.stack.delete(key);
    else this.stack.set(key, n - 1);
  }

  /** Thể tích sinh hoa quanh người dùng – lệch về phía đang nhìn. */
  private spawnAround(camPos: THREE.Vector3, fwd: THREE.Vector3, initial: boolean) {
    const fh = _w.set(fwd.x, 0, fwd.z);
    if (fh.lengthSq() < 0.01) fh.set(1, 0, 0);
    fh.normalize();
    const side = _s.set(-fh.z, 0, fh.x);
    let x = camPos.x, z = camPos.z;
    // thử vài vị trí, càng về sau càng gần người, để hoa nằm trong phòng đã đo
    for (let k = 0; k < 6; k++) {
      const ahead = 0.6 + Math.random() * 5.2 * (1 - k / 6);
      const lat = (Math.random() - 0.5) * 3.2 * (1 - k / 6);
      x = camPos.x + fh.x * ahead + side.x * lat;
      z = camPos.z + fh.z * ahead + side.z * lat;
      if (!this.room || this.room.isInside(x, z)) break;
    }
    if (this.bounded) {
      x = THREE.MathUtils.clamp(x, 0.1, LEN - 0.1);
      z = THREE.MathUtils.clamp(z, -HALF_W + 0.12, HALF_W - 0.12);
    }
    const ceil = this.room?.ceilingY;
    const y = ceil !== undefined
      ? initial ? 0.3 + Math.random() * (ceil - 0.3) : ceil - Math.random() * 0.4
      : initial ? 0.3 + Math.random() * 3 : 2.5 + Math.random() * 0.9;
    this.spawn(x, y, z, 0, -0.25 * this.speed, 0);
  }

  /** roomToClip = projection × view × (ma trận đặt phòng) – để tính vùng giữa màn hình ở chế độ đọc. */
  update(dt: number, roomToClip: THREE.Matrix4, camPos: THREE.Vector3, fwd: THREE.Vector3) {
    dt = Math.min(dt, 0.05);
    this.t += dt;
    this.wind.update(dt);
    if (!this.enabled) {
      this.setVisible(false);
      return;
    }
    this.setVisible(true);

    // --- sinh hoa ---
    const reading = this.readingMode ? 0.45 : 1;
    const lookBoost = 1 + this.lookUp * 0.4 - this.lookDown * 0.35;
    const target = Math.round(this.maxFalling * this.density * reading * lookBoost * (this.reduceMotion ? 0.6 : 1));
    if (this.firstFill) {
      for (let k = 0; k < target * 0.7; k++) this.spawnAround(camPos, fwd, true);
      // lớp hoa đã đọng sẵn trên sàn / mặt bàn quanh người – không bắt đầu từ sàn trống
      for (let k = 0; k < this.maxResting * 0.4; k++) {
        const a = Math.random() * Math.PI * 2;
        let r = 0.4 + Math.pow(Math.random(), 0.7) * 4.5;
        const squash = this.bounded ? 0.6 : 1; // hành lang hẹp ngang, phòng thì trải đều
        let x = camPos.x + Math.cos(a) * r;
        let z = camPos.z + Math.sin(a) * r * squash;
        for (let t = 0; t < 4 && this.room && !this.room.isInside(x, z); t++) {
          r *= 0.7;
          x = camPos.x + Math.cos(a) * r;
          z = camPos.z + Math.sin(a) * r * squash;
        }
        if (this.bounded) {
          x = THREE.MathUtils.clamp(x, 0.1, LEN - 0.1);
          z = THREE.MathUtils.clamp(z, -HALF_W + 0.1, HALF_W - 0.1);
        }
        const i = this.spawn(x, 0, z);
        if (i >= 0) {
          this.rest(i, this.bounded ? restSurfaceAt(x, z) : 0);
          this.born[i] = this.t - 5 - Math.random() * 5;
        }
      }
      this.firstFill = false;
    }
    let budget = Math.min(30, Math.max(0, target - this.fallingCount));
    // hoa rụng từ cành (khi ngẩng lên)
    for (const em of this.emitters) {
      if (!em.points.length || em.rate <= 0) continue;
      this.emitAcc += em.rate * dt;
      while (this.emitAcc >= 1 && budget > 0) {
        this.emitAcc -= 1;
        budget--;
        let p = em.points[(Math.random() * em.points.length) | 0];
        for (let k = 0; k < 6 && Math.abs(p.x - camPos.x) > 7; k++) p = em.points[(Math.random() * em.points.length) | 0];
        this.spawn(p.x + (Math.random() - 0.5) * 0.1, p.y - 0.03, p.z + (Math.random() - 0.5) * 0.1, 0, -0.15, 0);
      }
    }
    const perFrame = Math.ceil(target / 90);
    for (let k = 0; k < Math.min(budget, perFrame); k++) this.spawnAround(camPos, fwd, false);

    // --- bàn tay / collider động ---
    const cols = [];
    let cup: ReturnType<NonNullable<ColliderSource['cup']>> = null;
    for (const s of this.sources) {
      if (!s.active) continue;
      cols.push(...s.colliders());
      const c = s.cup?.();
      if (c) cup = c;
    }
    const grabbing = !!cup?.grabbing;
    const justClosed = grabbing && !this.prevGrabbing;
    const justOpened = !grabbing && this.prevGrabbing;
    this.prevGrabbing = grabbing;
    const cupInv = cup ? _q.copy(cup.quaternion).invert().clone() : null;
    let grabbedNow = 0;
    // tương tác có dẫn dắt: khi thấy tay, thả vài cánh ngay phía trên lòng bàn tay
    // (mật độ hoa trong không gian quá thưa để một cánh tình cờ rơi đúng vào tay)
    if (cup) {
      this.handAcc += dt * (grabbing ? 0.6 : 1.8);
      while (this.handAcc >= 1) {
        this.handAcc -= 1;
        const c = cup.center;
        this.spawn(c.x + (Math.random() - 0.5) * 0.1, c.y + 0.28 + Math.random() * 0.18, c.z + (Math.random() - 0.5) * 0.1, 0, -0.2, 0);
      }
    }

    // --- mô phỏng ---
    this.fallingCount = 0;
    this.restingCount = 0;
    this.heldCount = 0;
    let oldestRestT = Infinity;
    let oldestRest = -1;
    const fall = 0.42 * this.speed;
    const flut = this.reduceMotion ? 0.12 : 0.32;

    for (let i = 0; i < this.cap; i++) {
      const st = this.state[i];
      if (st === S.Dead) {
        continue;
      }
      const i3 = i * 3;
      const p = _v.set(this.pos[i3], this.pos[i3 + 1], this.pos[i3 + 2]);
      let a = this.alpha[i];

      if (st === S.Falling) {
        this.fallingCount++;
        a = Math.min(1, a + dt * 1.5);
        const ph = this.phase[i] + this.t;
        this.wind.sample(p.x, p.y, p.z, _w);
        const tvx = _w.x + Math.sin(ph * 1.7) * flut;
        const tvy = _w.y - fall * (0.75 + 0.25 * Math.sin(ph * 2.3));
        const tvz = _w.z + Math.cos(ph * 1.3) * flut;
        const k = Math.min(1, dt * 2.2);
        // cánh ở gần tay: gió/lắc lư dịu đi và được hút nhẹ về lòng bàn tay
        let ax = 0, az = 0, calm = 1;
        if (cup && !grabbing) {
          const dx = cup.center.x - p.x, dz = cup.center.z - p.z, dy = p.y - cup.center.y;
          const h2 = dx * dx + dz * dz;
          if (dy > -0.04 && dy < 0.75 && h2 < 0.2) {
            calm = 0.25;
            ax = dx * 3.5;
            az = dz * 3.5;
          }
        }
        this.vel[i3] += (tvx * calm + ax - this.vel[i3]) * k;
        this.vel[i3 + 1] += (tvy - this.vel[i3 + 1]) * k;
        this.vel[i3 + 2] += (tvz * calm + az - this.vel[i3 + 2]) * k;
        // va chạm tay: trượt/lướt qua, không xuyên
        for (const c of cols) {
          const d = distanceTo(c, p, _c);
          const pr = this.size[i] * 0.45;
          if (d < c.r + pr) {
            // rơi từ trên xuống lòng bàn tay đang mở, tay gần như đứng yên → nằm lại trên tay
            if (
              c.kind === 'sphere' && c.palm && cup && !grabbing && p.y > c.c.y + 0.01 &&
              c.vel.lengthSq() < 0.36 && this.t > this.noCatch[i] && this.heldCount + grabbedNow < 14
            ) {
              this.capture(i, p, cup.center, cupInv!);
              grabbedNow++;
              break;
            }
            const n = _s.subVectors(p, _c);
            if (n.lengthSq() < 1e-8) n.set(0, 1, 0);
            n.normalize();
            p.copy(_c).addScaledVector(n, c.r + pr + 0.002);
            const vn = this.vel[i3] * n.x + this.vel[i3 + 1] * n.y + this.vel[i3 + 2] * n.z;
            if (vn < 0) {
              this.vel[i3] -= vn * n.x * 1.3;
              this.vel[i3 + 1] -= vn * n.y * 1.3;
              this.vel[i3 + 2] -= vn * n.z * 1.3;
            }
            this.vel[i3] += c.vel.x * 0.75;
            this.vel[i3 + 1] += c.vel.y * 0.75;
            this.vel[i3 + 2] += c.vel.z * 0.75;
            this.spin[i3] += (Math.random() - 0.5) * 3;
          }
        }
        if (this.state[i] === S.Held) {
          this.pos[i3] = p.x; this.pos[i3 + 1] = p.y; this.pos[i3 + 2] = p.z;
          continue;
        }
        p.x += this.vel[i3] * dt;
        p.y += this.vel[i3 + 1] * dt;
        p.z += this.vel[i3 + 2] * dt;
        _s.set(this.vel[i3], this.vel[i3 + 1], this.vel[i3 + 2]);
        if (this.bounded && pushOutOfTable(p, _s)) {
          this.vel[i3] = _s.x;
          this.vel[i3 + 2] = _s.z;
        }
        this.rot[i3] += this.spin[i3] * dt;
        this.rot[i3 + 1] += this.spin[i3 + 1] * dt;
        this.rot[i3 + 2] += this.spin[i3 + 2] * dt;
        // chạm sàn / mặt bàn → nằm lại
        const surf = this.bounded ? restSurfaceAt(p.x, p.z) : 0;
        if (p.y <= surf + 0.004) {
          p.y = surf;
          this.pos[i3] = p.x; this.pos[i3 + 2] = p.z;
          this.rest(i, surf);
          p.y = this.pos[i3 + 1];
        }
        if (this.bounded) {
          if (Math.abs(p.z) > HALF_W - 0.02 || p.x < 0 || p.x > LEN) this.state[i] = S.Fading;
        } else if (this.room && !this.room.isInside(p.x, p.z)) {
          this.state[i] = S.Fading; // bay xuyên qua tường đã đo
        }
        // rơi quá xa người dùng → tái chế
        if (Math.abs(p.x - camPos.x) > 10 || Math.abs(p.z - camPos.z) > 10 || p.y > 6) this.state[i] = S.Dead;
        // bắt hoa
        if (cup && grabbing && this.state[i] === S.Falling && this.t > this.noCatch[i] && this.heldCount + grabbedNow < 14) {
          const r = justClosed ? cup.radius * 1.8 : cup.radius;
          if (p.distanceTo(cup.center) < r) {
            this.capture(i, p, cup.center, cupInv!);
            grabbedNow++;
          }
        }
      } else if (st === S.Resting) {
        this.restingCount++;
        a = Math.min(1, a + dt * 2);
        if (this.t - this.born[i] < oldestRestT) {
          oldestRestT = this.t - this.born[i];
        }
        if (oldestRest < 0 || this.born[i] < this.born[oldestRest]) oldestRest = i;
        // gạt hoa bằng tay: tung lên, xoay theo tay
        for (const c of cols) {
          const d = distanceTo(c, p, _c);
          const speed = c.vel.length();
          if (d < c.r + 0.03 && (speed > 0.12 || d < c.r * 0.8)) {
            this.unrest(i);
            const n = _s.subVectors(p, _c).setY(0);
            if (n.lengthSq() < 1e-6) n.set(Math.random() - 0.5, 0, Math.random() - 0.5);
            n.normalize();
            const lift = 0.5 + Math.min(1.4, speed) * 0.9 + Math.random() * 0.3;
            this.vel[i3] = c.vel.x * 0.9 + n.x * 0.5;
            this.vel[i3 + 1] = lift;
            this.vel[i3 + 2] = c.vel.z * 0.9 + n.z * 0.5;
            this.spin[i3] = (Math.random() - 0.5) * 8;
            this.spin[i3 + 2] = (Math.random() - 0.5) * 8;
            p.y += 0.02;
            this.state[i] = S.Falling;
            break;
          }
        }
        if (this.state[i] === S.Resting && cup && justClosed && p.distanceTo(cup.center) < cup.radius * 1.3 && this.heldCount + grabbedNow < 14) {
          this.unrest(i);
          this.capture(i, p, cup.center, cupInv!);
          grabbedNow++;
        }
        // lớp hoa "đi theo người": hoa quá xa phía sau/phía trước thì mờ và tái chế
        if (Math.abs(p.x - camPos.x) > 9 || Math.abs(p.z - camPos.z) > 9) this.state[i] = S.Fading;
      } else if (st === S.Held) {
        // thả khi: mất tay, vừa xoè tay sau khi nắm, hoặc tay đang mở mà vung mạnh/lật tay
        const fling = !!cup && !grabbing && cup.vel.lengthSq() > 1.0;
        if (!cup || justOpened || fling) {
          this.state[i] = S.Falling;
          const v = cup?.vel;
          this.vel[i3] = (v?.x ?? 0) * 0.8 + (Math.random() - 0.5) * 0.3;
          this.vel[i3 + 1] = (v?.y ?? 0) * 0.8 + 0.55 + Math.random() * 0.3;
          this.vel[i3 + 2] = (v?.z ?? 0) * 0.8 + (Math.random() - 0.5) * 0.3;
          this.spin[i3] = (Math.random() - 0.5) * 6;
          this.noCatch[i] = this.t + 1.2; // không hứng lại ngay
        } else {
          this.heldCount++;
          _s.set(this.hold[i3], this.hold[i3 + 1], this.hold[i3 + 2]).applyQuaternion(cup.quaternion);
          p.copy(cup.center).add(_s);
          this.rot[i3 + 1] += dt * 0.4;
        }
      } else if (st === S.Fading) {
        a -= dt * 1.5;
        if (a <= 0) {
          if (this.pos[i3 + 1] < 1.2 && this.vel[i3 + 1] === 0) this.unrest(i);
          this.state[i] = S.Dead;
          a = 0;
        }
      }

      this.pos[i3] = p.x; this.pos[i3 + 1] = p.y; this.pos[i3 + 2] = p.z;
      this.alpha[i] = a;

      // --- hiển thị ---
      if (this.state[i] === S.Dead) {
        this.mesh.setMatrixAt(i, _zero);
        this.shadows.setMatrixAt(i, _zero);
        continue;
      }
      let vis = a;
      if (this.bounded) vis *= wallFade(p.z) * treeFade(p);
      // không che sát mắt
      const dCam = p.distanceTo(camPos);
      vis *= THREE.MathUtils.smoothstep(dCam, 0.12, 0.4);
      // hoa sát sàn ảo chỉ hiện trên vùng đúng là sàn thật, không dính lên tường, bàn, ghế
      let onFloor = 1;
      if (this.floorMask && p.y < GROUND_BAND && this.state[i] !== S.Held && (!this.bounded || restSurfaceAt(p.x, p.z) === 0)) {
        _ndc.copy(p).applyMatrix4(roomToClip);
        onFloor = THREE.MathUtils.lerp(this.floorMask.sample(_ndc.x, _ndc.y, p.x - camPos.x, p.y - camPos.y, p.z - camPos.z), 1, THREE.MathUtils.smoothstep(p.y, 0.05, GROUND_BAND));
        vis *= onFloor;
      }
      if (this.readingMode && this.state[i] !== S.Held) {
        _ndc.copy(p).applyMatrix4(roomToClip);
        const r2 = _ndc.x * _ndc.x * 1.4 + _ndc.y * _ndc.y;
        if (_ndc.z < 1) vis *= THREE.MathUtils.lerp(0.12, 1, THREE.MathUtils.smoothstep(r2, 0.2, 0.75));
      }
      this.tint[i * 4 + 3] = vis;
      _e.set(this.rot[i3], this.rot[i3 + 1], this.rot[i3 + 2]);
      _q.setFromEuler(_e);
      const sz = this.size[i];
      _m.compose(p, _q, _s.set(sz, sz, sz));
      this.mesh.setMatrixAt(i, _m);
      if (onFloor > 0.3 && (this.state[i] === S.Resting || (this.state[i] === S.Fading && p.y < 1.1))) {
        const surf = this.bounded ? restSurfaceAt(p.x, p.z) : 0;
        _q.identity();
        _m.compose(_c.set(p.x + 0.004, surf + 0.0015, p.z + 0.004), _q, _s.set(sz * 1.25, 1, sz * 1.25));
        this.shadows.setMatrixAt(i, _m);
      } else this.shadows.setMatrixAt(i, _zero);
    }

    // trần số cánh đọng: cánh cũ nhất mờ dần và tái chế
    if (this.restingCount > this.maxResting && oldestRest >= 0) {
      let over = Math.min(12, this.restingCount - this.maxResting);
      for (let i = 0; i < this.cap && over > 0; i++) {
        if (this.state[i] === S.Resting && this.t - this.born[i] > 4) {
          this.state[i] = S.Fading;
          over--;
        }
      }
    }
    if (grabbedNow > 0) this.onGrab?.(grabbedNow);

    this.mesh.instanceMatrix.needsUpdate = true;
    this.shadows.instanceMatrix.needsUpdate = true;
    this.tintAttr.needsUpdate = true;
    this.cellAttr.needsUpdate = true;
  }

  private capture(i: number, p: THREE.Vector3, center: THREE.Vector3, inv: THREE.Quaternion) {
    const i3 = i * 3;
    _s.subVectors(p, center).clampLength(0, 0.045).applyQuaternion(inv);
    this.hold[i3] = _s.x;
    this.hold[i3 + 1] = _s.y;
    this.hold[i3 + 2] = _s.z;
    this.state[i] = S.Held;
    this.alpha[i] = 1;
  }

  /** Thả một nắm hoa ở vị trí cho trước (dùng cho thử nghiệm và hiệu ứng). */
  burst(at: THREE.Vector3, n: number, upward = 0.6) {
    for (let k = 0; k < n; k++) {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random() * 0.4;
      this.spawn(at.x + Math.cos(a) * 0.05, at.y, at.z + Math.sin(a) * 0.05, Math.cos(a) * r, upward * Math.random(), Math.sin(a) * r);
    }
  }
}
