import { cpSync, copyFileSync, readFileSync } from 'node:fs';

const built = new URL('../dist/', import.meta.url);
const root = new URL('../../', import.meta.url);
const html = readFileSync(new URL('index.html', built), 'utf8');
if (!html.includes('./assets/index-')) throw new Error('Chưa có bản build hợp lệ. Chạy npm run build trước.');
// Copy assets trước entrypoint; giữ bundle cũ để tab đang mở vẫn tải được.
cpSync(new URL('assets/', built), new URL('assets/', root), { recursive: true });
copyFileSync(new URL('index.html', built), new URL('index.html', root));
copyFileSync(new URL('sw.js', built), new URL('sw.js', root));
console.log('Đã cập nhật bản chạy ở thư mục dự án.');
