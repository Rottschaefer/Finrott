import React, { useState } from "react";
import {
  StyledAddButton,
  StyledCloseButton,
  StyledDeleteButton,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTitle,
  FormRow,
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
import { RootPopUp } from "../RootPopUp/RootPopUp.js";
import styled from "styled-components";

const ErrorText = styled.p`
  color: var(--bg-beige-light);
  font-family: var(--font-pixel-mono);
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
  background: #9F1239;
  padding: 0.5rem;
  border-radius: 0;
  border: 2px solid var(--border-beige);
  box-shadow: 3px 3px 0px var(--pixel-ink);
`;

export const TransactionInfoPopUp = ({
  showTransactionInfoPopUp,
  setShowTransactionInfoPopUp,
  transaction,
  setUpdatePage,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [token] = useState(JSON.parse(localStorage.getItem("token")));
  const [isUpdateLoading, setIsUpdateLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  let initialDate = new Date().toISOString().split("T")[0];
  if (transaction && transaction.date) {
    initialDate = transaction.date.split("T")[0];
  }

  const [state, setState] = useState({
    description: transaction ? transaction.description : "",
    amount: transaction ? transaction.amount : "",
    category: transaction ? transaction.category : "",
    category_id: "",
    date: initialDate,
  });

  const location = useLocation();
  const categoryParam = location.pathname.split("/")[2];

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleUpdateTransaction = async () => {
    try {
      if (
        !state.description ||
        !state.category ||
        !state.amount ||
        !state.date
      ) {
        setErrorMessage("Preencha todos os campos obrigatórios");
        return;
      }

      setIsUpdateLoading(true);
      setErrorMessage("");

      const categoryObject = categories.results.find(
        (cat) => cat.descriptionTranslated === state.category
      );

      const config = {
        headers: {
          Authorization: token,
        },
      };

      let body = {
        description: state.description,
        amount: Number(state.amount.toString().replace(",", ".")),
        category: state.category,
        date: state.date,
        category_id: categoryObject ? categoryObject.id : "outros",
      };

      if (categoryParam === "custos-fixos" || transaction.is_a_fixed_transaction) {
        await updateFixedTransaction(config, body, transaction.id);
      } else {
        body = { transactions: [body] };
        await updateTransaction(config, body, transaction.id);
      }

      setIsUpdateLoading(false);
      if (setUpdatePage) setUpdatePage((prev) => !prev);
      setShowTransactionInfoPopUp(false);
    } catch (error) {
      setIsUpdateLoading(false);
      setErrorMessage("Erro ao atualizar transação.");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Deseja realmente excluir esta transação?");
    if (!confirmDelete) return;

    try {
      setIsDeleteLoading(true);
      setErrorMessage("");

      const config = {
        headers: {
          Authorization: token,
        },
      };

      if (categoryParam === "custos-fixos" || transaction.is_a_fixed_transaction) {
        await deleteFixedTransaction(config, transaction.id);
      } else {
        await deleteTransaction(config, transaction.id);
      }

      setIsDeleteLoading(false);
      if (setUpdatePage) setUpdatePage((prev) => !prev);
      setShowTransactionInfoPopUp(false);
    } catch (error) {
      setIsDeleteLoading(false);
      setErrorMessage("Erro ao excluir transação.");
    }
  };

  if (!transaction) return null;

  return (
    <RootPopUp
      setShowPopUp={setShowTransactionInfoPopUp}
      showPopUp={showTransactionInfoPopUp}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <StyledCloseButton onClick={() => setShowTransactionInfoPopUp(false)} />
        <StyledTitle>Editar Transação</StyledTitle>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <FormRow>
            <StyledLabel htmlFor="edit-desc">Descrição</StyledLabel>
            <StyledInput
              id="edit-desc"
              name="description"
              value={state.description}
              onChange={handleChange}
            />
          </FormRow>

          <FormRow>
            <StyledLabel htmlFor="edit-amount">Valor (R$)</StyledLabel>
            <StyledInput
              id="edit-amount"
              name="amount"
              type="text"
              value={state.amount}
              onChange={handleChange}
            />
          </FormRow>

          <FormRow>
            <StyledLabel htmlFor="edit-date">Data</StyledLabel>
            <StyledInput
              id="edit-date"
              type="date"
              name="date"
              value={state.date}
              onChange={handleChange}
            />
          </FormRow>

          <FormRow>
            <StyledLabel htmlFor="edit-category">Categoria</StyledLabel>
            <StyledSelect
              id="edit-category"
              name="category"
              value={state.category}
              onChange={handleChange}
            >
              {categories.results.map((cat, idx) => (
                <option key={cat.id || idx} value={cat.descriptionTranslated}>
                  {cat.descriptionTranslated}
                </option>
              ))}
            </StyledSelect>
          </FormRow>

          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

          <StyledAddButton
            onClick={handleUpdateTransaction}
            isLoading={isUpdateLoading}
          >
            {isUpdateLoading ? <Loading /> : "Salvar Alterações"}
          </StyledAddButton>

          <StyledDeleteButton
            onClick={handleDelete}
            isLoading={isDeleteLoading}
          >
            {isDeleteLoading ? <Loading /> : "Excluir Transação"}
          </StyledDeleteButton>
        </div>
      </div>
    </RootPopUp>
  );
};
