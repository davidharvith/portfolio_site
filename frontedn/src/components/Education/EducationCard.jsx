import React from "react";

const EducationCard = ({ degree, field, institution, dates, gpa, coursework }) => (
  <div className="education-card">
    <div className="education-header">
      <h3>{degree}, {institution}</h3>
      <span className="education-dates">{dates}</span>
    </div>
    <div className="education-details">
      <div className="education-field">{field}</div>
      <div className="education-gpa">GPA: {gpa}</div>
      {coursework && coursework.length > 0 && (
        <div className="education-coursework">
          <strong>Relevant Coursework:</strong>
          <ul>
            {coursework.map((course, idx) => (
              <li key={idx}>
                {course.name} {course.grade && <span className="course-grade">({course.grade})</span>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

export default EducationCard;
