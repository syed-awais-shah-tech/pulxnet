import React from "react";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img
            src="/images/99f22c5dae97d0e231016028a9f5e28558581a8d.png"
            alt="PulxeNet Logo"
          />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services & Courses</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <div className="navbar-button">
            <Link to="/contact">
              <button>Get in Touch</button>
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
