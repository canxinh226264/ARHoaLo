import { t, other, getLang, setLang, onLang } from './i18n';
import { icons } from './icons';
import { el, sheet } from './screens';
import { DESTINATION, type GuidePhase, type GuideSetup, type RouteState } from '../scenes/guide-scene';

export interface Settings {
  mode: 'indoor' | 'outdoor' | 'guide';
  reading: boolean;
  sound: boolean;
  battery: boolean;
  reduceMotion: boolean;
  density: number;
  guide: boolean;
}

export interface ArtifactCardItem {
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
}

export interface HudHandlers {
  capture(): void;
  setMode(m: 'indoor' | 'outdoor'): void;
  change(s: Partial<Settings>): void;
  tutorial(): void;
  arrived(): void;
  flipCamera?(): void;
  ask?(preset?: string): void;
  guideOpen?(): void;
  guideFloorDone?(): void;
  guideExit?(): void;
}

type GuideState = { phase: GuidePhase; floorNow: number; floorTo: number; remaining: number; accuracy: number; routeState: RouteState };

export class Hud {
  readonly el: HTMLElement;
  private handChip: HTMLElement;
  private modeBtn: HTMLButtonElement;
  private menuBtn: HTMLButtonElement;
  private flipBtn: HTMLButtonElement;
  private way: HTMLElement;
  private art: HTMLElement;
  private artState: { item: ArtifactCardItem | null; mode: string } = { item: null, mode: 'hidden' };
  artHandlers: { inspect(): void; reset(): void; close(): void; ask(): void; speak(): void } | null = null;
  private handState: 'off' | 'seen' | 'hold' | 'loading' = 'off';
  /** Menu thả xuống đang mở (cùng lớp phủ trong suốt bắt cú chạm ra ngoài), null nếu đóng. */
  private dropdown: { menu: HTMLElement; scrim: HTMLElement } | null = null;
  private speaking = false;
  private canFlip = false;
  private selfie = false;
  xrActive = false;

  constructor(private root: HTMLElement, private s: Settings, private h: HudHandlers) {
    this.el = el('div', 'hud');
    this.el.innerHTML = `
      <div class="hud__top">
        <div class="chip chip--hand" aria-live="polite">${icons.hand}<span></span></div>
        <div class="hud__right">
          <button class="round round--top" type="button" data-menu aria-haspopup="menu" aria-expanded="false">${icons.gear}</button>
          <button class="round round--top" type="button" data-mode></button>
        </div>
      </div>
      <div class="wayfind" hidden></div>
      <div class="artcard" hidden></div>
      <div class="hud__bottom">
        <button class="round round--left" type="button" data-ask>${icons.chat}</button>
        <button class="shutter" type="button" data-shot></button>
        <button class="round round--right" type="button" data-flip hidden>${icons.flip}</button>
      </div>`;
    this.handChip = this.el.querySelector('.chip--hand')!;
    this.modeBtn = this.el.querySelector('[data-mode]')!;
    this.menuBtn = this.el.querySelector('[data-menu]')!;
    this.flipBtn = this.el.querySelector('[data-flip]')!;
    this.way = this.el.querySelector('.wayfind')!;
    this.art = this.el.querySelector('.artcard')!;
    this.el.querySelector('[data-shot]')!.addEventListener('click', () => h.capture());
    this.modeBtn.addEventListener('click', () => h.setMode(this.s.mode === 'indoor' ? 'outdoor' : 'indoor'));
    this.menuBtn.addEventListener('click', () => (this.dropdown ? this.closeMenu() : this.openMenu()));
    this.flipBtn.addEventListener('click', () => this.h.flipCamera?.());
    this.el.querySelector('[data-ask]')!.addEventListener('click', () => this.h.ask?.());
    root.appendChild(this.el);
    onLang(() => this.refresh());
    this.refresh();
  }

  update(s: Settings) {
    this.s = s;
    this.refresh();
  }

  setHand(state: 'off' | 'seen' | 'hold' | 'loading') {
    if (state === this.handState) return;
    this.handState = state;
    this.refreshHand();
  }

  /** Thẻ thông tin hiện vật 3D (null = ẩn). */
  setArtifact(item: ArtifactCardItem | null, mode: string) {
    this.artState = { item, mode };
    this.refreshArt();
  }

  /** Đang đọc to nội dung thẻ: nút loa chuyển thành nút dừng. */
  setSpeaking(on: boolean) {
    if (on === this.speaking) return;
    this.speaking = on;
    this.refreshArt();
  }

  /** @param available máy có hơn một camera; @param selfie đang dùng camera trước */
  setCamera(available: boolean, selfie: boolean) {
    this.canFlip = available;
    this.selfie = selfie;
    this.refresh();
  }

  private refreshArt() {
    const { item, mode } = this.artState;
    const show = !!item && mode !== 'hidden';
    this.art.hidden = !show;
    this.el.classList.toggle('has-art', show);
    if (!show || !item) return;
    const vi = getLang() === 'vi';
    const title = vi ? item.titleVi : item.titleEn;
    const sub = vi ? item.titleEn : item.titleVi;
    const desc = vi ? item.descVi : item.descEn;
    const inspecting = mode === 'inspect';
    const info = mode === 'info';
    this.art.classList.toggle('artcard--info', info);
    this.art.innerHTML = `
      <strong>${title}</strong>
      <span class="en">${sub}</span>
      ${desc ? `<p>${desc}</p>` : ''}
      ${info ? '' : `<span class="hint">${t('artHint')}</span>`}
      <div class="row">
        ${info ? `<button class="round round--sm" type="button" data-a="speak" aria-pressed="${this.speaking}" aria-label="${this.speaking ? t('readStop') : t('readAloud')}" title="${this.speaking ? t('readStop') : t('readAloud')}">${icons.speaker}</button>` : ''}
        <button class="btn btn--ghost" type="button" data-a="ask">${t('askMore')}</button>
        ${info
          ? `<button class="btn" type="button" data-a="close">${t('artClose')}</button>`
          : inspecting
          ? `<button class="btn btn--ghost" type="button" data-a="reset">${t('artReset')}</button>
             <button class="btn" type="button" data-a="close">${t('artClose')}</button>`
          : `<button class="btn" type="button" data-a="inspect">${t('artInspect')}</button>`}
      </div>`;
    this.art.querySelectorAll<HTMLButtonElement>('[data-a]').forEach((b) =>
      b.addEventListener('click', () => {
        const a = b.dataset.a as 'inspect' | 'reset' | 'close' | 'ask' | 'speak';
        this.artHandlers?.[a]();
      }),
    );
  }

  private refreshHand() {
    const span = this.handChip.querySelector('span')!;
    const st = this.handState;
    // ngoài cổng góc trên trái là chỗ của bản đồ
    this.handChip.classList.toggle('show', st !== 'off' && this.s.mode === 'indoor');
    this.handChip.classList.toggle('hold', st === 'hold');
    span.textContent = st === 'hold' ? t('handHolding') : st === 'loading' ? t('handLoading') : st === 'seen' ? t('handSeen') : '';
  }

  /** Trạng thái dẫn đường; chỉ vẽ lại khi chữ hoặc nút thay đổi. */
  setGuide(g: GuideState) {
    this.guide = { ...g };
    if (this.s.mode === 'indoor') return;
    const key = this.guideKey();
    if (key !== this.guideShown) this.refreshWay();
  }
  private guide: GuideState = { phase: 'idle', floorNow: 1, floorTo: 1, remaining: 0, accuracy: NaN, routeState: 'none' };
  private guideShown = '';

  private guideKey() {
    const g = this.guide;
    return `${getLang()}|${this.s.mode}|${g.phase}|${this.guideText()}`;
  }

  private guideText() {
    const g = this.guide;
    const vi = getLang() === 'vi';
    const name = vi ? DESTINATION.shortVi : DESTINATION.shortEn;
    const gps = Number.isFinite(g.accuracy) && g.accuracy > 20 ? ` · ${t('guideGps')(Math.round(g.accuracy))}` : '';
    if (g.phase === 'locating') return t('guideLocating') + (Number.isFinite(g.accuracy) ? ` · ${t('guideGps')(Math.round(g.accuracy))}` : '');
    if (g.phase === 'floor') return g.floorTo < g.floorNow ? t('guideGoDown')(g.floorTo) : t('guideGoUp')(g.floorTo);
    if (g.phase === 'arrived') return t('guideArrived')(name);
    if (g.routeState === 'loading') return `${name} · ${t('guideRouting')}…`;
    const beeline = g.routeState === 'failed' ? ` · ${t('guideBeeline')}` : '';
    const m = g.remaining;
    // làm tròn thô để chữ không nhảy liên tục
    const dist = m >= 1000 ? `${(m / 1000).toFixed(1).replace('.', vi ? ',' : '.')} km` : `${m >= 100 ? Math.round(m / 10) * 10 : Math.round(m)} m`;
    return t('guideLeft')(name, dist) + beeline + gps;
  }

  /** Khung dẫn đường gọn một dòng: chữ ngắn + nút nhỏ, không che phần lớn màn hình. */
  private refreshGuide() {
    const g = this.guide;
    this.way.hidden = g.phase === 'idle';
    this.guideShown = this.guideKey();
    const outdoor = this.s.mode === 'outdoor';
    const action = g.phase === 'floor'
      ? `<button class="btn" type="button" data-gfloor>${t('guideFloorDone')(g.floorTo)}</button>`
      : outdoor
      ? `<button class="btn" type="button" data-in aria-label="${t('arrived')}" title="${t('arrived')}">${t('arrivedShort')}</button>`
      : `<button class="btn btn--ghost" type="button" data-gchange>${t('guideChange')}</button>`;
    this.way.innerHTML = `
      <span class="wayfind__text" aria-live="polite">${this.guideText()}</span>
      ${action}
      ${outdoor ? '' : `<button class="wayfind__x" type="button" data-gexit aria-label="${t('guideExit')}" title="${t('guideExit')}">×</button>`}`;
    this.way.querySelector('[data-in]')?.addEventListener('click', () => this.h.arrived());
    this.way.querySelector('[data-gchange]')?.addEventListener('click', () => this.h.guideOpen?.());
    this.way.querySelector('[data-gfloor]')?.addEventListener('click', () => this.h.guideFloorDone?.());
    this.way.querySelector('[data-gexit]')?.addEventListener('click', () => this.h.guideExit?.());
  }

  /** Biểu mẫu bắt đầu dẫn đường tới điểm đến cố định. */
  openGuideSetup(d: GuideSetup, onGo: (s: GuideSetup) => void) {
    const num = (label: string, key: string, val: number) =>
      `<label class="opt"><span>${label}</span><input type="number" inputmode="numeric" data-g="${key}" value="${val}" min="-5" max="100" step="1" style="width:5.5em;font:inherit;padding:6px 8px;text-align:right"/></label>`;
    const vi = getLang() === 'vi';
    sheet(
      this.root,
      `<h2>${t('guideTitle')}</h2><p class="en">${other('guideTitle')}</p>
       <p>${vi ? DESTINATION.nameVi : DESTINATION.nameEn}</p><p class="fine">${t('guideHint')}</p>
       ${num(t('guideFloorNow'), 'floorNow', d.floorNow)}
       ${num(t('guideFloorTo'), 'floorTo', d.floorTo)}
       <p class="fine" data-gerr hidden>${t('guideBadInput')}</p>
       <div class="actions"><button class="btn" type="button" data-ok>${t('guideGo')}</button><button class="link" type="button" data-x>${t('close')}</button></div>`,
      (sh, close) => {
        const read = (k: string) => parseFloat(sh.querySelector<HTMLInputElement>(`[data-g="${k}"]`)!.value);
        sh.querySelector('[data-ok]')!.addEventListener('click', () => {
          const s: GuideSetup = { floorNow: read('floorNow'), floorTo: read('floorTo') };
          if (!Number.isInteger(s.floorNow) || !Number.isInteger(s.floorTo)) {
            sh.querySelector<HTMLElement>('[data-gerr]')!.hidden = false;
            return;
          }
          close();
          onGo(s); // vẫn trong cú bấm: iOS cần vậy để hỏi quyền vị trí
        });
        sh.querySelector('[data-x]')!.addEventListener('click', close);
      },
    );
  }

  private refreshWay() {
    this.way.classList.toggle('wayfind--compact', this.s.mode !== 'indoor');
    if (this.s.mode === 'indoor') this.way.hidden = true;
    else this.refreshGuide();
  }

  refresh() {
    const indoor = this.s.mode === 'indoor';
    const ask = this.el.querySelector('[data-ask]') as HTMLElement;
    ask.setAttribute('aria-label', t('askChip'));
    ask.title = t('askChip');
    // nút đổi chế độ chỉ có icon: vẽ biểu tượng của chế độ sẽ chuyển sang
    const target = indoor ? t('modeOutdoor') : t('modeIndoor');
    this.modeBtn.innerHTML = indoor ? icons.pin : icons.door;
    this.modeBtn.setAttribute('aria-label', t('modeSwitchTo')(target));
    this.modeBtn.title = t('modeSwitchTo')(target);
    (this.el.querySelector('[data-shot]') as HTMLElement).setAttribute('aria-label', t('capture'));
    this.menuBtn.setAttribute('aria-label', t('menu'));
    this.menuBtn.title = t('menu');
    this.flipBtn.hidden = !this.canFlip || this.xrActive;
    this.flipBtn.setAttribute('aria-label', t('flipCamera'));
    this.flipBtn.title = t('flipCamera');
    this.flipBtn.setAttribute('aria-pressed', String(this.selfie));
    this.refreshHand();
    this.refreshWay();
    this.refreshArt();
  }

  /** Menu thả xuống dưới nút cài đặt; chạm ra ngoài (hoặc phím Esc) thì đóng, không cần nút Đóng. */
  openMenu() {
    this.closeMenu();
    const scrim = el('div', 'dropdown-scrim');
    const menu = el('div', 'dropdown');
    menu.setAttribute('role', 'menu');
    menu.setAttribute('aria-label', t('menu'));
    menu.innerHTML = `
      <button class="dropdown__item" type="button" role="menuitem" data-lang lang="${getLang() === 'vi' ? 'en' : 'vi'}">${icons.globe}<span>${t('language')}</span></button>
      <button class="dropdown__item" type="button" role="menuitem" data-tut>${icons.play}<span>${t('tutorial')}</span></button>
      <button class="dropdown__item" type="button" role="menuitem" data-help>${icons.help}<span>${t('help')}</span></button>`;
    scrim.addEventListener('click', () => this.closeMenu());
    menu.querySelector('[data-lang]')!.addEventListener('click', () => {
      this.closeMenu();
      setLang(getLang() === 'vi' ? 'en' : 'vi');
    });
    menu.querySelector('[data-tut]')!.addEventListener('click', () => {
      this.closeMenu();
      this.h.tutorial();
    });
    menu.querySelector('[data-help]')!.addEventListener('click', () => {
      this.closeMenu();
      this.openHelp();
    });
    this.root.append(scrim, menu);
    this.dropdown = { menu, scrim };
    this.menuBtn.setAttribute('aria-expanded', 'true');
    document.addEventListener('keydown', this.onMenuKey);
    menu.querySelector<HTMLElement>('.dropdown__item')?.focus({ preventScroll: true });
  }

  closeMenu() {
    if (!this.dropdown) return;
    this.dropdown.menu.remove();
    this.dropdown.scrim.remove();
    this.dropdown = null;
    this.menuBtn.setAttribute('aria-expanded', 'false');
    document.removeEventListener('keydown', this.onMenuKey);
  }

  private onMenuKey = (e: KeyboardEvent) => {
    if (e.key !== 'Escape') return;
    this.closeMenu();
    this.menuBtn.focus();
  };

  private openHelp() {
    sheet(
      this.root,
      `<h2>${t('help')}</h2><p class="en">${other('help')}</p><p>${t('helpBody')}</p><p class="fine">${t('privacy')}</p>
       <div class="actions"><button class="btn btn--ghost" type="button" data-x>${t('close')}</button></div>`,
      (sh, close) => sh.querySelector('[data-x]')!.addEventListener('click', close),
    );
  }

  showPhoto(url: string, blob: Blob) {
    const canShare = !!(navigator.canShare && navigator.canShare({ files: [new File([blob], 'don-gio-xuan.jpg', { type: 'image/jpeg' })] }));
    sheet(
      this.root,
      `<h2>${t('photoReady')}</h2><p class="en">${other('photoReady')}</p>
       <img class="photo" src="${url}" alt="${t('photoReady')}" />
       <div class="actions">
         ${canShare ? `<button class="btn" type="button" data-share>${t('sharePhoto')}</button>` : ''}
         <a class="btn ${canShare ? 'btn--ghost' : ''}" href="${url}" download="don-gio-xuan.jpg" style="text-decoration:none">${t('savePhoto')}</a>
         <button class="link" type="button" data-x>${t('close')}</button>
       </div>`,
      (sh, close) => {
        sh.querySelector('[data-x]')!.addEventListener('click', () => { close(); URL.revokeObjectURL(url); });
        sh.querySelector('[data-share]')?.addEventListener('click', () => {
          navigator.share({ files: [new File([blob], 'don-gio-xuan.jpg', { type: 'image/jpeg' })], title: 'Đón Gió Xuân' }).catch(() => undefined);
        });
      },
    );
  }
}
