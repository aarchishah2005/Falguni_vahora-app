import React from 'react';
import { Link } from "react-router-dom";
import './header.css';

const Header = () => {
  return (
    <nav className="header">
      
      {/* Logo and Brand */}
      <div>
      <Link to="/">
        <img src="/assets/logo.jpeg" alt="Brand Logo" className="brand-logo" />
      </Link>
    </div>



      {/* Navigation Links */}
    <div className="nav-links">
        <NavLink to="/" text="Home" />
        <NavLink to="/about" text="About" />
        <NavLink to="/coaching"  text="Coaching" />
        <NavLink to="/book" text="Book" />
        <NavLink to="/contact" text="Contact" />
    </div>
    </nav>
  );
};

const NavLink = ({ icon, text }) => (
  <Link to={to} className="nav-link">
    <span>{text}</span>
 </Link>
);

export default Header;
