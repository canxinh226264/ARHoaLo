import * as THREE from 'three';
import type { CameraFeed } from '../core/camera';
import type { Controller } from '../vendor/mindar/mindar-image.prod.js';

/**
 * Nhận diện ảnh hiện vật bằng MindAR (image target), dùng CHUNG camera feed của app.
 *
 * Khác cách dùng mặc định của MindAR:
 *  - Không để MindAR tự chạy mỗi khung hình: tự điều nhịp ~8 lần/giây khi đang tìm,
 *    ~20 lần/giây khi đang bám, tạm dừng khi app bảo (đang nhận diện tay, đang xem kỹ…).
 *  - Ghi đè thông số camera (tiêu cự) của MindAR bằng đúng FOV của camera 3D trong app,
 *    để model nằm khớp lên ảnh thay vì lệch (MindAR mặc định giả định FOV dọc 45°).
 * Đầu ra: ma trận đặt mốc trong HỆ TOẠ ĐỘ CAMERA (đơn vị mét, tâm ảnh là gốc,
 * 1 đơn vị cục bộ = bề rộng ảnh in), gắn thẳng làm con của camera Three.js.
 */
export interface ArtifactTarget {
  targetIndex: number;
  physicalWidth: number;
}

export type TrackerStatus = 'off' | 'loading' | 'ready' | 'error';

export class ArtifactTracker {
  status: TrackerStatus = 'off';
  paused = false;
  /** Chỉ số mốc đang bám, −1 = không thấy. */
  current = -1;
  /** Số lần chạy nhận diện / số lần khớp (để gỡ lỗi qua ?debug). */
  stats = { frames: 0, matches: 0, tracks: 0, err: '' };
  /** Ma trận mốc trong hệ camera (đã làm mượt). */
  readonly matrix = new THREE.Matrix4();
  onFound?: (targetIndex: number) => void;
  onLost?: (targetIndex: number) => void;

  private controller: Controller | null = null;
  private running = false;
  private dims: [number, number][] = [];
  private mvt: number[][] | null = null;
  private trackIdx = -1;
  private warm = 0;
  private miss = 0;
  private showing = -1;
  private raw = new THREE.Matrix4();
  private hasPose = false;
  private pos = new THREE.Vector3();
  private quat = new THREE.Quaternion();
  private scl = new THREE.Vector3();
  private tPos = new THREE.Vector3();
  private tQuat = new THREE.Quaternion();
  private tScl = new THREE.Vector3();

  constructor(
    private feed: CameraFeed,
    private targets: ArtifactTarget[],
    private targetsUrl: string,
    private longEdgeFovDeg: number,
  ) {}

  async start() {
    if (this.status === 'loading' || this.status === 'ready') return;
    if (!this.feed.ready) return;
    this.status = 'loading';
    try {
      const { Controller } = await import('../vendor/mindar/mindar-image.prod.js');
      const v = this.feed.video;
      const w = v.videoWidth, h = v.videoHeight;
      // MindAR vẽ khung hình bằng video.width/height (thuộc tính HTML), không phải videoWidth
      v.width = w;
      v.height = h;
      const c = new Controller({ inputWidth: w, inputHeight: h, maxTrack: 1 });
      const f = this.feed.videoFocalPx(this.longEdgeFovDeg);
      c.projectionTransform = [
        [f, 0, w / 2],
        [0, f, h / 2],
        [0, 0, 1],
      ];
      const url = new URL(this.targetsUrl, document.baseURI).href;
      const { dimensions } = await c.addImageTargets(url);
      this.dims = dimensions;
      c.dummyRun(v); // dựng sẵn shader GPU (lần đầu chậm)
      this.controller = c;
      this.status = 'ready';
      this.loop();
    } catch (e) {
      console.warn('[artifact] không khởi động được nhận diện ảnh', e);
      this.status = 'error';
    }
  }

  stop() {
    this.running = false;
  }

  private async loop() {
    if (this.running) return;
    this.running = true;
    const c = this.controller!;
    const all = this.targets.map((t) => t.targetIndex);
    let last = 0;
    while (this.running) {
      const tracking = this.trackIdx >= 0;
      const gap = tracking ? 50 : 125;
      await new Promise<void>((r) => requestAnimationFrame(() => r()));
      const now = performance.now();
      if (this.paused || !this.feed.ready || document.hidden || now - last < gap) continue;
      last = now;
      const v = this.feed.video;
      if (v.readyState < 2) continue;
      if (v.width !== v.videoWidth) {
        v.width = v.videoWidth;
        v.height = v.videoHeight;
      }
      let inputT: { dispose(): void } | null = null;
      try {
        inputT = c.inputLoader.loadInput(v);
        this.stats.frames++;
        if (this.trackIdx < 0) {
          const r = await c._detectAndMatch(inputT, all);
          if (r.targetIndex !== -1) {
            this.stats.matches++;
            this.trackIdx = r.targetIndex;
            this.mvt = r.modelViewTransform;
            this.warm = 0;
          }
        }
        if (this.trackIdx >= 0 && this.mvt) {
          const m = await c._trackAndUpdate(inputT, this.mvt, this.trackIdx);
          if (m) {
            this.stats.tracks++;
            this.mvt = m;
            this.miss = 0;
            this.warm++;
            this.updateMatrix(c._glModelViewMatrix(m, this.trackIdx), this.trackIdx);
            if (this.showing !== this.trackIdx && this.warm >= 3) {
              this.showing = this.trackIdx;
              this.current = this.trackIdx;
              this.hasPose = false;
              this.onFound?.(this.trackIdx);
            }
          } else {
            this.trackIdx = -1;
            this.mvt = null;
          }
        }
        if (this.trackIdx < 0 && this.showing >= 0) {
          this.miss++;
          if (this.miss > 4) {
            const lost = this.showing;
            this.showing = -1;
            this.current = -1;
            this.onLost?.(lost);
          }
        }
      } catch (e) {
        console.warn('[artifact]', e);
        this.stats.err = String(e);
      } finally {
        inputT?.dispose();
      }
    }
  }

  /** gl modelView (đơn vị pixel ảnh mốc) → ma trận hệ camera, đơn vị mét, gốc ở tâm ảnh. */
  private updateMatrix(gl: number[], idx: number) {
    const [mw, mh] = this.dims[idx];
    const t = this.targets.find((x) => x.targetIndex === idx);
    const k = (t?.physicalWidth ?? 0.3) / mw;
    const post = new THREE.Matrix4().compose(
      new THREE.Vector3(mw / 2, mh / 2, 0),
      new THREE.Quaternion(),
      new THREE.Vector3(mw, mw, mw),
    );
    this.raw.fromArray(gl).premultiply(new THREE.Matrix4().makeScale(k, k, k)).multiply(post);
    if (this.feed.mirrored) {
      const F = new THREE.Matrix4().makeScale(-1, 1, 1);
      this.raw.premultiply(F).multiply(F);
    }
    this.raw.decompose(this.tPos, this.tQuat, this.tScl);
    if (!this.hasPose) {
      this.pos.copy(this.tPos);
      this.quat.copy(this.tQuat);
      this.scl.copy(this.tScl);
      this.hasPose = true;
    }
  }

  /** Làm mượt mỗi khung hình (ảnh nhận diện chỉ cập nhật ~20 lần/giây). */
  smooth(dt: number) {
    if (!this.hasPose) return;
    const a = 1 - Math.exp(-dt * 14);
    this.pos.lerp(this.tPos, a);
    this.quat.slerp(this.tQuat, a);
    this.scl.lerp(this.tScl, a);
    this.matrix.compose(this.pos, this.quat, this.scl);
  }

  get poseReady() {
    return this.hasPose;
  }
}
