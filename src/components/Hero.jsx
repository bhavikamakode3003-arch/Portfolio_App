import React from "react";
import "../Style/Hero.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import profileImage from "../assets/images/bhavika-profile.png";
import resumeFile from "../assets/resume/Bhavika_Makode_Resume.pdf";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-small-text">HELLO, I'M</p>

          <h1>
            Bhavika <span>Makode.</span>
          </h1>

          <h2>
            I Build Digital Experiences
            <br />
            <span>That Inspire.</span>
          </h2>

          <p className="hero-description">
            Computer Science Engineering fresher and aspiring Full Stack
            Developer focused on building responsive, user-friendly and
            efficient web applications using modern technologies.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="hero-primary-btn">
              View My Work
              <span>→</span>
            </a>

            <a
              href={resumeFile}
              download="Bhavika_Makode_Resume.pdf"
              className="hero-secondary-btn"
            >
              Download Resume
              <span>↓</span>
            </a>

          </div>

          <div className="hero-social">
  <p>Follow Me</p>

  <div className="social-links">

    <a
      href="https://www.linkedin.com/in/bhavika-makode-394bb5285/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
    >
      <FaLinkedinIn />
    </a>

    <a
      href="https://github.com/bhavikamakode3003-arch"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      title="GitHub"
    >
      <FaGithub />
    </a>

  </div>
</div>
        </div>

        <div className="hero-image-section">

          <div className="gold-circle"></div>

          <div className="gold-glow glow-one"></div>
          <div className="gold-glow glow-two"></div>

          <div className="hero-image-wrapper">
            <img
              src={profileImage}
              alt="Bhavika Makode"
              className="hero-profile-image"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;