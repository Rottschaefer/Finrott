import styled from "styled-components";

export const StyledRootPopUpBackground = styled.div`
  visibility: ${(props) => (props.showPopUp ? "visible" : "hidden")};
  opacity: ${(props) => (props.showPopUp ? "1" : "0")};
  position: fixed;
  inset: 0;
  background-color: rgba(34, 5, 12, 0.85);
  background-image: radial-gradient(rgba(234, 215, 179, 0.12) 1px, transparent 0);
  background-size: 6px 6px;
  z-index: 1000;
  transition: opacity 0.2s ease;
`;

export const StyledRootPopUp = styled.div`
  position: fixed;
  visibility: ${(props) => (props.showPopUp ? "visible" : "hidden")};
  opacity: ${(props) => (props.showPopUp ? "1" : "0")};
  z-index: 1001;
  transition: opacity 0.2s ease, transform 0.2s ease;

  /* Desktop RPG dialogue box */
  @media (min-width: 641px) {
    top: 50%;
    left: 50%;
    transform: ${(props) =>
      props.showPopUp
        ? "translate(-50%, -50%)"
        : "translate(-50%, -46%)"};
    width: 90%;
    max-width: 480px;
    background: var(--bg-surface, #380916);
    border: 4px solid var(--border-beige, #EAD7B3);
    outline: 3px solid var(--pixel-ink, #22050C);
    border-radius: 0px;
    box-shadow: 8px 8px 0px 0px var(--pixel-ink, #22050C),
      inset 3px 3px 0px 0px rgba(255, 246, 214, 0.18),
      inset -3px -3px 0px 0px rgba(34, 5, 12, 0.5);
    padding: 2rem;
    max-height: 90vh;
    overflow-y: auto;
  }

  /* Mobile bottom sheet */
  @media (max-width: 640px) {
    bottom: 0;
    left: 0;
    right: 0;
    transform: ${(props) =>
      props.showPopUp ? "translateY(0)" : "translateY(100%)"};
    background: var(--bg-surface, #380916);
    border-top: 4px solid var(--border-beige, #EAD7B3);
    outline: 3px solid var(--pixel-ink, #22050C);
    border-radius: 0px;
    box-shadow: 0 -6px 0px 0px var(--pixel-ink, #22050C),
      inset 0 3px 0px 0px rgba(255, 246, 214, 0.18);
    padding: 1.75rem 1.25rem 2.5rem;
    max-height: 85vh;
    overflow-y: auto;
  }
`;
