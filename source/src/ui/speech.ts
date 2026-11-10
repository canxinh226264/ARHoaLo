/**
 * Đọc to bằng giọng của trình duyệt (Web Speech API), dùng chung cho thẻ panel và khung hỏi đáp.
 * Mỗi lúc chỉ đọc một nội dung: nội dung mới hoặc lệnh dừng sẽ kết thúc nội dung đang đọc.
 */
export type SpeechLang = 'vi' | 'en';
export type SpeakResult = 'ok' | 'no-voice' | 'unsupported';

/** Mục chưa có nội dung trong dữ liệu (BTC chưa cung cấp): không đọc thành tiếng. */
const PENDING = '[CẦN BỔ SUNG]';
/** Chrome dừng giữa chừng với câu quá dài, nên chia nhỏ rồi đọc nối tiếp. */
const MAX_CHUNK = 200;

/**
 * Bộ đọc to của trình duyệt, null nếu không có. Trình duyệt trong app (Zalo, Facebook, Messenger…)
 * trên Android không có speechSynthesis: gọi thẳng tên này sẽ lỗi ReferenceError.
 */
export function tts(): SpeechSynthesis | null {
  return typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis && typeof SpeechSynthesisUtterance !== 'undefined'
    ? window.speechSynthesis
    : null;
}

export function speechLocale(lang: SpeechLang) {
  return lang === 'vi' ? 'vi-VN' : 'en-US';
}

/** Chữ cần đọc cho một thẻ: tiêu đề rồi nội dung, đúng ngôn ngữ; bỏ phần chưa có nội dung. */
export function cardSpeech(item: { titleVi: string; titleEn: string; descVi: string; descEn: string }, lang: SpeechLang) {
  const title = (lang === 'vi' ? item.titleVi : item.titleEn).replace(/\s+[·–—]\s+/g, '. ');
  const desc = (lang === 'vi' ? item.descVi : item.descEn).trim();
  return desc && !desc.startsWith(PENDING) ? `${title}.\n${desc}` : `${title}.`;
}

/** Chia theo câu, câu dài thì chia tiếp theo dấu phẩy rồi theo khoảng trắng. */
export function splitForSpeech(text: string, max = MAX_CHUNK): string[] {
  const out: string[] = [];
  const push = (s: string) => {
    const t = s.trim();
    if (t) out.push(t);
  };
  for (const sentence of text.split(/(?<=[.!?…:;])\s+|\n+/)) {
    if (sentence.length <= max) {
      push(sentence);
      continue;
    }
    let cur = '';
    for (const word of sentence.split(/(?<=,)\s+|\s+/)) {
      if (cur && cur.length + word.length + 1 > max) {
        push(cur);
        cur = '';
      }
      cur = cur ? `${cur} ${word}` : word;
    }
    push(cur);
  }
  return out;
}

let generation = 0;
let pendingDone: (() => void) | null = null;

function finish(gen: number) {
  if (gen !== generation || !pendingDone) return;
  const done = pendingDone;
  pendingDone = null;
  done();
}

/**
 * Đọc `text` bằng giọng của `lang`. `onDone` được gọi đúng một lần: khi đọc xong, khi bị dừng
 * hoặc khi nội dung khác bắt đầu đọc. 'no-voice' = máy không có giọng đọc ngôn ngữ đó (vẫn thử đọc).
 */
export function speak(text: string, lang: SpeechLang, onDone?: () => void): SpeakResult {
  const synth = tts();
  if (!synth) return 'unsupported';
  stopSpeaking();
  const gen = ++generation;
  pendingDone = onDone ?? null;
  const locale = speechLocale(lang);
  const voices = synth.getVoices();
  const voice = voices.find((v) => v.lang?.replace('_', '-').toLowerCase() === locale.toLowerCase()) ?? voices.find((v) => v.lang?.toLowerCase().startsWith(lang));
  const parts = splitForSpeech(text);
  parts.forEach((part, i) => {
    const u = new SpeechSynthesisUtterance(part);
    u.lang = locale;
    if (voice) u.voice = voice;
    if (i === parts.length - 1) {
      u.onend = () => finish(gen);
      u.onerror = () => finish(gen);
    }
    synth.speak(u);
  });
  if (!parts.length) finish(gen);
  // danh sách giọng rỗng nghĩa là trình duyệt chưa nạp xong, không kết luận là thiếu giọng
  return voices.length && !voice ? 'no-voice' : 'ok';
}

export function stopSpeaking() {
  generation++;
  tts()?.cancel();
  const done = pendingDone;
  pendingDone = null;
  done?.();
}
