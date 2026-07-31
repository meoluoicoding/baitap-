# Giải thích từng bước file `baitap.md`

Tài liệu `baitap.md` mô tả cách xây dựng một ứng dụng thư viện bằng Node.js, MongoDB và AI. Dưới đây là bản giải thích theo đúng trình tự triển khai trong tài liệu.

## 1. Chuẩn bị dữ liệu và kết nối MongoDB

Mục tiêu của bước này là có một cơ sở dữ liệu cloud để lưu sách, người dùng và dữ liệu phục vụ AI.

Các việc cần làm:

1. Tạo hoặc đăng nhập MongoDB Atlas.
2. Tạo một cluster miễn phí.
3. Tạo database user để ứng dụng có quyền kết nối.
4. Lấy connection string của cluster.
5. Thêm IP máy đang dùng vào whitelist.

Ý nghĩa:

- Connection string là chuỗi kết nối để Node.js truy cập MongoDB.
- Nếu chưa có whitelist IP, ứng dụng sẽ không kết nối được tới database cloud.

## 2. Tạo project Node.js

Bước này khởi tạo thư mục ứng dụng và file cấu hình package.

Các việc cần làm:

1. Tạo thư mục `library_application`.
2. Chạy `npm init -y`.
3. Cài các package cần thiết như:
   - `express`
   - `mongoose`
   - `ejs`
   - `body-parser`
   - `express-session`
   - `passport`
   - `passport-local`
   - `passport-local-mongoose`
   - `@tensorflow/tfjs`
   - `@tensorflow-models/universal-sentence-encoder`
   - `axios`

Ý nghĩa:

- `express` dùng để tạo server và route.
- `mongoose` dùng để làm việc với MongoDB.
- `passport` và `express-session` dùng để đăng nhập và quản lý session.
- `ejs` dùng để render giao diện.
- `TensorFlow.js` và `Universal Sentence Encoder` dùng cho phần AI gợi ý sách.

## 3. Cập nhật `package.json`

Tài liệu yêu cầu sửa file `package.json` để:

1. Đổi `main` thành `app.js`.
2. Thêm thông tin `engines` để cố định phiên bản Node.js.

Ý nghĩa:

- Khi chạy dự án, Node sẽ hiểu file khởi động chính là `app.js`.
- Khai báo `engines` giúp đồng bộ môi trường khi deploy.

## 4. Tạo cấu trúc thư mục

Theo tài liệu, project cần các thư mục sau:

- `model`
- `views`
- `services`
- `public`
- `public/css`
- `public/images`

Ý nghĩa:

- `model` chứa schema của MongoDB.
- `views` chứa file giao diện `.ejs`.
- `services` chứa logic AI.
- `public` chứa file tĩnh như CSS và hình ảnh.

## 5. Tạo model dữ liệu

### 5.1 `User.js`

File này định nghĩa cấu trúc người dùng.

Nội dung chính:

- `username`
- `password`

Ý nghĩa:

- Mỗi tài khoản người dùng sẽ được lưu trong collection `users`.
- Dữ liệu này dùng cho đăng ký và đăng nhập member.

### 5.2 `Book.js`

File này định nghĩa cấu trúc sách AI sẽ dùng để gợi ý.

Các trường chính:

- `bookID`
- `title`
- `authors`
- `average_rating`
- `ratings_count`
- `text_reviews_count`
- `publication_date`
- `publisher`

Ý nghĩa:

- Collection thực tế được đặt là `booksforai`.
- Đây là nguồn dữ liệu để hệ thống so sánh truy vấn của người dùng và đề xuất sách phù hợp.

## 6. Tạo các file giao diện trong `views`

Tài liệu chia giao diện thành nhiều trang EJS.

### 6.1 `register.ejs`

Trang đăng ký thành viên.

Chức năng:

- Nhập username và password
- Gửi dữ liệu về route `/register`

### 6.2 `login.ejs`

Trang đăng nhập thành viên.

Chức năng:

- Gửi thông tin đăng nhập tới `/login`
- Nếu đúng, người dùng sẽ được chuyển đến danh sách sách

### 6.3 `home.ejs`

Trang chủ của ứng dụng.

Chức năng:

- Điều hướng sang đăng ký, đăng nhập, admin, và các trang khác

### 6.4 `admin-login.ejs`

Trang đăng nhập cho quản trị viên.

Chức năng:

- Gửi thông tin tới `/admin-login`

### 6.5 `admindashboard.ejs`

Trang quản trị sách.

Chức năng:

- Thêm sách mới vào collection `booksforai`

### 6.6 `booklist.ejs`

Trang hiển thị danh sách sách.

Chức năng:

- Nhận dữ liệu `books` từ server và in ra màn hình

### 6.7 `tensorflowChat.ejs`

Trang chat AI.

Chức năng:

- Nhập câu hỏi của người dùng
- Gửi prompt sang backend `/tensorflow-chat`
- Hiển thị kết quả gợi ý sách

## 7. Thêm CSS và hình ảnh

Tài liệu yêu cầu tạo các stylesheet trong `public/css`, ví dụ:

- `register.css`
- `home.css`
- `bookstyle.css`
- `admindash.css`
- `chat.css`

Ý nghĩa:

- Mỗi trang có giao diện riêng.
- File ảnh như `libraryimage.jpg` được đặt trong `public/images`.

## 8. Tạo service AI bằng TensorFlow

### 8.1 `tensorflowService.js`

Đây là phần xử lý chính cho AI.

Chức năng:

- Nạp mô hình `Universal Sentence Encoder`
- Chuyển nội dung sách và truy vấn thành embedding
- So sánh độ tương đồng giữa câu hỏi người dùng và dữ liệu sách
- Trả về danh sách gợi ý phù hợp

Ý nghĩa:

- Đây là phần “não” của chức năng recommend sách.
- Không dùng API cloud, mà chạy logic AI trong project.

### 8.2 `tensorflowWorker.js`

File này chạy trong worker thread.

Chức năng:

- Nhận danh sách sách từ `app.js`
- Khởi tạo embeddings
- Nhận prompt từ người dùng
- Trả kết quả về main thread

Ý nghĩa:

- Dùng worker thread để không làm treo server chính.
- Phù hợp khi xử lý AI hoặc tính toán nặng.

## 9. Tạo file `app.js`

Đây là file trung tâm của ứng dụng.

Các phần chính:

1. Import thư viện:
   - `express`
   - `mongoose`
   - `passport`
   - `body-parser`
   - `express-session`
   - `worker_threads`
   - `User`
   - `Book`
2. Tạo `express()` app.
3. Khởi tạo worker TensorFlow.
4. Cấu hình view engine là `ejs`.
5. Cấu hình middleware:
   - parse form data
   - parse JSON
   - phục vụ file tĩnh trong `public`
   - session
   - passport
6. Cài đặt chiến lược đăng nhập member bằng `passport-local`.
7. Cài đặt serialize/deserialize user cho session.
8. Tạo route cho:
   - `/`
   - `/register`
   - `/login`
   - `/logout`
   - `/booklist`
   - `/admin`
   - `/admin-login`
   - `/admin-dashboard`
   - `/admin-dashboard/add-book`
   - `/tensorflow-chat`
9. Kết nối MongoDB và khởi động server.

Ý nghĩa:

- Đây là nơi điều phối toàn bộ luồng ứng dụng.
- `app.js` kết nối giao diện, database, xác thực và AI lại với nhau.

## 10. Nạp dữ liệu sách từ JSON

Tài liệu có bước dùng file `book.json` chứa nhiều bản ghi sách.

Mục đích:

- Làm giàu dữ liệu cho collection `booksforai`
- Tăng chất lượng gợi ý AI

Ý nghĩa:

- Nếu dữ liệu ít, AI khó trả về kết quả tốt.
- Dữ liệu nhiều giúp hệ thống hiểu câu hỏi người dùng chính xác hơn.

## 11. Cách ứng dụng hoạt động tổng quát

Luồng chạy của ứng dụng là:

1. Người dùng mở trang chủ.
2. Người dùng đăng ký hoặc đăng nhập.
3. Sau khi đăng nhập, hệ thống hiển thị danh sách sách.
4. Admin có thể đăng nhập riêng để thêm sách.
5. Người dùng gửi câu hỏi vào trang TensorFlow chat.
6. Worker AI xử lý prompt và trả về sách gợi ý.

## 12. Kết luận

Tài liệu `baitap.md` hướng dẫn xây dựng một hệ thống thư viện có:

- xác thực người dùng
- quản lý sách bằng MongoDB
- giao diện EJS
- xử lý AI gợi ý sách bằng TensorFlow.js
- tách tác vụ nặng sang worker thread

Nếu cần, có thể mở rộng tiếp thành:

- sơ đồ thư mục hoàn chỉnh
- bản tóm tắt ngắn hơn để nộp bài
- hoặc chuyển toàn bộ nội dung này thành checklist từng bước để làm theo
