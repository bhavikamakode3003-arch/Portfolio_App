import React from "react";
import "../Style/Experience.css";

function Experience() {
  const experiences = [
    {
      date: "April 2025",
      role: "Front-End Development Intern",
      type: "Front End Technologies",
      description:
        "Developed responsive web interfaces using HTML5, CSS3 and JavaScript while working with semantic structure, forms, layouts and modern styling techniques.",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    },
    {
      date: "May 2023 - June 2023",
      role: "Web Development Internship Training",
      type: "6-Week Practical Training",
      description:
        "Completed practical training in programming and web development, built structured web pages and implemented JavaScript-based interactivity.",
      skills: ["Web Development", "JavaScript", "HTML5", "CSS3"],
    },
  ];

  return (
    <section className="experience section-padding" id="experience">
      <div className="section-container">

        <div className="experience-heading">
          <p className="section-label">My Journey</p>

          <h2 className="section-title">
            Experience & <span>Training.</span>
          </h2>

          <p className="experience-intro">
            Practical learning experiences that strengthened my foundation in
            frontend and web application development.
          </p>
        </div>

        <div className="experience-list">

          {experiences.map((experience, index) => (
            <div className="experience-item" key={experience.role}>

              <div className="experience-date">
                <span>{experience.date}</span>
              </div>

              <div className="experience-line">
                <span className="experience-dot"></span>

                {index !== experiences.length - 1 && (
                  <span className="timeline-line"></span>
                )}
              </div>

              <div className="experience-content">

                <p className="experience-type">
                  {experience.type}
                </p>

                <h3>{experience.role}</h3>

                <p className="experience-description">
                  {experience.description}
                </p>

                <div className="experience-skills">
                  {experience.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;