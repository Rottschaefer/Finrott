import styled from "styled-components";

export const StyledBudgetPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  width: auto;
  background-color: grey;
  padding: 4rem;
`;

export const StyledBudgetCardConteiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
  height: auto;
`;

export const StyledIncome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: auto;
  margin-bottom: 50px;
  color: white;
  font-weight: 600;
`;

export const StyledIncomeText = styled.p`
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;
