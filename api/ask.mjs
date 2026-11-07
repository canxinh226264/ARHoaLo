/**
 * Vercel Function: hỏi đáp cho khách tham quan qua Gemini.
 *
 * Key KHÔNG nằm trong web: đặt biến môi trường GEMINI_API_KEY trong Vercel
 * (Project → Settings → Environment Variables), rồi deploy lại.
 * Tuỳ chọn: GEMINI_MODEL (mặc định gemini-3.5-flash-lite), ALLOWED_ORIGINS
 * (danh sách tên miền được gọi, cách nhau dấu phẩy; mặc định chấp nhận *.vercel.app và localhost).
 *
 * Lưu ý gói miễn phí của Gemini: hạn mức tính chung cho mọi khách, và nội dung gửi lên
 * được Google dùng để cải thiện sản phẩm. App chỉ gửi ảnh khi khách tự bật "kèm ảnh".
 */
const API = 'https://generativelanguage.googleapis.com/v1beta/models';
const MAX_QUESTION = 500;
const MAX_CONTEXT = 8000;
const MAX_HISTORY = 6;
const MAX_IMAGE_B64 = 1_200_000; // ~900 KB ảnh JPEG
const TIMEOUT_MS = 20000;

const SYSTEM = {
  vi: `Bạn là hướng dẫn viên ảo của trưng bày "Đón Gió Xuân" tại Di tích Nhà tù Hỏa Lò, Hà Nội.
Trả lời bằng tiếng Việt, ngắn gọn (tối đa 3 câu), lịch sự, dễ đọc trên màn hình điện thoại.
Chỉ dùng thông tin trong phần THÔNG TIN TRƯNG BÀY và điều khách thấy trong ảnh (nếu có).
Không tự bịa sự kiện, ngày tháng, con số lịch sử. Nếu thông tin chưa có hoặc ghi [CẦN BỔ SUNG],
hãy nói chưa có thông tin và gợi ý khách hỏi nhân viên tại di tích.
Nếu câu hỏi không liên quan tới chuyến tham quan, trả lời rất ngắn và hướng khách quay lại trưng bày.`,
  en: `You are the virtual guide of the "Welcoming The Spring Breeze" exhibition at the Hỏa Lò Prison Relic, Hanoi.
Answer in English, briefly (at most 3 sentences), politely, easy to read on a phone screen.
Use only the EXHIBITION INFORMATION and what the visitor shows in the photo (if any).
Never invent historical events, dates or numbers. If the information is missing or marked [CẦN BỔ SUNG],
say it is not available yet and suggest asking the staff on site.
If the question is unrelated to the visit, answer very briefly and steer back to the exhibition.`,
};

function allowed(origin) {
  if (!origin) return true; // cùng trang (một số trình duyệt không gửi Origin)
  const list = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  try {
    const host = new URL(origin).hostname;
    if (list.length) return list.some((o) => o === origin || o === host);
    return host.endsWith('.vercel.app') || host === 'localhost' || host === '127.0.0.1';
  } catch {
    return false;
  }
}

const clip = (s, n) => (typeof s === 'string' ? s.slice(0, n) : '');

/** Dựng yêu cầu generateContent từ dữ liệu khách gửi (đã kiểm tra độ dài). */
export function buildRequest(body) {
  const lang = body.lang === 'en' ? 'en' : 'vi';
  const question = clip(body.question, MAX_QUESTION).trim();
  const context = clip(body.context, MAX_CONTEXT);
  const history = Array.isArray(body.history) ? body.history.slice(-MAX_HISTORY) : [];
  const contents = [];
  for (const h of history) {
    const q = clip(h?.q, MAX_QUESTION), a = clip(h?.a, 1200);
    if (q && a) contents.push({ role: 'user', parts: [{ text: q }] }, { role: 'model', parts: [{ text: a }] });
  }
  const parts = [{ text: question }];
  if (typeof body.image === 'string' && body.image.length <= MAX_IMAGE_B64 && /^[A-Za-z0-9+/=]+$/.test(body.image)) {
    parts.push({ inlineData: { mimeType: 'image/jpeg', data: body.image } });
  }
  contents.push({ role: 'user', parts });
  return {
    question,
    request: {
      systemInstruction: { parts: [{ text: `${SYSTEM[lang]}\n\n${lang === 'vi' ? 'THÔNG TIN TRƯNG BÀY' : 'EXHIBITION INFORMATION'}:\n${context}` }] },
      contents,
      generationConfig: { maxOutputTokens: 400 },
    },
  };
}

/** Lấy chữ trả lời từ phản hồi generateContent. */
export function readAnswer(json) {
  const parts = json?.candidates?.[0]?.content?.parts;
  if (!Array.isArray(parts)) return '';
  return parts.map((p) => (typeof p?.text === 'string' ? p.text : '')).join('').trim();
}

export default async function handler(req, res, fetchImpl = fetch) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') return res.status(405).json({ error: 'method' });
  if (!allowed(req.headers.origin)) return res.status(403).json({ error: 'origin' });
  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(503).json({ error: 'no-key' });
  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== 'object') return res.status(400).json({ error: 'body' });
  const { question, request } = buildRequest(body);
  if (!question) return res.status(400).json({ error: 'question' });

  const model = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const r = await fetchImpl(`${API}/${encodeURIComponent(model)}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify(request),
      signal: ctrl.signal,
    });
    if (r.status === 429) return res.status(429).json({ error: 'busy' });
    if (!r.ok) return res.status(502).json({ error: 'upstream', status: r.status });
    const answer = readAnswer(await r.json());
    if (!answer) return res.status(502).json({ error: 'empty' });
    return res.status(200).json({ answer });
  } catch (e) {
    return res.status(e?.name === 'AbortError' ? 504 : 502).json({ error: 'network' });
  } finally {
    clearTimeout(timer);
  }
}
