import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";

function Header(props) {
  const theme = props.theme;

  function changeTheme() {
    const next = props.theme.name === "dark" ? "light" : "dark";
    // cross-fade colours instead of snapping between themes
    const root = document.documentElement;
    root.classList.add("theme-transition");
    window.clearTimeout(window.__themeFadeTimer);
    window.__themeFadeTimer = window.setTimeout(
      () => root.classList.remove("theme-transition"),
      450
    );
    props.setTheme(next);
    try {
      localStorage.setItem("theme-pref", next);
    } catch (e) {}
  }

  const isDark = props.theme.name === "dark";
  const icon = isDark ? (
    <HiMoon size={19} color={theme.text} />
  ) : (
    <CgSun size={20} color={theme.text} />
  );

  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <NavLink
                className="homei"
                to="/home"
                tag={Link}
                activeClassName="nav-active"
                style={{ borderRadius: 5, color: theme.text }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="ec"
                to="/education"
                tag={Link}
                activeClassName="nav-active"
                style={{ borderRadius: 5, color: theme.text }}
              >
                Education and Certifications
              </NavLink>
            </li>
            <li>
              <NavLink
                className="xp"
                to="/experience"
                tag={Link}
                activeClassName="nav-active"
                style={{ borderRadius: 5, color: theme.text }}
              >
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink
                className="projects"
                to="/projects"
                tag={Link}
                activeClassName="nav-active"
                style={{ borderRadius: 5, color: theme.text }}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                className="cr"
                to="/contact"
                tag={Link}
                activeClassName="nav-active"
                style={{ borderRadius: 5, color: theme.text }}
              >
                Contact and Resume
              </NavLink>
            </li>

            <button
              className="theme-toggle"
              onClick={changeTheme}
              aria-label={
                isDark ? "Switch to light theme" : "Switch to dark theme"
              }
              title={isDark ? "Switch to light theme" : "Switch to dark theme"}
            >
              {icon}
            </button>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
