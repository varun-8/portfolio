import React from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function Certifications(props) {
  const theme = props.theme;
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={1500} distance="20px">
          <div>
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications
            </h1>
            <span className="section-bar" aria-hidden="true" />
            <p className="certs-sub" style={{ color: theme.secondaryText }}>
              Click a card to open the credential
            </p>
          </div>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert, i) => {
          return (
            <CertificationCard
              key={cert.title}
              certificate={cert}
              theme={theme}
              index={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Certifications;
