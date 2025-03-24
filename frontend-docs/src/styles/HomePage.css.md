# Ghi chú chi tiết cho HomePage.css

## Cấu trúc chung
File này chứa toàn bộ CSS cho trang chủ (HomePage) của ứng dụng, sử dụng thiết kế dark theme với các màu sắc tối và gradient.

## Chi tiết từng phần

### 1. Container chính
```css
.home-container {
  min-height: 100vh;  /* Chiều cao tối thiểu bằng toàn bộ màn hình */
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);  /* Gradient từ đen sang xám đậm */
  padding: 2rem;  /* Khoảng cách lề 2rem */
}
```

### 2. Phần Header
```css
.home-header {
  background-color: #1a1a1a;  /* Màu nền đen */
  color: white;  /* Chữ màu trắng */
  padding: 1rem 2rem;
  padding-left: 5rem;  /* Tạo khoảng trống cho sidebar */
  display: flex;
  justify-content: space-between;  /* Căn chỉnh các phần tử */
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);  /* Đổ bóng nhẹ */
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);  /* Đường viền mờ */
}
```

### 3. Phần Calendar
```css
.calendar-section {
  background: #2d2d2d;  /* Màu nền xám đậm */
  border-radius: 10px;  /* Bo góc */
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);  /* Đổ bóng */
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);  /* Viền mờ */
}
```

### 4. Nút điều hướng tuần
```css
.week-nav-button {
  background: rgba(255, 255, 255, 0.1);  /* Nền trắng trong suốt */
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;  /* Bo tròn */
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;  /* Hiệu ứng mượt mà */
}
```

### 5. Card ngày
```css
.day-card {
  background: #363636;  /* Màu nền xám */
  border-radius: 8px;
  padding: 1rem;
  min-height: 150px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

### 6. Sự kiện trong ngày
```css
.event-item {
  background: rgba(255, 255, 255, 0.1);  /* Nền trắng trong suốt */
  color: #ffffff;
  padding: 0.5rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

### 7. Chi tiết ngày được chọn
```css
.selected-day-details {
  background: #2d2d2d;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 8. Nút thêm hoạt động
```css
.add-activity-button {
  background: #4a90e2;  /* Màu xanh dương */
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
}
```

### 9. Card hoạt động
```css
.selected-activity-card {
  background: #363636;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
```

### 10. Nút hoàn thành
```css
.complete-button {
  background: rgba(74, 144, 226, 0.1);  /* Nền xanh trong suốt */
  color: #4a90e2;
  border: 1px solid #4a90e2;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}
```

## Các hiệu ứng đặc biệt

### 1. Hiệu ứng hover cho card
```css
.day-card:hover {
  transform: translateY(-5px);  /* Nâng lên 5px */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);  /* Đổ bóng */
  background: #404040;  /* Đổi màu nền */
}
```

### 2. Hiệu ứng cho nút
```css
.add-activity-button:hover {
  background: #357abd;  /* Đổi màu nền */
  transform: translateY(-2px);  /* Nâng lên 2px */
}
```

### 3. Hiệu ứng cho card hoạt động
```css
.selected-activity-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
```

## Responsive Design
```css
@media (max-width: 768px) {
  .home-container {
    padding: 1rem;  /* Giảm padding trên mobile */
  }
  /* Các điều chỉnh khác cho màn hình nhỏ */
}
```

## Màu sắc chính
- Màu nền chính: #1a1a1a (đen) đến #2d2d2d (xám đậm)
- Màu accent: #4a90e2 (xanh dương)
- Màu chữ: #ffffff (trắng) với các độ trong suốt khác nhau
- Màu viền: rgba(255, 255, 255, 0.1) (trắng trong suốt) 