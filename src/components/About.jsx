import React from "react";
import "../Style/About.css";

import aboutImage from "../assets/images/about-image.jpg";

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="section-container">

        <div className="about-heading">
          <p className="section-label">About Me</p>

          <h2 className="section-title">
            Building Scalable Solutions
            <span> With Code & Creativity.</span>
          </h2>
        </div>

        <div className="about-grid">

          <div className="about-content">
            <h3>
              Aspiring Full Stack Developer
            </h3>

            <p>
              I am a Computer Science Engineering fresher with a strong
              foundation in Core Java, SQL, React.js, Spring Boot and MySQL.
              I enjoy building responsive, user-friendly and efficient web
              applications that solve real-world problems.
            </p>

            <p>
              I have hands-on experience with frontend development, CRUD
              operations, REST APIs, database management and responsive web
              design. I am continuously improving my technical skills and
              looking forward to contributing to professional software
              development projects.
            </p>

            <a href="#contact" className="about-btn">
              Let's Connect
              <span>→</span>
            </a>
          </div>

          <div className="about-details">

            <div className="detail-item">
              <span className="detail-number">01</span>

              <div>
                <p>Name</p>
                <h4>Bhavika Makode</h4>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-number">02</span>

              <div>
                <p>Education</p>
                <h4>B.Tech Computer Science Engineering</h4>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-number">03</span>

              <div>
                <p>Location</p>
                <h4>Chandrapur, Maharashtra</h4>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-number">04</span>

              <div>
                <p>Role</p>
                <h4>Full Stack Developer</h4>
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-number">05</span>

              <div>
                <p>Email</p>
                <h4>bhavikamakode12@gmail.com</h4>
              </div>
            </div>

          </div>

          <div className="about-image-box">
            <div className="about-image-border"></div>

            <img
              src={aboutImage}
              alt="Bhavika Makode"
              className="about-image"
            />

            <div className="about-image-tag">
              <span>Full Stack</span>
              <p>Developer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;