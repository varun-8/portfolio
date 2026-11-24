import React from "react";
import "./CertificationCard.css";
import { Fade } from "react-reveal";

function CertificationCard(props) {
  const certificate = props.certificate;
  const theme = props.theme;
  const index = props.index || 0;

  return (
    <Fade bottom duration={900} distance="24px" delay={(index % 3) * 120}>
      <a
        className="cert-card"
        href={certificate.certificate_link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${certificate.title} — view credential`}
      >
        <span className="cert-glow" aria-hidden="true"></span>
        <div className="cert-logo-wrap">
          {certificate.logo_icon ? (
            // brand icon from Iconify (used when no clear image logo exists)
            <span
              className="cert-logo-icon"
              role="img"
              aria-label={certificate.alt_name}
            >
              <span
                className="iconify"
                data-icon={certificate.logo_icon}
                data-inline="false"
                style={{ color: certificate.logo_icon_color }}
              ></span>
            </span>
          ) : (
            <img
              className="logo_img"
              src={require(`../../assests/images/${certificate.logo_path}`)}
              alt={certificate.alt_name}
            />
          )}
        </div>
        <div className="cert-body">
          <h2 className="cert-body-title" style={{ color: theme.text }}>
            {certificate.title}
          </h2>
          <h3
            className="cert-body-subtitle"
            style={{ color: theme.secondaryText }}
          >
            {certificate.subtitle}
          </h3>
          <span className="cert-link-text">
            View credential <span className="cert-arrow">→</span>
          </span>
        </div>
      </a>
    </Fade>
  );
}

export default CertificationCard;
