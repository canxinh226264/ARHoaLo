import * as THREE from 'three';
import { GuidePlanner } from '../core/guide-planner';
import { room } from '../config/room';
import { theme } from '../config/theme';

/**
 * Dải sáng dẫn đường thử nghiệm: người dùng tự đặt điểm đến theo số mét trước mặt.
 *  - Vị trí ước lượng bằng bước chân, nên sai số tăng dần khi đi (không có GPS trong nhà).
 *  - Dải sáng đi thẳng về đích và lượn quanh vật cản thấy được trên camera.
 *  - Khác tầng: chỉ nhắc đi cầu thang. Web không đo được tầng và không biết cầu thang ở đâu,
 *    nên người dùng tự xác nhận khi đã tới tầng, rồi đặt lại điểm đến từ chỗ đang đứng.
 */
export type GuidePhase = 'idle' | 'floor' | 'walk' | 'arrived';

export interface GuideSetup {
  ahead: number;
  right: number;
  floorNow: number;
  floorTo: number;
}

const POINTS = 48;
const RANGE = 12; // m, độ dài dải sáng hiển thị
const START_GAP = 0.35; // m, không vẽ sát chân
const WIDTH = 0.3; // m, nửa bề ngang gồm quầng sáng
const ARRIVE_RADIUS = 0.8; // m
const OBSERVE_EVERY = 0.1; // giây
const PLAN_EVERY = 0.33; // giây
const SMOOTH = 6; // 1/giây
const LOOK_AHEAD = 1.2; // m
const MIN_ON_FLOOR = 0.12;
/** Mặt nạ sàn chỉ có giá trị ở gần; xa hơn thì vẽ mờ thay vì ẩn hẳn. */
const MASK_RANGE = 4.5; // m
const BEYOND_MASK = 0.35;

const _cam = new THREE.Vector3();
const _ndc = new THREE.Vector3();

export class GuideScene {
  readonly root = new THREE.Group();
  readonly planner = new GuidePlanner();
  readonly position = new THREE.Vector2();
  readonly target = new THREE.Vector2();
  phase: GuidePhase = 'idle';
  blocked = false;
  floorNow = 1;
  floorTo = 1;
  /** Lần đặt gần nhất, để mở lại biểu mẫu với giá trị cũ. */
  lastSetup: GuideSetup = { ahead: 5, right: 0, floorNow: 1, floorTo: 1 };
  onArrive?: () => void;

  private path: THREE.Vector2[] = [];
  private shown = new Float32Array(POINTS * 2);
  private wanted = new Float32Array(POINTS * 2);
  private hasShown = false;
  private mat: THREE.ShaderMaterial;
  private ribbon: THREE.Mesh;
  private posAttr: THREE.BufferAttribute;
  private uvAttr: THREE.BufferAttribute;
  private alphaAttr: THREE.BufferAttribute;
  private marker: THREE.Sprite;
  private t = 0;
  private observeAt = 0;
  private planAt = 0;

  constructor(scene: THREE.Scene) {
    scene.add(this.root);
    const geo = new THREE.BufferGeometry();
    const idx: number[] = [];
    for (let i = 0; i < POINTS - 1; i++) {
      const a = i * 2;
      idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
    }
    this.posAttr = new THREE.BufferAttribute(new Float32Array(POINTS * 2 * 3), 3);
    this.uvAttr = new THREE.BufferAttribute(new Float32Array(POINTS * 2 * 2), 2);
    this.alphaAttr = new THREE.BufferAttribute(new Float32Array(POINTS * 2), 1);
    this.posAttr.setUsage(THREE.DynamicDrawUsage);
    this.uvAttr.setUsage(THREE.DynamicDrawUsage);
    this.alphaAttr.setUsage(THREE.DynamicDrawUsage);
    geo.setAttribute('position', this.posAttr);
    geo.setAttribute('uv', this.uvAttr);
    geo.setAttribute('aAlpha', this.alphaAttr);
    geo.setIndex(idx);
    this.mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uPink: { value: new THREE.Color(theme.petalDeep) },
        uGold: { value: new THREE.Color(theme.glow) },
      },
      vertexShader: `
        attribute float aAlpha; varying vec2 vUv; varying float vA;
        void main(){ vUv = uv; vA = aAlpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform float uTime; uniform vec3 uPink, uGold; varying vec2 vUv; varying float vA;
        void main(){
          float x = abs(vUv.y - 0.5) * 2.0;
          float core = exp(-x * x * 12.0);
          float halo = exp(-x * x * 3.0) * 0.4;
          float flow = 0.72 + 0.28 * sin((vUv.x - uTime * 1.1) * 3.0);
          vec3 c = mix(uPink, uGold, core * 0.8);
          float a = (core * flow + halo) * vA;
          gl_FragColor = vec4(c * a, a);
          #include <colorspace_fragment>
        }`,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    this.ribbon = new THREE.Mesh(geo, this.mat);
    this.ribbon.frustumCulled = false;
    this.ribbon.renderOrder = 4;
    this.root.add(this.ribbon);

    const c = document.createElement('canvas');
    c.width = 64;
    c.height = 128;
    const g = c.getContext('2d')!;
    const grad = g.createRadialGradient(32, 84, 1, 32, 84, 31);
    grad.addColorStop(0, 'rgba(255,231,184,0.95)');
    grad.addColorStop(1, 'rgba(255,193,214,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 64, 128);
    this.marker = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, depthTest: false, blending: THREE.AdditiveBlending }),
    );
    this.marker.scale.set(0.5, 1, 1);
    this.marker.material.opacity = 0.75;
    this.root.add(this.marker);
    this.setVisible(false);
  }

  setVisible(v: boolean) {
    this.root.visible = v;
  }

  get remaining() {
    return this.position.distanceTo(this.target);
  }

  /** Đặt điểm đến so với hướng đang nhìn. Khác tầng thì chờ người dùng đổi tầng trước. */
  start(s: GuideSetup, cam: THREE.Camera) {
    this.lastSetup = s;
    this.floorNow = s.floorNow;
    this.floorTo = s.floorTo;
    this.position.set(0, 0);
    this.planner.reset();
    this.path = [];
    this.hasShown = false;
    this.blocked = false;
    if (s.floorNow !== s.floorTo) {
      this.phase = 'floor';
      return;
    }
    const fwd = new THREE.Vector3(0, 0, -1).applyQuaternion(cam.quaternion);
    const f = new THREE.Vector2(fwd.x, fwd.z);
    if (f.lengthSq() < 0.01) f.set(1, 0);
    f.normalize();
    this.target.set(f.x * s.ahead - f.y * s.right, f.y * s.ahead + f.x * s.right);
    this.phase = this.remaining <= ARRIVE_RADIUS ? 'arrived' : 'walk';
  }

  stop() {
    this.phase = 'idle';
  }

  /** Một bước chân. Nhìn gần thẳng lên/xuống thì bỏ qua vì không rõ hướng đi. */
  step(forward: THREE.Vector3) {
    if (this.phase !== 'walk') return;
    const f = new THREE.Vector2(forward.x, forward.z);
    if (f.lengthSq() < 0.04) return;
    f.normalize().multiplyScalar(room.user.strideMeters);
    this.position.add(f);
  }

  /** Góc (độ, có dấu) từ hướng nhìn tới đoạn đường phía trước: + bên phải. */
  turnHint(fwd: THREE.Vector3): number {
    let to = this.target;
    for (const p of this.path) {
      if (p.distanceTo(this.position) >= LOOK_AHEAD) {
        to = p;
        break;
      }
    }
    const dx = to.x - this.position.x, dz = to.y - this.position.y;
    if (dx * dx + dz * dz < 0.01 || fwd.x * fwd.x + fwd.z * fwd.z < 0.01) return 0;
    return (Math.atan2(fwd.x * dz - fwd.z * dx, fwd.x * dx + fwd.z * dz) * 180) / Math.PI;
  }

  /**
   * @param vision mặt nạ sàn đã sẵn sàng, null nếu chưa có (không camera, chưa học được màu sàn)
   */
  update(dt: number, cam: THREE.PerspectiveCamera, vision: { mask: Float32Array; sample(x: number, y: number): number } | null) {
    this.t += dt;
    this.mat.uniforms.uTime.value = this.t;
    const walking = this.phase === 'walk';
    this.ribbon.visible = walking;
    this.marker.visible = walking || this.phase === 'arrived';
    this.marker.position.set(this.target.x, 0.3, this.target.y);
    if (!walking) return;

    if (this.remaining <= ARRIVE_RADIUS) {
      this.phase = 'arrived';
      this.onArrive?.();
      return;
    }
    this.observeAt += dt;
    this.planAt += dt;
    this.planner.recenter(this.position.x, this.position.y);
    if (vision && this.observeAt >= OBSERVE_EVERY) {
      cam.getWorldPosition(_cam);
      this.planner.observe(vision.mask, cam.projectionMatrixInverse, cam.quaternion, _cam, this.observeAt);
      this.observeAt = 0;
    }
    if (!this.path.length || this.planAt >= PLAN_EVERY) {
      const plan = this.planner.plan(this.position, this.target);
      this.path = plan.points;
      this.blocked = plan.blocked;
      this.planAt = 0;
      this.resample();
    }
    this.draw(dt, cam, vision);
  }

  /** Chia đường thành POINTS điểm cách đều, bo góc bằng Catmull-Rom. */
  private resample() {
    const pts = this.path.map((p) => new THREE.Vector3(p.x, 0, p.y));
    if (pts.length < 2) return;
    const curve = pts.length === 2 ? new THREE.LineCurve3(pts[0], pts[1]) : new THREE.CatmullRomCurve3(pts, false, 'centripetal');
    const total = curve.getLength();
    const start = Math.min(START_GAP, total * 0.5);
    const len = Math.max(0.01, Math.min(total, RANGE) - start);
    const p = new THREE.Vector3();
    for (let i = 0; i < POINTS; i++) {
      curve.getPointAt((start + (i / (POINTS - 1)) * len) / total, p);
      this.wanted[i * 2] = p.x;
      this.wanted[i * 2 + 1] = p.z;
    }
    if (!this.hasShown) {
      this.shown.set(this.wanted);
      this.hasShown = true;
    }
  }

  private draw(dt: number, cam: THREE.Camera, vision: { sample(x: number, y: number): number } | null) {
    const k = 1 - Math.exp(-dt * SMOOTH);
    const s = this.shown, w = this.wanted;
    for (let i = 0; i < s.length; i++) s[i] += (w[i] - s[i]) * k;
    const pos = this.posAttr.array as Float32Array;
    const uv = this.uvAttr.array as Float32Array;
    const al = this.alphaAttr.array as Float32Array;
    let along = 0;
    for (let i = 0; i < POINTS; i++) {
      const x = s[i * 2], z = s[i * 2 + 1];
      const a = s[Math.max(0, i - 1) * 2], b = s[Math.max(0, i - 1) * 2 + 1];
      const c = s[Math.min(POINTS - 1, i + 1) * 2], d = s[Math.min(POINTS - 1, i + 1) * 2 + 1];
      let tx = c - a, tz = d - b;
      const l = Math.hypot(tx, tz) || 1;
      tx /= l;
      tz /= l;
      if (i) along += Math.hypot(x - a, z - b);
      // chỉ hiện rõ trên vùng là sàn, tránh vẽ đè lên tường và đồ vật
      let vis = 1;
      if (vision) {
        _ndc.set(x, 0, z).project(cam);
        const far = Math.hypot(x - this.position.x, z - this.position.y) > MASK_RANGE;
        vis = Math.max(far ? BEYOND_MASK : MIN_ON_FLOOR, vision.sample(_ndc.x, _ndc.y));
      }
      vis *= Math.min(1, i / 3) * Math.min(1, (POINTS - 1 - i) / 6 + (i === POINTS - 1 ? 0 : 0.1));
      for (let side = 0; side < 2; side++) {
        const n = side ? 1 : -1;
        const v = i * 2 + side;
        pos[v * 3] = x - tz * WIDTH * n;
        pos[v * 3 + 1] = 0.012;
        pos[v * 3 + 2] = z + tx * WIDTH * n;
        uv[v * 2] = along;
        uv[v * 2 + 1] = side;
        al[v] = vis;
      }
    }
    this.posAttr.needsUpdate = this.uvAttr.needsUpdate = this.alphaAttr.needsUpdate = true;
  }
}
