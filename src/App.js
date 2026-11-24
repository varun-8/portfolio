import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import BackToTop from "./components/backToTop/BackToTop";
import { CursorProvider } from "react-cursor-custom";
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
  // The custom cursor only makes sense with a mouse; skip it on touch screens
  const isTouch =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(hover: none), (pointer: coarse)").matches;
  const useCursor = settings.useCustomCursor && !isTouch;

  return (
    <ThemeProvider theme={themes[theme]}>
      <>
        <GlobalStyles />
        <div>
          {useCursor ? (
            <CursorProvider
              color={themes[theme].secondaryText}
              ringSize={25}
              transitionTime={75}
            >
              <Main theme={themes[theme]} setTheme={setTheme} />
            </CursorProvider>
          ) : (
            <Main theme={themes[theme]} setTheme={setTheme} />
          )}
          <BackToTop />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
