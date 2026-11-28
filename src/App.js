import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import BackToTop from "./components/backToTop/BackToTop";
import ResumeModal from "./components/resumeModal/ResumeModal";
import { settings } from "./portfolio";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    if (settings.googleTrackingID) {
      ReactGA.initialize(settings.googleTrackingID, {
        testMode: process.env.NODE_ENV === "test",
      });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }
  }, []);

  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme-pref");
      return saved === "light" || saved === "dark" ? saved : "dark";
    } catch (e) {
      return "dark";
    }
  });
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <Main
          theme={themes[theme]}
          setTheme={setTheme}
          onOpenResume={() => setResumeOpen(true)}
        />
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
        <BackToTop />
      </>
    </ThemeProvider>
  );
}

export default App;
