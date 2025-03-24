# Ghi chú chi tiết cho Sidebar.css

## Cấu trúc chung
File này chứa CSS cho thanh điều hướng bên (sidebar) của ứng dụng, với thiết kế tối giản và hiệu ứng mượt mà.

## Chi tiết từng phần

### 1. Sidebar chính
```css
.sidebar {
  position: fixed;  /* Cố định vị trí */
  top: 0;  /* Đặt ở đầu trang */
  left: -250px;  /* Ẩn ngoài màn hình */
  height: 100vh;  /* Chiều cao bằng màn hình */
  z-index: 1000;  /* Hiển thị trên các phần tử khác */
  width: 250px;  /* Chiều rộng cố định */
  background-color: #1a1a1a;  /* Màu nền đen */
  color: white;  /* Chữ màu trắng */
  transition: left 0.3s ease;  /* Hiệu ứng mượt khi đóng/mở */
}
```

### 2. Trạng thái mở của Sidebar
```css
.sidebar.open {
  left: 0;  /* Hiển thị sidebar */
}
```

### 3. Nút hamburger menu
```css
.hamburger-button {
  position: fixed;  /* Cố định vị trí */
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.1);  /* Nền trắng trong suốt */
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;  /* Hiển thị trên sidebar */
  border-radius: 8px;  /* Bo góc */
  transition: all 0.3s ease;
}
```

### 4. Icon hamburger
```css
.hamburger-icon {
  width: 30px;
  height: 20px;
  position: relative;
}

.hamburger-icon span {
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #ffffff;  /* Màu trắng */
  border-radius: 2px;
  transition: all 0.3s ease;
}
```

### 5. Vị trí các dấu gạch ngang
```css
.hamburger-icon span:first-child {
  top: 0;  /* Gạch ngang đầu tiên */
}

.hamburger-icon span:nth-child(2) {
  top: 9px;  /* Gạch ngang giữa */
}

.hamburger-icon span:last-child {
  top: 18px;  /* Gạch ngang cuối */
}
```

### 6. Hiệu ứng khi mở menu
```css
.sidebar.open .hamburger-icon span:first-child {
  transform: rotate(45deg);  /* Xoay 45 độ */
  top: 9px;
}

.sidebar.open .hamburger-icon span:nth-child(2) {
  opacity: 0;  /* Ẩn gạch giữa */
}

.sidebar.open .hamburger-icon span:last-child {
  transform: rotate(-45deg);  /* Xoay -45 độ */
  top: 9px;
}
```

### 7. Menu chính
```css
.sidebar-menu {
  padding-top: 80px;  /* Tạo khoảng cách từ trên xuống */
  display: flex;
  flex-direction: column;  /* Xếp dọc */
  gap: 0.5rem;  /* Khoảng cách giữa các mục */
}
```

### 8. Mục menu
```css
.menu-item {
  display: flex;
  align-items: center;
  gap: 1rem;  /* Khoảng cách giữa icon và text */
  padding: 1rem 1.5rem;
  color: rgba(255, 255, 255, 0.8);  /* Chữ trắng mờ */
  background: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  width: 100%;
  font-size: 1rem;
  border-radius: 8px;
  margin: 0 0.5rem;
}
```

### 9. Hiệu ứng hover cho mục menu
```css
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.1);  /* Nền trắng trong suốt */
  color: #ffffff;  /* Chữ trắng đậm */
  transform: translateX(5px);  /* Di chuyển sang phải */
}
```

### 10. Mục menu đang active
```css
.menu-item.active {
  background-color: rgba(74, 144, 226, 0.2);  /* Nền xanh trong suốt */
  color: #4a90e2;  /* Chữ xanh */
}

.menu-item.active:hover {
  background-color: rgba(74, 144, 226, 0.3);  /* Nền xanh đậm hơn */
}
```

## Các hiệu ứng đặc biệt

### 1. Hiệu ứng hover cho nút hamburger
```css
.hamburger-button:hover {
  background: rgba(255, 255, 255, 0.2);  /* Nền trắng đậm hơn */
}
```

### 2. Hiệu ứng chuyển động cho mục menu
```css
.menu-item {
  transition: all 0.3s ease;  /* Hiệu ứng mượt mà */
}
```

## Màu sắc chính
- Màu nền: #1a1a1a (đen)
- Màu chữ: #ffffff (trắng) với các độ trong suốt
- Màu accent: #4a90e2 (xanh dương)
- Màu hover: rgba(255, 255, 255, 0.1) (trắng trong suốt)
- Màu active: rgba(74, 144, 226, 0.2) (xanh trong suốt) 