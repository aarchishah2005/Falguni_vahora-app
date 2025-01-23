
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          © 2024 Falguni Vahora. All Rights Reserved.
        </div>
        <div className="legal-links">
          <a href="/disclaimer" className="footer-link">Disclaimer</a>
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;