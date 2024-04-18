import React from 'react';
import ResumePDF from './ResumePDF'; // This will handle the PDF download
import '../../styles/Resume.css';

function Resume() {
  return (
    <div className="resume">
      <h1>Kevin Perdomo - Resume</h1>
      <p>Explore my professional background and experiences below or download my resume as a PDF.</p>
      {/* <ResumePDF /> */}
      <div className="resume-content">
        <section>
          <h2>Experience</h2>
          {/* Map over your experiences here */}
          <p>Lockheed Martin - AI/ML Engineer</p>
          <p>Developed and optimized XGBoost models leveraging Docker and Helm for enhanced predictive analytics.</p>
        </section>
        <section>
          <h2>Education</h2>
          <p>Georgia Institute of Technology - B.S. in Computer Science, May 2022</p>
        </section>
        <section>
          <h2>Skills</h2>
          <ul>
            <li>Machine Learning</li>
            <li>Cybersecurity</li>
            {/* List other skills */}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Resume;
