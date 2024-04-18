import React from 'react';
import '../../styles/ProjectItem.css';

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      {/* <img src={project.image} alt={project.title} className="project-image"/> */}
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map(tech => <span key={tech} className="tech">{tech}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
