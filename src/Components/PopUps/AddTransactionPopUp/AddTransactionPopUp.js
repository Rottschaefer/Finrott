import { useState } from "react";
import {
  StyledAddButton,
  StyledAddExpensePopUp,
  StyledCloseButton,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTitle,
} from "./StyledAddTransactionPopUp.js";
import { addExpense } from "../../../Requests/expenseRequests.js";
import categories from "../../../Assets/categories.json";
import {
  addTransaction,
  addTransactions,
} from "../../../Requests/transactionsRequests.js";

export const AddTransactionPopUp = ({ setShowAddTransactionPopUp, token }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [state, setState] = useState({
    description: "",
    amount: "",
    category: "",
    category_id: "",
  });

  function handleChange(event) {
    console.log(state);
    const value = event.target.value;

    setState({
      ...state,

      [event.target.name]: value,
    });
  }

  const handleAddExpense = async () => {
    try {
      if (!state.description || !state.category || !state.amount) {
        setErrorMessage("Preencha todos os campos");
      } else {
        const categoryObject = categories.results.find(
          (category) => category.descriptionTranslated === state.category
        );

        const config = {
          headers: {
            Authorization: token,
          },
        };

        const body = {
          transactions: [
            {
              description: state.description,
              amount: Number(state.amount),
              category: state.category,
              category_id: categoryObject.category_id,
            },
          ],
        };
        await addTransaction(config, body);
        setShowAddTransactionPopUp(false);
      }
    } catch (error) {
      // setErrorMessage(error.message);
    }
  };
  return (
    <StyledAddExpensePopUp>
      <StyledTitle>O que você pagou?</StyledTitle>
      <StyledCloseButton onClick={() => setShowAddTransactionPopUp(false)}>
        x
      </StyledCloseButton>
      <StyledLabel for="description">Descrição da transação</StyledLabel>
      <StyledInput
        name="description"
        value={state.description}
        onChange={handleChange}
      />
      <StyledLabel for="amount">Quanto custou?</StyledLabel>
      <StyledInput name="amount" value={state.amount} onChange={handleChange} />

      <StyledLabel for="category">
        Qual a categoria dessa transação?
      </StyledLabel>
      <StyledSelect
        name="category"
        value={state.category}
        onChange={handleChange}
      >
        {categories.results.map((category) => (
          <option>{category.descriptionTranslated}</option>
        ))}
      </StyledSelect>
      {errorMessage && <p>{errorMessage}</p>}
      <StyledAddButton onClick={handleAddExpense}>
        Adicionar Transação
      </StyledAddButton>
    </StyledAddExpensePopUp>
  );
};
