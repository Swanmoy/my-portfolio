import React from 'react';

const Projects=()=>{
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        <div className="project">
          <h3>Project 1</h3>
          <p>Description of project 1...</p>
          <a href="#">View Project</a>
        </div>
        <div className="project">
          <h3>Project 2</h3>
          <p>Description of project 2...</p>
          <a href="#">View Project</a>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

export default Projects;
