import React from "react";
import "../Style/Skills.css";

function Skills() {
  const skillCategories = [
    {
      number: "01",
      title: "Programming",
      description:
        "Strong programming foundation with object-oriented concepts and problem-solving.",
      skills: ["Core Java", "JavaScript", "SQL"],
    },
    {
      number: "02",
      title: "Frontend Development",
      description:
        "Building responsive, clean and user-friendly interfaces for modern web applications.",
      skills: ["HTML5", "CSS3", "Bootstrap", "React.js"],
    },
    {
      number: "03",
      title: "Backend Development",
      description:
        "Developing application logic and integrating frontend applications with backend services.",
      skills: ["Spring Boot", "REST APIs", "CRUD Operations"],
    },
    {
      number: "04",
      title: "Database",
      description:
        "Working with relational databases to store, retrieve and manage application data efficiently.",
      skills: ["MySQL", "SQL", "MySQL Workbench"],
    },
    {
      number: "05",
      title: "Web Development",
      description:
        "Creating functional applications with responsive layouts and interactive user experiences.",
      skills: [
        "Responsive Web Design",
        "Form Validation",
        "DOM Manipulation",
      ],
    },
    {
      number: "06",
      title: "Development Tools",
      description:
        "Using modern development and version-control tools for efficient project development.",
      skills: ["VS Code", "Eclipse", "Git", "GitHub"],
    },
  ];

  return (
    <section className="skills section-padding" id="skills">
      <div className="section-container">

        <div className="skills-heading">
          <div>
            <p className="section-label">My Skills</p>

            <h2 className="section-title">
              Technologies I Use To
              <span> Build Solutions.</span>
            </h2>
          </div>

          <p className="skills-intro">
            A growing technical toolkit focused on full stack development,
            responsive interfaces, backend integration and database-driven
            applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div className="skill-card" key={category.number}>

              <div className="skill-card-top">
                <span className="skill-number">
                  {category.number}
                </span>

                <span className="skill-arrow">↗</span>
              </div>

              <h3>{category.title}</h3>

              <p className="skill-description">
                {category.description}
              </p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill}>
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;