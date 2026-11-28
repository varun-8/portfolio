import React from "react";
import { Route, Switch, HashRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import ScrollToTop from "../components/scrollToTop/ScrollToTop";

export default function Main({ theme, setTheme, onOpenResume }) {
  const sharedProps = { theme, setTheme, onOpenResume };

  return (
    <HashRouter basename="/">
      <ScrollToTop />
      <Switch>
        <Route
          path="/"
          exact
          render={(props) =>
            settings.isSplash ? (
              <Splash {...props} {...sharedProps} />
            ) : (
              <Home {...props} {...sharedProps} />
            )
          }
        />
        <Route
          path="/home"
          render={(props) => <Home {...props} {...sharedProps} />}
        />
        <Route
          path="/experience"
          exact
          render={(props) => <Experience {...props} {...sharedProps} />}
        />
        <Route
          path="/education"
          render={(props) => <Education {...props} {...sharedProps} />}
        />
        <Route
          path="/contact"
          render={(props) => <Contact {...props} {...sharedProps} />}
        />
        <Route
          path="/projects"
          render={(props) => <Projects {...props} {...sharedProps} />}
        />
        {settings.isSplash && (
          <Route
            path="/splash"
            render={(props) => <Splash {...props} {...sharedProps} />}
          />
        )}
        <Redirect to="/home" />
      </Switch>
    </HashRouter>
  );
}
