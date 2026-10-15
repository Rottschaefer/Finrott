import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --bg-main: #0B0F17;
    --bg-card: rgba(17, 24, 39, 0.75);
    --bg-card-hover: rgba(26, 36, 56, 0.85);
    --bg-surface: #111827;
    --bg-surface-elevated: #162032;
    --border-subtle: rgba(255, 255, 255, 0.08);
    --border-hover: rgba(0, 210, 180, 0.25);
    --primary: #00D2B4;
    --primary-dark: #00A389;
    --primary-glow: rgba(0, 210, 180, 0.25);
    --accent-purple: #8B5CF6;
    --accent-blue: #3B82F6;
    --accent-amber: #F59E0B;
    --accent-rose: #F43F5E;
    --text-primary: #F8FAFC;
    --text-secondary: #94A3B8;
    --text-tertiary: #64748B;
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
    background: radial-gradient(circle at 50% 0%, #151f33 0%, #0B0F17 65%);
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
    background: rgba(255, 255, 255, 0.15);
    border-radius: 999px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 210, 180, 0.4);
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
