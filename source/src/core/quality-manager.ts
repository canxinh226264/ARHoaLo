import { QUALITY, type QualityLevel } from '../config/theme';

/**
 * Theo dõi FPS trung bình 2 giây; tụt dưới 27 FPS thì hạ một bậc,
 * ổn định trên 50 FPS trong 8 giây thì nâng một bậc.
 * "Tiết kiệm pin" khoá ở mức thấp.
 */
export class QualityManager {
  level: QualityLevel = 'high';
  batterySaver = false;
  fps = 60;
  onChange?: (l: QualityLevel) => void;
  private frames = 0;
  private acc = 0;
  private goodFor = 0;
  private order: QualityLevel[] = ['low', 'medium', 'high'];

  get settings() {
    return QUALITY[this.batterySaver ? 'low' : this.level];
  }

  setBatterySaver(on: boolean) {
    this.batterySaver = on;
    this.onChange?.(on ? 'low' : this.level);
  }

  tick(dt: number) {
    this.frames++;
    this.acc += dt;
    if (this.acc < 2) return;
    this.fps = this.frames / this.acc;
    this.frames = 0;
    const span = this.acc;
    this.acc = 0;
    if (this.batterySaver) return;
    const i = this.order.indexOf(this.level);
    if (this.fps < 27 && i > 0) {
      this.level = this.order[i - 1];
      this.goodFor = 0;
      this.onChange?.(this.level);
    } else if (this.fps > 50) {
      this.goodFor += span;
      if (this.goodFor > 8 && i < 2) {
        this.level = this.order[i + 1];
        this.goodFor = 0;
        this.onChange?.(this.level);
      }
    } else this.goodFor = 0;
  }
}
