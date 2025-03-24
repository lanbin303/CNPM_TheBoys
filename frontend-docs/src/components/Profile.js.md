# Ghi chú chi tiết cho Profile.js

## Cấu trúc chung
File này chứa component Profile, hiển thị và quản lý thông tin cá nhân của người dùng.

## Import và Dependencies
```javascript
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';
```

## Component Structure
```javascript
function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    fullName: '',
    phone: '',
    address: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  return (
    <div className="profile-container">
      <div className="profile-box">
        {/* Form thông tin cá nhân */}
      </div>
    </div>
  );
}
```

## State Management

### 1. User Data
```javascript
const [userData, setUserData] = useState({
  username: '',
  email: '',
  fullName: '',
  phone: '',
  address: ''
});
```
- Lưu thông tin cá nhân của người dùng
- Các trường: username, email, fullName, phone, address

### 2. Edit Mode
```javascript
const [isEditing, setIsEditing] = useState(false);
```
- Quản lý trạng thái chỉnh sửa
- Mặc định là false (chế độ xem)

### 3. Error State
```javascript
const [error, setError] = useState('');
```
- Lưu thông báo lỗi
- Mặc định là chuỗi rỗng

## Các hàm xử lý

### 1. Fetch User Data
```javascript
useEffect(() => {
  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('/api/profile', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Không thể tải thông tin người dùng');
      }

      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  fetchUserData();
}, [navigate]);
```
- Chạy khi component mount
- Kiểm tra token
- Gọi API lấy thông tin
- Cập nhật state

### 2. Xử lý thay đổi input
```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setUserData(prev => ({
    ...prev,
    [name]: value
  }));
};
```
- Cập nhật state khi người dùng nhập liệu
- Sử dụng spread operator

### 3. Xử lý submit form
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  try {
    const token = localStorage.getItem('token');
    const response = await fetch('/api/profile', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      throw new Error('Không thể cập nhật thông tin');
    }

    setIsEditing(false);
  } catch (err) {
    setError(err.message);
  }
};
```
- Ngăn chặn hành vi mặc định
- Gọi API cập nhật
- Xử lý response và lỗi
- Tắt chế độ chỉnh sửa

## Render Component

### 1. Container chính
```javascript
<div className="profile-container">
  <div className="profile-box">
    <h2>Thông tin cá nhân</h2>
    {error && <div className="error-message">{error}</div>}
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  </div>
</div>
```

### 2. Form Fields
```javascript
<div className="form-group">
  <label htmlFor="username">Tên đăng nhập</label>
  <input
    type="text"
    id="username"
    name="username"
    value={userData.username}
    onChange={handleChange}
    disabled={!isEditing}
  />
</div>

<div className="form-group">
  <label htmlFor="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    value={userData.email}
    onChange={handleChange}
    disabled={!isEditing}
  />
</div>

<div className="form-group">
  <label htmlFor="fullName">Họ và tên</label>
  <input
    type="text"
    id="fullName"
    name="fullName"
    value={userData.fullName}
    onChange={handleChange}
    disabled={!isEditing}
  />
</div>

<div className="form-group">
  <label htmlFor="phone">Số điện thoại</label>
  <input
    type="tel"
    id="phone"
    name="phone"
    value={userData.phone}
    onChange={handleChange}
    disabled={!isEditing}
  />
</div>

<div className="form-group">
  <label htmlFor="address">Địa chỉ</label>
  <textarea
    id="address"
    name="address"
    value={userData.address}
    onChange={handleChange}
    disabled={!isEditing}
  />
</div>
```

### 3. Action Buttons
```javascript
<div className="profile-actions">
  {!isEditing ? (
    <button
      type="button"
      className="edit-button"
      onClick={() => setIsEditing(true)}
    >
      Chỉnh sửa
    </button>
  ) : (
    <>
      <button type="submit" className="save-button">
        Lưu
      </button>
      <button
        type="button"
        className="cancel-button"
        onClick={() => setIsEditing(false)}
      >
        Hủy
      </button>
    </>
  )}
</div>
```

## Xử lý sự kiện
1. Component mount:
   - Fetch thông tin người dùng
   - Kiểm tra token

2. Input change:
   - Cập nhật userData state
   - Xóa thông báo lỗi

3. Form submit:
   - Gọi API cập nhật
   - Xử lý response
   - Tắt chế độ chỉnh sửa

4. Edit/Cancel:
   - Toggle chế độ chỉnh sửa
   - Reset form khi hủy

## Export
```javascript
export default Profile;
```

## Cấu trúc thư mục liên quan
```
src/
  ├── components/
  │   └── Profile.js
  └── styles/
      └── Profile.css
```

## Lưu ý quan trọng
1. Sử dụng useEffect để fetch data
2. Kiểm tra token trước khi gọi API
3. Xử lý disabled state cho form fields
4. Toggle chế độ chỉnh sửa
5. Validate dữ liệu trước khi submit
6. Xử lý lỗi và hiển thị thông báo 