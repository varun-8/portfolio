import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectModal from "../../components/projectModal/ProjectModal";
import { Fade } from "react-reveal";
import { projectsHeader, projects, socialMediaLinks } from "../../portfolio.js";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

function Projects(props) {
  const theme = props.theme;
  const [activeGroup, setActiveGroup] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const groups = [
    "All",
    ...Array.from(
      new Set(projects.data.map((p) => p.filterGroup).filter(Boolean))
    ),
  ];

  const visibleProjects =
    activeGroup === "All"
      ? projects.data
      : projects.data.filter((p) => p.filterGroup === activeGroup);

  return (
    <div className="projects-main page-transition">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade bottom duration={1200} distance="30px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <span className="page-eyebrow">Selected Work</span>
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div
        className="projects-filter-tabs"
        role="tablist"
        aria-label="Filter projects by domain"
      >
        {groups.map((group) => {
          const count =
            group === "All"
              ? projects.data.length
              : projects.data.filter((p) => p.filterGroup === group).length;
          return (
            <button
              key={group}
              type="button"
              role="tab"
              aria-selected={activeGroup === group}
              className={`projects-filter-tab${
                activeGroup === group ? " active" : ""
              }`}
              onClick={() => setActiveGroup(group)}
            >
              <span>{group}</span>
              <span className="projects-filter-count">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="repo-cards-div-main" key={activeGroup}>
        {visibleProjects.map((repo, i) => (
          <ProjectCard
            key={repo.name}
            repo={repo}
            theme={theme}
            index={i}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      <div className="projects-more">
        <a
          className="button btn-primary projects-more-btn"
          href={socialMediaLinks.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" aria-hidden="true"></i>
          More projects on GitHub
          <span className="btn-arrow">→</span>
        </a>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Projects;
