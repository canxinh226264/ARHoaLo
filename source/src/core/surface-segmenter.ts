import * as THREE from 'three';
import type { SurfaceFrame } from './surface-classes';

/** Kích thước ảnh đưa vào mô hình; do tools/build-surface-model.mjs cố định lúc tạo model. */
export const SEG_W = 129;
export const SEG_H = 225;

export interface SurfacePose {
  proj: THREE.Matrix4;
  projInv: THREE.Matrix4;
  q: THREE.Quaternion;
  pos: THREE.Vector3;
}

/**
 * Giao tiếp với worker phân vùng. Giữ lại tư thế camera lúc chụp khung hình, vì khi có kết quả
 * điện thoại đã xoay đi chỗ khác. Mỗi lúc chỉ xử lý một khung hình, máy yếu thì tự thưa đi.
 */
export class SurfaceSegmenter {
  status: 'idle' | 'loading' | 'ready' | 'error' = 'idle';
  busy = false;
  /** Thời gian xử lý khung hình gần nhất (ms). */
  lastMs = 0;
  onResult?: (frame: SurfaceFrame, pose: SurfacePose) => void;
  private worker: Worker | null = null;
  private generation = 0;
  private sentGeneration = 0;
  private pose: SurfacePose = { proj: new THREE.Matrix4(), projInv: new THREE.Matrix4(), q: new THREE.Quaternion(), pos: new THREE.Vector3() };

  start() {
    if (this.status !== 'idle') return;
    this.status = 'loading';
    try {
      this.worker = new Worker(new URL('./surface-worker.ts', import.meta.url), { type: 'module' });
    } catch {
      this.status = 'error';
      return;
    }
    this.worker.onmessage = (e) => this.receive(e.data);
    this.worker.onerror = (e) => this.fail(e.message);
    this.worker.postMessage({ type: 'init', url: new URL('./models/surface/model.json', document.baseURI).href });
  }

  /** Không chạy được thì app quay về đoán sàn/trần theo màu. */
  private fail(reason?: string) {
    console.warn('[nhận diện sàn/trần]', reason);
    this.status = 'error';
    this.busy = false;
    this.worker?.terminate();
    this.worker = null;
  }

  private receive(m: { type: string; frame?: SurfaceFrame; ms?: number; message?: string }) {
    if (m.type === 'ready') this.status = 'ready';
    else if (m.type === 'error') this.fail(m.message);
    else if (m.type === 'result') {
      this.busy = false;
      this.lastMs = m.ms ?? 0;
      if (this.sentGeneration === this.generation) this.onResult?.(m.frame!, this.pose);
    }
  }

  /** Bỏ kết quả đang xử lý dở (hệ toạ độ vừa đổi, ví dụ sau khi căn lại hướng). */
  invalidate() {
    this.generation++;
  }

  /** @param rgba ảnh SEG_W × SEG_H của đúng phần đang hiển thị; bộ đệm được chuyển cho worker */
  segment(rgba: Uint8ClampedArray, cam: THREE.PerspectiveCamera) {
    if (this.status !== 'ready' || this.busy || !this.worker) return;
    this.busy = true;
    this.sentGeneration = this.generation;
    this.pose.proj.copy(cam.projectionMatrix);
    this.pose.projInv.copy(cam.projectionMatrixInverse);
    this.pose.q.copy(cam.quaternion);
    this.pose.pos.copy(cam.position);
    const buffer = rgba.buffer as ArrayBuffer;
    this.worker.postMessage({ type: 'frame', rgba: buffer, w: SEG_W, h: SEG_H }, [buffer]);
  }
}
