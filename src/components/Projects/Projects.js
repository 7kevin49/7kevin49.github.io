import React, { useState, useEffect } from 'react';
import ProjectItem from './ProjectItem';
import projectsData from '../../data/projects.json';
import '../../styles/Projects.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
