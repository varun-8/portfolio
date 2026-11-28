import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo, idx) => {
            const tooltipId = `skill-tooltip-${logo.skillName
              .toLowerCase()
              .replace(/[^a-z0-9]+/g, "-")}-${idx}`;
            return (
              <OverlayTrigger
                key={logo.skillName}
                placement="top"
                overlay={
                  <Tooltip id={tooltipId} className="skill-tooltip">
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline"
                  tabIndex={0}
                  aria-label={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
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

export default SoftwareSkill;
