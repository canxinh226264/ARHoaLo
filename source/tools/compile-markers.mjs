// Kiểm tra ảnh mốc (image target) trước khi biên dịch sang MindAR.
// Chạy: npm run markers
//
// Bước biên dịch .mind hiện làm bằng công cụ trình duyệt của MindAR vì trình
// biên dịch cần WebGL/canvas:
//   1. Mở https://hiukim.github.io/mind-ar-js-doc/tools/compile
//   2. Kéo các ảnh theo đúng THỨ TỰ in ra bên dưới (thứ tự = targetIndex)
//   3. Tải file targets.mind về, đặt vào public/markers/targets.mind
//   4. npm run build – service worker sẽ precache file mới
//
// Khi BTC đổi thiết kế: thay ảnh trong markers-src/ (dùng file in chính thức,
// cạnh dài 1000–1600 px), chạy lại script này rồi lặp các bước trên.
import { readFileSync, existsSync, statSync } from 'node:fs';

const cfg = JSON.parse(readFileSync(new URL('../src/config/markers.json', import.meta.url)));
const all = [...cfg.outdoor.map((m) => ({ ...m, group: 'ngoài phòng' })), ...cfg.indoor.map((m) => ({ ...m, group: 'trong hành lang' }))];
let missing = 0;
console.log('Thứ tự ảnh khi biên dịch (targetIndex → mốc):\n');
all.forEach((m, i) => {
  const p = new URL('../' + m.src, import.meta.url);
  const ok = existsSync(p);
  if (!ok) missing++;
  const kb = ok ? `${Math.round(statSync(p).size / 1024)} KB` : 'THIẾU FILE';
  console.log(`  ${String(i).padStart(2)}  ${m.id.padEnd(4)} ${m.group.padEnd(16)} rộng thật ${m.physicalWidth} m   ${m.src}  (${kb})`);
});
console.log(`\nKhông dùng làm mốc (ít đặc trưng): ${cfg.excluded.join(', ')}`);
if (missing) {
  console.log(`\nThiếu ${missing} ảnh. Đặt file in chính thức vào markers-src/ rồi chạy lại.`);
  process.exit(1);
}
console.log('\nĐủ ảnh. Làm tiếp bước biên dịch ở đầu file này.');
