import styled from "styled-components";

export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  width: 52px;
  height: 30px;
  min-width: 52px;
  background: ${(props) =>
    props.isClicked
      ? "linear-gradient(135deg, #ECC472, #C59828)"
      : "rgba(255, 255, 255, 0.16)"};
  border: 1px solid
    ${(props) =>
      props.isClicked
        ? "rgba(212, 175, 55, 0.6)"
        : "rgba(255, 255, 255, 0.14)"};
  border-radius: 999px;
  padding: 3px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) =>
    props.isClicked ? "0 0 14px rgba(212, 175, 55, 0.45)" : "none"};

  &:hover {
    background: ${(props) =>
      props.isClicked
        ? "linear-gradient(135deg, #F5D38C, #B8860B)"
        : "rgba(255, 255, 255, 0.24)"};
  }
`;

export const StyledCircle = styled.div`
  width: 22px;
  height: 22px;
  min-width: 22px;
  background-color: #FFF8F6;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  transform: ${(props) =>
    props.isClicked ? "translateX(22px)" : "translateX(0px)"};
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;
