import styled from "styled-components";

export const StyledRootPopUpBackground = styled.div`
  visibility: ${(props) => (props.showPopUp ? "visible" : "hidden")};
  opacity: ${(props) => (props.showPopUp ? "1" : "0")};
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.82);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1000;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const StyledRootPopUp = styled.div`
  position: fixed;
  visibility: ${(props) => (props.showPopUp ? "visible" : "hidden")};
  opacity: ${(props) => (props.showPopUp ? "1" : "0")};
  z-index: 1001;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  /* Desktop dialog */
  @media (min-width: 641px) {
    top: 50%;
    left: 50%;
    transform: ${(props) =>
      props.showPopUp
        ? "translate(-50%, -50%) scale(1)"
        : "translate(-50%, -46%) scale(0.95)"};
    width: 90%;
    max-width: 460px;
    background: #1A070D;
    border: 1px solid rgba(212, 175, 55, 0.2);
    border-radius: 24px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85), 0 0 35px rgba(212, 175, 55, 0.12);
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
    background: #1A070D;
    border-top: 1px solid rgba(212, 175, 55, 0.2);
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.85);
    padding: 1.75rem 1.25rem 2.5rem;
    max-height: 85vh;
    overflow-y: auto;
  }
`;
