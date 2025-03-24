# Ghi chú chi tiết cho HomePage.js

## Cấu trúc chung
File này chứa component chính của trang chủ, hiển thị lịch và quản lý các hoạt động.

## Import và Dependencies
```javascript
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import DayDetail from './DayDetail';
import '../styles/HomePage.css';
```

## Component Structure
```javascript
function HomePage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [activities, setActivities] = useState({});

  return (
    <div className="home-page">
      <Sidebar />
      <main className="main-content">
        {/* Calendar và các phần khác */}
      </main>
    </div>
  );
}
```

## State Management

### 1. State chính
```javascript
const [selectedDate, setSelectedDate] = useState(null);
const [activities, setActivities] = useState({});
```
- `selectedDate`: Lưu ngày được chọn
- `activities`: Lưu danh sách hoạt động theo ngày

## Các hàm xử lý

### 1. Xử lý chọn ngày
```javascript
const handleDateSelect = (date) => {
  setSelectedDate(date);
};
```

### 2. Xử lý lưu hoạt động
```javascript
const handleSaveActivity = (date, dayActivities) => {
  setActivities(prev => ({
    ...prev,
    [date]: dayActivities
  }));
};
```

### 3. Xử lý đóng modal
```javascript
const handleCloseModal = () => {
  setSelectedDate(null);
};
```

## Render Component

### 1. Layout chính
```javascript
<div className="home-page">
  <Sidebar />
  <main className="main-content">
    {/* Nội dung chính */}
  </main>
</div>
```

### 2. Calendar
```javascript
<div className="calendar">
  {/* Hiển thị lịch */}
</div>
```

### 3. Modal chi tiết ngày
```javascript
{selectedDate && (
  <DayDetail
    date={selectedDate}
    onClose={handleCloseModal}
    onSave={handleSaveActivity}
    existingActivities={activities[selectedDate] || []}
  />
)}
```

## Props truyền xuống

### 1. DayDetail Component
- `date`: Ngày được chọn
- `onClose`: Hàm đóng modal
- `onSave`: Hàm lưu hoạt động
- `existingActivities`: Danh sách hoạt động hiện có

## Cấu trúc dữ liệu

### 1. Activities Object
```javascript
{
  "2024-03-20": [
    {
      id: 1,
      name: "Hoạt động 1",
      time: "09:00",
      duration: "60"
    }
  ]
}
```

## Xử lý sự kiện
1. Chọn ngày:
   - Cập nhật selectedDate
   - Hiển thị modal DayDetail

2. Lưu hoạt động:
   - Cập nhật activities object
   - Đóng modal

3. Đóng modal:
   - Reset selectedDate
   - Ẩn modal

## Export
```javascript
export default HomePage;
```

## Cấu trúc thư mục liên quan
```
src/
  ├── components/
  │   ├── HomePage.js
  │   ├── Sidebar.js
  │   └── DayDetail.js
  └── styles/
      └── HomePage.css
``` 