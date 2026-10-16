import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    /* Tema 2: Vinho Profundo com Moldura/Bordas Bege Pixel Art */
    --bg-outer-beige: #EAD7B3;
    --bg-beige-light: #F4E6C8;
    --bg-beige-dark: #D6BC8B;
    --bg-main: #3B0A18;
    --bg-canvas: #4C0D1F;
    --bg-card: #631027;
    --bg-card-hover: #7A1430;
    --bg-surface: #380916;
    --bg-surface-elevated: #560E22;

    /* Bordas e Sombras Duras Pixel Art (Zero Blur) */
    --pixel-ink: #22050C;
    --border-beige: #EAD7B3;
    --border-gold: #E5C07B;
    --border-subtle: #D6BC8B;
    --border-hover: #FFF6D6;
    --pixel-shadow: 4px 4px 0px 0px #22050C;
    --pixel-shadow-lg: 6px 6px 0px 0px #22050C;
    --pixel-shadow-sm: 2px 2px 0px 0px #22050C;
    --pixel-inset: inset 3px 3px 0px 0px rgba(255, 246, 214, 0.22), inset -3px -3px 0px 0px rgba(34, 5, 12, 0.45);
    --pixel-beige-box-inset: inset 3px 3px 0px 0px rgba(255, 255, 255, 0.55), inset -3px -3px 0px 0px rgba(136, 19, 55, 0.18);

    /* Paleta Bege, Dourado 8-bit e Vermelho Carmim */
    --primary: #F4E6C8;
    --primary-dark: #D6BC8B;
    --primary-light: #FFF8E7;
    --primary-glow: rgba(244, 230, 200, 0.2);
    --gold-gradient: #E5C07B;
    --gold-btn-gradient: #EAD7B3;

    /* Acentos Carmim / Rubi */
    --crimson-glow: rgba(185, 28, 28, 0.35);
    --accent-wine: #881337;
    --accent-ruby: #9F1239;
    --accent-rose: #E11D48;
    --accent-amber: #F59E0B;

    /* Tipografia e Fontes Pixel */
    --font-pixel-display: 'Silkscreen', 'Courier New', monospace;
    --font-pixel-mono: 'IBM Plex Mono', 'Courier New', monospace;
    --font-pixel-vt: 'VT323', monospace;
    --text-primary: #F4E6C8;
    --text-secondary: #E5C07B;
    --text-tertiary: #D6BC8B;
    --text-on-beige: #2B0912;
    --glass-blur: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    image-rendering: pixelated;
  }

  html {
    font-size: 16px;
    background-color: var(--bg-outer-beige);
    color: var(--text-primary);
    scroll-behavior: smooth;
    max-width: 100%;
    overflow-x: hidden;
  }

  body {
    min-height: 100vh;
    max-width: 100%;
    /* Moldura Externa Bege Pixelada com Interior Vinho Profundo + Dither */
    background-color: var(--bg-canvas);
    background-image: radial-gradient(rgba(244, 230, 200, 0.08) 1px, transparent 0);
    background-size: 8px 8px;
    border: 6px solid var(--bg-outer-beige);
    box-shadow: inset 0 0 0 3px var(--pixel-ink);
    color: var(--text-primary);
    font-family: var(--font-pixel-mono);
    overflow-x: hidden;

    @media (min-width: 768px) {
      border-width: 14px;
      box-shadow: inset 0 0 0 4px var(--pixel-ink), inset 0 0 0 8px #9F1239, inset 0 0 0 11px var(--pixel-ink);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-pixel-display);
    color: var(--text-primary);
    font-weight: 700;
    letter-spacing: -0.02em;
    text-shadow: 2px 2px 0px var(--pixel-ink);
  }

  button {
    font-family: var(--font-pixel-mono);
    cursor: pointer;
    border-radius: 0 !important;
    outline: none;
  }

  input, select, textarea {
    font-family: var(--font-pixel-mono);
    color: var(--text-primary);
    border-radius: 0 !important;
    outline: none;
  }

  /* Custom Pixel Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: var(--pixel-ink);
    border-left: 2px solid var(--border-beige);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--border-beige);
    border: 2px solid var(--pixel-ink);
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--border-gold);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default GlobalStyle;
