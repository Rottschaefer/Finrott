import styled from "styled-components";

export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  width: 52px;
  height: 30px;
  min-width: 52px;
  background: ${(props) =>
    props.isClicked
      ? "linear-gradient(135deg, #10B981, #059669)"
      : "rgba(255, 255, 255, 0.16)"};
  border: 1px solid
    ${(props) =>
      props.isClicked
        ? "rgba(16, 185, 129, 0.6)"
        : "rgba(255, 255, 255, 0.14)"};
  border-radius: 999px;
  padding: 3px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) =>
    props.isClicked ? "0 0 14px rgba(16, 185, 129, 0.45)" : "none"};

  &:hover {
    background: ${(props) =>
      props.isClicked
        ? "linear-gradient(135deg, #10B981, #047857)"
        : "rgba(255, 255, 255, 0.24)"};
  }
`;

export const StyledCircle = styled.div`
  width: 22px;
  height: 22px;
  min-width: 22px;
  background-color: #FFFFFF;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.35);
  transform: ${(props) =>
    props.isClicked ? "translateX(22px)" : "translateX(0px)"};
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;
