import { ProgressBar } from "../../ProgressBar/ProgressBar";
import {
  StyledBudgetCard,
  StyledBudgetNumber,
  StyledBudgetType,
} from "./StyledBudgetCard";

const budget = {
  spent: 77,
  toSpend: 100,
};

export const BudgetCard = ({ expense }) => {
  console.log(expense);
  return (
    <StyledBudgetCard>
      <StyledBudgetType>{expense.expenseName}</StyledBudgetType>
      <StyledBudgetNumber>
        R${expense.spent} / R${expense.toSpend}
      </StyledBudgetNumber>
      <ProgressBar expense={expense} />
    </StyledBudgetCard>
  );
};
