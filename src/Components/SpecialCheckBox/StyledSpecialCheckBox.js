import styled from "styled-components";

export const StyledCheckBox = styled.div`
  display: flex;
  align-items: center;
  width: 56px;
  height: 30px;
  min-width: 56px;
  background: ${(props) =>
    props.isClicked
      ? "#9F1239"
      : "var(--pixel-ink)"};
  border: 3px solid var(--border-beige);
  border-radius: 0;
  padding: 2px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.08s steps(2);
  box-shadow: 3px 3px 0px var(--pixel-ink);

  &:hover {
    border-color: var(--primary-light);
  }
`;

export const StyledCircle = styled.div`
  width: 20px;
  height: 20px;
  min-width: 20px;
  background-color: ${(props) =>
    props.isClicked ? "var(--bg-outer-beige)" : "#881337"};
  border: 2px solid var(--pixel-ink);
  border-radius: 0;
  transform: ${(props) =>
    props.isClicked ? "translateX(26px)" : "translateX(0px)"};
  transition: transform 0.08s steps(2);
`;

