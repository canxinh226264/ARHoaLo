import * as THREE from 'three';
import type { HandLandmarker, NormalizedLandmark } from '@mediapipe/tasks-vision';
import type { CameraFeed } from '../core/camera';
import type { ColliderSource, DynamicCollider } from '../physics/colliders';
import { OneEuro3 } from './one-euro-filter';

/**
 * MediaPipe Hand Landmarker (GPU, fallback CPU) → 21 điểm 3D trong hệ toạ độ phòng.
 *
 * Độ sâu: từ kích thước lòng bàn tay trên màn hình (cổ tay→gốc ngón giữa ≈ 9 cm,
 * gốc ngón trỏ→gốc ngón út ≈ 7,2 cm) và tiêu cự hiển thị. Chỉ nhận tay gần
 * camera nhất (lớn nhất) và trong tầm với (< 0,9 m) để không bắt nhầm tay người khác.
 */
const FINGERS = [
  [0, 1, 2, 3, 4],
  [0, 5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [0, 17, 18, 19, 20],
];
const PALM_EDGES: [number, number][] = [[5, 9], [9, 13], [13, 17], [0, 5], [0, 17], [1, 5]];
const TIPS = [8, 12, 16, 20];

export type HandStatus = 'off' | 'loading' | 'ready' | 'error';

export class HandTracker implements ColliderSource {
  status: HandStatus = 'off';
  active = false; // đang thấy tay
  grabbing = false;
  hz = 18;
  readonly points = Array.from({ length: 21 }, () => new THREE.Vector3());
  readonly palm = new THREE.Vector3();
  readonly palmVel = new THREE.Vector3();
  readonly cupCenter = new THREE.Vector3();
  readonly palmQuat = new THREE.Quaternion();
  depth = 0;
  onChange?: (active: boolean, grabbing: boolean) => void;

  private landmarker: HandLandmarker | null = null;
  private filters = Array.from({ length: 21 }, () => new OneEuro3(1.4, 0.8));
  private vel = Array.from({ length: 21 }, () => new THREE.Vector3());
  private prev = Array.from({ length: 21 }, () => new THREE.Vector3());
  private lastDetect = 0;
  private lastSeen = 0;
  private lastVideoTime = -1;
  private detectAt = 0;
  private cols: DynamicCollider[] = [];
  private pts = Array.from({ length: 21 }, () => new THREE.Vector3()); // vị trí đã ngoại suy
  private busy = false;

  async init(): Promise<void> {
    if (this.status === 'loading' || this.status === 'ready') return;
    this.status = 'loading';
    try {
      const vision = await import('@mediapipe/tasks-vision');
      const base = new URL('./', document.baseURI).href;
      const fileset = {
        wasmLoaderPath: base + 'mediapipe/vision_wasm_internal.js',
        wasmBinaryPath: base + 'mediapipe/vision_wasm_internal.wasm',
      };
      const make = (delegate: 'GPU' | 'CPU') =>
        vision.HandLandmarker.createFromOptions(fileset, {
          baseOptions: { modelAssetPath: base + 'models/hand_landmarker.task', delegate },
          runningMode: 'VIDEO',
          numHands: 2,
          minHandDetectionConfidence: 0.55,
          minHandPresenceConfidence: 0.5,
          minTrackingConfidence: 0.5,
        });
      try {
        this.landmarker = await make('GPU');
      } catch {
        this.landmarker = await make('CPU');
      }
      this.status = 'ready';
    } catch (e) {
      console.warn('[hand] không tải được Hand Landmarker', e);
      this.status = 'error';
    }
  }

  /** Gọi mỗi khung hình; tự giới hạn tần số nhận diện theo `hz`. */
  update(now: number, feed: CameraFeed, camera: THREE.PerspectiveCamera) {
    if (this.landmarker && feed.ready && !this.busy && now - this.lastDetect >= 1000 / this.hz) {
      const v = feed.video;
      if (v.currentTime !== this.lastVideoTime && v.readyState >= 2) {
        this.lastVideoTime = v.currentTime;
        this.lastDetect = now;
        this.busy = true;
        try {
          const res = this.landmarker.detectForVideo(v, now);
          this.consume(res.landmarks, now, feed, camera);
        } catch (e) {
          console.warn('[hand]', e);
        }
        this.busy = false;
      }
    }
    // mất tay > 300 ms → tắt collider (hoa rơi bình thường)
    const was = this.active;
    if (this.active && now - this.lastSeen > 300) {
      this.active = false;
      this.grabbing = false;
      this.filters.forEach((f) => f.reset());
    }
    if (was !== this.active) this.onChange?.(this.active, this.grabbing);
    if (!this.active) return;
    // ngoại suy nhẹ giữa hai lần nhận diện cho chuyển động mượt
    const dt = Math.min(0.08, (now - this.detectAt) / 1000);
    for (let i = 0; i < 21; i++) this.pts[i].copy(this.points[i]).addScaledVector(this.vel[i], dt);
    this.buildColliders();
  }

  private consume(hands: NormalizedLandmark[][], now: number, feed: CameraFeed, camera: THREE.PerspectiveCamera) {
    if (!hands || !hands.length) return;
    const L = feed.layout();
    const tanV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const tanH = tanV * camera.aspect;
    const f = L.sh / 2 / tanV; // tiêu cự (px màn hình)
    // chọn tay lớn nhất trên màn hình
    let best: NormalizedLandmark[] | null = null;
    let bestPx = 0;
    const px = (lm: NormalizedLandmark[], a: number, b: number) =>
      Math.hypot((lm[a].x - lm[b].x) * L.vw * L.scale, (lm[a].y - lm[b].y) * L.vh * L.scale);
    for (const h of hands) {
      const s = Math.max(px(h, 0, 9), px(h, 5, 17) * 1.25);
      if (s > bestPx) {
        bestPx = s;
        best = h;
      }
    }
    if (!best) return;
    const z1 = (f * 0.09) / Math.max(1, px(best, 0, 9));
    const z2 = (f * 0.072) / Math.max(1, px(best, 5, 17));
    const Z = Math.min(z1, z2);
    if (Z > 0.9 || Z < 0.08) return; // quá xa (tay người khác) hoặc vô lý
    this.depth = Z;
    const zScale = (Z * L.vw * L.scale) / f;
    const t = now / 1000;
    camera.updateMatrixWorld();
    const tmp = { x: 0, y: 0, z: 0 };
    const firstFrame = !this.active;
    const dtDet = firstFrame ? 1 : Math.max(0.02, (now - this.detectAt) / 1000);
    for (let i = 0; i < 21; i++) {
      const lm = best[i];
      const [nx, ny] = feed.videoToNdc(lm.x, lm.y, L);
      const zi = Math.max(0.05, Z + lm.z * zScale);
      const p = new THREE.Vector3(nx * tanH * zi, ny * tanV * zi, -zi).applyMatrix4(camera.matrixWorld);
      this.filters[i].filter(p.x, p.y, p.z, t, tmp);
      this.prev[i].copy(this.points[i]);
      this.points[i].set(tmp.x, tmp.y, tmp.z);
      if (firstFrame) this.vel[i].set(0, 0, 0);
      else this.vel[i].subVectors(this.points[i], this.prev[i]).divideScalar(dtDet).clampLength(0, 4);
    }
    this.detectAt = now;
    this.lastSeen = now;
    const wasActive = this.active;
    this.active = true;
    // cử chỉ nắm: độ xoè = khoảng cách đầu ngón → cổ tay / chiều dài lòng bàn tay
    const P = this.points;
    const palmLen = P[0].distanceTo(P[9]) || 0.09;
    let open = 0;
    for (const k of TIPS) open += P[k].distanceTo(P[0]);
    open /= TIPS.length * palmLen;
    const pinch = P[4].distanceTo(P[8]) / palmLen;
    const prevGrab = this.grabbing;
    if (this.grabbing) this.grabbing = !(open > 1.62 && pinch > 0.42);
    else this.grabbing = open < 1.38 || pinch < 0.28;
    if (prevGrab !== this.grabbing || !wasActive) {
      if (this.grabbing && navigator.vibrate) navigator.vibrate(12);
      this.onChange?.(this.active, this.grabbing);
    }
  }

  private buildColliders() {
    const P = this.pts;
    const cols: DynamicCollider[] = [];
    // lòng bàn tay
    this.palm.set(0, 0, 0);
    for (const k of [0, 5, 9, 13, 17, 9]) this.palm.add(P[k]);
    this.palm.divideScalar(6);
    this.palmVel.set(0, 0, 0);
    for (const k of [0, 5, 9, 13, 17]) this.palmVel.add(this.vel[k]);
    this.palmVel.divideScalar(5);
    cols.push({ kind: 'sphere', c: this.palm.clone(), r: 0.042, vel: this.palmVel.clone(), palm: true });
    const seg = (a: number, b: number, r: number) =>
      cols.push({
        kind: 'capsule',
        a: P[a].clone(),
        b: P[b].clone(),
        r,
        vel: this.vel[a].clone().add(this.vel[b]).multiplyScalar(0.5),
      });
    for (const chain of FINGERS) for (let i = 1; i < chain.length; i++) seg(chain[i - 1], chain[i], 0.011);
    for (const [a, b] of PALM_EDGES) seg(a, b, 0.014);
    this.cols = cols;
    // vùng giữ hoa: giữa lòng bàn tay và các đầu ngón
    const tips = new THREE.Vector3();
    for (const k of [4, 8, 12, 16, 20]) tips.add(P[k]);
    tips.divideScalar(5);
    this.cupCenter.copy(this.palm).lerp(tips, 0.45);
    const x = new THREE.Vector3().subVectors(P[17], P[5]).normalize();
    const y = new THREE.Vector3().subVectors(P[9], P[0]).normalize();
    const z = new THREE.Vector3().crossVectors(x, y).normalize();
    x.crossVectors(y, z);
    this.palmQuat.setFromRotationMatrix(new THREE.Matrix4().makeBasis(x, y, z));
  }

  colliders() {
    return this.active ? this.cols : [];
  }

  cup() {
    if (!this.active) return null;
    return { center: this.cupCenter, radius: 0.06, quaternion: this.palmQuat, grabbing: this.grabbing, vel: this.palmVel };
  }

  /** Điểm đã ngoại suy – dùng cho mặt nạ che hoa. */
  get renderPoints() {
    return this.pts;
  }
}

/**
 * Mặt nạ che hoa sau bàn tay: lòng bàn tay (đa giác) + mỗi đốt ngón một dải,
 * mỗi đỉnh nằm đúng độ sâu của landmark. Chỉ ghi depth, không ghi màu.
 */
export class HandOccluder {
  readonly mesh: THREE.Mesh;
  private pos: Float32Array;
  private static readonly SEGS: [number, number][] = [
    [1, 2], [2, 3], [3, 4], [5, 6], [6, 7], [7, 8], [9, 10], [10, 11], [11, 12],
    [13, 14], [14, 15], [15, 16], [17, 18], [18, 19], [19, 20],
  ];
  private static readonly PALM = [[0, 1, 5], [0, 5, 9], [0, 9, 13], [0, 13, 17], [1, 2, 5]];

  constructor(parent: THREE.Object3D) {
    const tris = HandOccluder.SEGS.length * 2 + HandOccluder.PALM.length;
    this.pos = new Float32Array(tris * 9);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    this.mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ colorWrite: false, depthWrite: true, side: THREE.DoubleSide }));
    this.mesh.renderOrder = -1;
    this.mesh.frustumCulled = false;
    this.mesh.visible = false;
    parent.add(this.mesh);
  }

  update(hand: HandTracker, camPos: THREE.Vector3) {
    this.mesh.visible = hand.active;
    if (!hand.active) return;
    const P = hand.renderPoints;
    let o = 0;
    const put = (v: THREE.Vector3) => {
      this.pos[o++] = v.x; this.pos[o++] = v.y; this.pos[o++] = v.z;
    };
    const side = new THREE.Vector3();
    const view = new THREE.Vector3();
    const d = new THREE.Vector3();
    const a0 = new THREE.Vector3(), a1 = new THREE.Vector3(), b0 = new THREE.Vector3(), b1 = new THREE.Vector3();
    for (const [i, j] of HandOccluder.SEGS) {
      const a = P[i], b = P[j];
      d.subVectors(b, a);
      const len = d.length() || 1e-4;
      d.divideScalar(len);
      view.subVectors(camPos, a).normalize();
      side.crossVectors(d, view).normalize().multiplyScalar(0.012);
      const ext = 0.008;
      a0.copy(a).addScaledVector(d, -ext).add(side);
      a1.copy(a).addScaledVector(d, -ext).sub(side);
      b0.copy(b).addScaledVector(d, ext).add(side);
      b1.copy(b).addScaledVector(d, ext).sub(side);
      put(a0); put(a1); put(b0);
      put(a1); put(b1); put(b0);
    }
    for (const [i, j, k] of HandOccluder.PALM) {
      put(P[i]); put(P[j]); put(P[k]);
    }
    const attr = this.mesh.geometry.getAttribute('position') as THREE.BufferAttribute;
    attr.needsUpdate = true;
  }
}
