import { data } from "../../Assets/DataToTest.js";
import { BudgetCard } from "../../Components/Cards/BudgetCard/BudgetCard.js";
import { getUsers, signUp } from "../../Requests/userRequests.js";
import {
  StyledBudgetCardConteiner,
  StyledBudgetPage,
  StyledIncome,
  StyledIncomeText,
} from "./StyledBudgetPage.js";

export const BudgetPage = () => {
  return (
    <StyledBudgetPage>
      <StyledIncome>
        <StyledIncomeText>Quanto posso gastar:</StyledIncomeText>
        <StyledIncomeText>R$1500</StyledIncomeText>
      </StyledIncome>
      <StyledBudgetCardConteiner>
        {data.map((expense) => {
          return <BudgetCard expense={expense} />;
        })}
      </StyledBudgetCardConteiner>
    </StyledBudgetPage>
  );
};
