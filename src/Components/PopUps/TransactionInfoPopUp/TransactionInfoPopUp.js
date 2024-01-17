import { useState } from "react";
import {
  StyledAddButton,
  StyledAddExpensePopUp,
  StyledCloseButton,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTitle,
} from "./StyledTransactionInfoPopUp.js";
import { addExpense } from "../../../Requests/expenseRequests.js";
import categories from "../../../Assets/categories.json";
import {
  addTransaction,
  addTransactions,
} from "../../../Requests/transactionsRequests.js";

export const TransactionInfoPopUp = ({
  setShowTransactionInfoPopUp,
  token,
  transaction,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const [state, setState] = useState({
    description: transaction.description,
    amount: transaction.amount,
    category: transaction.category,
    category_id: "",
    date: transaction.date,
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

        console.log(categoryObject.id);

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
              date: state.date,
              category_id: categoryObject.id,
            },
          ],
        };
        await addTransaction(config, body);
        setShowTransactionInfoPopUp(false);
      }
    } catch (error) {
      // setErrorMessage(error.message);
    }
  };
  return (
    <StyledAddExpensePopUp>
      <StyledTitle>Informações da transação</StyledTitle>
      <StyledCloseButton onClick={() => setShowTransactionInfoPopUp(false)}>
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

      <StyledLabel for="date">Qual a data?</StyledLabel>
      <StyledInput
        type="date"
        name="date"
        value={state.date}
        onChange={handleChange}
      />

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
        Atualizar Transação
      </StyledAddButton>
    </StyledAddExpensePopUp>
  );
};
