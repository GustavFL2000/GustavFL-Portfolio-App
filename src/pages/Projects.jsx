import { useEffect, useState } from "react";
import "../styles/Projects.css";
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div className="project-container">
      <h1>Velkommen til projekt siden</h1>
      <p>Her på siden ses mine færdige og igangværende ikke spil projekter.</p>

      <div className="project-grid">
        {projects.map(project => (
          <a
            key={project.id}
            href={project.link}
            className="project-card-link"
            download
          >
            <div className="project-card">
              <img src={project.image} alt={project.title} />
              <h2>{project.title}</h2>
              <p>{project.description}</p>


            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
