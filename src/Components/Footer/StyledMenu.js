import styled from "styled-components";
import { FiArrowUpCircle } from "react-icons/fi";
export const StyledMenu = styled.nav`
  background-color: gray;
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
`;

export const StyledArrow = styled(FiArrowUpCircle)`
  rotate: ${(props) => (props.isMenuOpen ? "180deg" : "0deg")};
  height: 3rem;
  width: auto;

  transition: all 1s;
`;

export const StyledOptions = styled.h1`
  color: white;
  padding: 10px;
`;

export const StyledSeparator = styled.div`
  background-color: black;
  height: 2px;
  width: 80vw;
  opacity: 0.4;
`;
