import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

export const StyledPlusDiv = styled.div`
  position: fixed;
  bottom: 2.25rem;
  right: 2.25rem;
  z-index: 90;

  @media (max-width: 640px) {
    bottom: 5.25rem;
    right: 0.9rem;
  }
`;

export const StyledPlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.7rem 0.95rem;
  background: var(--bg-outer-beige, #EAD7B3);
  color: var(--pixel-ink, #22050C);
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  border: 3px solid var(--pixel-ink, #22050C);
  outline: 2px solid var(--border-gold, #E5C07B);
  border-radius: 0px !important;
  box-shadow: 4px 4px 0px 0px var(--pixel-ink, #22050C),
    inset 2px 2px 0px 0px #FFF8E7,
    inset -2px -2px 0px 0px #C59828;
  cursor: pointer;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;

  @media (max-width: 640px) {
    padding: 0.65rem 0.75rem;
    font-size: 0.68rem;
  }

  &:hover {
    background: var(--bg-beige-light, #F4E6C8);
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px 0px var(--pixel-ink, #22050C),
      inset 2px 2px 0px 0px #FFF8E7,
      inset -2px -2px 0px 0px #C59828;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px 0px var(--pixel-ink, #22050C);
  }

  svg {
    width: 14px;
    height: 14px;
    filter: drop-shadow(1px 1px 0px rgba(0, 0, 0, 0.25));
  }
`;
