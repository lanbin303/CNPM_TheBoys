# Ghi chú chi tiết cho DayDetail.css

## Cấu trúc chung
File này chứa CSS cho component DayDetail, tạo giao diện form thêm và quản lý hoạt động trong một ngày.

## Chi tiết từng phần

### 1. Modal chính
```css
.day-detail-modal {
  position: fixed;  /* Cố định vị trí */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);  /* Nền đen trong suốt */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;  /* Hiển thị trên các phần tử khác */
}
```

### 2. Container nội dung
```css
.day-detail-content {
  background: #2d2d2d;  /* Màu nền xám đậm */
  border-radius: 10px;
  padding: 2rem;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;  /* Chiều cao tối đa 80% màn hình */
  overflow-y: auto;  /* Cuộn khi nội dung dài */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### 3. Form thêm hoạt động
```css
.activity-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
}

.activity-form input {
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: #363636;
  color: #ffffff;
  font-size: 1rem;
}

.activity-form input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}
```

### 4. Nút thêm hoạt động
```css
.activity-form button {
  background: #4a90e2;
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.activity-form button:hover {
  background: #357abd;
  transform: translateY(-2px);
}
```

### 5. Danh sách hoạt động
```css
.activities-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.activity-item {
  background: #363636;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}
```

### 6. Thông tin hoạt động
```css
.activity-info {
  flex: 1;
}

.activity-info h4 {
  color: #ffffff;
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.activity-info p {
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  font-size: 0.9rem;
}
```

### 7. Nút xóa hoạt động
```css
.delete-button {
  background: rgba(255, 107, 107, 0.1);
  color: #ff6b6b;
  border: 1px solid #ff6b6b;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.delete-button:hover {
  background: rgba(255, 107, 107, 0.2);
}
```

### 8. Nút điều khiển modal
```css
.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-actions button {
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}
```

### 9. Nút lưu
```css
.modal-actions button:first-child {
  background: #4a90e2;
  color: white;
  border: none;
}

.modal-actions button:first-child:hover {
  background: #357abd;
  transform: translateY(-2px);
}
```

### 10. Nút hủy
```css
.modal-actions button:last-child {
  background: transparent;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.modal-actions button:last-child:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
```

## Các hiệu ứng đặc biệt

### 1. Hiệu ứng hover cho activity item
```css
.activity-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
```

### 2. Hiệu ứng focus cho input
```css
.activity-form input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
}
```

## Responsive Design
```css
@media (max-width: 768px) {
  .day-detail-content {
    width: 95%;
    padding: 1.5rem;
  }
  
  .activity-form {
    flex-direction: column;
  }
  
  .modal-actions {
    flex-direction: column;
  }
}
```

## Màu sắc chính
- Màu nền modal: rgba(0, 0, 0, 0.5) (đen trong suốt)
- Màu nền content: #2d2d2d (xám đậm)
- Màu nền form: #363636 (xám)
- Màu accent: #4a90e2 (xanh dương)
- Màu chữ: #ffffff (trắng)
- Màu chữ phụ: rgba(255, 255, 255, 0.7) (trắng mờ)
- Màu xóa: #ff6b6b (đỏ) 