import React from "react";
import "./Educations.css";
import DegreeCard from "../../components/degreeCard/DegreeCard.js";
import { degrees } from "../../portfolio";
import { Fade } from "react-reveal";

function Educations(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade bottom duration={1000} distance="20px">
          <div>
            <h1 className="educations-header" style={{ color: theme.text }}>
              Degrees Received
            </h1>
            <span className="section-bar" aria-hidden="true" />
          </div>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, i) => (
          <DegreeCard
            key={degree.title}
            degree={degree}
            theme={theme}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}

export default Educations;
