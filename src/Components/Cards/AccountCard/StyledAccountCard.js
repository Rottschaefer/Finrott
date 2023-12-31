import styled from "styled-components";

export const StyledAccountCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85vw;
  height: 30vh;
  background-color: ${(props) => props.color};
  border-radius: 30px;
`;

export const StyledCardTitle = styled.h1`
  color: white;
`;

export const StyledBalance = styled.h2`
  color: white;
`;
