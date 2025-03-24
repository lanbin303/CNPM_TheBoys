# Ghi chú chi tiết cho index.js

## Cấu trúc chung
File này là điểm khởi đầu của ứng dụng React, nơi render component App vào DOM.

## Import và Dependencies
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';
```

## Render Application
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Chi tiết từng phần

### 1. React và ReactDOM
- Import React để sử dụng JSX
- Import ReactDOM để render ứng dụng vào DOM
- Sử dụng createRoot API mới của React 18

### 2. Strict Mode
- Wrap App component trong StrictMode
- Giúp phát hiện các vấn đề tiềm ẩn trong ứng dụng
- Chỉ hoạt động trong môi trường development

### 3. Root Element
- Render vào element có id="root"
- Thường được định nghĩa trong public/index.html

## Cấu trúc thư mục liên quan
```
src/
  ├── App.js
  ├── styles/
  │   └── index.css
  └── index.js
```

## Lưu ý quan trọng
1. Đây là file khởi động chính của ứng dụng
2. Không nên thêm logic phức tạp vào file này
3. Chỉ nên chứa code render và các import cần thiết
4. StrictMode giúp phát hiện bugs sớm trong quá trình phát triển 