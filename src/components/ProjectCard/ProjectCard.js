import React from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

export default function ProjectCard({ repo: project, theme, index = 0 }) {
  const hasLink = project.url && project.url.trim();
  const isGithub = hasLink && project.url.includes("github.com");

  return (
    <Fade bottom duration={900} distance="30px" delay={(index % 3) * 100}>
      <a
        className="project-card"
        href={hasLink ? project.url : undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="project-card-top">
          <span className="project-category">
            <i className="far fa-folder-open" aria-hidden="true"></i>
            {project.category || "Project"}
          </span>
          {hasLink && (
            <span className="project-card-ext">
              <i
                className={
                  isGithub ? "fab fa-github" : "fas fa-external-link-alt"
                }
                aria-hidden="true"
              ></i>
              {isGithub ? "Code" : "Visit"}
            </span>
          )}
        </div>

        <h3 className="repo-name" style={{ color: theme.text }}>
          {project.name}
        </h3>
        <p className="repo-description">{project.description}</p>

        {project.languages && project.languages.length > 0 && (
          <ul className="tech-chips" aria-label="Tech stack">
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
        )}
      </a>
    </Fade>
  );
}
