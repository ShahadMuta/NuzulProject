// src/components/Footer.js
import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // يمكنك استخدام CSS منفصل لتنسيق الفوتر

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <h5>تابعونا على وسائل التواصل الاجتماعي</h5>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={30} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn size={30} />
          </a>
        </div>
        <p>جميع الحقوق محفوظة &copy; 2024 نزل</p>
      </div>
    </footer>
  );
};

export default Footer;
