// src/components/Projects/Projects.jsx
import React from "react";
import ProjectCard from "./ProjectCard";
import "./styles.css";

const projects = [
  {
    title: "Budget Tracker API",
    description: "Developed a secure RESTful API with Spring Boot, PostgreSQL, and JWT authentication.\
     Features include CRUD operations, analytics, and Swagger documentation. Dockerized for deployment.",
    image: "/RESTapi.webp",
    github: "https://github.com/davidharvith/budget-tracker"
  },
  {
    title: "Portfolio Website",
    description: "Developed a portfolio website featuring an interactive chat-bot to\
answers questions about my background, experience, and projects.\
Built using Node.js and React, the site showcases both frontend and\
backend development skills while providing an engaging way for\
visitors to learn about me.",
    image: "/portfolio.PNG",
    github: "https://github.com/davidharvith/portfolio_site"
  },
  {
    title: "Stock Market Simulator",
    description: "Built a\
simulator to test trading strategies using historical data. Applied OOP\
principles to support the Open-Closed Principle for easy strategy\
extensibility. Integrated real-time data via the Alpha Vantage API.\
",
    image: "/StockSimularot.PNG",
    github: "https://github.com/davidharvith/StockMarketSimulator"
  },
  {
    title: "tweet generator",
    description: "A probabilistic tweet\
generator that constructs a language model from a dataset of\
5,000 tweets to generate realistic new content. Implemented\
efficient memory management techniques in C to handle text\
processing and chain construction. Designed modular\
architecture for processing large text datasets.",

    image: "/tweet.svg",
    github: "https://github.com/davidharvith/tweet_generator"
}
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
