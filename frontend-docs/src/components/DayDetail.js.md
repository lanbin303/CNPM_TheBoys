# Ghi chú chi tiết cho DayDetail.js

## Cấu trúc chung
File này chứa component hiển thị chi tiết của một ngày, cho phép thêm và quản lý các hoạt động trong ngày đó.

## Import và Props
```javascript
import React, { useState } from 'react';
import '../styles/DayDetail.css';

function DayDetail({ date, onClose, onSave, existingActivities }) {
  // Props:
  // date: Ngày được chọn
  // onClose: Hàm đóng form
  // onSave: Hàm lưu hoạt động
  // existingActivities: Danh sách hoạt động hiện có
```

## State
```javascript
const [activities, setActivities] = useState(existingActivities || []);
const [newActivity, setNewActivity] = useState({
  name: '',
  time: '',
  duration: ''
});
```

## Các hàm xử lý

### 1. Xử lý thêm hoạt động
```javascript
const handleAddActivity = () => {
  if (newActivity.name && newActivity.time && newActivity.duration) {
    setActivities([...activities, {
      id: Date.now(),  // Tạo ID duy nhất
      ...newActivity
    }]);
    setNewActivity({ name: '', time: '', duration: '' });  // Reset form
  }
};
```

### 2. Xử lý xóa hoạt động
```javascript
const handleDeleteActivity = (activityId) => {
  setActivities(activities.filter(activity => activity.id !== activityId));
};
```

### 3. Xử lý lưu hoạt động
```javascript
const handleSave = () => {
  onSave(date, activities);
  onClose();
};
```

### 4. Xử lý input thay đổi
```javascript
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewActivity(prev => ({
    ...prev,
    [name]: value
  }));
};
```

## Render Component

### 1. Form thêm hoạt động
```javascript
<div className="activity-form">
  <input
    type="text"
    name="name"
    placeholder="Tên hoạt động"
    value={newActivity.name}
    onChange={handleInputChange}
  />
  <input
    type="time"
    name="time"
    value={newActivity.time}
    onChange={handleInputChange}
  />
  <input
    type="number"
    name="duration"
    placeholder="Thời gian (phút)"
    value={newActivity.duration}
    onChange={handleInputChange}
  />
  <button onClick={handleAddActivity}>Thêm</button>
</div>
```

### 2. Danh sách hoạt động
```javascript
<div className="activities-list">
  {activities.map(activity => (
    <div key={activity.id} className="activity-item">
      <div className="activity-info">
        <h4>{activity.name}</h4>
        <p>{activity.time} - {activity.duration} phút</p>
      </div>
      <button 
        className="delete-button"
        onClick={() => handleDeleteActivity(activity.id)}
      >
        Xóa
      </button>
    </div>
  ))}
</div>
```

### 3. Nút điều khiển
```javascript
<div className="modal-actions">
  <button onClick={handleSave}>Lưu</button>
  <button onClick={onClose}>Hủy</button>
</div>
```

## Cấu trúc dữ liệu hoạt động
```javascript
{
  id: number,      // ID duy nhất
  name: string,    // Tên hoạt động
  time: string,    // Thời gian (HH:mm)
  duration: string // Thời lượng (phút)
}
```

## Xử lý sự kiện
1. Thêm hoạt động:
   - Kiểm tra dữ liệu hợp lệ
   - Thêm vào danh sách
   - Reset form

2. Xóa hoạt động:
   - Lọc ra khỏi danh sách theo ID

3. Lưu hoạt động:
   - Gọi hàm onSave với dữ liệu mới
   - Đóng form

4. Hủy:
   - Gọi hàm onClose
   - Không lưu thay đổi 