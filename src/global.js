import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  :root {
    --accent: ${({ theme }) => theme.accentColor};
    --accent-bright: ${({ theme }) => theme.accentBright};
    --text: ${({ theme }) => theme.text};
    --muted: ${({ theme }) => theme.secondaryText};
    --body: ${({ theme }) => theme.body};
    --card: ${({ theme }) => theme.cardBg};
    --surface: ${({ theme }) => theme.surface};
    --border: ${({ theme }) => theme.border};
    --shadow: ${({ theme }) => theme.shadow};
    --success: ${({ theme }) => theme.success};
  }

  /* Smooth colour cross-fade while the theme is being switched
     (class is added for a moment by the theme toggle in Header.js) */
  html.theme-transition,
  html.theme-transition *,
  html.theme-transition *::before,
  html.theme-transition *::after {
    transition: background-color 0.4s ease, color 0.4s ease,
      border-color 0.4s ease, fill 0.4s ease, stroke 0.4s ease,
      box-shadow 0.4s ease !important;
    transition-delay: 0s !important;
  }

  body > #root {
    width: 100%;
    min-width: 0;
  }

  body {
    overflow-x: hidden;
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    font-family: var(--font-sans);
    transition: all 0.25s linear;
  }`;
