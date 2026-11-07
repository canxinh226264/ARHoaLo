import knowledge from '../config/knowledge.json';

/**
 * Gọi trợ lý hỏi đáp (Gemini qua API /api/ask trên Vercel; key nằm ở máy chủ).
 * Ngữ cảnh gửi kèm chỉ là thông tin trưng bày trong config, để trợ lý không bịa thêm.
 */
export interface AskTurn {
  q: string;
  a: string;
}

export interface AskItem {
  titleVi: string;
  titleEn: string;
  descVi: string;
  descEn: string;
  kind?: string;
}

export type AskError = 'offline' | 'busy' | 'no-key' | 'failed';

const ENDPOINT = './api/ask';
const TIMEOUT_MS = 25000;

/** Dựng phần THÔNG TIN TRƯNG BÀY: thông tin chung, danh sách panel/hiện vật, vật đang xem và tình trạng dẫn đường. */
export function buildContext(opts: { items: AskItem[]; current?: AskItem | null; status?: string }) {
  const lines = [...knowledge.factsVi];
  lines.push('Các panel và hiện vật ứng dụng nhận ra được:');
  for (const it of opts.items) lines.push(`- ${it.titleVi}${it.descVi ? `: ${it.descVi}` : ''}`);
  if (opts.current) {
    lines.push(`Khách đang xem: ${opts.current.titleVi} (${opts.current.titleEn}). ${opts.current.descVi || '[CẦN BỔ SUNG]'}`);
  }
  if (opts.status) lines.push(`Tình trạng hiện tại: ${opts.status}`);
  return lines.join('\n');
}

export async function askGuide(
  p: { question: string; lang: 'vi' | 'en'; context: string; history: AskTurn[]; image?: string | null },
  fetchImpl: typeof fetch = fetch,
): Promise<{ answer: string } | { error: AskError }> {
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return { error: 'offline' };
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetchImpl(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: p.question, lang: p.lang, context: p.context, history: p.history.slice(-6), image: p.image ?? undefined }),
      signal: ctrl.signal,
    });
    if (res.status === 429) return { error: 'busy' };
    if (res.status === 503) return { error: 'no-key' };
    if (!res.ok) return { error: 'failed' };
    const j = (await res.json()) as { answer?: string };
    return j.answer ? { answer: j.answer } : { error: 'failed' };
  } catch {
    return { error: navigator.onLine === false ? 'offline' : 'failed' };
  } finally {
    clearTimeout(timer);
  }
}
