import React from 'react';
import { Home, BarChart2, BookOpen, Info, LogIn, UserPlus } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <nav className="header">
      
      {/* Logo and Brand */}
      <div>
      <a href="/home">
        <img src="/assets/logo.jpeg" alt="Brand Logo" className="brand-logo" />
      </a>
    </div>



      {/* Navigation Links */}
    <div className="nav-links">
        <NavLink text="Home" />
        <NavLink text="About" />
        <NavLink text="Coaching" />
        <NavLink text="Book" />
        <NavLink text="Contact" />
    </div>
    </nav>
  );
};

const NavLink = ({ icon, text }) => (
  <a href="#" className="nav-link">
    {icon}
    <span>{text}</span>
  </a>
);

export default Header;