import React from "react";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  const handleOpen = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <h2 className="modal-title">{project.title}</h2>
        <p className="modal-sub">{project.subtitle}</p>

        {/* Summary */}
        <div className="modal-section">
          <h3>Summary</h3>
          <p>{project.summary}</p>
        </div>

        {/* How it works */}
        {project.howItWorks && (
          <div className="modal-section">
            <h3>How it works</h3>
            <p>{project.howItWorks}</p>
          </div>
        )}

        {/* Key features */}
        {project.features && project.features.length > 0 && (
          <div className="modal-section">
            <h3>Key features</h3>
            <ul>
              {project.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        {project.techStack && (
          <div className="modal-section">
            <h3>Tech stack</h3>
            <p>{project.techStack}</p>
          </div>
        )}

        {/* Algorithm */}
        {project.algorithm && (
          <div className="modal-section">
            <h3>Algorithms used</h3>
            <p>{project.algorithm}</p>
          </div>
        )}

        {/* Usefulness */}
        {project.usefulness && (
          <div className="modal-section">
            <h3>What problem it solves</h3>
            <p>{project.usefulness}</p>
          </div>
        )}

        {/* Challenges */}
        {project.challenges && project.challenges.length > 0 && (
          <div className="modal-section">
            <h3>Challenges solved</h3>
            <ul>
              {project.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="modal-section">
          <h3>Links</h3>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {project.github && (
              <button
                className="secondary-btn"
                onClick={() => handleOpen(project.github)}
              >
                🐙 View GitHub
              </button>
            )}
            {project.liveDemo && (
              <button
                className="primary-btn"
                onClick={() => handleOpen(project.liveDemo)}
              >
                🚀 Live Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
