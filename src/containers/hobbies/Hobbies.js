import React, { useEffect, useRef, useState } from "react";
import { Fade } from "react-reveal";
import { hobbies } from "../../portfolio";
import "./Hobbies.css";

/* ---------- typing helper ----------
   Renders text that "types itself": the span is clipped to 0 → N characters
   with a steps(N) animation (N = character count, so one step per letter).
   `segments` lets parts of the line keep their syntax colours. */
function Typed({ segments, anim }) {
  const chars = segments.reduce((n, s) => n + s.t.length, 0);
  return (
    <span
      className={`hv-type ${anim}`}
      style={{
        "--chars": String(chars),
        animationTimingFunction: `steps(${chars}, end)`,
      }}
    >
      {segments.map((s, i) =>
        s.c ? (
          <span key={i} className={s.c}>
            {s.t}
          </span>
        ) : (
          <React.Fragment key={i}>{s.t}</React.Fragment>
        )
      )}
    </span>
  );
}

/* ---------- the three mini scenes ---------- */

// Testing open-source apps: commands type out in a terminal, then a finding pops up
function TerminalScene() {
  return (
    <div className="hv-term" aria-hidden="true">
      <div className="hv-win-bar">
        <span />
        <span />
        <span />
        <em className="hv-win-title">bash</em>
      </div>
      <div className="hv-scene-body">
        <code>
          <span className="hv-prompt">$ </span>
          <Typed anim="t1" segments={[{ t: "git clone open-source-app" }]} />
        </code>
        <code>
          <span className="hv-prompt">$ </span>
          <Typed anim="t2" segments={[{ t: "test --all-features" }]} />
        </code>
        <code className="hv-result">
          <span className="hv-ok">✓ edge case found</span>
        </code>
      </div>
    </div>
  );
}

// Vibe coding with AI: the AI writes the code line by line, then it ships
function EditorScene() {
  return (
    <div className="hv-editor" aria-hidden="true">
      <div className="hv-win-bar">
        <span />
        <span />
        <span />
        <em className="hv-win-title">idea.js</em>
        <b className="hv-ai-badge">
          <span className="hv-spark">✦</span> AI
        </b>
      </div>
      <div className="hv-scene-body">
        <code>
          <Typed
            anim="c1"
            segments={[
              { t: "const ", c: "hv-kw" },
              { t: "app = " },
              { t: "ai", c: "hv-fn" },
              { t: ".build(idea);" },
            ]}
          />
        </code>
        <code>
          <Typed
            anim="c2"
            segments={[{ t: "// solves a business problem", c: "hv-cm" }]}
          />
        </code>
        <code>
          <Typed
            anim="c3"
            segments={[{ t: "app." }, { t: "ship", c: "hv-fn" }, { t: "();" }]}
          />
          <span className="hv-shipped">✓ shipped</span>
        </code>
      </div>
    </div>
  );
}

// Listening to music: a tiny player — equaliser, rising notes, progress bar
function MusicScene() {
  return (
    <div className="hv-music" aria-hidden="true">
      <span className="hv-note n1">♪</span>
      <span className="hv-note n2">♫</span>
      <span className="hv-note n3">♬</span>
      <div className="hv-eq">
        {Array.from({ length: 11 }).map((_, i) => (
          <span key={i} style={{ animationDelay: `${(i % 5) * -0.21}s` }} />
        ))}
      </div>
      <div className="hv-player">
        <i className="fas fa-play" aria-hidden="true"></i>
        <span className="hv-track">
          <span className="hv-progress" />
        </span>
      </div>
    </div>
  );
}

const SCENES = { test: TerminalScene, code: EditorScene, music: MusicScene };

/* ---------- card ---------- */
function HobbyCard({ hobby, theme, index }) {
  const visualRef = useRef(null);
  // scenes only animate while visible: they start from the beginning when the
  // card scrolls into view and stop when it leaves (saves work off-screen)
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = visualRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Scene = SCENES[hobby.visual];

  return (
    <Fade bottom duration={900} distance="30px" delay={index * 120}>
      <article
        className={`hobby-card${active ? " is-active" : ""}`}
        data-visual={hobby.visual}
      >
        <div className="hobby-visual" ref={visualRef}>
          {Scene && <Scene />}
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
  );
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
          <HobbyCard key={hobby.title} hobby={hobby} theme={theme} index={i} />
        ))}
      </div>
    </div>
  );
}
