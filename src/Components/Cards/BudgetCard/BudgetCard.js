import { useEffect, useState } from "react";
import { ProgressBar } from "../../ProgressBar/ProgressBar.js";
import {
  StyledBudgetCard,
  StyledBudgetNumber,
  StyledBudgetType,
  StyledDeleteButton,
} from "./StyledBudgetCard.js";
import { DeleteExpensePopUp } from "../../PopUps/DeleteExpensePopUp/DeleteExpensePopUp.js";
import { UpdateExpensePopUp } from "../../PopUps/UpdateExpensePopUp/UpdateExpensePopUp.js";

export const BudgetCard = ({ expense, setAddExpense }) => {
  const [showDeletePopUp, setShowDeletePopUp] = useState(false);
  const [showUpdatePopUp, setShowUpdatePopUp] = useState(false);

  return (
    <StyledBudgetCard
      onClick={() => {
        setShowUpdatePopUp(true);
      }}
    >
      {showDeletePopUp && (
        <DeleteExpensePopUp
          setShowDeletePopUp={setShowDeletePopUp}
          expenseId={expense.id}
        />
      )}
      {showUpdatePopUp && (
        <UpdateExpensePopUp
          showUpdatePopUp={showUpdatePopUp}
          setShowUpdatePopUp={setShowUpdatePopUp}
          expense={expense}
        />
      )}
      <StyledDeleteButton
        onClick={(e) => {
          e.stopPropagation();
          setShowDeletePopUp(true);
        }}
      />
      <StyledBudgetType>{expense.name}</StyledBudgetType>
      <StyledBudgetNumber>
        R${expense.spent} / R${expense.toSpend}
      </StyledBudgetNumber>
      <ProgressBar expense={expense} />
    </StyledBudgetCard>
  );
};
