import { ProgressBar } from "../../ProgressBar/ProgressBar.js";
import {
  StyledBudgetCard,
  StyledBudgetNumber,
  StyledBudgetType,
} from "./StyledBudgetCard.js";

const budget = {
  spent: 77,
  toSpend: 100,
};

export const BudgetCard = ({ expense }) => {
  return (
    <StyledBudgetCard>
      <StyledBudgetType>{expense.name}</StyledBudgetType>
      <StyledBudgetNumber>
        R${expense.spent} / R${expense.toSpend}
      </StyledBudgetNumber>
      <ProgressBar expense={expense} />
    </StyledBudgetCard>
  );
};
