import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const StyledAddExpensePopUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  position: relative;
`;

export const StyledCloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: -0.5rem;
  right: -0.25rem;
  height: 1.6rem;
  width: 1.6rem;
  color: var(--text-tertiary, #D6BC8B);
  background: var(--bg-surface, #380916);
  border: 2px solid var(--pixel-ink, #22050C);
  box-shadow: 2px 2px 0px var(--pixel-ink, #22050C);
  padding: 2px;
  cursor: pointer;
  transition: transform 0.1s ease, background 0.1s ease, color 0.1s ease;

  &:hover {
    color: var(--border-hover, #FFF6D6);
    background: var(--accent-ruby, #9F1239);
    transform: translate(-1px, -1px);
    box-shadow: 3px 3px 0px var(--pixel-ink, #22050C);
  }

  &:active {
    transform: translate(1px, 1px);
    box-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
  }
`;

export const StyledTitle = styled.h3`
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary, #F4E6C8);
  margin-bottom: 0.5rem;
  text-align: left;
  letter-spacing: 0.02em;
  text-shadow: 2px 2px 0px var(--pixel-ink, #22050C);
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  width: 100%;
`;

export const StyledLabel = styled.label`
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-secondary, #E5C07B);
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.04em;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 42px;
  background: var(--bg-surface, #380916);
  border: 2px solid var(--border-beige, #EAD7B3);
  outline: 2px solid var(--pixel-ink, #22050C);
  border-radius: 0px !important;
  box-shadow: inset 2px 2px 0px rgba(0, 0, 0, 0.45);
  padding: 0 0.85rem;
  color: var(--text-primary, #F4E6C8);
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 0.9rem;
  transition: border-color 0.1s ease, background 0.1s ease;

  &:focus {
    border-color: var(--border-gold, #E5C07B);
    background: #4C0D1F;
    box-shadow: 2px 2px 0px var(--pixel-ink, #22050C);
  }

  &::placeholder {
    color: var(--text-tertiary, #D6BC8B);
    opacity: 0.6;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 42px;
  background: var(--bg-surface, #380916);
  border: 2px solid var(--border-beige, #EAD7B3);
  outline: 2px solid var(--pixel-ink, #22050C);
  border-radius: 0px !important;
  box-shadow: inset 2px 2px 0px rgba(0, 0, 0, 0.45);
  padding: 0 0.85rem;
  color: var(--text-primary, #F4E6C8);
  font-family: var(--font-pixel-mono, 'IBM Plex Mono', monospace);
  font-size: 0.9rem;
  cursor: pointer;
  transition: border-color 0.1s ease, background 0.1s ease;

  &:focus {
    border-color: var(--border-gold, #E5C07B);
    background: #4C0D1F;
    box-shadow: 2px 2px 0px var(--pixel-ink, #22050C);
  }

  option {
    background: var(--pixel-ink, #22050C);
    color: var(--text-primary, #F4E6C8);
    padding: 0.5rem;
    font-family: var(--font-pixel-mono, monospace);
  }
`;

export const StyledAddButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 0px !important;
  background: var(--bg-outer-beige, #EAD7B3);
  color: var(--pixel-ink, #22050C);
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: 0.85rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  border: 2px solid var(--pixel-ink, #22050C);
  outline: 2px solid var(--border-gold, #E5C07B);
  box-shadow: 4px 4px 0px 0px var(--pixel-ink, #22050C),
    inset 2px 2px 0px 0px #FFF8E7,
    inset -2px -2px 0px 0px #C59828;
  letter-spacing: 0.02em;
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  opacity: ${(props) => (props.isLoading ? "0.6" : "1")};
  pointer-events: ${(props) => (props.isLoading ? "none" : "auto")};

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
`;

export const StyledDeleteButton = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 0px !important;
  background: var(--accent-ruby, #9F1239);
  border: 2px solid var(--pixel-ink, #22050C);
  outline: 2px solid var(--border-beige, #EAD7B3);
  color: #FFF8E7;
  font-family: var(--font-pixel-display, 'Silkscreen', monospace);
  font-size: 0.82rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  box-shadow: 4px 4px 0px 0px var(--pixel-ink, #22050C);
  letter-spacing: 0.02em;
  text-shadow: 1px 1px 0px var(--pixel-ink, #22050C);
  transition: transform 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;
  opacity: ${(props) => (props.isLoading ? "0.6" : "1")};
  pointer-events: ${(props) => (props.isLoading ? "none" : "auto")};

  &:hover {
    background: #BE123C;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px 0px var(--pixel-ink, #22050C);
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px 0px var(--pixel-ink, #22050C);
  }
`;
