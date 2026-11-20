import { t, getLang } from './i18n';
import { DESTINATION, type GuidePhase, type RouteState } from '../scenes/guide-scene';

/**
 * HUD dẫn đường kiểu kính lái: chữ phát sáng nằm thẳng trên khung hình camera, không có khung nền.
 * Trái: quãng còn lại, giờ tới, thời gian đi bộ. Giữa: mũi tên chỗ rẽ tiếp theo, khoảng cách tới đó,
 * lời chỉ dẫn và thanh tiến độ. Phải: bản đồ nét tuyến (MiniMap, đặt riêng bằng CSS).
 */
export interface NavState {
  phase: GuidePhase;
  floorNow: number;
  floorTo: number;
  /** Quãng còn phải đi (m). */
  remaining: number;
  accuracy: number;
  routeState: RouteState;
  /** Chỗ rẽ tiếp theo (null khi chưa có tuyến). */
  turn: { distance: number; angle: number } | null;
}

/** m/giây, tốc độ đi bộ để tính giờ tới. */
const WALK_SPEED = 1.2;
const SLIGHT = 1.1; // rad: dưới mức này là chếch
const BACK = 2.6; // rad: trên mức này là quay đầu

/** Làm tròn thô để số không nhảy liên tục. */
export function formatDistance(m: number, vi = getLang() === 'vi') {
  if (m >= 1000) return `${(m / 1000).toFixed(1).replace('.', vi ? ',' : '.')} km`;
  if (m >= 100) return `${Math.round(m / 10) * 10} m`;
  return `${Math.max(0, Math.round(m / 5) * 5)} m`;
}

/** Mũi tên bẻ theo góc rẽ (radian, dương = phải): thân thẳng từ dưới lên rồi rẽ đúng góc đó. */
export function turnArrow(angle: number) {
  const a = Math.max(-2.8, Math.min(2.8, angle));
  const dx = Math.sin(a), dy = -Math.cos(a);
  const ex = 12 + dx * 8, ey = 11 + dy * 8;
  const head = (s: number) => {
    const c = Math.cos(s * 0.6), n = Math.sin(s * 0.6);
    return `${(ex - (dx * c - dy * n) * 4.5).toFixed(2)} ${(ey - (dx * n + dy * c) * 4.5).toFixed(2)}`;
  };
  return (
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">` +
    `<path d="M12 22.5V11L${ex.toFixed(2)} ${ey.toFixed(2)}"/><path d="M${head(1)}L${ex.toFixed(2)} ${ey.toFixed(2)}L${head(-1)}"/></svg>`
  );
}

function turnText(angle: number) {
  const a = Math.abs(angle);
  if (a === 0) return t('hudStraight');
  if (a >= BACK) return t('hudBack');
  if (angle > 0) return a < SLIGHT ? t('hudSlightRight') : t('hudRight');
  return a < SLIGHT ? t('hudSlightLeft') : t('hudLeft');
}

export class NavHud {
  private total = 0;
  private shownKey = '';
  private texts = new Map<string, string>();

  constructor(private el: HTMLElement, private h: { arrived(): void; floorDone?(): void; change?(): void; exit?(): void }) {}

  /** Gọi mỗi khung hình: chỉ dựng lại khi bố cục đổi, còn lại chỉ thay chữ. */
  update(g: NavState, mode: 'outdoor' | 'guide') {
    this.el.hidden = g.phase === 'idle';
    if (g.phase === 'idle' || g.phase === 'locating') this.total = 0;
    const walking = g.phase === 'walk';
    if (walking) this.total = Math.max(this.total, g.remaining);
    const key = `${getLang()}|${mode}|${g.phase}|${walking && g.routeState === 'loading' ? 'l' : ''}`;
    if (key !== this.shownKey) this.build(key, g, mode);
    const vi = getLang() === 'vi';
    const name = vi ? DESTINATION.shortVi : DESTINATION.shortEn;
    if (!walking) {
      this.set(
        'msg',
        g.phase === 'locating'
          ? t('guideLocating') + (Number.isFinite(g.accuracy) ? ` · ${t('guideGps')(Math.round(g.accuracy))}` : '')
          : g.phase === 'floor'
          ? g.floorTo < g.floorNow ? t('guideGoDown')(g.floorTo) : t('guideGoUp')(g.floorTo)
          : t('guideArrived')(name),
      );
      return;
    }
    const sec = g.remaining / WALK_SPEED;
    const eta = new Date(Date.now() + sec * 1000).toLocaleTimeString(vi ? 'vi-VN' : 'en-GB', { hour: '2-digit', minute: '2-digit' });
    this.set('left', formatDistance(g.remaining, vi));
    this.set('eta', t('hudEta')(eta));
    this.set('walk', t('hudWalk')(Math.max(1, Math.round(sec / 60))));
    const turn = g.turn ?? { distance: g.remaining, angle: 0 };
    this.set('turnDist', formatDistance(turn.distance, vi));
    const arrow = turnArrow(turn.angle);
    this.set('arrow', arrow, true);
    const say = g.routeState === 'loading' ? t('hudRouting') : turn.angle === 0 ? `${t('hudStraight')} ${t('hudTo')(name)}` : turnText(turn.angle);
    this.set('say', say);
    this.set('sub', g.routeState === 'failed' || !g.turn ? t('hudBeeline') : Number.isFinite(g.accuracy) && g.accuracy > 20 ? t('guideGps')(Math.round(g.accuracy)) : '');
    const done = this.total > 0 ? 1 - g.remaining / this.total : 0;
    const bar = this.el.querySelector<HTMLElement>('[data-n="bar"]');
    if (bar) bar.style.transform = `scaleX(${Math.max(0.02, Math.min(1, done)).toFixed(3)})`;
  }

  private set(name: string, value: string, html = false) {
    if (this.texts.get(name) === value) return;
    this.texts.set(name, value);
    const node = this.el.querySelector<HTMLElement>(`[data-n="${name}"]`);
    if (!node) return;
    if (html) node.innerHTML = value;
    else node.textContent = value;
  }

  private build(key: string, g: NavState, mode: 'outdoor' | 'guide') {
    this.shownKey = key;
    this.texts.clear();
    const actions =
      (g.phase === 'floor' ? `<button class="nav__btn nav__btn--main" type="button" data-gfloor>${t('guideFloorDone')(g.floorTo)}</button>` : '') +
      (mode === 'outdoor'
        ? `<button class="nav__btn" type="button" data-in aria-label="${t('arrived')}" title="${t('arrived')}">${t('arrivedShort')}</button>`
        : `<button class="nav__btn" type="button" data-gchange>${t('guideChange')}</button>` +
          `<button class="nav__btn nav__btn--x" type="button" data-gexit aria-label="${t('guideExit')}" title="${t('guideExit')}">×</button>`);
    if (g.phase === 'walk') {
      this.el.className = 'wayfind nav';
      this.el.innerHTML = `
        <div class="nav__left">
          <b class="nav__big" data-n="left"></b>
          <span data-n="eta"></span>
          <span data-n="walk"></span>
        </div>
        <div class="nav__mid">
          <div class="nav__turn"><i class="nav__arrow" data-n="arrow"></i><b class="nav__big" data-n="turnDist"></b></div>
          <span class="nav__say" data-n="say" aria-live="polite"></span>
          <span class="nav__sub" data-n="sub"></span>
          <div class="nav__bar"><i data-n="bar"></i></div>
          <div class="nav__actions">${actions}</div>
        </div>`;
    } else {
      this.el.className = 'wayfind nav nav--msg';
      this.el.innerHTML = `
        <div class="nav__mid">
          <span class="nav__say" data-n="msg" aria-live="polite"></span>
          <div class="nav__actions">${actions}</div>
        </div>`;
    }
    this.el.querySelector('[data-in]')?.addEventListener('click', () => this.h.arrived());
    this.el.querySelector('[data-gfloor]')?.addEventListener('click', () => this.h.floorDone?.());
    this.el.querySelector('[data-gchange]')?.addEventListener('click', () => this.h.change?.());
    this.el.querySelector('[data-gexit]')?.addEventListener('click', () => this.h.exit?.());
  }

  /** Bố cục cần dựng lại (đổi ngôn ngữ, đổi chế độ). */
  invalidate() {
    this.shownKey = '';
  }
}
