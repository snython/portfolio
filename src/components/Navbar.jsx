import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    /* Student's Name: CYRILLE YANNIS SONFACK
  Student ID: 301514181
  Date: September 24, 2025 */
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">About Me</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects" className="navbar-link">Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Services</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contact Me</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;