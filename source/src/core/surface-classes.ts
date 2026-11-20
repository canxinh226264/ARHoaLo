/**
 * Đổi đầu ra của mô hình phân vùng cảnh (151 lớp ADE20K) thành mức tin cậy "là sàn" cho mỗi ô.
 * File này không phụ thuộc thư viện nào vì chạy trong worker.
 */
export interface SurfaceFrame {
  w: number;
  h: number;
  /** Mức tin cậy 0..255, dòng 0 ở trên cùng màn hình. */
  floor: Uint8Array;
}

const CLASSES = 151;
/** floor, road, sidewalk, rug, path */
const FLOOR_SET = [4, 7, 12, 29, 53];

const isFloor = new Uint8Array(CLASSES);
for (const c of FLOOR_SET) isFloor[c] = 1;

const toByte = (margin: number) => Math.round(255 / (1 + Math.exp(-margin)));

/** @param logits [h × w × c], theo thứ tự dòng rồi cột rồi lớp */
export function logitsToFrame(logits: ArrayLike<number>, h: number, w: number, c: number): SurfaceFrame {
  const n = h * w;
  const floor = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    let f = -Infinity, other = -Infinity;
    const base = i * c;
    for (let k = 0; k < c; k++) {
      const x = logits[base + k];
      if (isFloor[k]) {
        if (x > f) f = x;
      } else if (x > other) other = x;
    }
    floor[i] = toByte(f - other);
  }
  return { w, h, floor };
}
