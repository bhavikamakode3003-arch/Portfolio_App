import React from "react";
import "../Style/Projects.css";

import coffeeProject from "../assets/images/coffee-project.jpg";
import sponsorSyncProject from "../assets/images/sponsorsync-project.png";
import careBridgeProject from "../assets/images/carebridge-project.png";
function Projects() {
  const projects = [
    {
      title: "Coffee Website",
      category: "Frontend Development",
      image: coffeeProject,

      description:
        "A responsive coffee website featuring structured sections, smooth navigation and a clean user-friendly interface optimized for desktop, tablet and mobile devices.",

      technologies: [
        "HTML5",
        "CSS3",
        "Bootstrap",
      ],

      github:
        "https://github.com/bhavikamakode3003-arch/coffee-website",

      live:
        "https://coffee-website-livid-omega.vercel.app",
    },

    {
      title: "SponsorSync",
      category: "React Application",
      image: sponsorSyncProject,

      description:
        "An event sponsorship management application built with React.js featuring CRUD operations, search, filtering and REST API integration for efficient data management.",

      technologies: [
        "React.js",
        "JavaScript",
        "REST APIs",
      ],

      github:
        "https://github.com/bhavikamakode3003-arch/SponsorSync_App",

      live:
        "https://github.com/bhavikamakode3003-arch/SponsorSync_App",
    },


    {
      title: "CareBridge",
      category: "Full Stack Development",
      image: careBridgeProject,

      description:
        "CareBridge is a healthcare web application designed to make healthcare services more accessible and convenient. It provides a user-friendly platform for users to access healthcare-related information and services.",

      technologies: [
        "Java",
        "Spring Boot",
        "React.js",
        "SQL",
        "REST APIs",
      ],

      github: "https://github.com/bhavikamakode3003-arch",

      live: "https://sunny-quietude-production-5641.up.railway.app",
    },

  ];

  return (
    <section className="projects section-padding" id="projects">
      <div className="section-container">

        <div className="projects-heading">

          <div>
            <p className="section-label">
              My Work
            </p>

            <h2 className="section-title">
              Featured <span>Projects.</span>
            </h2>
          </div>

          <p className="projects-intro">
            A selection of projects that demonstrate my frontend development,
            React.js, responsive design and application development skills.
          </p>

        </div>

        <div className="projects-list">

          {projects.map((project, index) => (
            <article
              className={`project-card ${index % 2 !== 0 ? "project-reverse" : ""
                }`}
              key={project.title}
            >

              <div className="project-image-container">

                <div className="project-image-wrapper">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-image-overlay"
                    aria-label={`View ${project.title}`}
                  >
                    <span>
                      View Project
                      <small>↗</small>
                    </span>
                  </a>

                </div>

              </div>


              <div className="project-content">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    GitHub
                    <span>↗</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="project-live"
                  >
                    View Project
                    <span>→</span>
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;