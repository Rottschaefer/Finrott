import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Deep Burgundy Velvet & Crimson Wine */
    --bg-main: #0E0306;
    --bg-card: rgba(28, 9, 15, 0.78);
    --bg-card-hover: rgba(42, 14, 23, 0.88);
    --bg-surface: #18060B;
    --bg-surface-elevated: #260A13;
    --border-subtle: rgba(212, 175, 55, 0.12);
    --border-hover: rgba(212, 175, 55, 0.35);

    /* Elegant Champagne Gold Accents */
    --primary: #E5C07B;
    --primary-dark: #C99726;
    --primary-light: #F5D38C;
    --primary-glow: rgba(229, 192, 123, 0.25);
    --gold-gradient: linear-gradient(135deg, #F5D38C 0%, #D4AF37 50%, #B8860B 100%);
    --gold-btn-gradient: linear-gradient(135deg, #ECC472, #C59828);

    /* Velvet Crimson Accents */
    --crimson-glow: rgba(185, 28, 28, 0.2);
    --accent-wine: #881337;
    --accent-ruby: #9F1239;
    --accent-rose: #E11D48;
    --accent-amber: #F59E0B;

    /* Typography colors */
    --text-primary: #FFF8F6;
    --text-secondary: #C8A9AD;
    --text-tertiary: #8F6D72;
    --glass-blur: blur(14px);
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    background-color: var(--bg-main);
    color: var(--text-primary);
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    min-height: 100vh;
    background: radial-gradient(circle at 50% -10%, #380C19 0%, #1A050B 45%, #0B0205 100%);
    background-attachment: fixed;
    color: var(--text-primary);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Outfit', sans-serif;
    color: var(--text-primary);
    font-weight: 600;
  }

  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
  }

  input, select, textarea {
    font-family: inherit;
    color: var(--text-primary);
    outline: none;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(212, 175, 55, 0.2);
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(212, 175, 55, 0.45);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulseSubtle {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
`;

export default GlobalStyle;
