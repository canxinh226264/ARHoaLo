# Bản sửa nhận diện sàn và tán hoa đào

Bản chạy nằm ngay trong thư mục này (`index.html`, `assets`, `sw.js`). Mã nguồn đã sửa nằm trong `source/`; thư mục mã nguồn bên cạnh dự án không bị thay đổi.

## Nhận diện sàn và trần bằng AI

Camera thường dùng mô hình phân vùng cảnh trong `models/surface/` (DeepLab v3+ MobileNetV2 huấn luyện trên ADE20K, giấy phép Apache-2.0, 4,4 MB), chạy trên chính điện thoại, không gửi ảnh đi đâu.

- Mô hình chạy bằng CPU (WASM) trong Web Worker `src/core/surface-worker.ts`, nên không tranh GPU với hoa đào. Ảnh đầu vào 129×225, tối đa khoảng 3 lần/giây; máy yếu hoặc bật tiết kiệm pin thì thưa đi, đang quay máy nhanh thì tạm dừng.
- Kết quả được đổi sang hướng trong không gian rồi cộng dồn vào một bản đồ toàn cảnh (`src/core/surface-map.ts`), nhờ đó hoa vẫn bám đúng chỗ giữa hai lần chạy mô hình và ranh giới không nhấp nháy.
- **Cành đào chỉ hiện ở hướng là trần thật**, **hoa đọng chỉ hiện ở hướng là sàn thật**, nên tường, tủ, giường che được hoa.
- Cảm biến sửa lỗi của mô hình: sàn không thể ở trên đường chân trời, trần không thể ở dưới, mặt phẳng trơn gần đỉnh đầu mà mô hình gọi là "tường" được tính là trần.
- Mô hình chưa tải xong hoặc không chạy được thì app tự quay về cách đoán theo màu ở mục dưới. Mở `?debug` để xem trạng thái (dòng `AI`) và mặt nạ (xanh lá = sàn, xanh dương = trần).
- Tạo lại mô hình: trong `source/`, chạy `node tools/build-surface-model.mjs` (cần mạng).
- Giới hạn: vẫn là một camera không đo được độ sâu, nên chiều cao trần có sai số theo chiều cao mắt giả định. Hoa đang rơi trong không trung không bị vật thật che.

## Những gì đã sửa

- Camera thường (khi chưa có mô hình AI): ẩn hoa đọng khi chưa xác định được vùng sàn, chỉ học màu từ vùng gần phía dưới màn hình sau khoảng 0,7 giây ổn định. Không học từ vùng xa 8 m như trước; loại vùng vừa bị vật khác che ngay. Thiếu cảm biến, cảm biến ngừng gửi dữ liệu hoặc camera trước thì không đoán vùng sàn.
- AR nâng cao: dùng cùng hệ tọa độ với bộ vẽ, yêu cầu bề mặt ngang có nhiều điểm trải rộng và ổn định qua nhiều khung hình; bỏ dữ liệu quét cũ. Chỉ dùng bề mặt gần nhất của mỗi tia, không đặt xuyên mặt bàn. Quyền đặt lấy theo khung hình hiện tại; bỏ tính năng tự cho đặt theo độ cao giả định sau 10 giây.
- AR nâng cao bớt lag: bỏ yêu cầu dữ liệu độ sâu (trước đây bật mà không dùng), vẽ ở 60% độ phân giải, giữ mức chất lượng thấp, giảm từ 5 xuống 3 tia dò bề mặt, bỏ hiệu ứng làm mờ nền của nút. Chưa đo được trên điện thoại thật.
- Có **Tuỳ chọn → Đặt lại mặt sàn** trong cả hai chế độ. Khi bắt đầu, hướng camera xuống vùng sàn trống gần chân, giữ khoảng một giây rồi lia chậm.
- Tán đào: 36 cụm cành xếp theo lưới 2 m quanh người xem, treo theo trần đo được (xem mục "Tự đo phòng"), dùng instancing.
- Cache offline có phiên bản mới theo nội dung file. Sau khi đưa bản này lên hosting, mở trang có mạng và tải lại để nhận bản mới.

## Tự đo phòng (không dùng kích thước cố định)

Chế độ trong phòng không còn lấy kích thước từ tài liệu (`room.json` chỉ còn dùng cho giá trị phụ). Khi vào phòng, hướng camera xuống sàn trống gần chân, giữ khoảng một giây rồi lia từ chân tường lên trần.

- **Sàn và tường:** mặt nạ sàn từ camera được chiếu xuống một bản đồ ô 0,2 m, nhớ trong 3 phút. Dải vật cản dài từ 1 m trở lên theo hướng nhìn mới tính là tường, nên bàn ghế không bị coi là tường. Mỗi lần nhìn chỉ thấy chừng 4,5 m; hướng nào chưa thấy tường thì coi là còn trong phòng.
- **Trần:** camera thường tìm mép trần–tường (bằng mô hình AI, hoặc theo màu khi chưa có mô hình), rồi tính cao = mắt + khoảng cách tới tường × tan(góc ngẩng), lấy phân vị 70% của nhiều hướng vì đồ đạc che chân tường làm kết quả thấp đi. AR nâng cao dùng mặt phẳng trần nếu ARCore thấy được.
- **Hoa và cành:** hoa sinh trong vùng đã đo, rơi từ trần xuống sàn, bay qua tường thì mờ đi. Cành treo cách trần 0,35 m, lưới cuộn theo người xem, cụm nằm ngoài tường thì ẩn.
- **Đặt lại mặt sàn** cũng xoá kết quả đo để đo lại từ đầu.
- Giới hạn: chiều cao mắt giả định 1,45 m nên tỉ lệ có sai số. Trần và tường cùng màu thì không tìm được mép, app dùng mặc định 2,8 m. ARCore hiếm khi nhận được trần, nên AR nâng cao thường dùng giá trị mặc định này.

## Dẫn đường tới Cổng Parabol (thử nghiệm)

**Tuỳ chọn → Dẫn đường tới Cổng Parabol (thử nghiệm)** → nhập tầng → **Bắt đầu dẫn đường** (trình duyệt sẽ hỏi quyền vị trí).

Chế độ **Ngoài cổng** dùng chung dải sáng này: đã bỏ tuyến cố định trong `route.json` và nút "Căn pano", hướng luôn lấy từ GPS và la bàn. Dải sáng không né vật cản, nên đoạn đường có thể đi xuyên qua tường trên màn hình. **Khi đưa vào triển lãm, phải đổi `destination.json` sang toạ độ cổng thật** (hiện đang là Cổng Parabol để thử).

- Điểm đến nằm trong `source/src/config/destination.json`: toạ độ 21.005112, 105.84155 lấy từ điểm ghim "Cổng Parabol" trên Apple Maps, nên kiểm tra lại tại chỗ. Tới gần cổng 12 m (`arriveRadius`) thì coi là đã tới. Đổi điểm đến chỉ cần sửa file này rồi build lại.
- Vị trí lấy từ GPS, giữa hai lần đo thì cộng bước chân. GPS được theo dõi liên tục: quá 4 giây không có vị trí mới thì app chủ động hỏi lại, và mở lại việc theo dõi khi quay về app từ nền. Hướng Bắc lấy từ la bàn: Android dùng `deviceorientationabsolute`, iOS dùng `webkitCompassHeading`. La bàn lệch dưới 3 giây (đi ngang khung sắt, xe cộ) thì bỏ qua để dải sáng không lắc.
- Tuyến đi bộ theo phố lấy từ OpenRouteService (dữ liệu OpenStreetMap), cấu hình trong `source/src/config/routing.json`. App lấy tuyến ngắn nhất (`preference: shortest`) khi bắt đầu, gọi lại khi đi lệch tuyến hơn 15 m trong hơn 3 giây, và thử lại nếu lần trước lỗi (cách nhau ít nhất 10 giây). Tuyến luôn được nối tới đúng toạ độ đích. Khoảng cách hiển thị là quãng đường còn phải đi theo tuyến.
- **Cài key** (miễn phí): tạo key tại https://account.heigit.org, tạo file `source/.env.local` có một dòng `VITE_ORS_KEY=key_của_bạn`, rồi chạy `npm run build:site`. File `.env.local` không được đưa lên Git, nhưng key vẫn nằm trong bản build gửi tới trình duyệt, nên chỉ dùng key miễn phí. Chưa có key hoặc dịch vụ lỗi thì dải sáng quay về hướng chim bay và có thông báo.
- Thứ tự thử: đi bộ (`foot-walking`), rồi xe đạp (`cycling-regular`). Từ tháng 10/2026, diễn đàn OpenRouteService có báo lỗi treo với chế độ đi bộ ở địa chỉ mới; khi đó app tự dùng tuyến xe đạp, có thể đi đường xe thay vì lối bộ hành.
- Nếu đường nằm sau lưng hoặc bên cạnh, dải sáng chạy thẳng từ gần chân ra trước mặt rồi bẻ cong sang hướng đó, thay cho chữ nhắc quay lại.
- Khung thông báo gọn một dòng, gồm khoảng cách còn lại, nút "Đặt lại" và nút ×. Khi GPS sai số trên 20 m, khung hiện thêm "GPS ±… m".
- Khác tầng: chỉ hiện lời nhắc đi cầu thang, không vẽ dải sáng; bấm "Đã tới tầng …" khi xuống tới nơi.
- Giới hạn: GPS điện thoại thường lệch 5–15 m, trong nhà hoặc giữa nhà cao còn lệch hơn. La bàn bị nhiễu gần khung sắt và xe cộ; lệch thì lắc máy theo hình số 8. Chế độ này chỉ có trong chế độ camera thường, cần cảm biến chuyển động và quyền vị trí. Tính năng chỉ để thử nghiệm, không thay thế việc tự quan sát khi đi đường.

## Hỏi đáp, mini map, thẻ văn bản và nhận ảnh cổng

- **Hỏi đáp (Gemini):** icon hỏi đáp ở góc dưới bên trái, cùng nút **Hỏi thêm** trên thẻ panel hoặc hiện vật. Khách gõ câu hỏi, nói (nếu trình duyệt hỗ trợ nhận giọng nói) hoặc bật 📷 để kèm ảnh camera. Nếu bật Âm thanh trong Tuỳ chọn, câu trả lời được đọc to.
  - Câu hỏi đi qua `api/ask.mjs` (Vercel Function); key Gemini nằm ở máy chủ, không có trong web. **Cài đặt:** tạo key tại Google AI Studio → Vercel → Project → Settings → Environment Variables → thêm `GEMINI_API_KEY` → Redeploy. Tuỳ chọn: `GEMINI_MODEL` (mặc định `gemini-3.5-flash-lite`), `ALLOWED_ORIGINS`.
  - Trợ lý chỉ được trả lời theo `source/src/config/knowledge.json` và nội dung panel/hiện vật trong `artifacts.json`. Mục ghi `[CẦN BỔ SUNG]` (nhà vệ sinh, giờ mở cửa, nội dung panel…) sẽ được trả lời là chưa có thông tin; BTC điền vào rồi build lại.
  - Gói miễn phí: hạn mức tính chung cho mọi khách và nội dung gửi lên được Google dùng để cải thiện sản phẩm (đã ghi trong dòng quyền riêng tư của app). Mất mạng thì hỏi đáp báo không dùng được, phần AR vẫn chạy.
- **Mini map:** hiện ở góc trên trái khi dẫn đường và trong chế độ ngoài phòng (cần quyền vị trí, tuyến đường xin một lần sau khi GPS sai số dưới 100 m), xoay theo hướng nhìn, chạm để phóng to. Đây là bản đồ lớn OpenStreetMap, chưa có sơ đồ riêng của bảo tàng. Nền là ô bản đồ OpenStreetMap (tile.openstreetmap.org, có ghi nguồn, chỉ hợp lượng dùng nhỏ); không tải được nền thì vẫn vẽ tuyến, vị trí và điểm đến.
- **Ảnh mốc (MindAR), 13 ảnh trong `markers/artifacts.mind`:** 0–1 hiện vật 3D (chậu tôn, thùng gỗ); 2–10 panel F, A1–A4, B2, C4, C8, D11 → thẻ văn bản; 11–12 ảnh cổng G1 và biển tên G2 → đang dẫn đường mà camera thấy thì tự chuyển sang hoa đào rơi. Ảnh panel lấy từ hồ sơ thiết kế, thu về cạnh dài 400 px để file mốc gọn (4,1 MB); nên thay bằng file in chính thức. Thêm/đổi ảnh: sửa `artifacts.json` (giữ đúng thứ tự `targetIndex`), biên dịch lại bằng `tools/compile-targets.html`.
- Thẻ văn bản và ảnh cổng chỉ cần nhận ra ảnh (không đặt model), nên hiện sau khoảng nửa giây.
- Nút chế độ đọc chỉ hiện dưới thẻ văn bản của panel; đóng thẻ thì chế độ đọc bật từ nút này cũng tắt theo. Muốn giữ lâu dài thì bật trong Tuỳ chọn.

## Chạy lại hoặc chỉnh tiếp

Mở terminal trong `source/`:

```powershell
npm ci
npm test
npm run build:site
```

`build:site` tạo bản build và cập nhật trực tiếp `index.html`, `assets`, `sw.js` ở thư mục cha. Không đăng tải lên mạng. Dữ liệu ảnh/model được lấy từ các thư mục của bản chạy, không cần lưu thêm một bản trong Git. Chạy `npm run dev` để xem khi phát triển (chạy build một lần trước để chuẩn bị ảnh/model).

## Kiểm chứng và giới hạn

Đã qua kiểm tra TypeScript, build production và 40 kiểm thử (`npm test`). Mô hình AI đã chạy thử trên ảnh phòng thật và ảnh nội thất mẫu; bản build đã chạy trong trình duyệt với camera giả và cảm biến giả lập.

Chưa kiểm chứng bằng camera/ARCore trên điện thoại tại hiện trường, nên tốc độ mô hình trên điện thoại và độ giật của AR nâng cao cần đo thực tế. Camera thường không đo được độ sâu thật. WebXR cũng xác định mặt phẳng bằng hình học, chưa nhận biết ngữ nghĩa “sàn”; nên quét vùng sàn trống ở lối đi, tránh bàn thấp. Thiết bị không tìm được mặt phẳng sẽ tiếp tục yêu cầu quét thay vì cho đặt sai.

Tham khảo hệ tọa độ: [WebXR Device API của W3C](https://www.w3.org/TR/webxr/). Kiểm tra thực tế nên gồm sàn trống, hướng sang bàn/tường, ngẩng lên, quay lại sàn, xoay ngang máy và dùng nút đặt lại sàn.
