import { data } from "../../Assets/DataToTest";
import { BudgetCard } from "../../Components/Cards/BudgetCard/BudgetCard";
import {
  StyledBudgetCardConteiner,
  StyledBudgetPage,
  StyledIncome,
  StyledIncomeText,
} from "./StyledBudgetPage";

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
