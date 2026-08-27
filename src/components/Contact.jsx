import React from "react";
import "../Style/Contact.css";

function Contact() {
  return (
    <section className="contact section-padding" id="contact">
      <div className="section-container">

        <div className="contact-heading">

          <p className="section-label">
            Contact Me
          </p>

          <h2 className="section-title">
            Let's Build Something <span>Great Together.</span>
          </h2>

          <p className="contact-intro">
            I am open to software development, full stack development and
            frontend opportunities where I can contribute, learn and grow.
          </p>

        </div>

        <div className="contact-simple-wrapper">

          <div className="contact-info">

            <p className="contact-small-title">
              GET IN TOUCH
            </p>

            <h3>
              Have an opportunity
              <br />
              or project in mind?
            </h3>

            <p className="contact-description">
              Feel free to connect with me for job opportunities,
              collaborations or discussions related to web and software
              development.
            </p>

            <div className="contact-details">

              <a
                href="mailto:bhavikamakode12@gmail.com"
                className="contact-detail-item"
              >
                <div className="contact-icon">
                  @
                </div>

                <div>
                  <span>Email</span>
                  <p>
                    bhavikamakode12@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+919529345099"
                className="contact-detail-item"
              >
                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <span>Phone</span>
                  <p>
                    +91 9529345099
                  </p>
                </div>
              </a>

              <div className="contact-detail-item">

                <div className="contact-icon">
                  ⌖
                </div>

                <div>
                  <span>Location</span>
                  <p>
                    Chandrapur, Maharashtra
                  </p>
                </div>

              </div>

            </div>

            <div className="contact-socials">

              <p>
                Connect With Me
              </p>

              <div className="contact-social-links">

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

        </div>

      </div>
    </section>
  );
}

export default Contact;