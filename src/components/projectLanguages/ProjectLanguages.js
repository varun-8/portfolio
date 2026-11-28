import React from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function ProjectLanguages(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons-languages">
          {props.logos.map((logo, idx) => {
            const tooltipId = `proj-tooltip-${logo.name
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}-${idx}`;
            return (
              <OverlayTrigger
                key={logo.name}
                placement="top"
                overlay={
                  <Tooltip id={tooltipId} className="skill-tooltip">
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline-languages"
                  tabIndex={0}
                  aria-label={logo.name}
                >
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
                    style={logo.color ? { color: logo.color } : {}}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProjectLanguages;
