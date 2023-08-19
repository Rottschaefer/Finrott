import styled from "styled-components";

export const StyledProgressBar = styled.div`
  height: 25px;
  width: 65%;
  border: 2px solid black;
  border-radius: 5px;
`;

export const StyledTotalProgress = styled.div`
  border-radius: 3px;
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: ${(props) =>
    props.width < 50
      ? "green"
      : props.width < 75
      ? "yellow"
      : props.width < 100
      ? "orange"
      : "red"};
`;
