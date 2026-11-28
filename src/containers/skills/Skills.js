import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "react-reveal";

const SECURITY_FRAMEWORKS = [
  "OWASP Top 10",
  "Incident Response Lifecycle",
  "Zero Trust (ZTNA)",
  "AWS IAM Least Privilege",
  "Linux Hardening & UFW",
  "SSL/TLS & Security Headers",
];

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={1000} distance="20px">
          <div>
            <h1 className="skills-header" style={{ color: theme.text }}>
              Here's what I do
            </h1>
            <span className="skills-header-bar" aria-hidden="true" />
            <ul
              className="frameworks-strip"
              aria-label="Core security frameworks and practices"
            >
              {SECURITY_FRAMEWORKS.map((item) => (
                <li key={item} className="framework-pill">
                  <i className="fas fa-shield-alt" aria-hidden="true"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
