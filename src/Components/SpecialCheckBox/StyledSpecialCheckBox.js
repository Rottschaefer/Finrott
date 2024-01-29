import styled from "styled-components";

export const StyledCheckBox = styled.div`
  display: flex;
  /* justify-content: ${(props) => (props.isClicked ? "start" : "end")}; */
  align-items: center;
  width: 6rem;
  height: 1.5rem;
  background-color: ${(props) => (props.isClicked ? "green" : "gray")};
  border-radius: 50px;
  padding: 10px;
  transition: all 1s;
`;

export const StyledCircle = styled.div`
  display: flex;
  translate: ${(props) => (props.isClicked ? "4.4rem" : "0%")};
  width: 1.7rem;
  height: 1.7rem;
  background-color: white;
  border-radius: 100%;
  transition: all 1s;
`;
