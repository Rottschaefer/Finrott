import styled from "styled-components";

export const StyledRootPopUp = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  height: auto;
  width: 70vw;
  background-color: white;
  border-radius: 10px;
  z-index: 1;
  padding: 1rem;
  padding-bottom: 1.5rem;
  color: black;
`;

export const StyledRootPopUpBackground = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;

  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.8;
`;
