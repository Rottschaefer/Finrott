import { useState } from "react";

import {
  StyledCloseButton,
  StyledDeleteButton,
  StyledDeleteExpensePopUp,
  StyledFadeforPopUp,
  StyledTitle,
} from "./StyledDeleteExpensePopUp.js";
import { deleteExpense } from "../../../Requests/expenseRequests.js";

export const DeleteExpensePopUp = ({
  setShowDeletePopUp,
  handleExpenses,
  expenseId,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleDeleteExpense = async () => {
    try {
      const body = {
        id: expenseId,
      };
      await deleteExpense(body);
      setShowDeletePopUp(false);
    } catch (error) {
      console.log(error);
      // setErrorMessage(error.message);
    }
  };

  return (
    <>
      <StyledFadeforPopUp />
      <StyledDeleteExpensePopUp>
        <StyledTitle>Tem certeza que quer deletar essa despesa?</StyledTitle>
        <StyledCloseButton
          onClick={(e) => {
            e.stopPropagation();
            setShowDeletePopUp(false);
          }}
        >
          x
        </StyledCloseButton>

        {errorMessage && <p>{errorMessage}</p>}
        <StyledDeleteButton onClick={handleDeleteExpense}>
          Deletar do orçamento
        </StyledDeleteButton>
      </StyledDeleteExpensePopUp>
    </>
  );
};
