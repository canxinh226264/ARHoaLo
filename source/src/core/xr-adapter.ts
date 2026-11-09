import * as THREE from 'three';
import { FLOOR, FloorDetector } from './floor-detector';

/**
 * Lớp nâng cấp Android Chrome: WebXR immersive-ar (6DoF thật).
 *  - hit-test nhiều tia + FloorDetector: chỉ cho đặt phòng lên mặt sàn thật, không phải
 *    mặt bàn. Sau khi đặt vẫn quét tiếp; thấy sàn thật thấp hơn thì tự đặt lại.
 *  - chỉ cho đặt trên điểm sàn vừa đo được, không đặt theo chiều cao giả định.
 *  - hướng +X của phòng = hướng nhìn ngang của điện thoại lúc chạm.
 *  - anchors (nếu có): neo gốc toạ độ để không trôi khi đi xa.
 *  - dom-overlay: HUD vẫn hiện trong phiên AR.
 * Giới hạn: trong phiên immersive-ar trình duyệt không đưa khung hình camera
 * cho JavaScript, nên nhận diện bàn tay (MediaPipe) tạm tắt ở chế độ này.
 */
export type XRStatus = 'scanning' | 'notFloor' | 'ready' | 'placed';

/** Tia hit-test trong hệ camera (x, y, z = −1). Tia đầu là tia ngắm giữa màn hình. */
const RAYS: [number, number][] = [[0, 0], [0, -0.35], [-0.35, -0.2], [0.35, -0.2], [0, -0.75]];
const MAX_HIT_RANGE = 8; // m, điểm chạm xa hơn thì độ cao kém tin cậy
const STATUS_HOLD = 0.35; // giây, tránh thông báo nhảy liên tục
const CORRECT_COOLDOWN = 2; // giây

const COLOR_OK = 0xfcfaf0;
const COLOR_REJECT = 0xe2553f;

export class XRAdapter {
  supported = false;
  session: XRSession | null = null;
  placed = false;
  status: XRStatus = 'scanning';
  onPlaced?: () => void;
  onEnd?: () => void;
  onStatus?: (s: XRStatus) => void;
  /** Chạm vào chỗ không phải sàn. */
  onRejected?: () => void;
  /** Sàn đã đổi, hoa đang có không còn nằm đúng chỗ. */
  onFloorChanged?: () => void;
  readonly detector = new FloorDetector();
  readonly reticle: THREE.Mesh;
  private reticleMat: THREE.MeshBasicMaterial;
  private sources: { source: XRHitTestSource; center: boolean }[] = [];
  private refSpace: XRReferenceSpace | null = null;
  private anchor: XRAnchor | null = null;
  private anchorGen = 0;
  private anchorPending = false;
  private placement = new THREE.Matrix4();
  private placedPos = new THREE.Vector3();
  private placedQ = new THREE.Quaternion();
  private floorY = 0;
  private correctAfter = 0;
  private wantStatus: XRStatus = 'scanning';
  private wantSince = 0;
  private camPos = new THREE.Vector3();
  private camFwd = new THREE.Vector3(0, 0, -1);
  private canPlace = false;

  constructor(private renderer: THREE.WebGLRenderer, private world: THREE.Group, scene: THREE.Scene) {
    const ring = new THREE.RingGeometry(0.07, 0.09, 40).rotateX(-Math.PI / 2);
    this.reticleMat = new THREE.MeshBasicMaterial({ color: COLOR_OK, transparent: true, opacity: 0.9 });
    this.reticle = new THREE.Mesh(ring, this.reticleMat);
    this.reticle.matrixAutoUpdate = false;
    this.reticle.visible = false;
    scene.add(this.reticle);
  }

  async detect() {
    try {
      this.supported = !!(navigator.xr && (await navigator.xr.isSessionSupported('immersive-ar')));
    } catch {
      this.supported = false;
    }
    return this.supported;
  }

  async start(overlay: HTMLElement) {
    if (!navigator.xr) return false;
    const session = await navigator.xr.requestSession('immersive-ar', {
      requiredFeatures: ['hit-test'],
      optionalFeatures: ['dom-overlay', 'anchors', 'local-floor', 'depth-sensing'],
      domOverlay: { root: overlay },
      // depth-sensing cần khai báo cấu hình; nếu không hỗ trợ thì bỏ qua
      depthSensing: { usagePreference: ['cpu-optimized'], dataFormatPreference: ['luminance-alpha'] },
    } as XRSessionInit);
    this.session = session;
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType('local');
    await this.renderer.xr.setSession(session);
    this.refSpace = this.renderer.xr.getReferenceSpace();
    const viewer = await session.requestReferenceSpace('viewer');
    this.sources = await this.createSources(session, viewer);
    this.resetPlacement();
    // bấm nút trong HUD không được tính là chạm để đặt sàn
    overlay.addEventListener('beforexrselect', (e) => {
      if ((e.target as Element | null)?.closest?.('button, a, input, label, .sheet-backdrop, .ob')) e.preventDefault();
    });
    session.addEventListener('select', () => this.onSelect());
    session.addEventListener('end', () => {
      for (const s of this.sources) s.source.cancel();
      this.sources = [];
      this.dropAnchor();
      this.session = null;
      this.renderer.xr.enabled = false;
      this.world.matrixAutoUpdate = true;
      this.world.matrix.identity();
      this.world.position.set(0, 0, 0);
      this.world.quaternion.identity();
      this.world.visible = true;
      this.reticle.visible = false;
      this.onEnd?.();
    });
    return true;
  }

  private async createSources(session: XRSession, viewer: XRReferenceSpace) {
    const make = ([x, y]: [number, number]) => {
      const offsetRay = new XRRay({ x: 0, y: 0, z: 0, w: 1 }, { x, y, z: -1, w: 0 });
      return Promise.resolve(session.requestHitTestSource?.({ space: viewer, offsetRay })).catch(() => undefined);
    };
    const found = await Promise.all(RAYS.map(make));
    return found.flatMap((source, i) => source ? [{ source, center: i === 0 }] : []);
  }

  /** Quay lại bước tìm sàn, quên toàn bộ những gì đã quét. */
  private resetPlacement() {
    this.placed = false;
    this.canPlace = false;
    this.reticle.visible = false;
    this.detector.reset();
    this.dropAnchor();
    this.world.matrixAutoUpdate = false;
    this.world.visible = false;
    this.wantStatus = 'scanning';
    this.status = 'scanning';
    this.onStatus?.('scanning');
  }

  /** Người dùng tự yêu cầu đặt lại mặt sàn từ menu. */
  replace() {
    if (this.session) this.resetPlacement();
  }

  private onSelect() {
    if (this.placed) return;
    if (!this.canPlace || !this.reticle.visible) {
      if (this.status === 'notFloor') this.onRejected?.();
      return;
    }
    const yaw = Math.atan2(-this.camFwd.z, this.camFwd.x); // quay để +X phòng = hướng nhìn ngang
    this.placedPos.setFromMatrixPosition(this.reticle.matrix);
    this.placedQ.setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    this.floorY = this.placedPos.y;
    this.placed = true;
    this.applyPlacement();
    this.world.visible = true;
    this.reticle.visible = false;
    this.correctAfter = 0;
    this.setStatus('placed');
    this.onPlaced?.();
  }

  private applyPlacement() {
    this.placement.compose(this.placedPos, this.placedQ, new THREE.Vector3(1, 1, 1));
    this.world.matrix.copy(this.placement);
    this.world.matrixWorldNeedsUpdate = true;
    this.dropAnchor();
    this.anchorPending = true;
  }

  private dropAnchor() {
    this.anchorGen++;
    this.anchorPending = false;
    this.anchor?.delete?.();
    this.anchor = null;
  }

  private createAnchor(frame: XRFrame) {
    this.anchorPending = false;
    const gen = this.anchorGen;
    const { x, y, z } = this.placedPos;
    try {
      frame
        .createAnchor?.(new XRRigidTransform({ x, y, z }), this.refSpace!)
        ?.then((a) => {
          if (gen === this.anchorGen) this.anchor = a;
          else a.delete?.();
        })
        .catch(() => undefined);
    } catch {
      /* không có anchors: phòng vẫn đứng yên theo hệ 'local' */
    }
  }

  /** Gọi trong vòng lặp render khi đang ở phiên XR. */
  frame(frame: XRFrame | undefined, nowMs = performance.now()) {
    if (!frame || !this.refSpace) return;
    const t = nowMs / 1000;
    const pose = frame.getViewerPose(this.refSpace);
    if (!pose || pose.emulatedPosition) {
      this.canPlace = false;
      this.reticle.visible = false;
      return;
    }
    if (pose) {
      const { position: p, orientation: q } = pose.transform;
      this.camPos.set(p.x, p.y, p.z);
      this.camFwd.set(0, 0, -1).applyQuaternion(new THREE.Quaternion(q.x, q.y, q.z, q.w));
      this.detector.observeCamera(p.y, t);
    }
    const aim = this.scan(frame, t);
    if (!this.placed) this.updateReticle(aim, t);
    else {
      this.correctFloor(t);
      if (this.anchorPending) this.createAnchor(frame);
      if (this.anchor) {
        const a = frame.getPose(this.anchor.anchorSpace, this.refSpace);
        if (a) {
          const { x, y, z } = a.transform.position;
          this.world.matrix.compose(new THREE.Vector3(x, y, z), this.placedQ, new THREE.Vector3(1, 1, 1));
          this.world.matrixWorldNeedsUpdate = true;
        }
      }
    }
  }

  /** Chiều cao trần so với sàn (m) nếu ARCore đã thấy mặt phẳng trần, không thì null. */
  get ceilingHeight(): number | null {
    if (!this.placed || this.ceilingHits.length < 10) return null;
    const sorted = [...this.ceilingHits].sort((a, b) => a - b);
    const h = sorted[sorted.length >> 1] - this.floorY;
    return h >= 2.1 && h <= 7 ? h : null;
  }
  private ceilingHits: number[] = [];

  /** Nạp mọi điểm chạm cho bộ dò sàn; trả về điểm gần nhất của tia ngắm giữa màn hình. */
  private scan(frame: XRFrame, t: number): THREE.Vector3 | null {
    let aim: THREE.Vector3 | null = null;
    this.sources.forEach(({ source, center }) => {
      // Chỉ dùng bề mặt gần nhất: mặt bàn che sàn phía dưới.
      frame.getHitTestResults(source).slice(0, 1).forEach((hit) => {
        const pose = hit.getPose(this.refSpace!);
        if (!pose) return;
        const { position: p, orientation: q } = pose.transform;
        const normalY = 1 - 2 * (q.x * q.x + q.z * q.z); // trục Y của pose là pháp tuyến mặt phẳng
        if (Math.hypot(p.x - this.camPos.x, p.z - this.camPos.z) > MAX_HIT_RANGE) return;
        if (normalY < -0.92 && p.y > this.camPos.y + 0.3) {
          this.ceilingHits.push(p.y);
          if (this.ceilingHits.length > 60) this.ceilingHits.shift();
          return;
        }
        const flat = this.detector.addHit(p.y, normalY, t, p.x, p.z);
        if (center && flat) aim = new THREE.Vector3(p.x, p.y, p.z);
      });
    });
    return aim;
  }

  private updateReticle(aim: THREE.Vector3 | null, t: number) {
    const floor = this.detector.floorY;
    const kind = aim ? this.detector.classify(aim.y) : null;
    let at: THREE.Vector3 | null = null;
    let next: XRStatus = 'scanning';
    if (kind === 'raised') {
      at = aim;
      next = 'notFloor';
    } else if (kind === 'floor') {
      at = aim!.setY(floor!);
      next = 'ready';
    }
    // Quyền đặt dùng kết quả frame hiện tại, không dùng thông báo đã debounce.
    this.canPlace = next === 'ready';
    this.reticle.visible = !!at;
    if (at) this.reticle.matrix.makeTranslation(at.x, at.y, at.z);
    this.reticleMat.color.setHex(next === 'notFloor' ? COLOR_REJECT : COLOR_OK);
    if (next !== this.wantStatus) {
      this.wantStatus = next;
      this.wantSince = t;
    }
    if (t - this.wantSince >= STATUS_HOLD || next === 'ready') this.setStatus(next);
  }

  /** Đã đặt rồi mà giờ thấy sàn thật khác: tự đặt lại, giữ nguyên vị trí ngang và hướng. */
  private correctFloor(t: number) {
    if (t < this.correctAfter) return;
    const y = this.detector.confirmedFloorY;
    if (y === null) return;
    const diff = y - this.floorY;
    const far = diff < -FLOOR.correctBy;
    if (!far) return;
    this.floorY = this.placedPos.y = y;
    this.applyPlacement();
    if (far) {
      this.correctAfter = t + CORRECT_COOLDOWN;
      this.onFloorChanged?.();
    }
  }

  private setStatus(s: XRStatus) {
    this.wantStatus = s;
    if (s === this.status) return;
    this.status = s;
    this.onStatus?.(s);
  }

  end() {
    this.session?.end().catch(() => undefined);
  }
}
