# Ghi chú chi tiết cho Sidebar.js

## Cấu trúc chung
File này chứa component Sidebar (thanh điều hướng bên) của ứng dụng, quản lý menu và điều hướng.

## Import và State
```javascript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);  // Trạng thái đóng/mở của sidebar
}
```

## Các hàm xử lý

### 1. Xử lý đóng/mở sidebar
```javascript
const toggleSidebar = () => {
  setIsOpen(!isOpen);  // Đảo ngược trạng thái
};
```

### 2. Xử lý click menu
```javascript
const handleMenuClick = () => {
  setIsOpen(false);  // Đóng sidebar khi click menu
};
```

## Render Component

### 1. Nút hamburger menu
```javascript
<button className="hamburger-button" onClick={toggleSidebar}>
  <div className="hamburger-icon">
    <span></span>
    <span></span>
    <span></span>
  </div>
</button>
```

### 2. Sidebar chính
```javascript
<div className={`sidebar ${isOpen ? 'open' : ''}`}>
  <div className="sidebar-menu">
    {/* Menu items */}
  </div>
</div>
```

### 3. Các mục menu
```javascript
<Link to="/" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-home"></i>
  Trang chủ
</Link>

<Link to="/calendar" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-calendar-alt"></i>
  Lịch
</Link>

<Link to="/tasks" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-tasks"></i>
  Công việc
</Link>

<Link to="/profile" className="menu-item" onClick={handleMenuClick}>
  <i className="fas fa-user"></i>
  Hồ sơ
</Link>
```

## Cấu trúc menu
- Trang chủ: Icon home, link đến "/"
- Lịch: Icon calendar, link đến "/calendar"
- Công việc: Icon tasks, link đến "/tasks"
- Hồ sơ: Icon user, link đến "/profile"

## Xử lý sự kiện
1. Click nút hamburger: Toggle sidebar
2. Click menu item: 
   - Đóng sidebar
   - Chuyển hướng đến trang tương ứng

## Icon sử dụng
- Home: fas fa-home
- Calendar: fas fa-calendar-alt
- Tasks: fas fa-tasks
- User: fas fa-user

## CSS Classes
- hamburger-button: Nút toggle menu
- hamburger-icon: Icon 3 gạch ngang
- sidebar: Container chính
- sidebar.open: Trạng thái mở
- sidebar-menu: Container menu items
- menu-item: Mỗi mục menu 