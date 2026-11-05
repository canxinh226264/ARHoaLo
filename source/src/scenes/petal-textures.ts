import * as THREE from 'three';
import { theme } from '../config/theme';

/**
 * Atlas 4×2 ô vẽ bằng canvas lúc chạy (0 byte tải về):
 *  0–3: cánh đào đơn hồng pastel (4 biến thể dáng/màu)
 *  4–5: bông đào 5 cánh hồng
 *  6:   bông vẽ nét xanh trên nền kem (theo nhận diện triển lãm)
 *  7:   cánh đơn nét xanh – kem
 */
export const ATLAS_COLS = 4;
export const ATLAS_ROWS = 2;
export const CELL = { petalPink: [0, 1, 2, 3], blossomPink: [4, 5], blossomBrand: 6, petalBrand: 7 } as const;

let cached: { canvas: HTMLCanvasElement; texture: THREE.CanvasTexture; shadow: THREE.CanvasTexture } | null = null;

function petalPath(ctx: CanvasRenderingContext2D, w: number, h: number, notch: number, belly: number) {
  // Cánh đào: gốc hẹp ở dưới, bầu rộng, đầu có khía chữ V nhẹ.
  ctx.beginPath();
  ctx.moveTo(0, h * 0.5);
  ctx.bezierCurveTo(-w * belly, h * 0.25, -w * 0.62, -h * 0.28, -w * 0.32, -h * 0.47);
  ctx.quadraticCurveTo(-w * 0.12, -h * 0.52, 0, -h * (0.5 - notch));
  ctx.quadraticCurveTo(w * 0.12, -h * 0.52, w * 0.32, -h * 0.47);
  ctx.bezierCurveTo(w * 0.62, -h * 0.28, w * belly, h * 0.25, 0, h * 0.5);
  ctx.closePath();
}

function drawPinkPetal(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, v: number) {
  const light = ['#FFD3E1', '#FFC1D6', '#FFCBDB', '#FFB8CE'][v];
  const deep = ['#FF9DBC', '#FF8FB1', '#F58AAE', '#FF8FB1'][v];
  const w = s * [0.62, 0.7, 0.58, 0.66][v];
  const h = s * [0.86, 0.8, 0.9, 0.84][v];
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate([0, 0.15, -0.1, 0.06][v]);
  petalPath(ctx, w, h, [0.1, 0.07, 0.12, 0.05][v], [0.55, 0.62, 0.5, 0.58][v]);
  const g = ctx.createRadialGradient(0, h * 0.42, 2, 0, -h * 0.1, h * 0.75);
  g.addColorStop(0, deep);
  g.addColorStop(0.45, light);
  g.addColorStop(1, '#FFF1F5');
  ctx.fillStyle = g;
  ctx.fill();
  // gân mờ
  ctx.globalAlpha = 0.18;
  ctx.strokeStyle = deep;
  ctx.lineWidth = s * 0.01;
  for (let i = -2; i <= 2; i++) {
    ctx.beginPath();
    ctx.moveTo(0, h * 0.45);
    ctx.quadraticCurveTo(i * w * 0.12, 0, i * w * 0.2, -h * 0.38);
    ctx.stroke();
  }
  ctx.restore();
}

function drawBlossom(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number, brand: boolean, v: number) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(v * 0.6);
  for (let i = 0; i < 5; i++) {
    ctx.save();
    ctx.rotate((i / 5) * Math.PI * 2);
    ctx.translate(0, -s * 0.22);
    const w = s * 0.42, h = s * 0.46;
    petalPath(ctx, w, h, 0.08, 0.6);
    if (brand) {
      ctx.fillStyle = theme.cream;
      ctx.fill();
      ctx.lineWidth = s * 0.028;
      ctx.strokeStyle = theme.cobalt;
      ctx.stroke();
      ctx.lineWidth = s * 0.012;
      ctx.beginPath();
      ctx.moveTo(0, h * 0.4);
      ctx.lineTo(0, -h * 0.05);
      ctx.stroke();
    } else {
      const g = ctx.createRadialGradient(0, h * 0.45, 1, 0, 0, h * 0.7);
      g.addColorStop(0, v ? '#F27FA6' : '#FF8FB1');
      g.addColorStop(0.5, '#FFC1D6');
      g.addColorStop(1, '#FFF0F5');
      ctx.fillStyle = g;
      ctx.fill();
    }
    ctx.restore();
  }
  // nhị hoa
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + v;
    const r = s * (0.1 + (i % 3) * 0.025);
    ctx.strokeStyle = brand ? theme.cobalt : '#C2456F';
    ctx.lineWidth = s * 0.01;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r);
    ctx.stroke();
    ctx.fillStyle = brand ? theme.cobalt : '#F6C34A';
    ctx.beginPath();
    ctx.arc(Math.cos(a) * r, Math.sin(a) * r, s * 0.018, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = brand ? theme.cobalt : '#B8335F';
  ctx.beginPath();
  ctx.arc(0, 0, s * 0.035, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawBrandPetal(ctx: CanvasRenderingContext2D, cx: number, cy: number, s: number) {
  ctx.save();
  ctx.translate(cx, cy);
  const w = s * 0.6, h = s * 0.84;
  petalPath(ctx, w, h, 0.09, 0.56);
  ctx.fillStyle = theme.cream;
  ctx.fill();
  ctx.lineWidth = s * 0.035;
  ctx.strokeStyle = theme.cobalt;
  ctx.stroke();
  ctx.lineWidth = s * 0.014;
  ctx.beginPath();
  ctx.moveTo(0, h * 0.42);
  ctx.quadraticCurveTo(w * 0.05, 0, 0, -h * 0.25);
  ctx.stroke();
  ctx.restore();
}

export function getPetalAtlas() {
  if (cached) return cached;
  const C = 256;
  const canvas = document.createElement('canvas');
  canvas.width = C * ATLAS_COLS;
  canvas.height = C * ATLAS_ROWS;
  const ctx = canvas.getContext('2d')!;
  for (let v = 0; v < 4; v++) drawPinkPetal(ctx, C * v + C / 2, C / 2, C * 0.92, v);
  drawBlossom(ctx, C * 0 + C / 2, C + C / 2, C * 0.95, false, 0);
  drawBlossom(ctx, C * 1 + C / 2, C + C / 2, C * 0.95, false, 1);
  drawBlossom(ctx, C * 2 + C / 2, C + C / 2, C * 0.95, true, 0);
  drawBrandPetal(ctx, C * 3 + C / 2, C + C / 2, C * 0.92);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.generateMipmaps = true;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.anisotropy = 2;

  // bóng tiếp xúc giả: chấm mờ tròn
  const sc = document.createElement('canvas');
  sc.width = sc.height = 64;
  const s = sc.getContext('2d')!;
  const g = s.createRadialGradient(32, 32, 2, 32, 32, 30);
  g.addColorStop(0, 'rgba(40,20,30,0.55)');
  g.addColorStop(1, 'rgba(40,20,30,0)');
  s.fillStyle = g;
  s.fillRect(0, 0, 64, 64);
  const shadow = new THREE.CanvasTexture(sc);
  cached = { canvas, texture, shadow };
  return cached;
}

/** Lấy hình 1 ô atlas để vẽ 2D (khung hoa, hiệu ứng chuyển cảnh). */
export function atlasCellRect(cell: number) {
  const C = 256;
  return { sx: (cell % ATLAS_COLS) * C, sy: Math.floor(cell / ATLAS_COLS) * C, s: C };
}
