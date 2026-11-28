import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { CgSun } from "react-icons/cg/";
import { HiMoon } from "react-icons/hi";
import { greeting } from "../../portfolio";

const NAV_ITEMS = [
  { to: "/home", label: "Home", className: "homei" },
  { to: "/education", label: "Education", className: "ec" },
  { to: "/experience", label: "Experience", className: "xp" },
  { to: "/projects", label: "Projects", className: "projects" },
  { to: "/contact", label: "Contact", className: "cr" },
];

function Header(props) {
  const theme = props.theme;
  const [menuOpen, setMenuOpen] = useState(false);

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
    <Fade top duration={800} distance="16px">
      <div className="header-wrap">
        <header className="header">
          <Link
            to="/home"
            className="logo"
            onClick={() => setMenuOpen(false)}
            aria-label={`${greeting.full_name} home`}
          >
            <span className="logo-bracket">&lt;</span>
            <span className="logo-name" style={{ color: theme.text }}>
              {greeting.logo_name}
            </span>
            <span className="logo-bracket">/&gt;</span>
          </Link>

          <button
            type="button"
            className={`menu-icon${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="primary-nav-menu"
          >
            <span className="navicon"></span>
          </button>

          <ul
            id="primary-nav-menu"
            className={`menu${menuOpen ? " open" : ""}`}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  className={item.className}
                  to={item.to}
                  activeClassName="nav-active"
                  style={{ color: theme.text }}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            <li className="theme-toggle-item">
              <button
                type="button"
                className="theme-toggle"
                onClick={changeTheme}
                aria-label={
                  isDark ? "Switch to light theme" : "Switch to dark theme"
                }
                title={
                  isDark ? "Switch to light theme" : "Switch to dark theme"
                }
              >
                {icon}
              </button>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}

export default Header;
