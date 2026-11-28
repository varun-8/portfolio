import React from "react";

/**
 * Clean, theme-adaptive vector illustration for the Home Hero:
 * minimalist security shield, cloud perimeter rings, and network nodes.
 */
export default function HeroSecurityImg({ theme }) {
  const accent = theme.accentColor;
  const accentBright = theme.accentBright;
  const card = theme.cardBg;
  const surface = theme.surface;
  const text = theme.text;
  const muted = theme.secondaryText;
  const success = theme.success;

  return (
    <svg
      viewBox="0 0 520 440"
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Cloud and cybersecurity shield illustration"
      className="hero-security-svg"
    >
      <defs>
        <radialGradient id="heroShieldGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.22" />
          <stop offset="65%" stopColor={accentBright} stopOpacity="0.06" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="shieldFill"
          x1="180"
          y1="95"
          x2="340"
          y2="330"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={card} />
          <stop offset="100%" stopColor={surface} />
        </linearGradient>
        <linearGradient
          id="shieldStroke"
          x1="180"
          y1="95"
          x2="340"
          y2="330"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={accentBright} />
          <stop offset="100%" stopColor={accent} stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Soft ambient aura */}
      <circle cx="260" cy="220" r="195" fill="url(#heroShieldGlow)" />

      {/* Outer orbital security rings */}
      <circle
        cx="260"
        cy="220"
        r="175"
        stroke={muted}
        strokeOpacity="0.18"
        strokeWidth="1.2"
        strokeDasharray="6 8"
      />
      <circle
        cx="260"
        cy="220"
        r="134"
        stroke={accent}
        strokeOpacity="0.25"
        strokeWidth="1.2"
      />

      {/* Constellation / network links */}
      <line
        x1="112"
        y1="138"
        x2="188"
        y2="178"
        stroke={muted}
        strokeOpacity="0.28"
        strokeWidth="1.4"
      />
      <line
        x1="406"
        y1="132"
        x2="332"
        y2="176"
        stroke={muted}
        strokeOpacity="0.28"
        strokeWidth="1.4"
      />
      <line
        x1="106"
        y1="302"
        x2="188"
        y2="264"
        stroke={muted}
        strokeOpacity="0.28"
        strokeWidth="1.4"
      />
      <line
        x1="414"
        y1="296"
        x2="330"
        y2="262"
        stroke={muted}
        strokeOpacity="0.28"
        strokeWidth="1.4"
      />

      {/* Floating perimeter cards / nodes */}
      {/* Top-left cloud node */}
      <g>
        <rect
          x="52"
          y="102"
          width="104"
          height="52"
          rx="14"
          fill={card}
          stroke={muted}
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />
        <circle cx="76" cy="128" r="12" fill={accent} fillOpacity="0.14" />
        <path
          d="M71 131.5a4 4 0 0 1 .4-7.98 5.2 5.2 0 0 1 9.9 1.3A3.4 3.4 0 0 1 80.6 131.5H71Z"
          stroke={accent}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <rect
          x="96"
          y="120"
          width="42"
          height="6"
          rx="3"
          fill={text}
          fillOpacity="0.72"
        />
        <rect
          x="96"
          y="131"
          width="28"
          height="5"
          rx="2.5"
          fill={muted}
          fillOpacity="0.45"
        />
      </g>

      {/* Top-right verified node */}
      <g>
        <rect
          x="364"
          y="96"
          width="108"
          height="52"
          rx="14"
          fill={card}
          stroke={muted}
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />
        <circle cx="388" cy="122" r="12" fill={success} fillOpacity="0.16" />
        <path
          d="M383.5 122.2l3 3 6-6"
          stroke={success}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="408"
          y="114"
          width="44"
          height="6"
          rx="3"
          fill={text}
          fillOpacity="0.72"
        />
        <rect
          x="408"
          y="125"
          width="32"
          height="5"
          rx="2.5"
          fill={muted}
          fillOpacity="0.45"
        />
      </g>

      {/* Bottom-left network pulse node */}
      <g>
        <rect
          x="48"
          y="280"
          width="108"
          height="52"
          rx="14"
          fill={card}
          stroke={muted}
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />
        <circle cx="72" cy="306" r="12" fill={accent} fillOpacity="0.14" />
        <path
          d="M65 306h3l2.2-5 3.5 10 2.3-5H79"
          stroke={accent}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect
          x="92"
          y="298"
          width="46"
          height="6"
          rx="3"
          fill={text}
          fillOpacity="0.72"
        />
        <rect
          x="92"
          y="309"
          width="30"
          height="5"
          rx="2.5"
          fill={muted}
          fillOpacity="0.45"
        />
      </g>

      {/* Bottom-right lock node */}
      <g>
        <rect
          x="364"
          y="274"
          width="108"
          height="52"
          rx="14"
          fill={card}
          stroke={muted}
          strokeOpacity="0.22"
          strokeWidth="1.2"
        />
        <circle cx="388" cy="300" r="12" fill={accent} fillOpacity="0.14" />
        <rect
          x="383"
          y="299"
          width="10"
          height="7"
          rx="2"
          stroke={accent}
          strokeWidth="1.6"
        />
        <path
          d="M385.5 299v-2.2a2.5 2.5 0 0 1 5 0V299"
          stroke={accent}
          strokeWidth="1.6"
        />
        <rect
          x="408"
          y="292"
          width="42"
          height="6"
          rx="3"
          fill={text}
          fillOpacity="0.72"
        />
        <rect
          x="408"
          y="303"
          width="34"
          height="5"
          rx="2.5"
          fill={muted}
          fillOpacity="0.45"
        />
      </g>

      {/* Orbiting accent dots */}
      <circle cx="260" cy="45" r="4.5" fill={accentBright} />
      <circle cx="260" cy="395" r="4" fill={muted} fillOpacity="0.45" />
      <circle cx="96" cy="220" r="3.5" fill={accent} fillOpacity="0.65" />
      <circle cx="424" cy="220" r="3.5" fill={success} fillOpacity="0.75" />

      {/* Center Layered Security Shield */}
      <path
        d="M260 104L344 138V216C344 274.5 307.8 322.5 260 342C212.2 322.5 176 274.5 176 216V138L260 104Z"
        fill="url(#shieldFill)"
        stroke="url(#shieldStroke)"
        strokeWidth="2.2"
      />
      <path
        d="M260 124L326 151V214C326 261.2 297.2 300.5 260 317.5C222.8 300.5 194 261.2 194 214V151L260 124Z"
        fill={surface}
        stroke={muted}
        strokeOpacity="0.16"
        strokeWidth="1.2"
      />

      {/* Inner shield core emblem */}
      <circle cx="260" cy="216" r="38" fill={accent} fillOpacity="0.12" />
      <circle
        cx="260"
        cy="216"
        r="27"
        fill={card}
        stroke={accent}
        strokeOpacity="0.55"
        strokeWidth="1.8"
      />
      <path
        d="M248.5 216.5L256.5 224.5L272.5 208.5"
        stroke={accentBright}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
