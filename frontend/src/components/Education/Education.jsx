import React from "react";
import educationData from "./educationData";
import EducationCard from "./EducationCard";
import "./styles.css";

const Education = () => (
  <section id="education" className="education-section">
    <h2>Education</h2>
    <div className="education-cards">
      {educationData.map((edu, idx) => (
        <EducationCard key={idx} {...edu} />
      ))}
    </div>
  </section>
);

export default Education;
