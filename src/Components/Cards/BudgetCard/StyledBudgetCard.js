import styled from "styled-components";

export const StyledBudgetCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 25vw;
  height: 200px;
  min-width: 280px;
  border-radius: 15px;
  box-shadow: 2px 2px 30px black;
  font-family: "Montserrat", sans-serif;
  background-color: white;
`;

export const StyledBudgetType = styled.p`
  margin: 0%;
  font-weight: 600;
  font-size: 1.5rem;
`;

export const StyledBudgetNumber = styled.p`
  font-weight: 600;
  font-size: 1rem;
`;
