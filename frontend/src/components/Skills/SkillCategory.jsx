// src/components/Skills/SkillCategory.jsx
import React from "react";

const SkillCategory = ({ title, skills }) => (
  <div className="skill-category">
    <span className="skill-category-title">{title}:</span>
    <ul className="skills-list-horizontal">
      {skills.map((skill, idx) => (
        <li className="skill-item-horizontal" key={idx}>
          {skill.icon && <img src={skill.icon} alt={skill.name} className="skill-icon" />}
          <span className="skill-label">{skill.name}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default SkillCategory;
