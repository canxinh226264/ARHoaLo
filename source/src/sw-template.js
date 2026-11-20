/* Service worker – sinh tự động khi build (vite.config.ts). Không sửa tay trong dist. */
const VERSION = '__VERSION__';
const CACHE = 'dgx-' + VERSION;
const PRECACHE = __PRECACHE__;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then(async (cache) => {
      // Tải từng file để một file lỗi không làm hỏng cả lần cài.
      await Promise.all(
        PRECACHE.map((url) =>
          cache.add(new Request(url, { cache: 'reload' })).catch(() => undefined),
        ),
      );
      await self.skipWaiting();
    }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('dgx-') && k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'progress') {
    caches.open(CACHE).then(async (cache) => {
      const keys = await cache.keys();
      event.source && event.source.postMessage({ type: 'precache', done: keys.length, total: PRECACHE.length });
    });
  }
});

/** ms: mạng chậm quá mức này thì mở bản đã lưu, để app vẫn vào nhanh khi sóng yếu. */
const NAV_TIMEOUT = 4000;

// Trang chính (index.html): lấy bản mới từ mạng trước, để lần mở đầu sau khi cập nhật đã ra
// giao diện mới (index.html trỏ tới file JS/CSS có tên mới). Mất mạng hoặc quá chậm thì dùng bản đã lưu.
function navigate(req) {
  return new Promise((resolve) => {
    let done = false;
    const fallback = () => caches.match('./').then((hit) => hit || fetch(req));
    const timer = setTimeout(() => {
      if (done) return;
      done = true;
      resolve(fallback());
    }, NAV_TIMEOUT);
    fetch(req, { cache: 'no-cache' })
      .then((res) => {
        if (res.ok && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./', copy));
        }
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve(res);
      })
      .catch(() => {
        if (done) return;
        done = true;
        clearTimeout(timer);
        resolve(caches.match('./').then((hit) => hit || Response.error()));
      });
  });
}

// Các file còn lại: cache-first (tên file đã kèm mã nội dung nên không bị cũ).
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.mode === 'navigate') {
    event.respondWith(navigate(req));
    return;
  }
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => {
      if (hit) return hit;
      return fetch(req)
        .then((res) => {
          if (res.ok && res.type === 'basic') {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => (req.mode === 'navigate' ? caches.match('./') : Response.error()));
    }),
  );
});
