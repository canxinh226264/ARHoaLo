import * as THREE from 'three';
import { room, HALF_W, LEN, type Panel, panelCenterX } from '../config/room';

/**
 * Định vị trong hành lang khi chỉ có 3DoF (iOS / không WebXR).
 *
 * Trạng thái: x dọc hành lang, z lệch ngang, độ cao mắt. Ràng buộc:
 *  - x ∈ [0.3, LEN − 0.3], |z| ≤ W/2 − 0.35 (người không đi xuyên tường/panel)
 *  - mỗi bước chân (DeviceMotion) dịch theo hướng nhìn ngang × sải chân,
 *    chiếu lên trục hành lang (bộ lọc bổ sung: bước đi tin 80% theo X, 20% theo Z)
 *  - phương sai σ² tăng theo số bước; căn lại bằng mốc (panel) đưa σ về nhỏ.
 * Giới hạn: không có 6DoF thật – đứng yên xoay người thì đúng, đi ngang/lùi
 * thì sai dần. Lớp hoa sàn được thiết kế "đi theo người" để drift ít lộ.
 */
export class CorridorLocalizer {
  readonly position = new THREE.Vector3(0.6, room.user.eyeHeightDefault, 0);
  sigma = 0.5; // độ bất định vị trí theo X (m)
  lastFix: string | null = null;
  enabled = true;
  private target = this.position.clone();

  onStep(forward: THREE.Vector3) {
    if (!this.enabled) return;
    const f = new THREE.Vector3(forward.x, 0, forward.z);
    if (f.lengthSq() < 0.04) return; // đang nhìn thẳng lên/xuống – bỏ qua
    f.normalize();
    const s = room.user.strideMeters;
    this.target.x += f.x * s * 0.95;
    this.target.z += f.z * s * 0.25;
    this.clamp();
    this.sigma = Math.min(3, this.sigma + 0.06);
  }

  /** Căn lại bằng mốc: người đứng trước panel, cách tường ~1 m (thu theo bề rộng). */
  fixAtPanel(p: Panel) {
    this.target.x = panelCenterX(p);
    const off = Math.min(1.0, room.corridor.width - 0.6);
    this.target.z = p.side === 'orange' ? HALF_W - off : -HALF_W + off;
    this.clamp();
    this.position.copy(this.target);
    this.sigma = 0.3;
    this.lastFix = p.id;
  }

  /** Vị trí từ image target (khi có marker-tracker): pose camera trong hệ phòng. */
  fixAbsolute(x: number, z: number, y?: number, conf = 1) {
    const k = THREE.MathUtils.clamp(conf, 0, 1);
    this.target.x = THREE.MathUtils.lerp(this.target.x, x, k);
    this.target.z = THREE.MathUtils.lerp(this.target.z, z, k);
    if (y !== undefined) this.target.y = THREE.MathUtils.clamp(y, room.user.eyeHeightMin, room.user.eyeHeightMax);
    this.clamp();
    this.sigma = 0.25;
  }

  setX(x: number) {
    this.target.x = x;
    this.clamp();
    this.position.copy(this.target);
  }

  setEyeHeight(h: number) {
    this.target.y = THREE.MathUtils.clamp(h, room.user.eyeHeightMin, room.user.eyeHeightMax);
  }

  private clamp() {
    this.target.x = THREE.MathUtils.clamp(this.target.x, 0.3, LEN - 0.3);
    this.target.z = THREE.MathUtils.clamp(this.target.z, -HALF_W + 0.35, HALF_W - 0.35);
  }

  update(dt: number) {
    // làm mượt để mỗi bước không giật
    this.position.lerp(this.target, 1 - Math.exp(-dt * 6));
  }
}
