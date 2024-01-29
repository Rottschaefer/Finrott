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
import categories from "../../../Assets/categories.json";
import {
  addFixedTransaction,
  addTransaction,
} from "../../../Requests/transactionsRequests.js";
import { SpecialCheckBox } from "../../SpecialCheckBox/SpecialCheckBox.js";
import { Loading } from "../../Loading/Loading.js";

export const AddTransactionPopUp = ({
  setShowAddTransactionPopUp,
  token,
  setUpdatePage,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    description: "",
    amount: "",
    category: "",
    category_id: "",
    date: "",
    is_a_fixed_transaction: false,
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
      if (
        !state.description ||
        !state.category ||
        !state.amount ||
        state.date === ""
      ) {
        setErrorMessage("Preencha todos os campos");
      } else {
        setIsLoading(true);
        const categoryObject = categories.results.find(
          (category) => category.descriptionTranslated === state.category
        );

        const config = {
          headers: {
            Authorization: token,
          },
        };

        if (state.is_a_fixed_transaction) {
          const body = {
            description: state.description,
            amount: Number(state.amount),
            category: state.category,
            date: state.date,
            category_id: categoryObject.id,
          };

          await addFixedTransaction(config, body);
        } else {
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
        }

        setIsLoading(false);
        setUpdatePage(true);
        setShowAddTransactionPopUp(false);
      }
    } catch (error) {
      setIsLoading(false);
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

      <StyledLabel for="is_fixed">Esse é um custo fixo?</StyledLabel>
      <SpecialCheckBox setState={setState} state={state} />

      {errorMessage && <p>{errorMessage}</p>}
      <StyledAddButton onClick={handleAddExpense}>
        {isLoading ? <Loading /> : " Adicionar Transação"}
      </StyledAddButton>
    </StyledAddExpensePopUp>
  );
};
