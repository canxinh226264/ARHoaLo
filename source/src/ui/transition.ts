import { getPetalAtlas, atlasCellRect } from '../scenes/petal-textures';

/**
 * Hiệu ứng cánh hoa xoáy khi chuyển Ngoài phòng → Trong hành lang.
 * Vẽ 2D trên canvas #fx, gọi `mid` ở đỉnh hiệu ứng để đổi cảnh phía sau.
 */
export function petalSwirl(canvas: HTMLCanvasElement, mid: () => void, reduceMotion = false): Promise<void> {
  return new Promise((resolve) => {
    const ctx = canvas.getContext('2d')!;
    const dpr = Math.min(2, devicePixelRatio || 1);
    canvas.width = innerWidth * dpr;
    canvas.height = innerHeight * dpr;
    ctx.scale(dpr, dpr);
    const { canvas: atlas } = getPetalAtlas();
    const W = innerWidth, H = innerHeight;
    const cx = W / 2, cy = H / 2;
    const R = Math.hypot(W, H) * 0.6;
    const N = reduceMotion ? 0 : 140;
    const ps = Array.from({ length: N }, (_, i) => ({
      a: Math.random() * Math.PI * 2,
      r0: R * (0.7 + Math.random() * 0.5),
      s: 18 + Math.random() * 26,
      cell: i % 9 === 0 ? 7 : i % 6 === 0 ? 4 : i % 4,
      spin: (Math.random() - 0.5) * 8,
      delay: Math.random() * 0.25,
    }));
    const dur = reduceMotion ? 500 : 1500;
    const t0 = performance.now();
    let swapped = false;
    const frame = (now: number) => {
      const t = Math.min(1, (now - t0) / dur);
      ctx.clearRect(0, 0, W, H);
      // màn kem mờ ở giữa hiệu ứng để giấu lúc đổi cảnh
      const veil = Math.sin(Math.PI * t);
      ctx.fillStyle = `rgba(252,250,240,${(reduceMotion ? 1 : 0.85) * veil})`;
      ctx.fillRect(0, 0, W, H);
      for (const p of ps) {
        const k = Math.min(1, Math.max(0, (t - p.delay) / (1 - p.delay)));
        const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        const r = p.r0 * (1 - Math.sin(e * Math.PI) * 0.85);
        const a = p.a + e * Math.PI * 2.4;
        const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
        const c = atlasCellRect(p.cell);
        ctx.save();
        ctx.globalAlpha = Math.sin(Math.PI * k);
        ctx.translate(x, y);
        ctx.rotate(a + p.spin * e);
        ctx.drawImage(atlas, c.sx, c.sy, c.s, c.s, -p.s / 2, -p.s / 2, p.s, p.s);
        ctx.restore();
      }
      if (!swapped && t >= 0.5) {
        swapped = true;
        mid();
      }
      if (t < 1) requestAnimationFrame(frame);
      else {
        ctx.clearRect(0, 0, W, H);
        resolve();
      }
    };
    requestAnimationFrame(frame);
  });
}

/** Tiếng chuông rất nhỏ khi bắt được hoa (tổng hợp bằng WebAudio, mặc định tắt tiếng). */
let actx: AudioContext | null = null;
export function chime() {
  try {
    actx ??= new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const now = actx.currentTime;
    for (const [f, d] of [[1318.5, 0], [1760, 0.07]] as const) {
      const o = actx.createOscillator();
      const g = actx.createGain();
      o.type = 'sine';
      o.frequency.value = f;
      g.gain.setValueAtTime(0, now + d);
      g.gain.linearRampToValueAtTime(0.035, now + d + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, now + d + 0.6);
      o.connect(g).connect(actx.destination);
      o.start(now + d);
      o.stop(now + d + 0.65);
    }
  } catch { /* bỏ qua */ }
}
