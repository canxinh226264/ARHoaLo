import { t, other, getLang, setLang, onLang } from './i18n';
import { icons } from './icons';
import { el, sheet } from './screens';
import { landmarkPanels } from '../config/room';

export interface Settings {
  mode: 'indoor' | 'outdoor';
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

export class Hud {
  readonly el: HTMLElement;
  private handChip: HTMLElement;
  private modeChip: HTMLButtonElement;
  private readBtn: HTMLButtonElement;
  private way: HTMLElement;
  private art: HTMLElement;
  private artState: { item: ArtifactCardItem | null; mode: string } = { item: null, mode: 'hidden' };
  artHandlers: { inspect(): void; reset(): void; close(): void } | null = null;
  private handState: 'off' | 'seen' | 'hold' | 'loading' = 'off';
  private remaining = 0;
  private turn: '' | 'turnLeft' | 'turnRight' | 'turnBack' = '';
  xrActive = false;

  constructor(private root: HTMLElement, private s: Settings, private h: HudHandlers) {
    this.el = el('div', 'hud');
    this.el.innerHTML = `
      <div class="hud__top">
        <div class="chip chip--hand" aria-live="polite">${icons.hand}<span></span></div>
        <button class="chip" type="button" data-mode></button>
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
    if (this.s.mode === 'outdoor') this.refreshWay();
  }

  /** Gợi ý hướng khi dải sáng nằm ngoài khung hình (góc có dấu, + bên phải). */
  setTurn(deg: number) {
    const a = Math.abs(deg);
    const k = a < 50 ? '' : a > 130 ? 'turnBack' : deg > 0 ? 'turnRight' : 'turnLeft';
    if (k === this.turn) return;
    this.turn = k;
    if (this.s.mode === 'outdoor') this.refreshWay();
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
    this.art.innerHTML = `
      <strong>${title}</strong>
      <span class="en">${sub}</span>
      ${desc ? `<p>${desc}</p>` : ''}
      <span class="hint">${t('artHint')}</span>
      <div class="row">
        ${inspecting
          ? `<button class="btn btn--ghost" type="button" data-a="reset">${t('artReset')}</button>
             <button class="btn" type="button" data-a="close">${t('artClose')}</button>`
          : `<button class="btn" type="button" data-a="inspect">${t('artInspect')}</button>`}
      </div>`;
    this.art.querySelectorAll<HTMLButtonElement>('[data-a]').forEach((b) =>
      b.addEventListener('click', () => {
        const a = b.dataset.a as 'inspect' | 'reset' | 'close';
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

  private refreshWay() {
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
    this.modeChip.innerHTML = `${indoor ? icons.door : icons.path}<span>${indoor ? t('modeIndoor') : t('modeOutdoor')}</span>`;
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
