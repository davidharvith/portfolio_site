// src/components/Skills/Skills.jsx
import React from "react";
import SkillCategory from "./SkillCategory";
import "./styles.css";

// src/components/Skills/Skills.jsx
const skillsData = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: "/icons/c.svg" },
      { name: "C++", icon: "/icons/cpp.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "JavaScript", icon: "/icons/javascript.svg" }
    ]
  },
  {
    title: "Web Development",
    skills: [
      { name: "JavaScript", icon: "/icons/javascript.svg" },
      { name: "Node.js", icon: "/icons/Node.js.svg" },
      { name: "React", icon: "/icons/react.svg" },
      { name: "HTML", icon: "/icons/html5.svg" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "SQL (PostgreSQL)", icon: "/icons/postgresql.svg" }
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "NumPy", icon: "/icons/numpy.svg" },
      { name: "React", icon: "/icons/react.svg" }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Linux", icon: "/icons/linux.svg" }
    ]
  },
  {
    title: "Core CS Concepts",
    skills: [
      { name: "OOP", icon: "/icons/oop.svg" },
      { name: "Algorithms & Data Structures", icon: "/icons/algorithms.svg" },
      { name: "Machine Learning", icon: "/icons/ML.svg" },
      { name: "Data Analysis", icon: "/icons/data-analysis.svg" }
    ]
  }
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2>Skills</h2>
    <div className="skills-categories">
      {skillsData.map((cat, idx) => (
        <SkillCategory key={idx} title={cat.title} skills={cat.skills} />
      ))}
    </div>
  </section>
);

export default Skills;
