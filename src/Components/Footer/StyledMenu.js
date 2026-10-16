import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--bg-surface, #380916);
  border: 3px solid var(--border-beige, #EAD7B3);
  outline: 2px solid var(--pixel-ink, #22050C);
  border-radius: 0px;
  padding: 0.35rem 0.5rem;
  box-shadow: 5px 5px 0px 0px var(--pixel-ink, #22050C);
  transition: transform 0.1s ease;

  @media (max-width: 480px) {
    bottom: 0.75rem;
    width: calc(100% - 1.5rem);
    justify-content: space-around;
  }
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.85rem;
  border-radius: 0px;
  background: ${(props) =>
    props.isActive ? "var(--bg-card-hover, #7A1430)" : "transparent"};
  border: 2px solid
    ${(props) =>
      props.isActive ? "var(--border-gold, #E5C07B)" : "transparent"};
  box-shadow: ${(props) =>
    props.isActive ? "2px 2px 0px 0px var(--pixel-ink, #22050C)" : "none"};
  color: ${(props) =>
    props.isActive ? "var(--text-primary, #F4E6C8)" : "var(--text-tertiary, #D6BC8B)"};
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
  cursor: pointer;
  transition: transform 0.1s ease, background 0.1s ease, border-color 0.1s ease;
  white-space: nowrap;

  &:hover {
    color: var(--text-primary, #F4E6C8);
    background: var(--bg-card, #631027);
    border-color: var(--border-beige, #EAD7B3);
    box-shadow: 2px 2px 0px 0px var(--pixel-ink, #22050C);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0px 0px var(--pixel-ink, #22050C);
  }

  svg {
    width: 15px;
    height: 15px;
    filter: drop-shadow(1px 1px 0px var(--pixel-ink, #22050C));
  }

  @media (max-width: 480px) {
    padding: 0.45rem 0.65rem;
    font-size: 0.7rem;
    gap: 0.3rem;
  }
`;
