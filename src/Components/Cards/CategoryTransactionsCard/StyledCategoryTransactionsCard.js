import styled from "styled-components";
import { BiSolidEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

export const CardPerspective = styled.div`
  perspective: 1200px;
  width: 100%;
  height: 76px;
  cursor: pointer;
`;

export const StyledFlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.4s ease;
  transform: ${(props) =>
    props.flipCard ? "rotateY(180deg)" : "rotateY(0deg)"};
  border-radius: 0px;
`;

export const SideBase = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  box-shadow: 4px 4px 0px 0px var(--pixel-ink, #22050C);
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.15s ease;
`;

export const StyledFrontSide = styled(SideBase)`
  background: var(--bg-card, #631027);
  border: 3px solid var(--border-beige, #EAD7B3);
  outline: 2px solid var(--pixel-ink, #22050C);
  justify-content: space-between;

  &:hover {
    background: var(--bg-card-hover, #7A1430);
    border-color: var(--border-hover, #FFF6D6);
    box-shadow: 6px 6px 0px 0px var(--pixel-ink, #22050C);
    transform: translate(-2px, -2px);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px 0px var(--pixel-ink, #22050C);
  }
`;

export const StyledBackSide = styled(SideBase)`
  background: var(--bg-surface-elevated, #560E22);
  border: 3px solid var(--border-gold, #E5C07B);
  outline: 2px solid var(--pixel-ink, #22050C);
  transform: rotateY(180deg);
  justify-content: space-between;
  box-shadow: 4px 4px 0px 0px var(--pixel-ink, #22050C);
`;

export const FrontLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
  min-width: 0;
`;

export const IconBox = styled.div`
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 0px;
  background: ${(props) => props.bg || "var(--bg-surface, #380916)"};
  border: 2px solid var(--pixel-ink, #22050C);
  box-shadow: 2px 2px 0px var(--pixel-ink, #22050C);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.color || "var(--border-gold, #E5C07B)"};
    filter: drop-shadow(1px 1px 0px var(--pixel-ink, #22050C));
  }
`;

export const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
`;

export const TransactionDesc = styled.span`
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-primary, #F4E6C8);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
  letter-spacing: 0.02em;
`;

export const TransactionMeta = styled.span`
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 0.72rem;
  color: var(--text-tertiary, #D6BC8B);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const AmountText = styled.span`
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary, #F4E6C8);
  white-space: nowrap;
  margin-left: 0.75rem;
  text-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
`;

export const BackInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
`;

export const BackDate = styled.span`
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--text-primary, #F4E6C8);
  text-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
`;

export const BackCategory = styled.span`
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 0.72rem;
  color: var(--border-gold, #E5C07B);
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 0px;
  background: ${(props) =>
    props.danger ? "var(--accent-ruby, #9F1239)" : "var(--border-beige, #EAD7B3)"};
  border: 2px solid var(--pixel-ink, #22050C);
  box-shadow: 2px 2px 0px var(--pixel-ink, #22050C);
  color: ${(props) =>
    props.danger ? "#FFF8E7" : "var(--pixel-ink, #22050C)"};
  transition: transform 0.1s ease, box-shadow 0.1s ease;

  &:hover {
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0px var(--pixel-ink, #22050C);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const FlipHint = styled.span`
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 0.65rem;
  color: var(--text-tertiary, #D6BC8B);
  margin-right: 0.25rem;
`;
