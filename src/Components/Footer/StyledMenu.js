import styled from "styled-components";
import { FiArrowUpCircle } from "react-icons/fi";
export const StyledMenu = styled.nav`
  background-color: white;
  height: ${(props) => (props.isMenuOpen ? "100vh" : "10vh")};
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* justify-content: ${(props) =>
    props.isMenuOpen ? "flex-start" : "center"}; */
  justify-content: center;
  align-items: center;

  /* background-color: aqua; */
  position: fixed;
  bottom: 0;

  transition: all 1s;
  border-start-end-radius: 10px;
  border-start-start-radius: 10px;
  box-shadow: 0px 35px 30px 30px darkgray;
`;

export const StyledArrow = styled(FiArrowUpCircle)`
  rotate: ${(props) => (props.isMenuOpen ? "180deg" : "0deg")};
  height: 3rem;
  width: auto;

  transition: all 1s;
`;

export const StyledOptions = styled.h1`
  color: black;
  padding: 10px;
  cursor: pointer;
`;

export const StyledSeparator = styled.div`
  background-color: black;
  height: 2px;
  width: 80vw;
  opacity: 0.4;
`;
