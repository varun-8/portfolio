import React from "react";
import "./DegreeCard.css";
import { Fade } from "react-reveal";

// Strip the leading "⚡ " used in portfolio.js; the bullet is styled in CSS.
const clean = (sentence) => sentence.replace(/^\s*⚡\s*/, "");

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;
  const index = props.index || 0;

  // Older data kept the grade inside the subtitle ("Degree — 8.29 CGPA").
  const [degreeName, gradeFromSubtitle] = (degree.subtitle || "").split(
    /\s+—\s+/
  );
  const grade = degree.grade || gradeFromSubtitle;

  return (
    <Fade bottom duration={900} distance="30px" delay={index * 120}>
      <article className="degree-card">
        <div className="degree-logo">
          <img
            src={require(`../../assests/images/${degree.logo_path}`)}
            alt={degree.alt_name}
          />
        </div>

        <div className="degree-body">
          <header className="degree-head">
            <div className="degree-head-text">
              <h2 className="degree-title" style={{ color: theme.text }}>
                {degreeName}
              </h2>
              <p className="degree-school">{degree.title}</p>
            </div>
            <div className="degree-meta">
              <span className="degree-duration">
                <i className="far fa-calendar-alt" aria-hidden="true"></i>
                {degree.duration}
              </span>
              {grade && <span className="degree-grade">{grade}</span>}
            </div>
          </header>

          <ul className="degree-points">
            {degree.descriptions.map((sentence) => (
              <li key={sentence}>{clean(sentence)}</li>
            ))}
          </ul>

          {degree.website_link && (
            <a
              className="degree-link"
              href={degree.website_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit website <span className="degree-link-arrow">→</span>
            </a>
          )}
        </div>
      </article>
    </Fade>
  );
}

export default DegreeCard;
