import styled from "styled-components";
import { FiArrowUpCircle } from "react-icons/fi";

export const StyledMenu = styled.nav`
  color: white;
  backdrop-filter: blur(35px);
  -webkit-backdrop-filter: blur(35px);
  background-color: rgb(0 163 255 / 30%);
  height: ${(props) => (props.isMenuOpen ? "100vh" : "10vh")};
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;

  transition: all 1s;

  box-shadow: 0px 35px 30px 30px darkgray;
`;

export const StyledArrow = styled(FiArrowUpCircle)`
  rotate: ${(props) => (props.isMenuOpen ? "180deg" : "0deg")};
  height: 3rem;
  width: auto;

  transition: all 1s;
`;

export const StyledOptions = styled.h1`
  padding: 10px;
  cursor: pointer;
`;

export const StyledSeparator = styled.div`
  background-color: black;
  height: 2px;
  width: 80vw;
  opacity: 0.4;
`;
