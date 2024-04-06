import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/About.css';

function About() {
  return (
    <div className="about">
      <img src="/assets/images/profile.jpg" alt="Kevin Perdomo" className="profile-image"/>
      <h1>Hi, I'm Kevin Perdomo</h1>
      <p>I'm a passionate AI & Machine Learning Engineer with experience in building, implementing, and optimizing cutting-edge technology solutions. Welcome to my portfolio!</p>
      {/* Now Add button to go to /projects  */}
      <Link to="/projects" className="cta">View Projects</Link>

    </div>
  );
}

export default About;
