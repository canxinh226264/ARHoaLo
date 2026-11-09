import * as THREE from 'three';
import { NorthEstimate, enuToWorld, groundAngle, worldToEnu, wrapAngle } from '../core/geo';
import type { GeoFix } from '../core/geo-tracker';
import { room } from '../config/room';
import { theme } from '../config/theme';
import destination from '../config/destination.json';
import routing from '../config/routing.json';

/**
 * Dải sáng dẫn đường tới một điểm cố định (config/destination.json: cổng Parabol).
 *  - Vị trí: GPS, giữa hai lần GPS thì cộng bước chân; trộn hai nguồn theo độ tin cậy.
 *  - Hướng: la bàn cho biết hướng Bắc trong cảnh (cảm biến xoay của web không có hướng Bắc).
 *  - Tuyến: đi theo đường phố lấy từ OpenRouteService (onNeedRoute → setRoute); lệch tuyến lâu
 *    thì xin tuyến mới. Không lấy được tuyến thì đi theo hướng chim bay.
 *  - Dải sáng chỉ phụ thuộc vị trí và hướng thật, không né vật cản trên camera: đúng hướng
 *    quan trọng hơn, kể cả khi đoạn đường đó xuyên qua tường.
 *  - Đường nằm sau lưng hay ngoài khung hình: dải sáng bắt đầu trước mặt rồi vòng ra phía đó.
 *  - Khác tầng: chỉ nhắc đi cầu thang. Web không đo được tầng nên người dùng tự xác nhận.
 */
export type GuidePhase = 'idle' | 'locating' | 'floor' | 'walk' | 'arrived';
export type RouteState = 'none' | 'loading' | 'ok' | 'failed';

export interface GuideSetup {
  floorNow: number;
  floorTo: number;
}

export const DESTINATION = destination;

const POINTS = 96;
const RANGE = 12; // m, độ dài dải sáng hiển thị
const START_GAP = 0.35; // m, không vẽ sát chân
const WIDTH = 0.3; // m, nửa bề ngang gồm quầng sáng
const PLAN_EVERY = 0.33; // giây
const SMOOTH = 6; // 1/giây
/** Dải sáng mờ dần theo khoảng cách để đoạn xa không chói, nhất là khi chạy tới đường chân trời. */
const FADE_FROM = 4; // m
const FADE_TO = 12; // m
const FAR_ALPHA = 0.45;
/** Đường lệch khỏi hướng nhìn quá góc này thì vẽ đoạn vòng từ trước mặt (rad, ~29°). */
const LEAD_MIN = 0.5;
/** Đi gần như ngược hướng: giữ bên vòng cũ, tránh dải sáng lật trái/phải. */
const LEAD_KEEP_SIDE = 2.6;
/** Đoạn vòng: chạy thẳng từ gần chân ra trước mặt rồi mới bẻ cong, để thấy rõ trong khung hình dọc hẹp. */
const LEAD_NEAR = 1.0; // m, điểm đầu (mép dưới khung hình)
const LEAD_FROM = 2.4; // m, chỗ bắt đầu bẻ cong
const LEAD_TO = 1.4; // m, bán kính cuối vòng
const LEAD_TAIL = 6; // m, độ dài phần đường thật vẽ tiếp sau đoạn vòng
const LEAD_JOIN = 1.6; // m, đoạn vòng nối vào đường tại điểm cách người dùng chừng này
const LEAD_STEPS = 18;
const RESAMPLE_TURN = 0.15; // rad: xoay máy quá góc này thì vẽ lại đoạn vòng
const STEP_VARIANCE = 0.15; // m² sai số thêm sau mỗi bước chân
/** Sai số tăng theo thời gian kể cả khi không đếm được bước (đi chậm, bước nhỏ), để GPS mới luôn được tính. */
const DRIFT_VARIANCE = 4; // m²/giây
const COMPASS_FRESH = 1000; // ms
/** Dải sáng nối thẳng tới điểm trên tuyến cách chừng này (m), xa hơn thì đi đúng theo tuyến. */
const ROUTE_CARROT = 6;
/** Độ dài phần tuyến nối thêm sau điểm đó (m), đủ để thấy chỗ rẽ phía trước. */
const ROUTE_AHEAD = 30;
const SPARKS = 90;
const SPARK_SPEED = 0.07; // vòng dọc dải sáng mỗi giây

const _f = new THREE.Vector3();

/** Góc ngang camera; khi chúc thẳng xuống thì dùng hướng đỉnh màn hình. */
function viewAngle(q: THREE.Quaternion) {
  _f.set(0, 0, -1).applyQuaternion(q);
  if (Math.hypot(_f.x, _f.z) > 0.3) return Math.atan2(_f.x, -_f.z);
  _f.set(0, 1, 0).applyQuaternion(q);
  return Math.atan2(_f.x, -_f.z);
}

export class GuideScene {
  readonly root = new THREE.Group();
  /** Vị trí người dùng trong cảnh (x, z). */
  readonly position = new THREE.Vector2();
  /** Điểm đến trong cảnh (x, z). */
  readonly target = new THREE.Vector2();
  readonly north = new NorthEstimate();
  phase: GuidePhase = 'idle';
  floorNow = 1;
  floorTo = 1;
  /** Sai số GPS gần nhất (m), NaN khi chưa có. */
  accuracy = NaN;
  hasFix = false;
  lastSetup: GuideSetup = { floorNow: 1, floorTo: 1 };
  routeState: RouteState = 'none';
  onArrive?: () => void;
  /** Cần tuyến mới từ vị trí (mét Đông/Bắc so với điểm đến). */
  onNeedRoute?: (e: number, n: number) => void;
  /** Tuyến theo phố, mét Đông/Bắc so với điểm đến (x = Đông, y = Bắc). */
  private route: THREE.Vector2[] | null = null;
  private routeAskedAt = -Infinity;
  private offRouteFor = 0;

  private e = 0; // mét Đông/Bắc so với điểm đến
  private n = 0;
  private variance = 0;
  private originE = 0; // gốc cảnh = chỗ có GPS đầu tiên, để toạ độ cảnh nhỏ
  private originN = 0;
  private leadSide = 0;
  private leadLength = 0; // m đầu dải sáng là đoạn vòng
  private resampledAngle = 0;
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
  private sparks: THREE.Points;
  private sparkMat: THREE.ShaderMaterial;
  private sparkPos: THREE.BufferAttribute;
  private sparkAlpha: THREE.BufferAttribute;
  private sparkSeed = new Float32Array(SPARKS * 3);
  private sparklesOn = true;
  /** Hệ số cỡ hạt lấp lánh theo độ phân giải màn hình. */
  pointScale = 40;
  private t = 0;
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
    this.marker.scale.set(1.6, 3.2, 1);
    this.marker.material.opacity = 0.75;
    this.root.add(this.marker);

    const sgeo = new THREE.BufferGeometry();
    this.sparkPos = new THREE.BufferAttribute(new Float32Array(SPARKS * 3), 3);
    this.sparkAlpha = new THREE.BufferAttribute(new Float32Array(SPARKS), 1);
    this.sparkPos.setUsage(THREE.DynamicDrawUsage);
    this.sparkAlpha.setUsage(THREE.DynamicDrawUsage);
    sgeo.setAttribute('position', this.sparkPos);
    sgeo.setAttribute('aAlpha', this.sparkAlpha);
    for (let i = 0; i < this.sparkSeed.length; i++) this.sparkSeed[i] = Math.random();
    this.sparkMat = new THREE.ShaderMaterial({
      uniforms: { uPx: { value: 40 } },
      vertexShader: `
        attribute float aAlpha; uniform float uPx; varying float vA;
        void main(){ vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = uPx * 9.0 / -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `
        varying float vA;
        void main(){ float a = smoothstep(0.5, 0.0, length(gl_PointCoord - 0.5)) * vA; if (a < 0.02) discard; gl_FragColor = vec4(vec3(1.0, 0.93, 0.8) * a, a); }`,
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    });
    this.sparks = new THREE.Points(sgeo, this.sparkMat);
    this.sparks.frustumCulled = false;
    this.sparks.renderOrder = 5;
    this.root.add(this.sparks);
    this.setVisible(false);
  }

  setVisible(v: boolean) {
    this.root.visible = v;
  }

  setSparkles(on: boolean) {
    this.sparklesOn = on;
  }

  /** Khoảng cách thẳng tới điểm đến (m). */
  get remaining() {
    return Math.hypot(this.e, this.n);
  }

  /** Quãng đường còn phải đi (m): theo tuyến nếu có, không thì đường thẳng. */
  get distanceLeft() {
    const r = this.route;
    if (!r) return this.remaining;
    const p = this.projectOnRoute();
    let d = p.off + p.point.distanceTo(r[p.seg + 1]);
    for (let i = p.seg + 2; i < r.length; i++) d += r[i - 1].distanceTo(r[i]);
    return d;
  }

  get hasRoute() {
    return !!this.route;
  }

  /** Vị trí người dùng, mét Đông/Bắc so với điểm đến. */
  get userEnu() {
    return { e: this.e, n: this.n };
  }

  /** Tuyến theo phố (mét Đông/Bắc so với điểm đến), null nếu chưa có. */
  get routeEnu(): { e: number; n: number }[] | null {
    return this.route ? this.route.map((p) => ({ e: p.x, n: p.y })) : null;
  }

  /** Hướng camera theo la bàn (radian, chiều kim đồng hồ từ Bắc). */
  heading(cam: THREE.Camera) {
    return wrapAngle(viewAngle(cam.quaternion) - this.north.angle);
  }

  /** Kết quả xin tuyến (null = không lấy được, đi theo hướng chim bay). */
  setRoute(points: { e: number; n: number }[] | null) {
    if (points && points.length >= 2) {
      this.route = points.map((p) => new THREE.Vector2(p.e, p.n));
      this.routeState = 'ok';
    } else if (!this.route) {
      this.routeState = 'failed';
    } else {
      this.routeState = 'ok'; // giữ tuyến cũ
    }
    this.offRouteFor = 0;
    this.path = [];
  }

  /** Điểm gần nhất trên tuyến, chỉ số đoạn và khoảng cách lệch (m). */
  private projectOnRoute() {
    const r = this.route!;
    const me = new THREE.Vector2(this.e, this.n);
    let best = { seg: 0, point: r[0].clone(), off: Infinity };
    const ab = new THREE.Vector2(), ap = new THREE.Vector2();
    for (let i = 0; i < r.length - 1; i++) {
      ab.subVectors(r[i + 1], r[i]);
      const len2 = ab.lengthSq();
      const t = len2 ? THREE.MathUtils.clamp(ap.subVectors(me, r[i]).dot(ab) / len2, 0, 1) : 0;
      const q = r[i].clone().addScaledVector(ab, t);
      const off = q.distanceTo(me);
      if (off < best.off) best = { seg: i, point: q, off };
    }
    return best;
  }

  /** Tuyến phía trước, đổi sang toạ độ cảnh: điểm cách `carrot` m, rồi phần còn lại. */
  private routeAhead(north: number) {
    const r = this.route!;
    const p = this.projectOnRoute();
    const ahead: THREE.Vector2[] = [p.point];
    for (let i = p.seg + 1; i < r.length; i++) ahead.push(r[i]);
    const toWorld = (v: THREE.Vector2) => enuToWorld(v.x - this.originE, v.y - this.originN, north);
    let left = ROUTE_CARROT;
    let i = 1;
    let carrot = ahead[ahead.length - 1];
    for (; i < ahead.length; i++) {
      const seg = ahead[i - 1].distanceTo(ahead[i]);
      if (seg >= left) {
        carrot = ahead[i - 1].clone().lerp(ahead[i], seg ? left / seg : 0);
        break;
      }
      left -= seg;
    }
    const rest: THREE.Vector2[] = [];
    let len = 0;
    let prev = carrot;
    for (; i < ahead.length && len < ROUTE_AHEAD; i++) {
      len += prev.distanceTo(ahead[i]);
      rest.push(toWorld(ahead[i]));
      prev = ahead[i];
    }
    return { carrot: toWorld(carrot), rest };
  }

  /** Xin tuyến khi chưa có, hoặc khi đã đi lệch tuyến đủ lâu. */
  private checkRoute(dt: number) {
    if (!this.hasFix || !this.onNeedRoute) return;
    const canAsk = this.t - this.routeAskedAt >= routing.minSecondsBetweenRequests;
    let ask = this.routeState === 'none';
    if (this.route) {
      const limit = Math.max(routing.offRouteMeters, (Number.isFinite(this.accuracy) ? this.accuracy : 0) * 1.5);
      this.offRouteFor = this.projectOnRoute().off > limit ? this.offRouteFor + dt : 0;
      ask = this.offRouteFor >= routing.rerouteAfterSeconds && canAsk;
    }
    if (!ask) return;
    this.routeAskedAt = this.t;
    if (!this.route) this.routeState = 'loading';
    this.offRouteFor = 0;
    this.onNeedRoute(this.e, this.n);
  }

  start(s: GuideSetup) {
    this.lastSetup = s;
    this.floorNow = s.floorNow;
    this.floorTo = s.floorTo;
    this.path = [];
    this.hasShown = false;
    this.phase = s.floorNow !== s.floorTo ? 'floor' : this.hasFix && this.north.ready ? 'walk' : 'locating';
  }

  stop() {
    this.phase = 'idle';
    this.hasFix = false;
    this.route = null;
    this.routeState = 'none';
    this.routeAskedAt = -Infinity;
    this.accuracy = NaN;
    this.north.reset();
  }

  /** Một lần đo GPS (mét Đông/Bắc so với điểm đến). */
  gpsFix(f: GeoFix) {
    const r2 = f.accuracy * f.accuracy;
    if (!this.hasFix) {
      this.e = f.e;
      this.n = f.n;
      this.originE = f.e;
      this.originN = f.n;
      this.variance = r2;
      this.hasFix = true;
    } else {
      // trộn kiểu Kalman: GPS kém thì tin bước chân hơn và ngược lại
      const k = this.variance / (this.variance + r2);
      this.e += (f.e - this.e) * k;
      this.n += (f.n - this.n) * k;
      this.variance *= 1 - k;
    }
    this.accuracy = f.accuracy;
  }

  /** Một bước chân theo hướng nhìn (toạ độ cảnh). */
  step(forward: THREE.Vector3) {
    if (!this.hasFix || !this.north.ready || this.phase === 'floor') return;
    const len = Math.hypot(forward.x, forward.z);
    if (len < 0.2) return;
    const d = worldToEnu(forward.x / len, forward.z / len, this.north.angle);
    this.e += d.e * room.user.strideMeters;
    this.n += d.n * room.user.strideMeters;
    this.variance += STEP_VARIANCE;
  }

  /** @param compass hướng la bàn của camera (radian) và thời điểm đo, null nếu chưa có */
  update(dt: number, cam: THREE.PerspectiveCamera, compass: { value: number; at: number } | null, now = performance.now()) {
    this.t += dt;
    this.mat.uniforms.uTime.value = this.t;
    if (this.hasFix) this.variance += DRIFT_VARIANCE * dt;
    if (compass && now - compass.at < COMPASS_FRESH) {
      _f.set(0, 0, -1).applyQuaternion(cam.quaternion);
      // nhìn gần thẳng lên/xuống thì góc ngang của camera không ổn định
      if (Math.abs(_f.y) < 0.85) this.north.add(groundAngle(cam.quaternion), compass.value, dt);
    }
    const north = this.north.angle;
    enuToWorld(this.e - this.originE, this.n - this.originN, north, this.position);
    enuToWorld(-this.originE, -this.originN, north, this.target);

    if (this.phase === 'locating' && this.hasFix && this.north.ready) this.phase = 'walk';
    if (this.phase === 'walk' || this.phase === 'locating') this.checkRoute(dt);
    if (this.phase === 'walk' && this.remaining <= destination.arriveRadius) {
      this.phase = 'arrived';
      this.onArrive?.();
    }
    const walking = this.phase === 'walk';
    this.ribbon.visible = walking;
    this.sparks.visible = walking && this.sparklesOn;
    this.sparkMat.uniforms.uPx.value = this.pointScale;
    this.marker.visible = walking || this.phase === 'arrived';
    // điểm đến ở xa: đặt cột sáng theo hướng đích, cách vừa đủ để thấy
    const far = this.position.distanceTo(this.target);
    const markAt = far > RANGE ? this.position.clone().lerp(this.target, RANGE / far) : this.target;
    this.marker.position.set(markAt.x, 1.2, markAt.y);
    if (!walking) return;

    this.planAt += dt;
    const angle = viewAngle(cam.quaternion);
    if (!this.path.length || this.planAt >= PLAN_EVERY) {
      this.path = this.computePath(north);
      this.planAt = 0;
      this.resample(angle);
    } else if (Math.abs(wrapAngle(angle - this.resampledAngle)) > RESAMPLE_TURN) {
      this.resample(angle);
    }
    this.draw(dt);
  }

  /** Đường cần vẽ: theo tuyến phố nếu có, không thì thẳng tới đích. */
  private computePath(north: number): THREE.Vector2[] {
    if (!this.route) return [this.position.clone(), this.target.clone()];
    const { carrot, rest } = this.routeAhead(north);
    return [this.position.clone(), carrot, ...rest];
  }

  /** Điểm trên đường cách người dùng `d` mét (đo dọc theo đường) và chỉ số đoạn chứa nó. */
  private along(pts: THREE.Vector2[], d: number) {
    let left = d;
    for (let i = 1; i < pts.length; i++) {
      const seg = pts[i - 1].distanceTo(pts[i]);
      if (seg >= left) return { p: pts[i - 1].clone().lerp(pts[i], seg ? left / seg : 0), i };
      left -= seg;
    }
    return { p: pts[pts.length - 1].clone(), i: pts.length };
  }

  /**
   * Đường đi lệch khỏi hướng nhìn (ở sau lưng hay bên cạnh): bắt đầu dải sáng ngay trước mặt
   * rồi vòng quanh người dùng sang hướng đó, thay cho chữ "quay lại".
   */
  leadIn(pts: THREE.Vector2[], camAngle: number): THREE.Vector2[] | null {
    if (pts.length < 2) return null;
    const user = pts[0];
    const join = this.along(pts, LEAD_JOIN);
    const want = Math.atan2(join.p.x - user.x, -(join.p.y - user.y));
    let delta = wrapAngle(want - camAngle);
    if (Math.abs(delta) < LEAD_MIN) {
      this.leadSide = 0;
      return null;
    }
    if (Math.abs(delta) > LEAD_KEEP_SIDE && this.leadSide && Math.sign(delta) !== this.leadSide) delta -= Math.sign(delta) * Math.PI * 2;
    this.leadSide = Math.sign(delta);
    const out: THREE.Vector2[] = [];
    const fx = Math.sin(camAngle), fz = -Math.cos(camAngle);
    for (let k = 0; k < 4; k++) {
      const r = LEAD_NEAR + ((LEAD_FROM - LEAD_NEAR) * k) / 4;
      out.push(new THREE.Vector2(user.x + fx * r, user.y + fz * r));
    }
    for (let k = 0; k <= LEAD_STEPS; k++) {
      const t = k / LEAD_STEPS;
      const a = camAngle + delta * t;
      const r = LEAD_FROM + (LEAD_TO - LEAD_FROM) * t;
      out.push(new THREE.Vector2(user.x + Math.sin(a) * r, user.y - Math.cos(a) * r));
    }
    out.push(join.p, ...pts.slice(join.i));
    return out;
  }

  /** Chia đường thành POINTS điểm cách đều, bo góc bằng Catmull-Rom. */
  private resample(camAngle: number) {
    this.resampledAngle = camAngle;
    if (this.path.length < 2) return;
    const lead = this.leadIn(this.path, camAngle);
    const src = lead ?? this.path;
    this.leadLength = 0;
    if (lead) for (let i = 1; i <= LEAD_STEPS + 4; i++) this.leadLength += lead[i].distanceTo(lead[i - 1]);
    const pts: THREE.Vector3[] = [];
    for (const p of src) {
      const last = pts[pts.length - 1];
      if (!last || Math.hypot(last.x - p.x, last.z - p.y) > 0.02) pts.push(new THREE.Vector3(p.x, 0, p.y));
    }
    if (pts.length < 2) return;
    const curve = pts.length === 2 ? new THREE.LineCurve3(pts[0], pts[1]) : new THREE.CatmullRomCurve3(pts, false, 'centripetal');
    const total = curve.getLength();
    const start = lead ? 0 : Math.min(START_GAP, total * 0.5);
    const range = lead ? this.leadLength + LEAD_TAIL : RANGE;
    const len = Math.max(0.01, Math.min(total, range) - start);
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

  private draw(dt: number) {
    const k = 1 - Math.exp(-dt * SMOOTH);
    const s = this.shown, w = this.wanted;
    for (let i = 0; i < s.length; i++) s[i] += (w[i] - s[i]) * k;
    const pos = this.posAttr.array as Float32Array;
    const uv = this.uvAttr.array as Float32Array;
    const al = this.alphaAttr.array as Float32Array;
    let alongLen = 0;
    for (let i = 0; i < POINTS; i++) {
      const x = s[i * 2], z = s[i * 2 + 1];
      const a = s[Math.max(0, i - 1) * 2], b = s[Math.max(0, i - 1) * 2 + 1];
      const c = s[Math.min(POINTS - 1, i + 1) * 2], d = s[Math.min(POINTS - 1, i + 1) * 2 + 1];
      let tx = c - a, tz = d - b;
      const l = Math.hypot(tx, tz) || 1;
      tx /= l;
      tz /= l;
      if (i) alongLen += Math.hypot(x - a, z - b);
      const dist = Math.hypot(x - this.position.x, z - this.position.y);
      let vis = 1 - (1 - FAR_ALPHA) * THREE.MathUtils.smoothstep(dist, FADE_FROM, FADE_TO);
      vis *= (this.leadLength ? 1 : Math.min(1, i / 3)) * Math.min(1, (POINTS - 1 - i) / 6 + (i === POINTS - 1 ? 0 : 0.1));
      for (let side = 0; side < 2; side++) {
        const nrm = side ? 1 : -1;
        const v = i * 2 + side;
        pos[v * 3] = x - tz * WIDTH * nrm;
        pos[v * 3 + 1] = 0.012;
        pos[v * 3 + 2] = z + tx * WIDTH * nrm;
        uv[v * 2] = alongLen;
        uv[v * 2 + 1] = side;
        al[v] = vis;
      }
    }
    this.posAttr.needsUpdate = this.uvAttr.needsUpdate = this.alphaAttr.needsUpdate = true;
    this.drawSparks();
  }

  /** Hạt lấp lánh trôi dọc dải sáng về phía đích. */
  private drawSparks() {
    if (!this.sparks.visible) return;
    const s = this.shown, seed = this.sparkSeed;
    const pos = this.sparkPos.array as Float32Array, al = this.sparkAlpha.array as Float32Array;
    for (let j = 0; j < SPARKS; j++) {
      const a = seed[j * 3], b = seed[j * 3 + 1], c = seed[j * 3 + 2];
      const u = (a + this.t * SPARK_SPEED) % 1;
      const f = u * (POINTS - 1), i = Math.min(POINTS - 2, Math.floor(f)), k = f - i;
      const x0 = s[i * 2], z0 = s[i * 2 + 1], x1 = s[i * 2 + 2], z1 = s[i * 2 + 3];
      const l = Math.hypot(x1 - x0, z1 - z0) || 1;
      const off = (b - 0.5) * WIDTH * 1.2;
      pos[j * 3] = x0 + (x1 - x0) * k - ((z1 - z0) / l) * off;
      pos[j * 3 + 1] = 0.03 + 0.06 * Math.abs(Math.sin(this.t * 2 + c * 30));
      pos[j * 3 + 2] = z0 + (z1 - z0) * k + ((x1 - x0) / l) * off;
      al[j] = Math.min(1, u * 12) * (1 - u) * (0.4 + 0.6 * Math.abs(Math.sin(this.t * 3 + c * 50)));
    }
    this.sparkPos.needsUpdate = this.sparkAlpha.needsUpdate = true;
  }
}
