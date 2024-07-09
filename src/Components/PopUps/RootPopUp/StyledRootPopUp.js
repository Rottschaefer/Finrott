import styled from "styled-components";

export const StyledRootPopUp = styled.div`
  position: fixed;
  bottom: 0%;
  right: 0%;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  visibility: ${(props) => (props.showPopUp ? "visible" : "hidden")};
  height: ${(props) => (props.showPopUp ? "80vh" : "0vh")};
  min-height: ${(props) => (props.showPopUp ? "auto" : "0vh")};
  width: 100vw;
  background-color: #000048;
  border-radius: 10px;
  z-index: 1;
  padding-bottom: 1.5rem;
  color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  transition: all 0.5s;
`;

export const StyledRootPopUpBackground = styled.div`
  visibility: ${(props) => (props.showPopUp ? "visible" : "hidden")};
  position: fixed;
  top: 0%;
  left: 0%;

  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
`;
