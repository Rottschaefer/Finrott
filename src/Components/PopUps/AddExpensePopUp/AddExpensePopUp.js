import { useState } from "react";
import {
  StyledAddButton,
  StyledAddExpensePopUp,
  StyledCloseButton,
  StyledInput,
  StyledTitle,
} from "./StyledAddExpensePopUp.js";
import { addExpense } from "../../../Requests/expenseRequests.js";

export const AddExpensePopUp = ({ setAddExpense, handleExpenses }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [state, setState] = useState({
    name: "",
    spent: "",
    toSpend: "",
  });
  function handleChange(event) {
    const value = event.target.value;

    setState({
      ...state,

      [event.target.name]: value,
    });
  }

  const handleAddExpense = async () => {
    try {
      if (!state.name || !state.spent || !state.toSpend) {
        setErrorMessage("Preencha todos os campos");
      } else {
        const body = {
          name: state.name,
          spent: Number(state.spent),
          toSpend: Number(state.toSpend),
        };
        await addExpense(body);
        await handleExpenses();
        setAddExpense(false);
      }
    } catch (error) {
      // setErrorMessage(error.message);
    }
  };
  return (
    <StyledAddExpensePopUp>
      <StyledTitle>Adicione suas despesas</StyledTitle>
      <StyledCloseButton onClick={() => setAddExpense(false)}>
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
      <StyledAddButton onClick={handleAddExpense}>
        adicionar no orçamento
      </StyledAddButton>
    </StyledAddExpensePopUp>
  );
};
