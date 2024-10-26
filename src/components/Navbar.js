// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#F8F9FA', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: '#333333', fontWeight: 'bold', fontSize: '1.5rem' }}>
          NUZUL | نزل
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{ color: '#4B4B4B', fontWeight: '500' }}>الرئيسية</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add" style={{ color: '#4B4B4B', fontWeight: '500' }}>إضافة عقار</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
