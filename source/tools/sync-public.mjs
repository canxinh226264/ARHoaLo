import { cpSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// Giữ một bản duy nhất của ảnh/model ở thư mục bản chạy.
const root = new URL('../../', import.meta.url);
const target = new URL('../public/', import.meta.url);
mkdirSync(target, { recursive: true });
for (const name of ['brand', 'models', 'mediapipe', 'markers']) {
  cpSync(fileURLToPath(new URL(name, root)), fileURLToPath(new URL(name, target)), { recursive: true });
}
