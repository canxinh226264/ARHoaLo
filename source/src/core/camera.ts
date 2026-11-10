/**
 * Camera feed qua getUserMedia: camera sau (environment), hoặc camera trước (user) để chụp selfie.
 * Video hiển thị dạng object-fit: cover; module này giữ phép ánh xạ
 * toạ độ video ↔ màn hình để đặt landmark bàn tay và tính FOV hiển thị.
 */
export interface CoverLayout {
  vw: number;
  vh: number;
  sw: number;
  sh: number;
  scale: number;
  ox: number; // phần video bị cắt bên trái (px màn hình)
  oy: number;
}

export type CameraError = 'denied' | 'notfound' | 'insecure' | 'unsupported' | 'unknown';

export class CameraFeed {
  readonly video: HTMLVideoElement;
  stream: MediaStream | null = null;
  /** Video hiển thị lật gương còn lớp 3D thì không (webcam laptop). */
  mirrored = false;
  /**
   * Đang dùng camera trước của điện thoại. Khi đó trang lật cả video lẫn lớp 3D bằng CSS (body.selfie),
   * còn mọi phép tính (tay, nhận diện, chụp ảnh) vẫn dùng ảnh gốc chưa lật.
   */
  selfie = false;
  facing: 'environment' | 'user' = 'environment';
  ready = false;

  constructor(video: HTMLVideoElement) {
    this.video = video;
    video.setAttribute('playsinline', '');
    video.muted = true;
    video.autoplay = true;
  }

  /** Số camera của máy (0 nếu trình duyệt không cho biết). */
  async countCameras(): Promise<number> {
    try {
      const list = await navigator.mediaDevices.enumerateDevices();
      return list.filter((d) => d.kind === 'videoinput').length;
    } catch {
      return 0;
    }
  }

  /** Đổi camera trước ↔ sau. Không mở được camera mới thì mở lại camera cũ rồi báo lỗi. */
  async flip(): Promise<void> {
    const prev = this.facing;
    this.stop();
    try {
      await this.start(prev === 'user' ? 'environment' : 'user');
    } catch (e) {
      await this.start(prev).catch(() => undefined);
      throw e;
    }
  }

  async start(facing = this.facing): Promise<void> {
    if (!window.isSecureContext) throw 'insecure' as CameraError;
    if (!navigator.mediaDevices?.getUserMedia) throw 'unsupported' as CameraError;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: { ideal: facing },
          width: { ideal: 1280 },
          height: { ideal: 720 },
          frameRate: { ideal: 30, max: 30 },
        },
      });
    } catch (e: unknown) {
      const name = (e as { name?: string })?.name;
      if (name === 'NotAllowedError' || name === 'SecurityError') throw 'denied' as CameraError;
      if (name === 'NotFoundError' || name === 'OverconstrainedError') throw 'notfound' as CameraError;
      throw 'unknown' as CameraError;
    }
    this.video.srcObject = this.stream;
    await this.video.play().catch(() => undefined);
    await new Promise<void>((res) => {
      if (this.video.videoWidth) return res();
      this.video.addEventListener('loadedmetadata', () => res(), { once: true });
    });
    const track = this.stream.getVideoTracks()[0];
    const actual = track.getSettings().facingMode;
    const isTouch = matchMedia('(pointer: coarse)').matches;
    this.facing = facing;
    // điện thoại không báo hướng camera thì tin vào hướng đã xin
    this.selfie = isTouch && (actual === 'user' || (!actual && facing === 'user'));
    // webcam laptop: chỉ lật video cho tự nhiên như trước
    this.mirrored = !isTouch && (actual === 'user' || !actual);
    this.video.classList.toggle('mirrored', this.mirrored);
    this.ready = true;
  }

  stop() {
    this.stream?.getTracks().forEach((t) => t.stop());
    this.stream = null;
    this.ready = false;
  }

  layout(): CoverLayout {
    const sw = window.innerWidth;
    const sh = window.innerHeight;
    const vw = this.video.videoWidth || sw;
    const vh = this.video.videoHeight || sh;
    const scale = Math.max(sw / vw, sh / vh);
    return { vw, vh, sw, sh, scale, ox: (vw * scale - sw) / 2, oy: (vh * scale - sh) / 2 };
  }

  /** FOV dọc của phần video đang hiển thị trên màn hình (độ). */
  displayVFov(longEdgeFovDeg: number): number {
    const L = this.layout();
    const half = (longEdgeFovDeg * Math.PI) / 360;
    const longIsW = L.vw >= L.vh;
    const tanV = longIsW ? Math.tan(half) * (L.vh / L.vw) : Math.tan(half);
    const visibleFrac = L.sh / (L.vh * L.scale);
    return (2 * Math.atan(tanV * visibleFrac) * 180) / Math.PI;
  }

  /** Tiêu cự camera tính theo pixel của khung hình video (cùng giả định FOV với camera 3D). */
  videoFocalPx(longEdgeFovDeg: number): number {
    const vw = this.video.videoWidth || 1280;
    const vh = this.video.videoHeight || 720;
    const half = (longEdgeFovDeg * Math.PI) / 360;
    const tanV = vw >= vh ? Math.tan(half) * (vh / vw) : Math.tan(half);
    return vh / 2 / tanV;
  }

  /** Toạ độ chuẩn hoá của video (0..1) → NDC màn hình (-1..1). */
  videoToNdc(u: number, v: number, L = this.layout()): [number, number] {
    const uu = this.mirrored ? 1 - u : u;
    const sx = uu * L.vw * L.scale - L.ox;
    const sy = v * L.vh * L.scale - L.oy;
    return [(sx / L.sw) * 2 - 1, 1 - (sy / L.sh) * 2];
  }

  /** Ảnh thu nhỏ w × h của đúng phần video đang hiển thị, ô (0,0) ở góc trên trái màn hình. */
  private grids = new Map<number, HTMLCanvasElement>();
  sampleGrid(w: number, h: number): Uint8ClampedArray | null {
    if (!this.ready) return null;
    let grid = this.grids.get(w * 65536 + h);
    if (!grid) {
      grid = document.createElement('canvas');
      grid.width = w;
      grid.height = h;
      this.grids.set(w * 65536 + h, grid);
    }
    const ctx = grid.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;
    const L = this.layout();
    ctx.imageSmoothingQuality = 'high';
    ctx.save();
    if (this.mirrored) {
      ctx.translate(w, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(this.video, L.ox / L.scale, L.oy / L.scale, L.sw / L.scale, L.sh / L.scale, 0, 0, w, h);
    ctx.restore();
    return ctx.getImageData(0, 0, w, h).data;
  }

  /** Ảnh JPEG (base64, không có tiền tố data:) của phần video đang hiển thị, cạnh dài tối đa `maxSide`. */
  captureJpeg(maxSide = 768, quality = 0.72): string | null {
    if (!this.ready) return null;
    const L = this.layout();
    const sw = L.sw / L.scale, sh = L.sh / L.scale;
    const k = Math.min(1, maxSide / Math.max(sw, sh));
    const c = document.createElement('canvas');
    c.width = Math.round(sw * k);
    c.height = Math.round(sh * k);
    const ctx = c.getContext('2d');
    if (!ctx) return null;
    ctx.drawImage(this.video, L.ox / L.scale, L.oy / L.scale, sw, sh, 0, 0, c.width, c.height);
    return c.toDataURL('image/jpeg', quality).split(',')[1] ?? null;
  }

  /** Độ sáng trung bình + tông màu từ vài pixel (gọi ~2 lần/giây). */
  private probe?: HTMLCanvasElement;
  sampleLight(): { lum: number; r: number; g: number; b: number } | null {
    if (!this.ready) return null;
    if (!this.probe) {
      this.probe = document.createElement('canvas');
      this.probe.width = 8;
      this.probe.height = 8;
    }
    const ctx = this.probe.getContext('2d', { willReadFrequently: true });
    if (!ctx) return null;
    ctx.drawImage(this.video, 0, 0, 8, 8);
    const d = ctx.getImageData(0, 0, 8, 8).data;
    let r = 0, g = 0, b = 0;
    for (let i = 0; i < d.length; i += 4) {
      r += d[i]; g += d[i + 1]; b += d[i + 2];
    }
    const n = d.length / 4;
    r /= n * 255; g /= n * 255; b /= n * 255;
    return { lum: 0.2126 * r + 0.7152 * g + 0.0722 * b, r, g, b };
  }
}
