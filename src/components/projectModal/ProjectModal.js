import React, { useEffect } from "react";
import "./ProjectModal.css";

/**
 * Case-study detail modal for a selected project card.
 */
export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasLink = project.url && project.url.trim();
  const isGithub = hasLink && project.url.includes("github.com");

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="project-modal">
        <div className="project-modal-head">
          <div>
            <span className="project-category">
              <i className="far fa-folder-open" aria-hidden="true"></i>
              {project.category || "Project"}
            </span>
            <h2 id="project-modal-title" className="project-modal-title">
              {project.name}
            </h2>
          </div>

          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close project details"
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>
        </div>

        <div className="project-modal-body">
          <p className="project-modal-desc">{project.description}</p>

          {project.highlights && project.highlights.length > 0 && (
            <div className="project-modal-section">
              <h3 className="project-modal-label">Key Execution & Outcomes</h3>
              <ul className="project-modal-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {project.languages && project.languages.length > 0 && (
            <div className="project-modal-section">
              <h3 className="project-modal-label">Stack & Tools</h3>
              <ul className="tech-chips project-modal-chips">
                {project.languages.map((tech) => (
                  <li key={tech.name} className="tech-chip">
                    <span className="tech-chip-icon" aria-hidden="true">
                      <span
                        className="iconify"
                        data-icon={tech.iconifyClass}
                        data-inline="false"
                        style={tech.color ? { color: tech.color } : undefined}
                      ></span>
                    </span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="project-modal-foot">
          <button type="button" className="resume-action-btn" onClick={onClose}>
            Close
          </button>
          {hasLink && (
            <a
              className="resume-action-btn primary"
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className={
                  isGithub ? "fab fa-github" : "fas fa-external-link-alt"
                }
                aria-hidden="true"
              ></i>
              {isGithub ? "View on GitHub" : "Visit Live / Resource"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
