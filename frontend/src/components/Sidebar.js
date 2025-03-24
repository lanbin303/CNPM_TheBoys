import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaCalendar, FaTasks, FaBell, FaCog, FaUser, FaBars } from 'react-icons/fa';
import { useSidebar } from '../context/SidebarContext';
import '../styles/Sidebar.css';

function Sidebar() {
  const { isOpen, toggleSidebar } = useSidebar();
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="hamburger-button" onClick={toggleSidebar}>
        <FaBars />
      </button>
      
      <nav className="sidebar-menu">
        <button className="menu-item" onClick={() => handleNavigate('/home')}>
          <FaHome />
          <span>Trang chủ</span>
        </button>
        <button className="menu-item" onClick={() => handleNavigate('/calendar')}>
          <FaCalendar />
          <span>Lịch</span>
        </button>
        <button className="menu-item" onClick={() => handleNavigate('/habits')}>
          <FaTasks />
          <span>Thói quen</span>
        </button>
        <button className="menu-item" onClick={() => handleNavigate('/notifications')}>
          <FaBell />
          <span>Thông báo</span>
        </button>
        <button className="menu-item" onClick={() => handleNavigate('/settings')}>
          <FaCog />
          <span>Cài đặt</span>
        </button>
        <button className="menu-item" onClick={() => handleNavigate('/profile')}>
          <FaUser />
          <span>Hồ sơ</span>
        </button>
      </nav>
    </div>
  );
}

export default Sidebar; 