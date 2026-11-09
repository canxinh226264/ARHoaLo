/* Service worker – sinh tự động khi build (vite.config.ts). Không sửa tay trong dist. */
const VERSION = 'b48371ff05';
const CACHE = 'dgx-' + VERSION;
const PRECACHE = ["./","assets/eb-garamond-latin-400-italic-DSEbMgZu.woff2","assets/eb-garamond-latin-400-normal-BCNrxLz_.woff2","assets/eb-garamond-latin-500-normal-DehAIUv0.woff2","assets/eb-garamond-latin-600-normal-DHwxsLHv.woff2","assets/eb-garamond-vietnamese-400-italic-DQ8HKnks.woff2","assets/eb-garamond-vietnamese-400-normal-CLvJdMEL.woff2","assets/eb-garamond-vietnamese-500-normal-BCT1_K6u.woff2","assets/eb-garamond-vietnamese-600-normal-Dmi8L14S.woff2","assets/index-Bx9_v6fl.css","assets/index-CZjGE-65.js","assets/mindar-image.prod-D0hmC17B.js","assets/vision_bundle-7Scx6tXS.js","brand/blossom.webp","brand/title-cream.webp","brand/title.webp","index.html","markers/artifacts.mind","mediapipe/vision_wasm_internal.js","mediapipe/vision_wasm_internal.wasm","models/hand_landmarker.task","models/hienvat/bucket.glb","models/hienvat/crate.glb"];

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

// Cache-first cho mọi request cùng origin; điều hướng trả về index.html khi offline.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
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
