# Ghi chú chi tiết cho Register.css

## Cấu trúc chung
File này chứa CSS cho trang đăng ký, tạo giao diện đẹp và responsive cho form đăng ký.

## Chi tiết từng phần

### 1. Container chính
```css
.register-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  padding: 1rem;
}
```
- Chiều cao tối thiểu bằng màn hình
- Căn giữa theo cả chiều dọc và ngang
- Gradient nền từ đen sang xám đậm
- Padding để tránh sát màn hình

### 2. Box đăng ký
```css
.register-box {
  background: #2d2d2d;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 400px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```
- Nền xám đậm
- Bo góc và đổ bóng
- Chiều rộng tối đa 400px
- Viền mờ

### 3. Tiêu đề
```css
.register-box h2 {
  color: #ffffff;
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 500;
}
```
- Chữ màu trắng
- Căn giữa
- Khoảng cách với form
- Font size và weight phù hợp

### 4. Form Group
```css
.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}
```
- Khoảng cách giữa các trường
- Label màu trắng mờ
- Font size nhỏ hơn

### 5. Input Fields
```css
.form-group input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
}
```
- Chiều rộng 100%
- Padding và bo góc
- Nền trong suốt
- Chữ màu trắng
- Hiệu ứng mượt mà

### 6. Focus State cho Input
```css
.form-group input:focus {
  outline: none;
  border-color: #4a90e2;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}
```
- Bỏ outline mặc định
- Viền màu xanh
- Nền sáng hơn
- Đổ bóng xanh

### 7. Nút đăng ký
```css
.register-button {
  width: 100%;
  padding: 0.75rem;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}
```
- Chiều rộng 100%
- Màu xanh dương
- Bo góc
- Font weight vừa phải
- Hiệu ứng mượt mà
- Margin top để tạo khoảng cách

### 8. Hover State cho Nút
```css
.register-button:hover {
  background: #357abd;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
}
```
- Màu xanh đậm hơn
- Nâng lên 2px
- Đổ bóng xanh

### 9. Thông báo lỗi
```css
.error-message {
  background: rgba(255, 59, 48, 0.1);
  color: #ff3b30;
  padding: 0.75rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  border: 1px solid rgba(255, 59, 48, 0.2);
}
```
- Nền đỏ nhạt
- Chữ đỏ
- Bo góc
- Viền đỏ mờ

### 10. Link đăng nhập
```css
.login-link {
  text-align: center;
  margin-top: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
}

.login-link a {
  color: #4a90e2;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.login-link a:hover {
  color: #357abd;
}
```
- Căn giữa
- Màu chữ trắng mờ
- Link màu xanh
- Hiệu ứng hover

## Responsive Design
```css
@media (max-width: 480px) {
  .register-box {
    padding: 1.5rem;
  }

  .register-box h2 {
    font-size: 1.5rem;
  }

  .form-group input {
    padding: 0.6rem 0.8rem;
  }
}
```
- Giảm padding trên mobile
- Giảm font size tiêu đề
- Giảm padding input

## Màu sắc chính
- Màu nền: Gradient từ #1a1a1a đến #2d2d2d
- Màu box: #2d2d2d
- Màu accent: #4a90e2
- Màu chữ: #ffffff
- Màu lỗi: #ff3b30

## Lưu ý quan trọng
1. Sử dụng gradient cho nền
2. Box shadow và border mờ tạo độ sâu
3. Hiệu ứng hover và focus mượt mà
4. Responsive design cho mobile
5. Màu sắc tối giản và chuyên nghiệp
6. Thêm link đăng nhập cho UX tốt hơn 