import { t, other, getLang, setLang, onLang } from './i18n';
import { icons } from './icons';
import { el, sheet } from './screens';
import { landmarkPanels } from '../config/room';
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
  recenter(): void;
  standAt(panelId: string): void;
  tutorial(): void;
  outdoorAlign(): void;
  arrived(): void;
  exitXr?(): void;
  replaceFloor?(): void;
  ask?(preset?: string): void;
  guideOpen?(): void;
  guideFloorDone?(): void;
  guideExit?(): void;
}

const PANEL_LABEL: Record<string, string> = {
  F: 'Lời giới thiệu',
  A1: 'Phần A, đoạn 1',
  A2: 'Phần A, đoạn 2',
  A3: 'Phần A, đoạn 3',
  A4: 'Phần A, đoạn 4',
  B2: 'Chi bộ Đảng',
  C4: 'Chợ Tết xưa',
  C8: 'Chợ Tết nay',
  D11: 'Bàn quà, cây đào',
};

type GuideState = { phase: GuidePhase; blocked: boolean; floorNow: number; floorTo: number; remaining: number; accuracy: number; routeState: RouteState };

export class Hud {
  readonly el: HTMLElement;
  private handChip: HTMLElement;
  private modeChip: HTMLButtonElement;
  private readBtn: HTMLButtonElement;
  private way: HTMLElement;
  private art: HTMLElement;
  private artState: { item: ArtifactCardItem | null; mode: string } = { item: null, mode: 'hidden' };
  artHandlers: { inspect(): void; reset(): void; close(): void; ask(): void } | null = null;
  private handState: 'off' | 'seen' | 'hold' | 'loading' = 'off';
  private remaining = 0;
  private turn: '' | 'turnLeft' | 'turnRight' | 'turnBack' = '';
  xrActive = false;

  constructor(private root: HTMLElement, private s: Settings, private h: HudHandlers) {
    this.el = el('div', 'hud');
    this.el.innerHTML = `
      <div class="hud__top">
        <div class="chip chip--hand" aria-live="polite">${icons.hand}<span></span></div>
        <div class="hud__right">
          <button class="chip chip--ask" type="button" data-ask></button>
          <button class="chip" type="button" data-mode></button>
        </div>
      </div>
      <div class="wayfind" hidden></div>
      <div class="artcard" hidden></div>
      <div class="hud__bottom">
        <button class="round round--left" type="button" data-read>${icons.book}</button>
        <button class="shutter" type="button" data-shot></button>
        <button class="round round--right" type="button" data-menu>${icons.menu}</button>
      </div>`;
    this.handChip = this.el.querySelector('.chip--hand')!;
    this.modeChip = this.el.querySelector('[data-mode]')!;
    this.readBtn = this.el.querySelector('[data-read]')!;
    this.way = this.el.querySelector('.wayfind')!;
    this.art = this.el.querySelector('.artcard')!;
    this.el.querySelector('[data-shot]')!.addEventListener('click', () => h.capture());
    this.readBtn.addEventListener('click', () => h.change({ reading: !this.s.reading }));
    this.modeChip.addEventListener('click', () => h.setMode(this.s.mode === 'indoor' ? 'outdoor' : 'indoor'));
    this.el.querySelector('[data-menu]')!.addEventListener('click', () => this.openMenu());
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

  setRemaining(m: number) {
    const r = Math.round(m);
    if (r === this.remaining) return;
    this.remaining = r;
    if (this.s.mode !== 'indoor') this.refreshWay();
  }

  /** Gợi ý hướng khi dải sáng nằm ngoài khung hình (góc có dấu, + bên phải). */
  setTurn(deg: number, inView = 50) {
    const a = Math.abs(deg);
    const k = a < inView ? '' : a > 130 ? 'turnBack' : deg > 0 ? 'turnRight' : 'turnLeft';
    if (k === this.turn) return;
    this.turn = k;
    if (this.s.mode !== 'indoor') this.refreshWay();
  }

  /** Thẻ thông tin hiện vật 3D (null = ẩn). */
  setArtifact(item: ArtifactCardItem | null, mode: string) {
    this.artState = { item, mode };
    this.refreshArt();
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
        const a = b.dataset.a as 'inspect' | 'reset' | 'close' | 'ask';
        this.artHandlers?.[a]();
      }),
    );
  }

  private refreshHand() {
    const span = this.handChip.querySelector('span')!;
    const st = this.handState;
    this.handChip.classList.toggle('show', st !== 'off');
    this.handChip.classList.toggle('hold', st === 'hold');
    span.textContent = st === 'hold' ? t('handHolding') : st === 'loading' ? t('handLoading') : st === 'seen' ? t('handSeen') : '';
  }

  /** Trạng thái dẫn đường; chỉ vẽ lại khi chữ hoặc nút thay đổi. */
  setGuide(g: GuideState) {
    this.guide = { ...g };
    if (this.s.mode !== 'guide') return;
    const key = this.guideKey();
    if (key !== this.guideShown) this.refreshWay();
  }
  private guide: GuideState = { phase: 'idle', blocked: false, floorNow: 1, floorTo: 1, remaining: 0, accuracy: NaN, routeState: 'none' };
  private guideShown = '';

  private guideKey() {
    const g = this.guide;
    return `${getLang()}|${g.phase}|${this.guideText()}`;
  }

  private guideText() {
    const g = this.guide;
    const vi = getLang() === 'vi';
    const name = vi ? DESTINATION.shortVi : DESTINATION.shortEn;
    const gps = Number.isFinite(g.accuracy) && g.accuracy > 20 ? ` · ${t('guideGps')(Math.round(g.accuracy))}` : '';
    if (g.phase === 'locating') return t('guideLocating') + (Number.isFinite(g.accuracy) ? ` · ${t('guideGps')(Math.round(g.accuracy))}` : '');
    if (g.phase === 'floor') return g.floorTo < g.floorNow ? t('guideGoDown')(g.floorTo) : t('guideGoUp')(g.floorTo);
    if (g.phase === 'arrived') return t('guideArrived')(name);
    if (g.blocked) return t('guideBlocked');
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
    const action = g.phase === 'floor'
      ? `<button class="btn" type="button" data-gfloor>${t('guideFloorDone')(g.floorTo)}</button>`
      : `<button class="btn btn--ghost" type="button" data-gchange>${t('guideChange')}</button>`;
    this.way.innerHTML = `
      <span class="wayfind__text" aria-live="polite">${this.guideText()}</span>
      ${action}
      <button class="wayfind__x" type="button" data-gexit aria-label="${t('guideExit')}" title="${t('guideExit')}">×</button>`;
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
    this.way.classList.toggle('wayfind--compact', this.s.mode === 'guide');
    if (this.s.mode === 'guide') {
      this.refreshGuide();
      return;
    }
    const out = this.s.mode === 'outdoor';
    this.way.hidden = !out;
    if (!out) return;
    this.way.innerHTML = `
      <strong>${t('outdoorFollow')}</strong>
      <span class="en">${other('outdoorFollow')}</span>
      <span>${this.turn ? `<b style="font-weight:600">${t(this.turn)}</b>` : this.remaining > 2 ? t('outdoorLeft')(this.remaining) : t('arrivedNear')}</span>
      <div class="row">
        <button class="btn btn--ghost" type="button" data-align>${t('outdoorAlign')}</button>
        <button class="btn" type="button" data-in>${t('arrived')}</button>
      </div>`;
    this.way.querySelector('[data-align]')!.addEventListener('click', () => this.h.outdoorAlign());
    this.way.querySelector('[data-in]')!.addEventListener('click', () => this.h.arrived());
  }

  refresh() {
    const indoor = this.s.mode === 'indoor';
    (this.el.querySelector('[data-ask]') as HTMLElement).innerHTML = `<span aria-hidden="true">💬</span><span>${t('askChip')}</span>`;
    this.modeChip.innerHTML = `${indoor ? icons.door : icons.path}<span>${indoor ? t('modeIndoor') : this.s.mode === 'guide' ? t('modeGuide') : t('modeOutdoor')}</span>`;
    this.modeChip.setAttribute('aria-label', `${t('modeIndoor')} / ${t('modeOutdoor')}`);
    this.readBtn.setAttribute('aria-pressed', String(this.s.reading));
    this.readBtn.setAttribute('aria-label', t('reading'));
    this.readBtn.style.visibility = indoor ? 'visible' : 'hidden';
    (this.el.querySelector('[data-shot]') as HTMLElement).setAttribute('aria-label', t('capture'));
    (this.el.querySelector('[data-menu]') as HTMLElement).setAttribute('aria-label', t('menu'));
    this.refreshHand();
    this.refreshWay();
    this.refreshArt();
  }

  openMenu() {
    const s = this.s;
    const sw = (key: keyof Settings, label: string) =>
      `<label class="opt"><span>${label}</span><span class="switch"><input type="checkbox" data-k="${key}" ${s[key] ? 'checked' : ''}/><i></i></span></label>`;
    sheet(
      this.root,
      `<h2>${t('menu')}</h2><p class="en">${other('menu')}</p>
       ${sw('reading', t('reading'))}
       <label class="opt"><span>${t('density')}</span><input type="range" min="0.3" max="1.5" step="0.1" value="${s.density}" data-density aria-label="${t('density')}"/></label>
       ${sw('sound', t('sound'))}
       ${sw('battery', t('battery'))}
       ${sw('reduceMotion', t('reduceMotion'))}
       ${sw('guide', t('guide'))}
       <button class="opt-btn" type="button" data-stand>${t('standAt')}<small>${other('standAt')}</small></button>
       <button class="opt-btn" type="button" data-recenter>${t('recenter')}<small>${other('recenter')}</small></button>
       <button class="opt-btn" type="button" data-tut>${t('tutorial')}</button>
       <button class="opt-btn" type="button" data-help>${t('help')}</button>
       <button class="opt-btn" type="button" data-lang>${t('language')}</button>
       ${this.xrActive ? '' : `<button class="opt-btn" type="button" data-guide>${t('guideMenu')}<small>${other('guideMenu')}</small></button>`}
       <button class="opt-btn" type="button" data-refloor>${t('xrReplace')}<small>${other('xrReplace')}</small></button>
       ${this.xrActive ? `<button class="opt-btn" type="button" data-exitxr>${t('exitXr')}</button>` : ''}
       <p class="fine" style="margin-top:12px">${t('privacy')}</p>
       <div class="actions"><button class="btn btn--ghost" type="button" data-close>${t('close')}</button></div>`,
      (sh, close) => {
        sh.querySelectorAll<HTMLInputElement>('input[data-k]').forEach((i) =>
          i.addEventListener('change', () => this.h.change({ [i.dataset.k as string]: i.checked } as Partial<Settings>)),
        );
        sh.querySelector<HTMLInputElement>('[data-density]')!.addEventListener('input', (e) =>
          this.h.change({ density: parseFloat((e.target as HTMLInputElement).value) }),
        );
        sh.querySelector('[data-close]')!.addEventListener('click', close);
        sh.querySelector('[data-stand]')!.addEventListener('click', () => { close(); this.openPanelPicker(); });
        sh.querySelector('[data-recenter]')!.addEventListener('click', () => {
          close();
          sheet(this.root, `<h2>${t('recenter')}</h2><p class="en">${other('recenter')}</p><p>${t('recenterHint')}</p>
            <div class="actions"><button class="btn" type="button" data-ok>${t('recenter')}</button><button class="link" type="button" data-x>${t('close')}</button></div>`,
            (s2, c2) => {
              s2.querySelector('[data-ok]')!.addEventListener('click', () => { c2(); this.h.recenter(); });
              s2.querySelector('[data-x]')!.addEventListener('click', c2);
            });
        });
        sh.querySelector('[data-tut]')!.addEventListener('click', () => { close(); this.h.tutorial(); });
        sh.querySelector('[data-help]')!.addEventListener('click', () => {
          close();
          sheet(this.root, `<h2>${t('help')}</h2><p class="en">${other('help')}</p><p>${t('helpBody')}</p><p class="fine">${t('privacy')}</p>
            <div class="actions"><button class="btn btn--ghost" type="button" data-x>${t('close')}</button></div>`,
            (s2, c2) => s2.querySelector('[data-x]')!.addEventListener('click', c2));
        });
        sh.querySelector('[data-lang]')!.addEventListener('click', () => { close(); setLang(getLang() === 'vi' ? 'en' : 'vi'); });
        sh.querySelector('[data-guide]')?.addEventListener('click', () => { close(); this.h.guideOpen?.(); });
        sh.querySelector('[data-refloor]')?.addEventListener('click', () => { close(); this.h.replaceFloor?.(); });
        sh.querySelector('[data-exitxr]')?.addEventListener('click', () => { close(); this.h.exitXr?.(); });
      },
    );
  }

  openPanelPicker() {
    const btns = landmarkPanels
      .map((p) => `<button type="button" class="${p.side}" data-p="${p.id}"><b>${p.id}</b><small>${PANEL_LABEL[p.id] ?? ''}</small></button>`)
      .join('');
    sheet(
      this.root,
      `<h2>${t('standAt')}</h2><p class="en">${other('standAt')}</p><p>${t('standAtHint')}</p>
       <div class="panels">${btns}</div>
       <div class="actions"><button class="link" type="button" data-x>${t('close')}</button></div>`,
      (sh, close) => {
        sh.querySelectorAll<HTMLButtonElement>('[data-p]').forEach((b) =>
          b.addEventListener('click', () => { close(); this.h.standAt(b.dataset.p!); }),
        );
        sh.querySelector('[data-x]')!.addEventListener('click', close);
      },
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
