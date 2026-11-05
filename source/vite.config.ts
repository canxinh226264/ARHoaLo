import { defineConfig, type Plugin } from 'vite';
import { readdirSync, statSync, writeFileSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';

/**
 * Sinh service worker sau khi build: precache toàn bộ file trong dist
 * (JS, CSS, font, ảnh, wasm MediaPipe, model bàn tay) để chạy offline
 * sau lần tải đầu. Phiên bản cache = hash nội dung, đổi khi build lại.
 */
function serviceWorker(): Plugin {
  let outDir = 'dist';
  return {
    name: 'dgx-service-worker',
    apply: 'build',
    configResolved(c) {
      outDir = c.build.outDir;
    },
    closeBundle() {
      const files: string[] = [];
      const walk = (d: string) => {
        for (const f of readdirSync(d)) {
          const p = join(d, f);
          if (statSync(p).isDirectory()) walk(p);
          else files.push(relative(outDir, p).split('\\').join('/'));
        }
      };
      walk(outDir);
      const list = files.filter((f) => f !== 'sw.js' && !f.endsWith('.woff') && !f.startsWith('markers-src/'));
      const hash = createHash('sha1');
      for (const f of list.sort()) hash.update(f).update(readFileSync(join(outDir, f)));
      const version = hash.digest('hex').slice(0, 10);
      const tpl = readFileSync('src/sw-template.js', 'utf8');
      const sw = tpl
        .replace('__VERSION__', version)
        .replace('__PRECACHE__', JSON.stringify(['./', ...list]));
      writeFileSync(join(outDir, 'sw.js'), sw);
      // eslint-disable-next-line no-console
      console.log(`[sw] precache ${list.length} files, version ${version}`);
    },
  };
}

export default defineConfig({
  // Đường dẫn tương đối: deploy được ở gốc tên miền hoặc thư mục con (GitHub Pages).
  base: './',
  plugins: [serviceWorker()],
  build: {
    target: 'es2020',
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 1200,
  },
  server: { host: true },
});
