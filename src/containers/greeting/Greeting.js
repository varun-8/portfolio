import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { useHistory } from "react-router-dom";
import HeroSecurityImg from "./HeroSecurityImg";

export default function Greeting(props) {
  const theme = props.theme;
  const history = useHistory();

  // "Hello." -> "Hello" + accent "."
  const title = greeting.title || "";
  const titleWord = title.endsWith(".") ? title.slice(0, -1) : title;
  const titleDot = title.endsWith(".") ? "." : "";

  const scrollToSkills = () => {
    const el = document.getElementById("skills");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="greet-main" id="greeting">
      <div className="hero-glow" aria-hidden="true" />

      <div className="greeting-main">
        <div className="greeting-text-div">
          <Fade bottom duration={900} distance="24px">
            <h1 className="greeting-text" style={{ color: theme.text }}>
              {titleWord}
              <span className="accent-text">{titleDot}</span>
            </h1>
          </Fade>

          <Fade bottom duration={900} distance="24px" delay={80}>
            <p className="greeting-name" style={{ color: theme.text }}>
              I'm <span className="accent-text">{greeting.full_name}</span>
            </p>
          </Fade>

          <Fade bottom duration={900} distance="24px" delay={160}>
            <div className="greeting-intro">
              <p className="greeting-role">{greeting.subTitle}</p>
              {greeting.tagline && (
                <p className="greeting-text-p">{greeting.tagline}</p>
              )}
            </div>
          </Fade>

          <Fade bottom duration={900} distance="24px" delay={240}>
            <div className="greeting-social">
              <SocialMedia />
            </div>
          </Fade>

          <Fade bottom duration={900} distance="24px" delay={300}>
            <div className="greeting-actions">
              <button
                type="button"
                className="button btn-primary"
                onClick={() => history.push("/projects")}
              >
                View Projects <span className="btn-arrow">→</span>
              </button>
              {props.onOpenResume ? (
                <button
                  type="button"
                  className="button btn-outline"
                  onClick={props.onOpenResume}
                >
                  <i className="fas fa-file-alt" aria-hidden="true"></i>
                  Preview Resume
                </button>
              ) : (
                <a
                  className="button btn-outline"
                  href={greeting.resumeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Resume
                </a>
              )}
            </div>
          </Fade>
        </div>

        <div className="greeting-image-div">
          <Fade right duration={1100} distance="30px">
            <div className="hero-visual-wrap">
              <HeroSecurityImg theme={theme} />
            </div>
          </Fade>
        </div>
      </div>

      <button
        type="button"
        className="scroll-cue"
        onClick={scrollToSkills}
        aria-label="Scroll to what I do"
      >
        <span className="scroll-cue-mouse" aria-hidden="true">
          <span className="scroll-cue-wheel" />
        </span>
        <span className="scroll-cue-label">What I do</span>
      </button>
    </section>
  );
}
