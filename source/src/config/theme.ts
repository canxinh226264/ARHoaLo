/** Bảng màu nhận diện "Đón Gió Xuân" – dùng chung cho UI (CSS variables) và 3D. */
export const theme = {
  saffron: '#F5A93A', // nền vàng cam (cổng, tường cam)
  cobalt: '#00539B', // xanh cobalt – chữ, nút chính, nét hoa vẽ
  sky: '#0A7FC6', // xanh sáng – trạng thái đang bật, focus
  cream: '#FCFAF0', // kem – bề mặt, nền hoa vẽ
  petalLight: '#FFC1D6', // hoa AR – hồng pastel nhạt
  petalDeep: '#FF8FB1', // hoa AR – hồng pastel đậm
  branch: '#4A3B36', // cành đào
  glow: '#FFE7B8', // đường ánh sáng – vàng nhạt
} as const;

/** Tỉ lệ biến thể hoa vẽ nét xanh–trắng (10–15% theo yêu cầu). */
export const BRAND_PETAL_RATIO = 0.12;

/** Mức chất lượng – quality-manager chuyển qua lại theo FPS. */
export const QUALITY = {
  high: { pixelRatio: 2, maxFalling: 600, maxResting: 900, handHz: 20, sparkles: true, branchDetail: 1 },
  medium: { pixelRatio: 1.5, maxFalling: 420, maxResting: 650, handHz: 16, sparkles: true, branchDetail: 0.8 },
  low: { pixelRatio: 1, maxFalling: 280, maxResting: 420, handHz: 12, sparkles: false, branchDetail: 0.55 },
} as const;
export type QualityLevel = keyof typeof QUALITY;
