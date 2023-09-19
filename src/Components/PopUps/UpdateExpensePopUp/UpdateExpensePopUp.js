import { useState } from "react";

import {
  StyledCloseButton,
  StyledFadeforPopUp,
  StyledInput,
  StyledTitle,
  StyledUpdateButton,
  StyledUpdateExpensePopUp,
} from "./StyledUpdateExpensePopUp";
import { updateExpense } from "../../../Requests/expenseRequests";

export const UpdateExpensePopUp = ({
  setShowUpdatePopUp,
  showUpdatePopUp,
  expense,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [state, setState] = useState({
    name: expense.name,
    spent: expense.spent,
    toSpend: expense.toSpend,
  });

  function handleChange(event) {
    const value = event.target.value;
    setState({
      ...state,

      [event.target.name]: value,
    });
  }

  const handleUpdateExpense = async () => {
    try {
      if (!state.name || !state.spent || !state.toSpend) {
        setErrorMessage("Preencha todos os campos");
      } else {
        const body = {
          id: expense.id,
          name: state.name,
          spent: Number(state.spent),
          toSpend: Number(state.toSpend),
        };
        await updateExpense(body);
        setShowUpdatePopUp(false);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleShowPopup = (e) => {
    e.stopPropagation(); //Stop the state update on going to the father element
    setShowUpdatePopUp(false);
  };

  return (
    <>
      <StyledFadeforPopUp />
      <StyledUpdateExpensePopUp>
        <StyledTitle>Editar Despesa</StyledTitle>
        <StyledCloseButton onClick={(e) => handleShowPopup(e)}>
          x
        </StyledCloseButton>

        <StyledInput
          placeholder="Nome da despesa"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <StyledInput
          placeholder="Quanto você já gastou nela esse mês?"
          name="spent"
          value={state.spent}
          onChange={handleChange}
        />
        <StyledInput
          placeholder="Qual o valor total dessa despesa?"
          name="toSpend"
          value={state.toSpend}
          onChange={handleChange}
        />

        {errorMessage && <p>{errorMessage}</p>}
        <StyledUpdateButton onClick={handleUpdateExpense}>
          Editar Despesa
        </StyledUpdateButton>
      </StyledUpdateExpensePopUp>
    </>
  );
};
