import React from "react";
import "../Style/Education.css";

function Education() {
  const educationData = [
    {
      year: "2022 - 2026",
      title: "B.Tech in Computer Science Engineering",
      institute:
        "Rajiv Gandhi College of Engineering Research and Technology, Chandrapur",
      type: "Graduation",
    },
    {
      year: "2021 - 2022",
      title: "Higher Secondary Certificate (HSC)",
      institute: "Nehru Junior College, Chandrapur",
      type: "Higher Secondary",
    },
    {
      year: "2019 - 2020",
      title: "Secondary School Certificate (SSC)",
      institute: "St. Francis TSK High School, Chandrapur",
      type: "Secondary Education",
    },
  ];

  return (
    <section className="education section-padding" id="education">
      <div className="section-container">

        <div className="education-heading">
          <p className="section-label">Education</p>

          <h2 className="section-title">
            Academic <span>Background.</span>
          </h2>

          <p className="education-intro">
            My academic journey has helped me build a strong foundation in
            computer science, programming and software development.
          </p>
        </div>

        <div className="education-grid">
          {educationData.map((education) => (
            <div className="education-card" key={education.title}>

              <div className="education-card-top">
                <span className="education-type">
                  {education.type}
                </span>

                <span className="education-year">
                  {education.year}
                </span>
              </div>

              <div className="education-line"></div>

              <h3>{education.title}</h3>

              <p className="education-institute">
                {education.institute}
              </p>

              <div className="education-icon">
                ↗
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;