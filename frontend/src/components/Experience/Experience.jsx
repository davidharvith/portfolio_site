import React from "react";
import { FaSuitcase } from "react-icons/fa";
import experienceData from "./experienceData";
import "./styles.css";

const Experince = () => (
  <div id="experience" className="v-timeline-container">
    <h2 className="v-timeline-header">Experience</h2>
    <div className="v-timeline-line" />
    <div className="v-timeline-items">
      {experienceData.map((exp, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div className="v-timeline-item" key={index}>
            {isLeft ? (
              <>
                <div className="v-timeline-content v-timeline-content--left">
                  <div className="v-timeline-card">
                    <h3>{exp.title}</h3>
                    <p className="v-timeline-org">{exp.organization}</p>
                    <p className="v-timeline-desc">{exp.description}</p>
                  </div>
                </div>
                <div className="v-timeline-icon">
                  <FaSuitcase />
                </div>
                <div className="v-timeline-content v-timeline-content--right">
                  <div className="v-timeline-date">{exp.date}</div>
                </div>
              </>
            ) : (
              <>
                <div className="v-timeline-content v-timeline-content--left">
                  <div className="v-timeline-date">{exp.date}</div>
                </div>
                <div className="v-timeline-icon">
                  <FaSuitcase />
                </div>
                <div className="v-timeline-content v-timeline-content--right">
                  <div className="v-timeline-card">
                    <h3>{exp.title}</h3>
                    <p className="v-timeline-org">{exp.organization}</p>
                    <p className="v-timeline-desc">{exp.description}</p>
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default Experince;
