import styled from "styled-components";

export const StyledAccountCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 170px;
  border-radius: 0px;
  padding: 1.4rem;
  background: ${(props) =>
    props.color
      ? `#${props.color}`
      : "var(--bg-card, #631027)"};
  border: 3px solid var(--border-beige, #EAD7B3);
  outline: 2px solid var(--pixel-ink, #22050C);
  box-shadow: 4px 4px 0px 0px var(--pixel-ink, #22050C),
    inset 3px 3px 0px 0px rgba(255, 246, 214, 0.18),
    inset -3px -3px 0px 0px rgba(34, 5, 12, 0.45);
  overflow: hidden;
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    transform: translate(-2px, -2px);
    border-color: var(--border-hover, #FFF6D6);
    box-shadow: 6px 6px 0px 0px var(--pixel-ink, #22050C),
      inset 3px 3px 0px 0px rgba(255, 246, 214, 0.28),
      inset -3px -3px 0px 0px rgba(34, 5, 12, 0.45);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px 0px var(--pixel-ink, #22050C);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, transparent 50%, rgba(234, 215, 179, 0.2) 50%);
    pointer-events: none;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCardTitle = styled.h3`
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary, #F4E6C8);
  letter-spacing: 0.02em;
  text-shadow: 2px 2px 0px var(--pixel-ink, #22050C);
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const BalanceLabel = styled.span`
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-secondary, #E5C07B);
  font-weight: 600;
`;

export const StyledBalance = styled.span`
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-primary, #F4E6C8);
  letter-spacing: 0.02em;
  text-shadow: 2px 2px 0px var(--pixel-ink, #22050C);
`;
