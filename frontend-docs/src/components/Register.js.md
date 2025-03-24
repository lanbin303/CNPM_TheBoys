# Ghi chú chi tiết cho Register.js

## Cấu trúc chung
File này chứa component Register, xử lý việc đăng ký tài khoản mới cho người dùng.

## Import và Dependencies
```javascript
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';
```

## Component Structure
```javascript
function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  return (
    <div className="register-container">
      <div className="register-box">
        {/* Form đăng ký */}
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
  email: '',
  password: '',
  confirmPassword: ''
});
```
- Lưu thông tin đăng ký (username, email, password, confirmPassword)
- Sử dụng object để quản lý nhiều trường dữ liệu

### 2. Error State
```javascript
const [error, setError] = useState('');
```
- Lưu thông báo lỗi khi đăng ký thất bại
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

  // Validate password match
  if (formData.password !== formData.confirmPassword) {
    setError('Mật khẩu không khớp');
    return;
  }

  try {
    // Gọi API đăng ký
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password
      })
    });

    if (!response.ok) {
      throw new Error('Đăng ký thất bại');
    }

    // Chuyển hướng về trang đăng nhập
    navigate('/login');
  } catch (err) {
    setError(err.message);
  }
};
```
- Ngăn chặn hành vi mặc định của form
- Validate mật khẩu khớp nhau
- Gọi API đăng ký
- Xử lý response và lỗi
- Chuyển hướng về trang đăng nhập

## Render Component

### 1. Container chính
```javascript
<div className="register-container">
  <div className="register-box">
    <h2>Đăng ký tài khoản</h2>
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
  <label htmlFor="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
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

<div className="form-group">
  <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
  <input
    type="password"
    id="confirmPassword"
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    required
  />
</div>
```

### 3. Submit Button
```javascript
<button type="submit" className="register-button">
  Đăng ký
</button>
```

### 4. Link đăng nhập
```javascript
<div className="login-link">
  Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
</div>
```

## Xử lý sự kiện
1. Input change:
   - Cập nhật formData state
   - Xóa thông báo lỗi

2. Form submit:
   - Validate mật khẩu
   - Gọi API đăng ký
   - Xử lý response
   - Chuyển hướng hoặc hiển thị lỗi

## Export
```javascript
export default Register;
```

## Cấu trúc thư mục liên quan
```
src/
  ├── components/
  │   └── Register.js
  └── styles/
      └── Register.css
```

## Lưu ý quan trọng
1. Sử dụng controlled components cho form
2. Validate mật khẩu khớp nhau
3. Xử lý lỗi và hiển thị thông báo
4. Sử dụng async/await cho API calls
5. Chuyển hướng về trang đăng nhập sau khi đăng ký thành công 