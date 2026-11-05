import { landmarkPanels, type Panel } from '../config/room';

/**
 * Lớp căn mốc (relocalization).
 *
 * Bản hiện tại: căn mốc THỦ CÔNG – khách chọn "Tôi đang đứng trước panel …",
 * hướng camera thẳng vào panel rồi bấm. Ứng dụng đặt lại vị trí x/z và hướng nhìn.
 *
 * Bước tiếp theo (M6): image target tự động bằng MindAR với file in chính thức
 * của BTC (markers.json → public/markers/targets.mind). Interface dưới đây đã
 * sẵn cho việc cắm vào: khi nhận ra panel, gọi onFix(panel, poseTrongHệPhòng).
 */
export interface MarkerFix {
  panel: Panel;
  /** Hướng camera so với pháp tuyến panel (rad), nếu tracker cung cấp. */
  yawToNormal?: number;
  /** Khoảng cách camera → panel (m), nếu tracker cung cấp. */
  distance?: number;
  confidence: number;
}

export interface MarkerTracker {
  readonly kind: 'manual' | 'mindar';
  start(): Promise<void>;
  stop(): void;
  onFix?: (fix: MarkerFix) => void;
}

export class ManualMarkerTracker implements MarkerTracker {
  readonly kind = 'manual' as const;
  onFix?: (fix: MarkerFix) => void;
  async start() {}
  stop() {}
  get panels() {
    return landmarkPanels;
  }
  /** Gọi khi khách bấm chọn panel đang đứng trước mặt. */
  confirm(panelId: string) {
    const p = landmarkPanels.find((x) => x.id === panelId);
    if (p) this.onFix?.({ panel: p, yawToNormal: 0, distance: 1, confidence: 1 });
  }
}
