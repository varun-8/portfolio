import React from "react";
import { Fade } from "react-reveal";
import { hobbies } from "../../portfolio";
import "./Hobbies.css";

// Small animated scene at the top of each hobby card
function HobbyVisual({ type }) {
  if (type === "test") {
    return (
      <div className="hv-term" aria-hidden="true">
        <div className="hv-term-bar">
          <span />
          <span />
          <span />
        </div>
        <code className="hv-line l1">
          <span className="hv-prompt">$</span> git clone open-source-app
        </code>
        <code className="hv-line l2">
          <span className="hv-prompt">$</span> test --all-features
        </code>
        <code className="hv-line l3 hv-ok">✓ edge case found</code>
      </div>
    );
  }

  if (type === "code") {
    return (
      <div className="hv-editor" aria-hidden="true">
        <code>
          <span className="hv-kw">const</span> app ={" "}
          <span className="hv-fn">ai</span>.build(idea);
        </code>
        <code className="hv-cm">{"// solves a real business problem"}</code>
        <code>
          app.<span className="hv-fn">ship</span>()
          <span className="hv-cursor" />
        </code>
      </div>
    );
  }

  if (type === "music") {
    return (
      <div className="hv-music" aria-hidden="true">
        <div className="hv-eq">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${(i % 5) * -0.22}s` }} />
          ))}
        </div>
        <span className="hv-note n1">♪</span>
        <span className="hv-note n2">♫</span>
      </div>
    );
  }

  return null;
}

export default function Hobbies(props) {
  const theme = props.theme;
  if (!hobbies || !hobbies.data || hobbies.data.length === 0) return null;

  return (
    <div className="main" id="hobbies">
      <div className="hobbies-header-div">
        <Fade bottom duration={1000} distance="20px">
          <div>
            <h1 className="hobbies-header" style={{ color: theme.text }}>
              {hobbies.title}
            </h1>
            <span className="section-bar" aria-hidden="true" />
            {hobbies.subtitle && (
              <p className="hobbies-sub">{hobbies.subtitle}</p>
            )}
          </div>
        </Fade>
      </div>

      <div className="hobbies-grid">
        {hobbies.data.map((hobby, i) => (
          <Fade
            key={hobby.title}
            bottom
            duration={900}
            distance="30px"
            delay={i * 120}
          >
            <article className="hobby-card">
              <div className="hobby-visual">
                <HobbyVisual type={hobby.visual} />
              </div>
              <div className="hobby-body">
                <span className="hobby-icon" aria-hidden="true">
                  <i className={hobby.icon}></i>
                </span>
                <h3 className="hobby-title" style={{ color: theme.text }}>
                  {hobby.title}
                </h3>
                <p className="hobby-desc">{hobby.description}</p>
              </div>
            </article>
          </Fade>
        ))}
      </div>
    </div>
  );
}
