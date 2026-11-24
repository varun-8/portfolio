import React from "react";
import { Fade } from "react-reveal";
import "./ExperienceCard.css";

// Turns "• a\n• b" strings from portfolio.js into a list of clean points.
function toPoints(description) {
  return (description || "")
    .split("\n")
    .map((line) => line.replace(/^\s*[•\-–]\s*/, "").trim())
    .filter(Boolean);
}

function ExperienceCard(props) {
  const experience = props.experience;
  const theme = props.theme;
  const index = props.index || 0;
  const points = toPoints(experience["description"]);

  return (
    <Fade bottom duration={900} distance="24px" delay={index * 100}>
      <article className="experience-card">
        <span className="experience-card-dot" aria-hidden="true" />
        <div className="experience-card-inner">
          <div className="exp-card-head">
            <div className="experience-card-logo-div">
              <img
                className="experience-card-logo"
                src={require(`../../assests/images/${experience["logo_path"]}`)}
                alt=""
              />
            </div>

            <div className="exp-card-heading">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p className="exp-card-sub">
                <a
                  className="exp-card-company"
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
                {experience["location"] && (
                  <span className="exp-card-location">
                    <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                    {experience["location"]}
                  </span>
                )}
              </p>
            </div>

            <span className="experience-card-duration">
              <i className="far fa-calendar-alt" aria-hidden="true"></i>
              {experience["duration"]}
            </span>
          </div>

          <ul className="experience-card-points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </article>
    </Fade>
  );
}

export default ExperienceCard;
