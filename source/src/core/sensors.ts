import * as THREE from 'three';

/**
 * Hướng điện thoại từ DeviceOrientation (3DoF) + bộ đếm bước từ DeviceMotion.
 * - iOS 13+: phải gọi requestPermission() trong sự kiện bấm nút.
 * - Không có cảm biến (máy tính, bị từ chối): kéo màn hình để nhìn quanh.
 * Hệ toạ độ thế giới: +Y lên. Sau khi "căn hướng", hướng nhìn ban đầu = +X (vào hành lang).
 */
type PermState = 'granted' | 'denied' | 'unsupported';

const zee = new THREE.Vector3(0, 0, 1);
const q1 = new THREE.Quaternion(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5));
const euler = new THREE.Euler();
const q0 = new THREE.Quaternion();

export class Sensors {
  /** Quaternion hướng camera trong hệ toạ độ phòng (đã cộng yaw căn chỉnh). */
  readonly quaternion = new THREE.Quaternion();
  /** Tốc độ quay (rad/s) – dùng cho parallax và phát hiện lắc. */
  readonly angularVel = new THREE.Vector3();
  hasOrientation = false;
  permission: PermState = 'unsupported';
  dragMode = false;
  /** Đặt true khi cử chỉ trên màn hình đang dùng để xoay hiện vật 3D. */
  dragBlocked = false;

  private raw = new THREE.Quaternion();
  private yawOffset = 0;
  private pendingRecenter = true;
  private lastEventAt = 0;
  private alpha = 0;
  private beta = 90;
  private gamma = 0;
  private dragYaw = -Math.PI / 2;
  private dragPitch = 0;
  private prevQ = new THREE.Quaternion();

  // bước chân
  steps = 0;
  private accLP = 9.81;
  private accBase = 9.81;
  private lastStepAt = 0;
  private stepArmed = true;
  onStep?: () => void;

  async requestPermission(): Promise<PermState> {
    const DOE = window.DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> } | undefined;
    const DME = window.DeviceMotionEvent as unknown as { requestPermission?: () => Promise<string> } | undefined;
    try {
      if (DOE && typeof DOE.requestPermission === 'function') {
        const r = await DOE.requestPermission();
        if (DME && typeof DME.requestPermission === 'function') await DME.requestPermission().catch(() => 'denied');
        this.permission = r === 'granted' ? 'granted' : 'denied';
      } else if ('DeviceOrientationEvent' in window) {
        this.permission = 'granted';
      }
    } catch {
      this.permission = 'denied';
    }
    if (this.permission === 'granted') this.listen();
    return this.permission;
  }

  private listen() {
    window.addEventListener('deviceorientation', (e) => {
      if (e.alpha == null && e.beta == null) return;
      this.alpha = e.alpha ?? 0;
      this.beta = e.beta ?? 0;
      this.gamma = e.gamma ?? 0;
      this.lastEventAt = performance.now();
      this.hasOrientation = true;
    });
    window.addEventListener('devicemotion', (e) => {
      const a = e.accelerationIncludingGravity;
      if (!a || a.x == null) return;
      const mag = Math.hypot(a.x ?? 0, a.y ?? 0, a.z ?? 0);
      this.detectStep(mag);
    });
  }

  /** Phát hiện bước: đỉnh gia tốc vượt nền ~1.2 m/s², cách nhau ≥ 320 ms. */
  private detectStep(mag: number) {
    this.accLP += (mag - this.accLP) * 0.35;
    this.accBase += (mag - this.accBase) * 0.02;
    const d = this.accLP - this.accBase;
    const now = performance.now();
    if (this.stepArmed && d > 1.2 && now - this.lastStepAt > 320) {
      this.steps++;
      this.lastStepAt = now;
      this.stepArmed = false;
      this.onStep?.();
    } else if (d < 0.3) this.stepArmed = true;
  }

  /** Bật chế độ kéo để nhìn (máy không có cảm biến). */
  enableDrag(el: HTMLElement) {
    this.dragMode = true;
    let id: number | null = null;
    let lx = 0, ly = 0;
    el.addEventListener('pointerdown', (e) => {
      if (this.hasOrientation || this.dragBlocked) return;
      id = e.pointerId;
      lx = e.clientX;
      ly = e.clientY;
    });
    window.addEventListener('pointermove', (e) => {
      if (id !== e.pointerId) return;
      this.dragYaw += (e.clientX - lx) * 0.005;
      this.dragPitch = THREE.MathUtils.clamp(this.dragPitch + (e.clientY - ly) * 0.005, -1.45, 1.45);
      lx = e.clientX;
      ly = e.clientY;
    });
    window.addEventListener('pointerup', (e) => {
      if (id === e.pointerId) id = null;
    });
  }

  /** Đặt pitch trực tiếp (dùng cho nút thử nghiệm / onboarding trên máy tính). */
  setDragPitch(rad: number) {
    this.dragPitch = rad;
  }

  /** Căn lại: hướng nhìn hiện tại thành +X của phòng (hoặc hướng cho trước). */
  recenter(targetHeading = 0) {
    this.pendingRecenter = true;
    this.recenterHeading = targetHeading;
    if (!this.hasOrientation) this.dragYaw = -Math.PI / 2 - targetHeading;
  }
  private recenterHeading = 0;

  get stale() {
    return this.hasOrientation && performance.now() - this.lastEventAt > 2000;
  }

  update(dt: number) {
    this.prevQ.copy(this.quaternion);
    if (this.hasOrientation) {
      const d2r = Math.PI / 180;
      const orient = ((screen.orientation?.angle ?? (window as unknown as { orientation?: number }).orientation ?? 0) as number) * d2r;
      euler.set(this.beta * d2r, this.alpha * d2r, -this.gamma * d2r, 'YXZ');
      this.raw.setFromEuler(euler).multiply(q1).multiply(q0.setFromAxisAngle(zee, -orient));
      if (this.pendingRecenter) {
        const f = new THREE.Vector3(0, 0, -1).applyQuaternion(this.raw);
        // xoay quanh Y sao cho hướng nhìn ngang = +X rồi cộng heading mong muốn
        this.yawOffset = Math.atan2(f.z, f.x) - this.recenterHeading;
        this.pendingRecenter = false;
      }
      q0.setFromAxisAngle(new THREE.Vector3(0, 1, 0), this.yawOffset);
      this.quaternion.copy(q0).multiply(this.raw);
    } else {
      this.pendingRecenter = false;
      euler.set(this.dragPitch, this.dragYaw, 0, 'YXZ');
      this.quaternion.setFromEuler(euler);
    }
    // vận tốc góc xấp xỉ
    if (dt > 0) {
      const dq = this.prevQ.clone().invert().multiply(this.quaternion);
      const ang = 2 * Math.acos(THREE.MathUtils.clamp(dq.w, -1, 1));
      const s = Math.sqrt(1 - dq.w * dq.w) || 1;
      this.angularVel.set(dq.x / s, dq.y / s, dq.z / s).multiplyScalar(Math.min(ang / dt, 20));
    }
  }

  /** Góc ngẩng của hướng nhìn (độ): +90 nhìn thẳng lên, −90 nhìn xuống. */
  pitchDeg(): number {
    const f = new THREE.Vector3(0, 0, -1).applyQuaternion(this.quaternion);
    return (Math.asin(THREE.MathUtils.clamp(f.y, -1, 1)) * 180) / Math.PI;
  }
}
