import { t, other, getLang, setLang, onLang } from './i18n';
import { icons, illustrations } from './icons';

const brand = (f: string) => new URL(`./brand/${f}`, document.baseURI).href;

export function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls = '', html = ''): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
}

/** Màn khởi động: cổng G1 – nền vàng cam, cụm hoa nét xanh, biển tên G2. */
export function showGate(root: HTMLElement, onStart: () => void) {
  const g = el('section', 'gate');
  g.setAttribute('aria-label', 'Đón Gió Xuân');
  const render = () => {
    const vi = getLang() === 'vi';
    g.innerHTML = `
      <div class="gate__top">
        <div class="lang-switch" role="group" aria-label="Ngôn ngữ / Language">
          <button type="button" data-l="vi" aria-pressed="${vi}">Tiếng Việt</button>
          <button type="button" data-l="en" aria-pressed="${!vi}">English</button>
        </div>
      </div>
      <div class="gate__stage">
        <img class="gate__blossom" src="${brand('blossom.webp')}" alt="" />
        <div class="gate__sign">
          <p class="gate__kicker">Trưng bày | <span class="en">Exhibition</span></p>
          <img class="gate__title" src="${brand('title.webp')}" alt="Đón Gió Xuân – Welcoming The Spring Breeze" />
          <p class="gate__line">${t('exhibitionLine')}</p>
          <p class="gate__line en">${other('exhibitionLine')}</p>
          <button class="btn" type="button" data-start>${t('start')}<small>${other('start')}</small></button>
        </div>
      </div>
      <p class="gate__foot">${t('occasion')}<span class="gate__status" data-status></span></p>`;
    g.querySelectorAll<HTMLButtonElement>('[data-l]').forEach((b) =>
      b.addEventListener('click', () => setLang(b.dataset.l as 'vi' | 'en')),
    );
    g.querySelector('[data-start]')!.addEventListener('click', onStart);
  };
  render();
  onLang(render);
  root.appendChild(g);
  return {
    el: g,
    setStatus(s: string) {
      const n = g.querySelector('[data-status]');
      if (n) n.textContent = s;
    },
    leave() {
      g.classList.add('leaving');
      setTimeout(() => g.remove(), 650);
    },
  };
}

export interface PermissionChoice {
  mode: 'indoor' | 'outdoor';
  xr: boolean;
}

/** Tấm giải thích quyền camera + cảm biến, chọn vị trí hiện tại. */
/**
 * `onAllow` chạy ĐỒNG BỘ trong sự kiện bấm nút: iOS chỉ cho gọi
 * DeviceOrientationEvent.requestPermission() trực tiếp trong cử chỉ người dùng.
 */
export function showPermissionSheet(
  root: HTMLElement,
  xrSupported: boolean,
  onAllow: (c: PermissionChoice) => void,
): Promise<PermissionChoice | null> {
  return new Promise((resolve) => {
    const back = el('div', 'sheet-backdrop');
    back.innerHTML = `
      <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="perm-h">
        <h2 id="perm-h">${t('permTitle')}</h2>
        <p class="en">${other('permTitle')}</p>
        <div class="perm-item">${icons.camera}<div><h3>${t('permCamera')}</h3><p>${t('permCameraBody')}</p></div></div>
        <div class="perm-item">${icons.motion}<div><h3>${t('permMotion')}</h3><p>${t('permMotionBody')}</p></div></div>
        <h3 style="margin:14px 0 2px;font-weight:500;font-size:var(--s-md)">${t('whereTitle')}</h3>
        <div class="choice" role="radiogroup">
          <label><input type="radio" name="where" value="indoor" checked /> ${t('whereIn')}</label>
          <label><input type="radio" name="where" value="outdoor" /> ${t('whereOut')}</label>
        </div>
        ${xrSupported ? `<label class="check"><input type="checkbox" data-xr /> <span>${t('xrOption')}</span></label>` : ''}
        <div class="actions">
          <button class="btn" type="button" data-ok>${t('allow')}<small>${other('allow')}</small></button>
          <button class="link" type="button" data-back>${t('back')}</button>
        </div>
      </div>`;
    root.appendChild(back);
    (back.querySelector('[data-ok]') as HTMLButtonElement).focus();
    const close = (v: PermissionChoice | null) => {
      back.remove();
      resolve(v);
    };
    back.querySelector('[data-ok]')!.addEventListener('click', () => {
      const mode = (back.querySelector('input[name=where]:checked') as HTMLInputElement).value as 'indoor' | 'outdoor';
      const xr = !!(back.querySelector('[data-xr]') as HTMLInputElement | null)?.checked;
      onAllow({ mode, xr });
      close({ mode, xr });
    });
    back.querySelector('[data-back]')!.addEventListener('click', () => close(null));
  });
}

/** Onboarding 3 bước (đây là chuỗi thao tác thật nên có chấm thứ tự). */
export function showOnboarding(root: HTMLElement): Promise<void> {
  return new Promise((resolve) => {
    const keys = ['ob1', 'ob2', 'ob3'] as const;
    let i = 0;
    const box = el('section', 'ob');
    box.setAttribute('role', 'dialog');
    box.setAttribute('aria-live', 'polite');
    const render = () => {
      box.innerHTML = `
        ${illustrations[i]}
        <p>${t(keys[i])}</p>
        <p class="en">${other(keys[i])}</p>
        <div class="ob__bar">
          <button class="link" type="button" data-skip>${t('skip')}</button>
          <div class="ob__dots" aria-hidden="true">${keys.map((_, k) => `<i class="${k === i ? 'on' : ''}"></i>`).join('')}</div>
          <button class="btn" type="button" data-next>${i < 2 ? t('next') : t('done')}</button>
        </div>`;
      box.querySelector('[data-next]')!.addEventListener('click', () => {
        if (i < 2) {
          i++;
          render();
        } else finish();
      });
      box.querySelector('[data-skip]')!.addEventListener('click', finish);
    };
    const finish = () => {
      box.remove();
      try { localStorage.setItem('dgx-onboarded', '1'); } catch { /* bỏ qua */ }
      resolve();
    };
    render();
    root.appendChild(box);
  });
}

export function hasOnboarded() {
  try { return localStorage.getItem('dgx-onboarded') === '1'; } catch { return false; }
}

let toastTimer = 0;
export function toast(root: HTMLElement, msg: string, ms = 3200, warn = false) {
  root.querySelectorAll('.toast').forEach((n) => n.remove());
  const n = el('div', 'toast' + (warn ? ' warn' : ''), msg);
  n.setAttribute('role', 'status');
  root.appendChild(n);
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => n.remove(), ms);
}

/** Tấm trượt chung (menu, chọn panel, ảnh chụp, trợ giúp). */
export function sheet(root: HTMLElement, html: string, onMount?: (s: HTMLElement, close: () => void) => void) {
  const back = el('div', 'sheet-backdrop');
  back.innerHTML = `<div class="sheet" role="dialog" aria-modal="true">${html}</div>`;
  const close = () => back.remove();
  back.addEventListener('click', (e) => {
    if (e.target === back) close();
  });
  root.appendChild(back);
  onMount?.(back.querySelector('.sheet') as HTMLElement, close);
  return close;
}
