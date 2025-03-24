import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Setting.css';
import { FaBell, FaLanguage, FaMoon, FaLock, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Setting = () => {
  const navigate = useNavigate();
  const { darkMode, toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    notifications: true,
    language: 'vi',
  });

  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleToggle = (setting) => {
    if (setting === 'darkMode') {
      toggleTheme();
    } else {
      setSettings(prev => ({
        ...prev,
        [setting]: !prev[setting]
      }));
    }
  };

  const handleLanguageChange = (e) => {
    setSettings(prev => ({
      ...prev,
      language: e.target.value
    }));
  };

  const handleChangePassword = () => {
    setIsChangePasswordOpen(true);
    setError('');
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const handleClosePasswordModal = () => {
    setIsChangePasswordOpen(false);
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    
    // Kiểm tra mật khẩu mới và xác nhận mật khẩu
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setError('Mật khẩu mới và xác nhận mật khẩu không khớp');
      return;
    }

    // TODO: Gọi API để cập nhật mật khẩu
    console.log('Đổi mật khẩu:', passwordForm);
    setIsChangePasswordOpen(false);
  };

  const handleLogout = () => {
    // Xóa token hoặc thông tin đăng nhập từ localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    // Chuyển hướng về trang đăng nhập
    navigate('/login');
  };

  return (
    <div className="settings-container">
      <h1>Cài đặt</h1>

      <div className="settings-section">
        <h2>Tùy chọn</h2>
        
        <div className="setting-item">
          <div className="setting-info">
            <FaBell className="setting-icon" />
            <div className="setting-text">
              <h3>Thông báo</h3>
              <p>Bật/tắt thông báo</p>
            </div>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={() => handleToggle('notifications')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <FaMoon className="setting-icon" />
            <div className="setting-text">
              <h3>Chế độ tối</h3>
              <p>Bật/tắt chế độ tối</p>
            </div>
          </div>
          <label className="toggle">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => handleToggle('darkMode')}
            />
            <span className="toggle-slider"></span>
          </label>
        </div>

        <div className="setting-item">
          <div className="setting-info">
            <FaLanguage className="setting-icon" />
            <div className="setting-text">
              <h3>Ngôn ngữ</h3>
              <p>Chọn ngôn ngữ hiển thị</p>
            </div>
          </div>
          <select
            value={settings.language}
            onChange={handleLanguageChange}
            className="language-select"
          >
            <option value="vi">Tiếng Việt</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <h2>Bảo mật</h2>
        
        <div className="setting-item clickable" onClick={handleChangePassword}>
          <div className="setting-info">
            <FaLock className="setting-icon" />
            <div className="setting-text">
              <h3>Đổi mật khẩu</h3>
              <p>Cập nhật mật khẩu đăng nhập</p>
            </div>
          </div>
          <span className="arrow">›</span>
        </div>
      </div>

      <div className="settings-section">
        <h2>Hỗ trợ</h2>
        
        <div className="setting-item clickable">
          <div className="setting-info">
            <FaQuestionCircle className="setting-icon" />
            <div className="setting-text">
              <h3>Trợ giúp</h3>
              <p>Xem hướng dẫn sử dụng</p>
            </div>
          </div>
          <span className="arrow">›</span>
        </div>
      </div>

      <div className="settings-section">
        <div className="setting-item clickable danger" onClick={handleLogout}>
          <div className="setting-info">
            <FaSignOutAlt className="setting-icon" />
            <div className="setting-text">
              <h3>Đăng xuất</h3>
              <p>Thoát khỏi tài khoản</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal đổi mật khẩu */}
      {isChangePasswordOpen && (
        <div className="edit-modal-overlay">
          <div className="edit-modal">
            <h2>Chỉnh sửa mật khẩu</h2>
            <form onSubmit={handlePasswordSubmit}>
              <div className="form-group">
                <label>Mật khẩu hiện tại</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={passwordForm.currentPassword}
                  onChange={handlePasswordChange}
                  placeholder="Nhập mật khẩu hiện tại"
                />
              </div>
              <div className="form-group">
                <label>Mật khẩu mới</label>
                <input
                  type="password"
                  name="newPassword"
                  value={passwordForm.newPassword}
                  onChange={handlePasswordChange}
                  placeholder="Nhập mật khẩu mới"
                />
              </div>
              <div className="form-group">
                <label>Xác nhận mật khẩu mới</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordForm.confirmPassword}
                  onChange={handlePasswordChange}
                  placeholder="Nhập lại mật khẩu mới"
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <div className="modal-buttons">
                <button type="button" className="cancel-button" onClick={handleClosePasswordModal}>
                  Hủy
                </button>
                <button type="submit" className="save-button">
                  Lưu thay đổi
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Setting; 