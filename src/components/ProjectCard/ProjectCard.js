import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";

export default function ProjectCard({ repo: project, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  const styles = style({
    color: "#d1d5db", // Default text color (light grey)
    backgroundColor: "#1a1a1a", // Near-black for dark mode
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 30px -15px",
    padding: "2rem",
    cursor: "pointer",
    borderRadius: "8px",
    height: "100%",
    transition: "all 0.3s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 4px 20px`,
      transform: "translateY(-4px)",
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          {...styles}
          key={project.name}
          onClick={() => openRepoinNewTab(project.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <div className="repo-name-div">
            <p className="repo-name">
              {project.name}
            </p>
          </div>
          <p className="repo-description">
            {project.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages logos={project.languages} />
          </div>
        </div>
      </Fade>
    </div>
  );
}