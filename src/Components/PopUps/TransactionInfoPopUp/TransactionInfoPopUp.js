import { useState } from "react";
import {
  StyledAddButton,
  StyledCloseButton,
  StyledDeleteButton,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTitle,
} from "./StyledTransactionInfoPopUp.js";
import categories from "../../../Assets/categories.json";
import {
  deleteTransaction,
  updateTransaction,
  updateFixedTransaction,
  deleteFixedTransaction,
} from "../../../Requests/transactionsRequests.js";
import { Loading } from "../../Loading/Loading.js";
import { useLocation } from "react-router-dom";
import { StyledRootPopUp } from "../RootPopUp/StyledRootPopUp.js";
import { RootPopUp } from "../RootPopUp/RootPopUp.js";

export const TransactionInfoPopUp = ({
  setShowTransactionInfoPopUp,
  transaction,
  setUpdatePage,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const [state, setState] = useState({
    description: transaction.description,
    amount: transaction.amount,
    category: transaction.category,
    category_id: "",
    date: transaction.date.split("T")[0],
  });

  const location = useLocation();

  const category = location.pathname.split("/")[2];

  function handleChange(event) {
    const value = event.target.value;

    setState({
      ...state,

      [event.target.name]: value,
    });
  }

  const handleUpdateTransaction = async () => {
    try {
      if (
        !state.description ||
        !state.category ||
        !state.amount ||
        !state.date
      ) {
        setErrorMessage("Preencha todos os campos");
      } else {
        setIsUpdateLoading(true);
        const categoryObject = categories.results.find(
          (category) => category.descriptionTranslated === state.category
        );

        console.log(categoryObject);

        const config = {
          headers: {
            Authorization: token,
          },
        };

        let body = {
          description: state.description,
          amount: Number(state.amount.replace(",", ".")),
          category: state.category,
          date: state.date,
          category_id: categoryObject.id,
        };

        if (category === "custos-fixos") {
          await updateFixedTransaction(config, body, transaction.id);
        } else {
          body = { transactions: [body] };
          console.log(body);

          await updateTransaction(config, body, transaction.id);
        }
        setIsUpdateLoading(false);
        setUpdatePage(true);
        setShowTransactionInfoPopUp(false);
      }
    } catch (error) {
      setIsUpdateLoading(false);
      setErrorMessage(error.message);
    }
  };

  const handleDeleteTransaction = async () => {
    try {
      setIsDeleteLoading(true);
      const config = {
        headers: {
          Authorization: token,
        },
      };
      if (category === "custos-fixos") {
        await deleteFixedTransaction(config, transaction.id);
      } else {
        await deleteTransaction(config, transaction.id);
      }
      setIsDeleteLoading(false);
      setUpdatePage(true);

      setShowTransactionInfoPopUp(false);
    } catch (error) {
      setIsDeleteLoading(false);
    }
  };
  return (
    <RootPopUp closePopUp={setShowTransactionInfoPopUp}>
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
      <StyledAddButton onClick={handleUpdateTransaction}>
        {isUpdateLoading ? <Loading /> : "Atualizar Transação"}
      </StyledAddButton>
      <StyledDeleteButton onClick={handleDeleteTransaction}>
        {isDeleteLoading ? <Loading /> : "Deletar Transação"}
      </StyledDeleteButton>
    </RootPopUp>
  );
};
