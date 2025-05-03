// src/components/Projects/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Developed a portfolio website featuring an interactive chat-bot to\
answers questions about my background, experience, and projects.\
Built using Node.js and React, the site showcases both frontend and\
backend development skills while providing an engaging way for\
visitors to learn about me.",
    image: "/portfolio.PNG",
    github: "https://github.com/yourusername/weather-app"
  },
  {
    title: "Stock Market Simulator",
    description: "Built a\
simulator to test trading strategies using historical data. Applied OOP\
principles to support the Open-Closed Principle for easy strategy\
extensibility. Integrated real-time data via the Alpha Vantage API.\
",
    image: "/images/todo-list.png",
    github: "https://github.com/yourusername/todo-list"
  },
  // Add more project objects here...
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2>Projects</h2>
    <div className="projects-list">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} {...proj} />
      ))}
    </div>
  </section>
);

export default Projects;
