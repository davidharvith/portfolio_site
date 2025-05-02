// src/components/Experience/Experience.jsx
import React from "react";
import experienceData from "./experienceData";
import "./styles.css";

const Experience = () => (
  <section id="experience" className="experience-section">
    <h2>Experience</h2>
    <div className="timeline">
      {experienceData.map((exp, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-dot" />
          <div className="timeline-content">
            <span className="timeline-date">{exp.date}</span>
            <h3>{exp.title}</h3>
            <h4>{exp.organization}</h4>
            <p>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
