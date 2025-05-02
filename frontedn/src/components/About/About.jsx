import React from 'react';
import './styles.css';

function About() {
  return (
    <section id="about" className="about-section">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="about-profile-img"
      />
      <div className="about-text-box">
        <h2>Hi, I&apos;m David.</h2>
        <p>
          I&apos;m a Computer Science and Math student with a strong foundation in algorithms, data structures, software development, and machine learning. I&apos;m proficient in Java, Python, C/C++, and JavaScript, and I&apos;m passionate about building impactful technology. I&apos;m eager to contribute to a team tackling challenging problems with real-world significance.
        </p>
      </div>
    </section>
  );
}

export default About;
