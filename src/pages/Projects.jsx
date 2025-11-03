import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import "../styles/Projects.css";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="project-container">
      <h1>Velkommen til projekt siden</h1>
      <p>Her på siden ses mine færdige og igangværende ikke spil projekter.</p>

      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <Modal isOpen={selectedProject !== null} onClose={closeModal}>
        {selectedProject && (
          <>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            {selectedProject.link ? (
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            ) : (
              <p>Link not available</p>
            )}
          </>
        )}
      </Modal>
    </div>
  );
}

export default Projects;
