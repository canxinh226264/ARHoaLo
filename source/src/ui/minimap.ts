import { el } from './screens';

/**
 * Bản đồ nhỏ khi dẫn đường: nền OpenStreetMap, tuyến đường, vị trí và điểm đến.
 * Xoay theo hướng đang nhìn (phía trên bản đồ = phía trước mặt), chạm để phóng to/thu nhỏ.
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
    const css = this.canvas.clientWidth || 132;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = Math.round(css * dpr);
    if (this.canvas.width !== W) this.canvas.width = this.canvas.height = W;
    const ctx = this.canvas.getContext('2d');
    if (!ctx) return;
    const me = mercator(v.me);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#efe9da';
    ctx.fillRect(0, 0, W, W);
    ctx.save();
    ctx.translate(W / 2, W / 2);
    ctx.scale(dpr, dpr);
    ctx.rotate(-v.heading); // phía trên = hướng đang nhìn

    // nền bản đồ
    const r = Math.ceil(css * 0.75);
    for (let ty = Math.floor((me.y - r) / TILE); ty <= Math.floor((me.y + r) / TILE); ty++) {
      for (let tx = Math.floor((me.x - r) / TILE); tx <= Math.floor((me.x + r) / TILE); tx++) {
        const img = this.tile(ZOOM, tx, ty);
        if (img.complete && img.naturalWidth) ctx.drawImage(img, tx * TILE - me.x, ty * TILE - me.y, TILE, TILE);
      }
    }
    // tuyến đường
    const pts = (v.route ?? [v.me, v.dest]).map((p) => {
      const q = mercator(p);
      return [q.x - me.x, q.y - me.y];
    });
    ctx.lineJoin = ctx.lineCap = 'round';
    for (const [w, c] of [[7, 'rgba(255,255,255,0.9)'], [4, v.route ? '#e2557f' : 'rgba(226,85,127,0.7)']] as const) {
      ctx.lineWidth = w;
      ctx.strokeStyle = c;
      ctx.setLineDash(v.route ? [] : [6, 6]);
      ctx.beginPath();
      pts.forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)));
      ctx.stroke();
    }
    ctx.setLineDash([]);
    // điểm đến
    const d = mercator(v.dest);
    ctx.fillStyle = '#f5a93a';
    ctx.strokeStyle = '#00539b';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(d.x - me.x, d.y - me.y, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // vị trí của mình (luôn ở giữa, mũi tên chỉ lên)
    ctx.save();
    ctx.translate(W / 2, W / 2);
    ctx.scale(dpr, dpr);
    const acc = Number.isFinite(v.accuracy) ? v.accuracy / metersPerPixel(v.me.lat) : 0;
    if (acc > 6) {
      ctx.fillStyle = 'rgba(10,127,198,0.15)';
      ctx.beginPath();
      ctx.arc(0, 0, Math.min(acc, css / 2), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = '#0a7fc6';
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, -9);
    ctx.lineTo(7, 7);
    ctx.lineTo(0, 3);
    ctx.lineTo(-7, 7);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // hướng Bắc ở mép bản đồ
    const nx = Math.sin(-v.heading) * (css / 2 - 11), ny = -Math.cos(-v.heading) * (css / 2 - 11);
    ctx.fillStyle = 'rgba(252,250,240,0.9)';
    ctx.beginPath();
    ctx.arc(nx, ny, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#00539b';
    ctx.font = '600 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('N', nx, ny + 0.5);
    ctx.restore();
  }
}
