import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">Projects</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">Contact Me</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
