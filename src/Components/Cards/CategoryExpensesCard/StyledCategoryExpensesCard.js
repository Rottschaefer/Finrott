import styled from "styled-components";

export const StyledCategoryCard = styled.div`
  width: 100%;
  padding: 0.85rem 1rem;
  background: ${(props) =>
    props.isSelected ? "var(--bg-card-hover, #7A1430)" : "var(--bg-card, #631027)"};
  border: 3px solid ${(props) =>
    props.isSelected ? "var(--border-gold, #E5C07B)" : "var(--border-beige, #EAD7B3)"};
  outline: 2px solid var(--pixel-ink, #22050C);
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
  box-shadow: ${(props) =>
    props.isSelected
      ? "6px 6px 0px 0px var(--pixel-ink, #22050C), inset 2px 2px 0px rgba(255, 246, 214, 0.25)"
      : "4px 4px 0px 0px var(--pixel-ink, #22050C)"};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translate(-2px, -2px);
    background: var(--bg-card-hover, #7A1430);
    border-color: var(--border-hover, #FFF6D6);
    box-shadow: 6px 6px 0px 0px var(--pixel-ink, #22050C);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px 0px var(--pixel-ink, #22050C);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: ${(props) => props.accentColor || "var(--accent-ruby, #9F1239)"};
    border-right: 2px solid var(--pixel-ink, #22050C);
    opacity: ${(props) => (props.isSelected ? 1 : 0.8)};
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-width: 0;
  flex: 1;
  padding-left: 0.25rem;

  @media (min-width: 768px) {
    gap: 0.85rem;
  }
`;

export const StyledImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bg || "var(--bg-surface, #380916)"};
  border: 2px solid var(--pixel-ink, #22050C);
  border-radius: 0px;
  width: 36px;
  height: 36px;
  min-width: 36px;
  box-shadow: 2px 2px 0px var(--pixel-ink, #22050C);
  transition: transform 0.1s ease;

  @media (min-width: 768px) {
    width: 42px;
    height: 42px;
    min-width: 42px;
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${(props) => props.iconColor || "var(--border-gold, #E5C07B)"};
    filter: drop-shadow(1px 1px 0px var(--pixel-ink, #22050C));
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
  flex: 1;
`;

export const CategoryTitle = styled.h4`
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: clamp(0.72rem, 3.2vw, 0.85rem);
  font-weight: 700;
  color: var(--text-primary, #F4E6C8);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
  letter-spacing: 0.01em;
`;

export const CategorySubtitle = styled.span`
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 0.68rem;
  color: var(--text-tertiary, #D6BC8B);
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  padding-left: 0.5rem;
  flex-shrink: 0;
`;

export const FormattedAmount = styled.span`
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: clamp(0.82rem, 3.4vw, 0.95rem);
  font-weight: 700;
  color: var(--text-primary, #F4E6C8);
  letter-spacing: 0.01em;
  text-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
  white-space: nowrap;
`;

export const PercentageBadge = styled.span`
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: 0.62rem;
  font-weight: 700;
  color: ${(props) => props.color || "var(--border-gold, #E5C07B)"};
  background: var(--pixel-ink, #22050C);
  padding: 0.12rem 0.4rem;
  border-radius: 0px;
  border: 1px solid var(--border-subtle, #D6BC8B);
  box-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
`;

export const ProgressBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: var(--pixel-ink, #22050C);
  border-top: 1px solid var(--border-beige, #EAD7B3);
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  width: ${(props) => Math.min(props.percent, 100)}%;
  background: ${(props) => props.color || "var(--accent-ruby, #9F1239)"};
  box-shadow: none;
  transition: width 0.3s ease;
`;
