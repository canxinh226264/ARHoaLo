import { compassFromAbsolute, toEnu } from './geo';

/**
 * Đọc GPS (watchPosition) và la bàn của điện thoại.
 *  - Android Chrome: sự kiện deviceorientationabsolute (alpha theo hướng Bắc).
 *  - iOS Safari: webkitCompassHeading trong sự kiện deviceorientation (đã xin quyền chuyển động từ trước).
 * Vị trí trả về theo mét Đông/Bắc so với điểm đến.
 */
export type GeoError = 'denied' | 'unavailable' | 'insecure';

export interface GeoFix {
  e: number;
  n: number;
  accuracy: number;
}

const D2R = Math.PI / 180;
const GPS_OPTIONS: PositionOptions = { enableHighAccuracy: true, maximumAge: 0, timeout: 30000 };
/** Quá chừng này (ms) không có vị trí mới thì chủ động hỏi: nhiều máy ngừng báo khi đứng yên. */
const GPS_STALE = 4000;

export class GeoTracker {
  onFix?: (f: GeoFix) => void;
  onError?: (e: GeoError) => void;
  /** Hướng la bàn của camera (radian) và độ tin cậy (độ, càng nhỏ càng tốt; NaN nếu không rõ). */
  compass: number | null = null;
  compassAccuracy = NaN;
  compassAt = 0;
  /** Thời điểm có vị trí gần nhất (performance.now()), 0 khi chưa có. */
  fixAt = 0;
  private watch: number | null = null;
  private staleTimer = 0;
  private polling = false;
  private onVisible = () => {
    if (!document.hidden) this.watchGps();
  };
  private onAbs = (e: Event) => this.absolute(e as DeviceOrientationEvent);
  private onRel = (e: Event) => this.webkit(e as DeviceOrientationEvent & { webkitCompassHeading?: number; webkitCompassAccuracy?: number });

  constructor(private lat0: number, private lng0: number) {}

  /** Gọi trong cú bấm của người dùng (iOS chỉ hỏi quyền khi có cử chỉ). */
  start() {
    this.stop();
    if (!window.isSecureContext) return this.onError?.('insecure');
    if (!navigator.geolocation) return this.onError?.('unavailable');
    this.watchGps();
    this.staleTimer = window.setInterval(() => this.pollIfStale(), 1000);
    document.addEventListener('visibilitychange', this.onVisible);
    window.addEventListener('deviceorientationabsolute', this.onAbs);
    window.addEventListener('deviceorientation', this.onRel);
  }

  stop() {
    if (this.watch !== null) navigator.geolocation?.clearWatch(this.watch);
    this.watch = null;
    clearInterval(this.staleTimer);
    document.removeEventListener('visibilitychange', this.onVisible);
    window.removeEventListener('deviceorientationabsolute', this.onAbs);
    window.removeEventListener('deviceorientation', this.onRel);
    this.compass = null;
    this.fixAt = 0;
  }

  /** Cũng gọi khi quay lại app: có trình duyệt ngừng hẳn việc theo dõi lúc bị ẩn. */
  private watchGps() {
    if (this.watch !== null) navigator.geolocation.clearWatch(this.watch);
    this.watch = navigator.geolocation.watchPosition((p) => this.fix(p), (err) => this.fail(err), GPS_OPTIONS);
  }

  private fix(p: GeolocationPosition) {
    const { e, n } = toEnu(p.coords.latitude, p.coords.longitude, this.lat0, this.lng0);
    this.fixAt = performance.now();
    this.onFix?.({ e, n, accuracy: p.coords.accuracy || 50 });
  }

  /** Mất tín hiệu tạm thời thì việc theo dõi vẫn chạy tiếp, nên chỉ báo lỗi khi chưa từng có vị trí. */
  private fail(err: GeolocationPositionError) {
    if (err.code === err.PERMISSION_DENIED) this.onError?.('denied');
    else if (!this.fixAt) this.onError?.('unavailable');
  }

  /** Chưa có vị trí đầu tiên thì không hỏi thêm, tránh làm chậm lúc GPS đang bắt tín hiệu. */
  private pollIfStale() {
    if (this.polling || !this.fixAt || document.hidden || performance.now() - this.fixAt < GPS_STALE) return;
    this.polling = true;
    navigator.geolocation.getCurrentPosition(
      (p) => {
        this.polling = false;
        if (this.watch !== null) this.fix(p);
      },
      () => {
        this.polling = false;
      },
      GPS_OPTIONS,
    );
  }

  private screenAngle() {
    return ((screen.orientation?.angle ?? (window as unknown as { orientation?: number }).orientation ?? 0) as number) * D2R;
  }

  private absolute(e: DeviceOrientationEvent) {
    if (e.alpha == null || e.beta == null || e.gamma == null) return;
    this.compass = compassFromAbsolute(e.alpha, e.beta, e.gamma, this.screenAngle());
    this.compassAccuracy = NaN;
    this.compassAt = performance.now();
  }

  private webkit(e: DeviceOrientationEvent & { webkitCompassHeading?: number; webkitCompassAccuracy?: number }) {
    const h = e.webkitCompassHeading;
    if (typeof h !== 'number' || Number.isNaN(h)) return;
    const acc = e.webkitCompassAccuracy ?? NaN;
    if (acc < 0) return; // iOS báo la bàn chưa hiệu chỉnh
    this.compass = h * D2R;
    this.compassAccuracy = acc;
    this.compassAt = performance.now();
  }
}
