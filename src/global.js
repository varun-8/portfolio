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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  body {
    overflow-x: hidden;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.body};
    background-image:
      radial-gradient(circle at 12% 8%, rgba(227, 64, 95, 0.08), transparent 34%),
      radial-gradient(circle at 88% 20%, rgba(56, 189, 248, 0.05), transparent 30%);
    color: ${({ theme }) => theme.text};
    display: block;
    font-family: var(--font-sans);
    transition: background-color 0.25s linear, color 0.25s linear;
  }`;
