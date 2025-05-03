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
        <p  >
          Welcome to my portfolio! I'm Aspiring softwear developer looking for my chance to join an incredibale team solving hard problems with a real impact on people's lives.
        </p>
      </div>
    </section>
  );
}

export default About;
