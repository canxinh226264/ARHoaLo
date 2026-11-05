# Bản sửa nhận diện sàn và tán hoa đào

Bản chạy nằm ngay trong thư mục này (`index.html`, `assets`, `sw.js`). Mã nguồn đã sửa nằm trong `source/`; thư mục mã nguồn bên cạnh dự án không bị thay đổi.

## Những gì đã sửa

- Camera thường: ẩn hoa đọng khi chưa xác định được vùng sàn, chỉ học màu từ vùng gần phía dưới màn hình sau khoảng 0,7 giây ổn định. Không học từ vùng xa 8 m như trước; loại vùng vừa bị vật khác che ngay. Thiếu cảm biến, cảm biến ngừng gửi dữ liệu hoặc camera trước thì không đoán vùng sàn.
- AR nâng cao: dùng cùng hệ tọa độ với bộ vẽ, yêu cầu bề mặt ngang có nhiều điểm trải rộng và ổn định qua nhiều khung hình; bỏ dữ liệu quét cũ. Chỉ dùng bề mặt gần nhất của mỗi tia, không đặt xuyên mặt bàn. Quyền đặt lấy theo khung hình hiện tại; bỏ tính năng tự cho đặt theo độ cao giả định sau 10 giây.
- Có **Tuỳ chọn → Đặt lại mặt sàn** trong cả hai chế độ. Khi bắt đầu, hướng camera xuống vùng sàn trống gần chân, giữ khoảng một giây rồi lia chậm.
- Tán đào: 36 cụm cành cách khoảng 0,85 m, phủ hết hành lang 26 m; tăng nhánh con và cụm hoa. Khoảng 40.826 bông ở mức cao, 22.450 ở mức thấp, dùng instancing. Vùng cuối hành lang trước đây cấm cành ảo nay cũng được phủ theo yêu cầu.
- Cache offline có phiên bản mới theo nội dung file. Sau khi đưa bản này lên hosting, mở trang có mạng và tải lại để nhận bản mới.

## Chạy lại hoặc chỉnh tiếp

Mở terminal trong `source/`:

```powershell
npm ci
npm test
npm run build:site
```

`build:site` tạo bản build và cập nhật trực tiếp `index.html`, `assets`, `sw.js` ở thư mục cha. Không đăng tải lên mạng. Dữ liệu ảnh/model được lấy từ các thư mục của bản chạy, không cần lưu thêm một bản trong Git. Chạy `npm run dev` để xem khi phát triển (chạy build một lần trước để chuẩn bị ảnh/model).

## Kiểm chứng và giới hạn

Đã qua kiểm tra TypeScript, build production và 11 kiểm thử về mặt bàn/tường, dữ liệu không hợp lệ, độ ổn định và thời hạn quét, vật che, góc camera, trạng thái đặt XR và độ phân bố hoa. Đã xem cảnh 3D trong trình duyệt ở góc dọc hành lang và nhìn lên trần cuối hành lang, cả mức chất lượng thấp; không có lỗi console ở trang xem thử.

Chưa kiểm chứng bằng camera/ARCore trên điện thoại tại hiện trường. Camera thường vẫn là ước lượng màu + hướng, không đo được độ sâu thật: mặt bàn hoặc tường trùng màu sàn vẫn có thể gây nhầm. WebXR cũng xác định mặt phẳng bằng hình học, chưa nhận biết ngữ nghĩa “sàn”; nên quét vùng sàn trống ở lối đi, tránh bàn thấp. Thiết bị không tìm được mặt phẳng sẽ tiếp tục yêu cầu quét thay vì cho đặt sai.

Tham khảo hệ tọa độ: [WebXR Device API của W3C](https://www.w3.org/TR/webxr/). Kiểm tra thực tế nên gồm sàn trống, hướng sang bàn/tường, ngẩng lên, quay lại sàn, xoay ngang máy và dùng nút đặt lại sàn.
