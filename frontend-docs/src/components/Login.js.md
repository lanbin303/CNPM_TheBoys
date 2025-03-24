# Ghi chú chi tiết cho Login.js

## Cấu trúc chung
File này chứa component Login, xử lý việc đăng nhập của người dùng.

## Import và Dependencies
```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
```

## Component Structure
```javascript
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Form đăng nhập */}
      </div>
    </div>
  );
}
```

## State Management

### 1. Form Data
```javascript
const [formData, setFormData] = useState({
  username: '',
  password: ''
});
```
- Lưu thông tin đăng nhập (username và password)
- Sử dụng object để quản lý nhiều trường dữ liệu

### 2. Error State
```javascript
const [error, setError] = useState('');
```
- Lưu thông báo lỗi khi đăng nhập thất bại
- Mặc định là chuỗi rỗng

## Các hàm xử lý

### 1. Xử lý thay đổi input
```javascript
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};
```
- Cập nhật state khi người dùng nhập liệu
- Sử dụng spread operator để giữ nguyên các giá trị khác

### 2. Xử lý submit form
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  
  try {
    // Gọi API đăng nhập
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error('Đăng nhập thất bại');
    }

    const data = await response.json();
    // Lưu token vào localStorage
    localStorage.setItem('token', data.token);
    // Chuyển hướng về trang chủ
    navigate('/');
  } catch (err) {
    setError(err.message);
  }
};
```
- Ngăn chặn hành vi mặc định của form
- Gọi API đăng nhập
- Xử lý response và lỗi
- Lưu token và chuyển hướng

## Render Component

### 1. Container chính
```javascript
<div className="login-container">
  <div className="login-box">
    <h2>Đăng nhập</h2>
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
    value={formData.username}
    onChange={handleChange}
    required
  />
</div>

<div className="form-group">
  <label htmlFor="password">Mật khẩu</label>
  <input
    type="password"
    id="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    required
  />
</div>
```

### 3. Submit Button
```javascript
<button type="submit" className="login-button">
  Đăng nhập
</button>
```

## Xử lý sự kiện
1. Input change:
   - Cập nhật formData state
   - Xóa thông báo lỗi

2. Form submit:
   - Gọi API đăng nhập
   - Xử lý response
   - Chuyển hướng hoặc hiển thị lỗi

## Export
```javascript
export default Login;
```

## Cấu trúc thư mục liên quan
```
src/
  ├── components/
  │   └── Login.js
  └── styles/
      └── Login.css
```

## Lưu ý quan trọng
1. Sử dụng controlled components cho form
2. Xử lý lỗi và hiển thị thông báo
3. Lưu token vào localStorage sau khi đăng nhập thành công
4. Sử dụng async/await cho API calls
5. Validate form trước khi submit 