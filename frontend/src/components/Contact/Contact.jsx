// src/components/Contact/Contact.jsx
import React from "react";
import "./styles.css";

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact information</h2>
    <p>
      If you want to connect, please email me at: <br />
      <a href="mailto:david.harvith@mail.huji.ac.il" className="contact-email">
        david.harvith@mail.huji.ac.il
      </a>
    </p>

  </section>
);

export default Contact;
