import React from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";

function GetSkillSvg(props) {
  if (props.fileName === "DataScienceImg")
    return <DataScienceImg theme={props.theme} />;
  else if (props.fileName === "FullStackImg")
    return <FullStackImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return null;
}

// Strip the leading "⚡ " used in portfolio.js; the list marker is styled in CSS.
const clean = (sentence) => sentence.replace(/^\s*⚡\s*/, "");

function SkillSection(props) {
  const theme = props.theme;
  return (
    <div className="skills-sections">
      {skills.data.map((skill, index) => {
        const reversed = index % 2 === 1;
        const number = String(index + 1).padStart(2, "0");
        return (
          <div
            key={skill.title}
            className={`skills-main-div${reversed ? " reversed" : ""}`}
          >
            <Fade left={!reversed} right={reversed} duration={1400}>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>

            <div className="skills-text-div">
              <Fade bottom duration={900} distance="20px">
                <div>
                  <span className="skills-number">{number}</span>
                  <h2 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h2>
                </div>
              </Fade>
              <Fade bottom duration={900} distance="20px" delay={120}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
              <Fade bottom duration={900} distance="20px" delay={240}>
                <ul className="skills-list">
                  {skill.skills.map((sentence) => (
                    <li
                      key={sentence}
                      className="skills-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {clean(sentence)}
                    </li>
                  ))}
                </ul>
              </Fade>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SkillSection;
