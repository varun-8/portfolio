import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";

// One entry per network; only the ones filled in portfolio.js are shown.
const NETWORKS = [
  { key: "github", label: "GitHub", icon: "fab fa-github" },
  { key: "linkedin", label: "LinkedIn", icon: "fab fa-linkedin-in" },
  { key: "gmail", label: "Email", icon: "fab fa-google", className: "google" },
  { key: "twitter", label: "Twitter", icon: "fab fa-twitter" },
  { key: "instagram", label: "Instagram", icon: "fab fa-instagram" },
];

export default function SocialMedia() {
  return (
    <div className="social-media-div">
      {NETWORKS.filter((n) => socialMediaLinks[n.key]).map((n) => {
        const value = socialMediaLinks[n.key];
        const isEmail = n.key === "gmail";
        const href = isEmail ? `mailto:${value}` : value;
        return (
          <a
            key={n.key}
            href={href}
            className={`icon-button ${n.className || n.key}`}
            aria-label={isEmail ? `Email ${value}` : n.label}
            title={isEmail ? value : n.label}
            // mailto: links open the mail app; a new tab would just be blank
            {...(isEmail
              ? {}
              : { target: "_blank", rel: "noopener noreferrer" })}
          >
            <i className={n.icon} aria-hidden="true"></i>
          </a>
        );
      })}
    </div>
  );
}
