import React, { useState } from "react";
import { Fade } from "react-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

// Renders the experience sections (Work, Internships, Leadership) as
// filterable timelines. File name kept so existing imports keep working.
function ExperienceAccordion(props) {
  const theme = props.theme;
  const sections = props.sections || [];
  const [active, setActive] = useState("all");

  const total = sections.reduce((n, s) => n + s["experiences"].length, 0);
  const tabs = [
    { key: "all", label: "All", count: total, icon: "fas fa-layer-group" },
    ...sections.map((s) => ({
      key: s["title"],
      label: s["title"],
      count: s["experiences"].length,
      icon: s["icon"],
    })),
  ];

  const visible =
    active === "all" ? sections : sections.filter((s) => s["title"] === active);

  return (
    <div className="experience-accord">
      <Fade bottom duration={800} distance="16px">
        <div className="exp-tabs" role="tablist" aria-label="Filter experience">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={active === tab.key}
              className={`exp-tab${active === tab.key ? " active" : ""}`}
              onClick={() => setActive(tab.key)}
            >
              {tab.icon && <i className={tab.icon} aria-hidden="true"></i>}
              <span className="exp-tab-label">{tab.label}</span>
              <span className="exp-tab-count">{tab.count}</span>
            </button>
          ))}
        </div>
      </Fade>

      {/* key forces a re-mount so the fade-in plays on every filter change */}
      <div className="exp-sections" key={active}>
        {visible.map((section) => (
          <section className="experience-section" key={section["title"]}>
            <div className="experience-section-head">
              <span className="experience-section-icon" aria-hidden="true">
                <i className={section["icon"] || "fas fa-briefcase"}></i>
              </span>
              <h2
                className="experience-section-title"
                style={{ color: theme.text }}
              >
                {section["title"]}
              </h2>
              <span className="experience-section-line" />
            </div>
            <div className="experience-timeline">
              {section["experiences"].map((experience, i) => (
                <ExperienceCard
                  key={experience["title"] + experience["duration"]}
                  experience={experience}
                  theme={theme}
                  index={i}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ExperienceAccordion;
