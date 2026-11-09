/**
 * Đổi đầu ra của mô hình phân vùng cảnh (151 lớp ADE20K) thành ba mức tin cậy cho mỗi ô:
 * sàn, trần, tường. File này không phụ thuộc thư viện nào vì chạy trong worker.
 */
export interface SurfaceFrame {
  w: number;
  h: number;
  /** Mức tin cậy 0..255, dòng 0 ở trên cùng màn hình. */
  floor: Uint8Array;
  ceil: Uint8Array;
  wall: Uint8Array;
}

const CLASSES = 151;
const WALL = 1;
/** floor, road, sidewalk, rug, path */
const FLOOR_SET = [4, 7, 12, 29, 53];
/** ceiling, light, chandelier, fan: đèn và quạt gắn trần không được để thành lỗ trên trần. */
const CEIL_SET = [6, 83, 86, 140];

const kind = new Uint8Array(CLASSES); // 0 = khác, 1 = sàn, 2 = trần, 3 = tường
for (const c of FLOOR_SET) kind[c] = 1;
for (const c of CEIL_SET) kind[c] = 2;
kind[WALL] = 3;

const toByte = (margin: number) => Math.round(255 / (1 + Math.exp(-margin)));

/** @param logits [h × w × c], theo thứ tự dòng rồi cột rồi lớp */
export function logitsToFrame(logits: ArrayLike<number>, h: number, w: number, c: number): SurfaceFrame {
  const n = h * w;
  const floor = new Uint8Array(n), ceil = new Uint8Array(n), wall = new Uint8Array(n);
  for (let i = 0; i < n; i++) {
    let f = -Infinity, t = -Infinity, v = -Infinity, other = -Infinity;
    const base = i * c;
    for (let k = 0; k < c; k++) {
      const x = logits[base + k];
      const group = kind[k];
      if (group === 1) f = Math.max(f, x);
      else if (group === 2) t = Math.max(t, x);
      else if (group === 3) v = x;
      else other = Math.max(other, x);
    }
    floor[i] = toByte(f - Math.max(other, t, v));
    ceil[i] = toByte(t - Math.max(other, f, v));
    wall[i] = toByte(v - Math.max(other, f, t));
  }
  return { w, h, floor, ceil, wall };
}
