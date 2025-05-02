// src/components/Skills/SkillCategory.jsx
import React from "react";

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category">
    <h3>{title}</h3>
    <div className="skills-list">
      {skills.map((skill, idx) => (
        <div className="skill-item" key={idx}>
          <img src={skill.icon} alt={skill.name} className="skill-icon" />
          <span className="skill-label">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCategory;
