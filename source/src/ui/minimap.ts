import { el } from './screens';

/**
 * Bản đồ nhỏ khi dẫn đường, kiểu kính lái: chỉ có nét tuyến phát sáng, vị trí và điểm đến,
 * nền trong suốt nằm thẳng trên khung hình camera. Chạm để phóng to thành bản đồ phố
 * (nền OpenStreetMap), chạm lần nữa để thu lại.
 * Xoay theo hướng đang nhìn (phía trên bản đồ = phía trước mặt).
 * Ảnh nền lấy từ tile.openstreetmap.org: chỉ hợp lượng dùng nhỏ và phải ghi nguồn
 * (https://operations.osmfoundation.org/policies/tiles/). Mất mạng thì chỉ còn tuyến đường.
 */
export interface LatLng {
  lat: number;
  lng: number;
}

export interface MiniMapView {
  me: LatLng;
  /** Hướng camera theo la bàn (radian, chiều kim đồng hồ từ Bắc). */
  heading: number;
  route: LatLng[] | null;
  dest: LatLng;
  /** Sai số GPS (m). */
  accuracy: number;
}

const TILE = 256;
const ZOOM = 17;
const TILE_URL = (z: number, x: number, y: number) => `https://tile.openstreetmap.org/${z}/${x}/${y}.png`;
const MAX_TILES = 48;
/** m: bề ngang vùng hiện trên bản đồ nhỏ (kiểu nét). */
const OUTLINE_SPAN = 420;
const GLOW = '#f5a93a';
const CREAM = '#fcfaf0';

/** Toạ độ pixel Web Mercator ở mức zoom z (1 ô = 256 px). */
export function mercator(p: LatLng, z = ZOOM) {
  const n = TILE * 2 ** z;
  const s = Math.sin((p.lat * Math.PI) / 180);
  return { x: ((p.lng + 180) / 360) * n, y: (0.5 - Math.log((1 + s) / (1 - s)) / (4 * Math.PI)) * n };
}

/** Số mét trên một pixel ở vĩ độ lat, mức zoom z. */
export function metersPerPixel(lat: number, z = ZOOM) {
  return (156543.03392 * Math.cos((lat * Math.PI) / 180)) / 2 ** z;
}

export class MiniMap {
  readonly el: HTMLDivElement;
  private canvas: HTMLCanvasElement;
  private tiles = new Map<string, HTMLImageElement>();
  private view: MiniMapView | null = null;
  private large = false;
  private dirty = true;

  constructor(root: HTMLElement) {
    this.el = el('div', 'minimap');
    this.el.hidden = true;
    this.el.innerHTML = `<canvas aria-hidden="true"></canvas><a class="minimap__credit" href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a>`;
    this.canvas = this.el.querySelector('canvas')!;
    this.canvas.addEventListener('click', () => {
      this.large = !this.large;
      this.el.classList.toggle('minimap--large', this.large);
      this.dirty = true;
      this.draw();
    });
    root.appendChild(this.el);
  }

  setVisible(v: boolean) {
    this.el.hidden = !v;
  }

  update(view: MiniMapView) {
    this.view = view;
    this.dirty = true;
    this.draw();
  }

  private tile(z: number, x: number, y: number) {
    const max = 2 ** z;
    const key = `${z}/${((x % max) + max) % max}/${y}`;
    let img = this.tiles.get(key);
    if (!img) {
      if (this.tiles.size >= MAX_TILES) this.tiles.delete(this.tiles.keys().next().value!);
      img = new Image();
      img.decoding = 'async';
      img.onload = () => {
        this.dirty = true;
        this.draw();
      };
      img.src = TILE_URL(z, ((x % max) + max) % max, y);
      this.tiles.set(key, img);
    }
    return img;
  }

  private draw() {
    const v = this.view;
    if (!v || this.el.hidden || !this.dirty) return;
    this.dirty = false;
    const css = this.canvas.clientWidth || 104;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = Math.round(css * dpr);
    if (this.canvas.width !== W) this.canvas.width = this.canvas.height = W;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;
    const me = mercator(v.me);
    const mpp = metersPerPixel(v.me.lat);
    // phóng to: đúng tỉ lệ ô bản đồ cho nét; thu nhỏ: thấy cả đoạn đường phía trước
    const k = this.large ? 1 : (css / OUTLINE_SPAN) * mpp;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, W, W);
    ctx.save();
    ctx.translate(W / 2, W / 2);
    ctx.scale(dpr, dpr);
    ctx.rotate(-v.heading); // phía trên = hướng đang nhìn

    if (this.large) {
      ctx.fillStyle = '#efe9da';
      ctx.fillRect(-css, -css, css * 2, css * 2);
      const r = Math.ceil(css * 0.75);
      for (let ty = Math.floor((me.y - r) / TILE); ty <= Math.floor((me.y + r) / TILE); ty++) {
        for (let tx = Math.floor((me.x - r) / TILE); tx <= Math.floor((me.x + r) / TILE); tx++) {
          const img = this.tile(ZOOM, tx, ty);
          if (img.complete && img.naturalWidth) ctx.drawImage(img, tx * TILE - me.x, ty * TILE - me.y, TILE, TILE);
        }
      }
    }
    // tuyến đường: nét sáng màu vàng nghệ, viền tối mảnh để nổi trên nền trời sáng
    const pts = (v.route ?? [v.me, v.dest]).map((p) => {
      const q = mercator(p);
      return [(q.x - me.x) * k, (q.y - me.y) * k];
    });
    const path = () => {
      ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
    };
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.setLineDash(v.route ? [] : [5, 6]);
    ctx.lineWidth = 6;
    ctx.strokeStyle = this.large ? 'rgba(255,255,255,0.9)' : 'rgba(0,30,60,0.45)';
    path();
    ctx.stroke();
    ctx.shadowColor = GLOW;
    ctx.shadowBlur = this.large ? 0 : 8;
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.large ? '#e2557f' : GLOW;
    path();
    ctx.stroke();
    ctx.setLineDash([]);
    // điểm đến: vòng tròn sáng
    const d = mercator(v.dest);
    const dx = (d.x - me.x) * k, dy = (d.y - me.y) * k;
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = this.large ? '#00539b' : CREAM;
    ctx.fillStyle = GLOW;
    ctx.beginPath();
    ctx.arc(dx, dy, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.restore();

    // vị trí của mình (luôn ở giữa, mũi tên chỉ lên)
    ctx.save();
    ctx.translate(W / 2, W / 2);
    ctx.scale(dpr, dpr);
    const acc = Number.isFinite(v.accuracy) ? (v.accuracy / mpp) * k : 0;
    if (acc > 6) {
      ctx.fillStyle = this.large ? 'rgba(10,127,198,0.15)' : 'rgba(252,250,240,0.12)';
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(acc, css / 2), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.shadowColor = this.large ? 'transparent' : 'rgba(0,30,60,0.6)';
    ctx.shadowBlur = 4;
    ctx.fillStyle = this.large ? '#0a7fc6' : CREAM;
    ctx.strokeStyle = this.large ? '#fff' : GLOW;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(7, 7);
    ctx.lineTo(0, 3);
    ctx.lineTo(-7, 7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;
    // hướng Bắc ở mép bản đồ
    const nx = Math.sin(-v.heading) * (css / 2 - 9), ny = -Math.cos(-v.heading) * (css / 2 - 9);
    ctx.fillStyle = this.large ? 'rgba(252,250,240,0.9)' : 'rgba(0,30,60,0.5)';
    ctx.beginPath();
    ctx.arc(nx, ny, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = this.large ? '#00539b' : GLOW;
    ctx.font = '600 10px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', nx, ny + 0.5);
    ctx.restore();
  }
}
