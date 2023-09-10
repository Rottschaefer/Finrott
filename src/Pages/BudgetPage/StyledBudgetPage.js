import styled from "styled-components";

const color = "#5e2129";

export const StyledBudgetPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  min-height: 100vh;
  height: auto;
  width: auto;
  background-color: ${color};
  padding: 4rem;
  padding-top: 6rem;
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
  /* color: black; */
`;

export const StyledNewExpense = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-weight: 900;
  width: 33vw;
  height: 50px;
  background-color: white;
  border: none;
  border-radius: 10px;
`;

export const StyledFadeforPopUp = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.5;
  height: 100%;
  width: 100vw;
  margin-top: -100px;
`;
