import React, { useState } from "react";
import "../Style/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          <div className="logo-mark">BM</div>

          <div className="logo-text">
            <h2>BHAVIKA MAKODE</h2>
            <span>FULL STACK DEVELOPER</span>
          </div>
        </a>

        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={handleMenuClick}>
            Home
          </a>

          <a href="#about" onClick={handleMenuClick}>
            About
          </a>

          <a href="#skills" onClick={handleMenuClick}>
            Skills
          </a>

          <a href="#projects" onClick={handleMenuClick}>
            Projects
          </a>

          <a href="#experience" onClick={handleMenuClick}>
            Experience
          </a>

          <a href="#contact" onClick={handleMenuClick}>
            Contact
          </a>
        </nav>

        <div className="navbar-actions">
          <a href="#contact" className="navbar-contact-btn">
            Let's Talk
            <span>→</span>
          </a>

          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Navbar;