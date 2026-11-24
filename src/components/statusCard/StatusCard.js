import React from "react";
import "./StatusCard.css";

/**
 * "Open to work" availability card.
 *  - variant="stack": label above the roles (home hero)
 *  - variant="strip": one horizontal row with dividers (contact page)
 * `extra` adds more items, e.g. [{ icon: "far fa-clock", text: "Replies within 48 hours" }]
 */
export default function StatusCard({ status, extra = [], variant = "stack" }) {
  if (!status) return null;
  const roles = status.roles || [];

  return (
    <div className={`status-card status-${variant}`} role="status">
      <span className="status-label">
        <span className="status-dot" aria-hidden="true" />
        {status.title}
      </span>

      {roles.length > 0 && (
        <ul className="status-roles" aria-label="Roles I'm looking for">
          {roles.map((role) => (
            <li key={role}>{role}</li>
          ))}
        </ul>
      )}

      {extra.map((item) => (
        <span key={item.text} className="status-extra">
          {item.icon && <i className={item.icon} aria-hidden="true"></i>}
          {item.text}
        </span>
      ))}
    </div>
  );
}
