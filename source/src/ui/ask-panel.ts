import { t, getLang } from './i18n';
import { el } from './screens';
import { speak, stopSpeaking, tts } from './speech';
import { askGuide, buildContext, type AskItem, type AskTurn, type AskError } from '../core/ask-service';

/**
 * Khung hỏi đáp: gõ hoặc nói câu hỏi, tuỳ chọn kèm ảnh camera, trợ lý trả lời bằng chữ
 * (và đọc thành tiếng nếu bật âm thanh). Cuộc trò chuyện được giữ lại giữa các lần mở.
 */
export interface AskDeps {
  items: AskItem[];
  /** Panel/hiện vật đang hiện thẻ (để hỏi tiếp về nó). */
  current(): AskItem | null;
  /** Một câu mô tả tình trạng (đang dẫn đường, còn bao xa…). */
  status(): string;
  /** Ảnh camera hiện tại (base64 JPEG) hoặc null nếu không có camera. */
  photo(): string | null;
  /** Được phép đọc thành tiếng (âm thanh đang bật). */
  speak(): boolean;
}

type Recognition = {
  lang: string;
  interimResults: boolean;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  start(): void;
  stop(): void;
};

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export class AskPanel {
  private history: AskTurn[] = [];
  private log: { who: 'me' | 'bot' | 'err'; text: string; photo?: boolean }[] = [];
  private back: HTMLElement | null = null;
  private busy = false;
  private withPhoto = false;
  private rec: Recognition | null = null;

  constructor(private root: HTMLElement, private deps: AskDeps) {}

  get isOpen() {
    return !!this.back;
  }

  /** @param preset câu hỏi điền sẵn và gửi luôn; @param photo bật "kèm ảnh" */
  open(preset?: string, photo = false) {
    this.close();
    this.withPhoto = photo && !!this.deps.photo;
    const back = el('div', 'sheet-backdrop');
    back.innerHTML = `<div class="sheet ask" role="dialog" aria-modal="true" aria-labelledby="ask-h"></div>`;
    back.addEventListener('click', (e) => {
      if (e.target === back) this.close();
    });
    this.root.appendChild(back);
    this.back = back;
    this.render();
    if (preset) this.send(preset);
    else back.querySelector<HTMLInputElement>('.ask__input')?.focus();
  }

  close() {
    this.rec?.stop();
    if (this.back) stopSpeaking();
    this.back?.remove();
    this.back = null;
  }

  private suggestions(): string[] {
    const cur = this.deps.current();
    const vi = getLang() === 'vi';
    const list: string[] = [];
    if (cur) {
      const name = vi ? cur.titleVi : cur.titleEn;
      list.push(t('askAbout')(name), t('askMeaning')(name));
    }
    list.push(t('askWhatIsThis'), t('askToilet'), t('askOverview'));
    return list;
  }

  private render() {
    const sh = this.back?.querySelector<HTMLElement>('.sheet');
    if (!sh) return;
    const cur = this.deps.current();
    const vi = getLang() === 'vi';
    const canSpeak = !!tts();
    const SR = (window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition });
    const canMic = !!(SR.SpeechRecognition || SR.webkitSpeechRecognition);
    sh.innerHTML = `
      <div class="ask__head"><h2 id="ask-h">${t('askTitle')}</h2>
        <button class="ask__x" type="button" data-x aria-label="${t('close')}">×</button></div>
      <p class="fine ask__note">${t('askNote')}</p>
      ${cur ? `<p class="ask__about">${t('askAboutNow')} <b>${esc(vi ? cur.titleVi : cur.titleEn)}</b></p>` : ''}
      <div class="ask__log" aria-live="polite">${this.log
        .map((m) => `<div class="ask__msg ask__msg--${m.who}">${m.photo ? '📷 ' : ''}${esc(m.text)}${
          m.who === 'bot' && canSpeak ? ` <button class="ask__say" type="button" data-say aria-label="${t('askSpeak')}">🔊</button>` : ''
        }</div>`)
        .join('')}${this.busy ? `<div class="ask__msg ask__msg--bot ask__typing">${t('askThinking')}</div>` : ''}</div>
      <div class="ask__chips">${this.suggestions().map((s) => `<button class="ask__chip" type="button" data-q="${esc(s)}">${esc(s)}</button>`).join('')}</div>
      <form class="ask__bar">
        <input class="ask__input" type="text" enterkeyhint="send" maxlength="300" placeholder="${t('askPlaceholder')}" aria-label="${t('askPlaceholder')}" ${this.busy ? 'disabled' : ''}/>
        ${canMic ? `<button class="ask__icon" type="button" data-mic aria-label="${t('askMic')}" title="${t('askMic')}">🎤</button>` : ''}
        <button class="ask__icon" type="button" data-photo aria-pressed="${this.withPhoto}" aria-label="${t('askPhoto')}" title="${t('askPhoto')}">📷</button>
        <button class="btn ask__send" type="submit" ${this.busy ? 'disabled' : ''}>${t('askSend')}</button>
      </form>`;
    const logEl = sh.querySelector<HTMLElement>('.ask__log')!;
    logEl.scrollTop = logEl.scrollHeight;
    sh.querySelector('[data-x]')!.addEventListener('click', () => this.close());
    sh.querySelectorAll<HTMLButtonElement>('[data-q]').forEach((b) =>
      b.addEventListener('click', () => this.send(b.dataset.q!, b.dataset.q === t('askWhatIsThis') ? true : undefined)),
    );
    const bots = this.log.filter((m) => m.who === 'bot');
    sh.querySelectorAll<HTMLButtonElement>('[data-say]').forEach((b, i) => b.addEventListener('click', () => this.say(bots[i].text)));
    sh.querySelector('[data-photo]')!.addEventListener('click', () => {
      this.withPhoto = !this.withPhoto;
      this.render();
    });
    sh.querySelector('[data-mic]')?.addEventListener('click', () => this.listen());
    sh.querySelector('form')!.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = sh.querySelector<HTMLInputElement>('.ask__input')!.value.trim();
      if (v) this.send(v);
    });
  }

  private errorText(e: AskError) {
    return e === 'offline' ? t('askOffline') : e === 'busy' ? t('askBusy') : e === 'no-key' ? t('askNoKey') : t('askFailed');
  }

  async send(question: string, forcePhoto?: boolean) {
    if (this.busy || !question.trim()) return;
    const usePhoto = forcePhoto ?? this.withPhoto;
    const image = usePhoto ? this.deps.photo() : null;
    this.log.push({ who: 'me', text: question, photo: !!image });
    this.busy = true;
    this.render();
    const lang = getLang() === 'vi' ? 'vi' : 'en';
    const context = buildContext({ items: this.deps.items, current: this.deps.current(), status: this.deps.status() });
    const r = await askGuide({ question, lang, context, history: this.history, image });
    this.busy = false;
    if ('answer' in r) {
      this.history.push({ q: question, a: r.answer });
      this.log.push({ who: 'bot', text: r.answer });
      if (this.deps.speak()) this.say(r.answer);
    } else {
      this.log.push({ who: 'err', text: this.errorText(r.error) });
    }
    if (this.back) this.render();
  }

  private say(text: string) {
    speak(text, getLang());
  }

  private listen() {
    const W = window as unknown as { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition };
    const Ctor = W.SpeechRecognition || W.webkitSpeechRecognition;
    if (!Ctor || this.busy) return;
    this.rec?.stop();
    const rec = new Ctor();
    rec.lang = getLang() === 'vi' ? 'vi-VN' : 'en-US';
    rec.interimResults = false;
    const mic = this.back?.querySelector<HTMLElement>('[data-mic]');
    mic?.classList.add('on');
    rec.onresult = (e) => {
      const text = e.results[0]?.[0]?.transcript?.trim();
      if (text) this.send(text);
    };
    rec.onend = rec.onerror = () => mic?.classList.remove('on');
    this.rec = rec;
    try {
      rec.start();
    } catch {
      mic?.classList.remove('on');
    }
  }
}
