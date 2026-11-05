import type { ColliderSource, DynamicCollider } from '../physics/colliders';

/**
 * (Tuỳ chọn – M8, mặc định TẮT) Tương tác bằng chân qua MediaPipe Pose Landmarker
 * khi camera hướng xuống thấy chân. Hành lang hẹp, đông người nên không bật sẵn.
 *
 * Cách cắm: tạo PoseLandmarker (pose_landmarker_lite.task), lấy landmark
 * 27–32 (mắt cá, gót, mũi bàn chân), đặt độ sâu bằng giao tia camera với sàn y = 0,
 * rồi trả về capsule gót→mũi chân r ≈ 0,05 m. PetalSystem đã nhận mọi ColliderSource.
 */
export class PoseTracker implements ColliderSource {
  readonly active = false;
  colliders(): DynamicCollider[] {
    return [];
  }
}
