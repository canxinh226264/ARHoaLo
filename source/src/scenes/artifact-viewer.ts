import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

/**
 * Hiện vật 3D hiện ra trên ảnh in và tương tác bằng màn hình cảm ứng.
 *
 *  camera ─ anchor (ma trận từ ArtifactTracker, 1 đơn vị = bề rộng ảnh)
 *            └ stage (đẩy ra trước ảnh, nghiêng nhẹ như góc chụp ảnh)
 *                └ spin (xoay / phóng to theo ngón tay)
 *                    └ model (đã chuẩn hoá: cạnh lớn nhất = 1)
 *
 *  - Kéo 1 ngón: xoay. Chụm/mở 2 ngón: phóng to/thu nhỏ, vặn 2 ngón: xoay ngang.
 *  - Chạm 2 lần: đặt lại góc nhìn.
 *  - "Xem kỹ": tách model ra giữa màn hình, không cần giữ camera hướng vào ảnh.
 *  - Mất dấu ảnh: model đứng yên tại chỗ trong phòng thêm 2,5 s rồi mờ đi.
 */
export interface ArtifactItem {
  id: string;
  targetIndex: number;
  model: string;
  physicalWidth: number;
  size: number;
  offset: [number, number, number];
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
}

type Mode = 'hidden' | 'anchored' | 'frozen' | 'inspect';

export class ArtifactViewer {
  mode: Mode = 'hidden';
  active: ArtifactItem | null = null;
  reduceMotion = false;
  onChange?: (item: ArtifactItem | null, mode: Mode) => void;

  private anchor = new THREE.Group();
  private stage = new THREE.Group();
  private spin = new THREE.Group();
  private inspectHolder = new THREE.Group();
  private lights = new THREE.Group();
  private models = new Map<string, THREE.Object3D>();
  private loading = new Map<string, Promise<THREE.Object3D | null>>();
  private envMap: THREE.Texture | null = null;
  private appear = 0; // 0..1 hoạt ảnh hiện
  private targetAppear = 0;
  private frozenAt = 0;
  private rotX = 0;
  private rotY = 0;
  private velY = 0;
  private velX = 0;
  private zoom = 1;
  private lastTouch = 0;
  private pointers = new Map<number, { x: number; y: number }>();
  private pinchDist = 0;
  private pinchAngle = 0;
  private tapStart = { t: 0, x: 0, y: 0 };
  private lastTap = 0;
  private envIntensity = 1;

  constructor(
    private scene: THREE.Scene,
    private camera: THREE.PerspectiveCamera,
    private renderer: THREE.WebGLRenderer,
    private items: ArtifactItem[],
  ) {
    this.anchor.matrixAutoUpdate = false;
    this.anchor.add(this.stage);
    this.stage.add(this.spin);
    this.anchor.visible = false;
    camera.add(this.anchor);
    this.inspectHolder.position.set(0, 0.035, -0.45); // hơi cao hơn tâm để không bị thẻ thông tin che
    camera.add(this.inspectHolder);
    // ánh sáng chỉ tác động lên vật liệu PBR (hiện vật); hoa dùng shader riêng
    const hemi = new THREE.HemisphereLight(0xfff6ea, 0x6b5a4a, 1.1);
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(0.6, 1, 0.8);
    this.lights.add(hemi, key);
    camera.add(this.lights);
  }

  private ensureEnv() {
    if (this.envMap) return this.envMap;
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.envMap = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
    pmrem.dispose();
    return this.envMap;
  }

  /** Tải trước model (nhỏ, ~350 KB mỗi cái) để lúc nhận ra ảnh hiện ngay. */
  preload() {
    for (const it of this.items) this.load(it);
  }

  private load(it: ArtifactItem): Promise<THREE.Object3D | null> {
    const hit = this.loading.get(it.id);
    if (hit) return hit;
    const loader = new GLTFLoader();
    loader.setMeshoptDecoder(MeshoptDecoder);
    const url = new URL(it.model, document.baseURI).href;
    const env = this.ensureEnv();
    const p = loader
      .loadAsync(url)
      .then((g) => {
        const root = g.scene;
        // chuẩn hoá: tâm ở gốc, cạnh lớn nhất = 1
        const box = new THREE.Box3().setFromObject(root);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        const s = 1 / Math.max(size.x, size.y, size.z);
        const wrap = new THREE.Group();
        root.position.sub(center);
        wrap.add(root);
        wrap.scale.setScalar(s);
        root.traverse((o) => {
          const m = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
          if (m && 'envMap' in m) {
            m.envMap = env;
            m.envMapIntensity = 0.9;
            m.needsUpdate = true;
          }
          o.renderOrder = 4;
        });
        this.models.set(it.id, wrap);
        return wrap as THREE.Object3D;
      })
      .catch((e) => {
        console.warn('[artifact] không tải được model', it.model, e);
        return null;
      });
    this.loading.set(it.id, p);
    return p;
  }

  /** Tracker nhận ra ảnh. */
  async show(targetIndex: number) {
    const it = this.items.find((x) => x.targetIndex === targetIndex);
    if (!it) return;
    if (this.mode === 'inspect') return; // đang xem kỹ thì không đổi
    const model = await this.load(it);
    if (!model) return;
    if (this.active?.id !== it.id) {
      this.spin.clear();
      this.spin.add(model);
      this.resetView();
      this.appear = 0;
      this.active = it;
    }
    if (this.anchor.parent !== this.camera) this.camera.add(this.anchor);
    this.stage.position.set(...it.offset);
    this.stage.rotation.set(0.32, 0, 0); // nghiêng như góc chụp từ trên xuống
    this.stage.scale.setScalar(it.size);
    this.anchor.visible = true;
    this.targetAppear = 1;
    this.setMode('anchored');
  }

  /** Tracker mất ảnh: giữ model đứng yên trong phòng một lúc. */
  lose(cameraWorld: THREE.Matrix4, anchorInCamera: THREE.Matrix4) {
    if (this.mode !== 'anchored') return;
    this.anchor.matrix.multiplyMatrices(cameraWorld, anchorInCamera);
    this.scene.add(this.anchor);
    this.frozenAt = performance.now();
    this.setMode('frozen');
  }

  inspect() {
    if (!this.active) return;
    this.inspectHolder.add(this.spin);
    this.spin.position.set(0, 0, 0);
    // vừa ~60% bề ngang màn hình ở khoảng cách 0,45 m (model đã chuẩn hoá cạnh lớn nhất = 1)
    const cam = this.camera;
    const visibleW = 2 * Math.tan(THREE.MathUtils.degToRad(cam.fov / 2)) * 0.45 * cam.aspect;
    this.inspectHolder.scale.setScalar(Math.min(0.2, visibleW * 0.6));
    this.inspectHolder.rotation.set(0.25, 0, 0);
    this.anchor.visible = false;
    this.appear = Math.min(this.appear, 0.3);
    this.targetAppear = 1;
    this.setMode('inspect');
  }

  close() {
    this.stage.add(this.spin);
    this.targetAppear = 0;
    this.setMode('hidden');
  }

  resetView() {
    this.rotX = 0;
    this.rotY = 0;
    this.velX = this.velY = 0;
    this.zoom = 1;
  }

  get visible() {
    return this.mode !== 'hidden';
  }

  private setMode(m: Mode) {
    if (m === this.mode) return;
    this.mode = m;
    this.onChange?.(m === 'hidden' ? null : this.active, m);
  }

  setLight(lum: number) {
    this.envIntensity = THREE.MathUtils.lerp(0.55, 1.1, THREE.MathUtils.clamp(lum / 0.5, 0, 1));
  }

  // ---------------------------------------------------------------- cử chỉ chạm
  attachGestures(el: HTMLElement, isEnabled: () => boolean) {
    el.addEventListener('pointerdown', (e) => {
      if (!isEnabled() || !this.visible) return;
      this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
      el.setPointerCapture?.(e.pointerId);
      if (this.pointers.size === 1) this.tapStart = { t: performance.now(), x: e.clientX, y: e.clientY };
      if (this.pointers.size === 2) this.pinchInit();
      this.velX = this.velY = 0;
    });
    el.addEventListener('pointermove', (e) => {
      const p = this.pointers.get(e.pointerId);
      if (!p) return;
      const dx = e.clientX - p.x, dy = e.clientY - p.y;
      p.x = e.clientX;
      p.y = e.clientY;
      this.lastTouch = performance.now();
      if (this.pointers.size === 1) {
        const k = 0.011;
        this.rotY += dx * k;
        this.rotX = THREE.MathUtils.clamp(this.rotX + dy * k, -1.2, 1.2);
        this.velY = dx * k * 60;
        this.velX = dy * k * 60;
      } else if (this.pointers.size === 2) {
        const [a, b] = [...this.pointers.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        const ang = Math.atan2(b.y - a.y, b.x - a.x);
        if (this.pinchDist > 0) this.zoom = THREE.MathUtils.clamp(this.zoom * (d / this.pinchDist), 0.5, 3);
        let da = ang - this.pinchAngle;
        if (da > Math.PI) da -= Math.PI * 2;
        if (da < -Math.PI) da += Math.PI * 2;
        this.rotY -= da;
        this.pinchDist = d;
        this.pinchAngle = ang;
      }
    });
    const up = (e: PointerEvent) => {
      if (!this.pointers.has(e.pointerId)) return;
      this.pointers.delete(e.pointerId);
      if (this.pointers.size === 1) this.pinchInit();
      const t = performance.now();
      const moved = Math.hypot(e.clientX - this.tapStart.x, e.clientY - this.tapStart.y);
      if (this.pointers.size === 0 && t - this.tapStart.t < 250 && moved < 10) {
        if (t - this.lastTap < 320) {
          this.resetView();
          this.lastTap = 0;
        } else this.lastTap = t;
      }
    };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
  }

  private pinchInit() {
    const ps = [...this.pointers.values()];
    if (ps.length < 2) {
      this.pinchDist = 0;
      return;
    }
    this.pinchDist = Math.hypot(ps[0].x - ps[1].x, ps[0].y - ps[1].y);
    this.pinchAngle = Math.atan2(ps[1].y - ps[0].y, ps[1].x - ps[0].x);
  }

  // ---------------------------------------------------------------- khung hình
  update(dt: number, anchorInCamera: THREE.Matrix4 | null) {
    if (this.mode === 'anchored' && anchorInCamera) this.anchor.matrix.copy(anchorInCamera);
    if (this.mode === 'frozen' && performance.now() - this.frozenAt > 2500) {
      this.targetAppear = 0;
      if (this.appear < 0.02) {
        this.camera.add(this.anchor);
        this.anchor.visible = false;
        this.setMode('hidden');
      }
    }
    // hoạt ảnh hiện / ẩn
    const sp = this.reduceMotion ? 12 : 5;
    this.appear += (this.targetAppear - this.appear) * Math.min(1, dt * sp);
    if (this.mode === 'hidden' && this.appear < 0.02) {
      this.anchor.visible = false;
      this.spin.visible = false;
      return;
    }
    this.spin.visible = true;
    // quán tính khi thả tay + tự xoay chậm khi để yên
    const touching = this.pointers.size > 0;
    if (!touching) {
      this.rotY += this.velY * dt;
      this.rotX = THREE.MathUtils.clamp(this.rotX + this.velX * dt, -1.2, 1.2);
      const damp = Math.exp(-dt * 3.5);
      this.velY *= damp;
      this.velX *= damp;
      if (!this.reduceMotion && performance.now() - this.lastTouch > 3000 && Math.abs(this.velY) < 0.05) this.rotY += dt * 0.3;
    }
    const e = easeOutBack(THREE.MathUtils.clamp(this.appear, 0, 1));
    this.spin.rotation.set(this.rotX, this.rotY, 0, 'XYZ');
    this.spin.scale.setScalar(Math.max(0.001, e * this.zoom));
    this.spin.position.y = this.mode === 'inspect' ? 0 : (1 - this.appear) * -0.25;
    for (const m of this.models.values())
      m.traverse((o) => {
        const mat = (o as THREE.Mesh).material as THREE.MeshStandardMaterial | undefined;
        if (mat && 'envMapIntensity' in mat) mat.envMapIntensity = this.envIntensity;
      });
  }
}

function easeOutBack(x: number) {
  const c1 = 1.4, c3 = c1 + 1;
  return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
}
