import React from "react";
import "../Css/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="/images/99f22c5dae97d0e231016028a9f5e28558581a8d.png"
          alt="PulxeNet Logo"
        />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services & Courses</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#blog">Blog</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <div className="navbar-button">
            <button>Get in Touch</button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
