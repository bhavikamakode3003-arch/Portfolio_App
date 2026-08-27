import React from "react";
import "../Style/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="section-container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>
              Bhavika Makode
            </h2>

            <p>
              Aspiring Full Stack Developer focused on building responsive,
              user-friendly and efficient web applications.
            </p>

          </div>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#experience">
              Experience
            </a>

            <a href="#education">
              Education
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>


        <div className="footer-divider"></div>


        <div className="footer-bottom">

          <p>
            © {currentYear} Bhavika Makode. All Rights Reserved.
          </p>


          <div className="footer-socials">

            <a
              href="https://www.linkedin.com/in/bhavika-makode-394bb5285/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/bhavikamakode3003-arch"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;