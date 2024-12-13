import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A portfolio website built using React and Vite as building tool to showcase skills, projects, and experience.",
      link: "https://github.com/BenithaSri/ReactPortfolio.git",
    },
    {
      id: 2,
      title: "Gameverse",
      description: "Multigame iOS app build using Swift Storyboard.",
      link: "https://github.com/BenithaSri/iOS-Gameverse.git",
    },
    {
      id: 3,
      title: "Child Monitor App",
      description: "A collaborative project to monitor children screen time ,usage patterns and location tracking.",
      link: "https://github.com/BenithaSri/ChildMonitor.git",
    },
  ];

  // Handles project click
  const handleProjectClick = (project) => {
    if (selectedProject && selectedProject.id === project.id) {
      setSelectedProject(null); // Close if the same project is clicked again
    } else {
      setSelectedProject(project); // Open the clicked project
    }
  };

  // Closes the dialog box
  const handleCloseDialog = () => {
    setSelectedProject(null); // Clear the selected project
  };

  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-h1">WELCOME!!!</h1>
        <p className="about-p">
          Hey there! I'm Benitha Sri Panchagiri, a software engineer and a
          current Master's student in Computer Science at Northwest Missouri
          State University. With hands-on experience in both cloud server
          management and web development, I've had the chance to work with some
          amazing teams at Capgemini and Internshala. Whether it's
          troubleshooting technical issues or building responsive web apps, I'm
          always up for a new challenge. When I'm not coding, you can find me
          exploring the latest tech trends or tinkering with new ideas. Feel
          free to reach out—I’m always excited to collaborate and learn from
          others!
        </p>

        {/* Projects Section */}
        <h2 className="about-h2">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              className={`project-box ${
                index % 2 === 0 ? "popup-left" : "popup-right"
              }`}
              key={project.id}
              onClick={() => handleProjectClick(project)}
            >
              <h3>{project.title}</h3>
              {selectedProject && selectedProject.id === project.id && (
                <div className="project-popup">
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub Repository
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
