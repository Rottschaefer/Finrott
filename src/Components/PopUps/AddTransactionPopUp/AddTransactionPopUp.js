import React, { useState } from "react";
import {
  StyledAddButton,
  StyledCloseButton,
  StyledInput,
  StyledLabel,
  StyledSelect,
  StyledTitle,
  FormRow,
} from "./StyledAddTransactionPopUp.js";
import categories from "../../../Assets/categories.json";
import {
  addFixedTransaction,
  addTransaction,
} from "../../../Requests/transactionsRequests.js";
import { SpecialCheckBox } from "../../SpecialCheckBox/SpecialCheckBox.js";
import { Loading } from "../../Loading/Loading.js";
import { RootPopUp } from "../RootPopUp/RootPopUp.js";
import styled from "styled-components";

const ErrorText = styled.p`
  color: #F43F5E;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
  background: rgba(244, 63, 94, 0.1);
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid rgba(244, 63, 94, 0.2);
`;

const CheckboxRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.25rem;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin: 0.25rem 0;
`;

const CheckboxLabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
`;

const CheckboxTitle = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-primary);
`;

const CheckboxSubtitle = styled.span`
  font-size: 0.75rem;
  color: var(--text-tertiary);
`;

export const AddTransactionPopUp = ({
  category,
  setShowAddTransactionPopUp,
  token,
  setUpdatePage,
  showAddTransactionPopUp,
}) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const defaultCategory =
    category && category.descriptionTranslated
      ? category.descriptionTranslated
      : (categories.results[0] && categories.results[0].descriptionTranslated) || "";

  const [state, setState] = useState({
    description: "",
    amount: "",
    category: defaultCategory,
    category_id: "",
    date: new Date().toISOString().split("T")[0],
    is_a_fixed_transaction: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleAddExpense = async () => {
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

      setIsLoading(true);
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

      if (state.is_a_fixed_transaction) {
        await addFixedTransaction(config, body);
      } else {
        body = {
          transactions: [body],
        };
        await addTransaction(config, body);
      }

      setIsLoading(false);
      setUpdatePage((prev) => !prev);
      setShowAddTransactionPopUp(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Erro ao salvar transação. Verifique os dados.");
    }
  };

  return (
    <RootPopUp
      setShowPopUp={setShowAddTransactionPopUp}
      showPopUp={showAddTransactionPopUp}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <StyledCloseButton onClick={() => setShowAddTransactionPopUp(false)} />
        <StyledTitle>Nova Transação</StyledTitle>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <FormRow>
            <StyledLabel htmlFor="description">Descrição</StyledLabel>
            <StyledInput
              id="description"
              name="description"
              placeholder="Ex: Almoço, Uber, Farmácia..."
              value={state.description}
              onChange={handleChange}
            />
          </FormRow>

          <FormRow>
            <StyledLabel htmlFor="amount">Valor (R$)</StyledLabel>
            <StyledInput
              id="amount"
              name="amount"
              type="text"
              placeholder="0,00"
              value={state.amount}
              onChange={handleChange}
            />
          </FormRow>

          <FormRow>
            <StyledLabel htmlFor="date">Data</StyledLabel>
            <StyledInput
              id="date"
              type="date"
              name="date"
              value={state.date}
              onChange={handleChange}
            />
          </FormRow>

          <FormRow>
            <StyledLabel htmlFor="category">Categoria</StyledLabel>
            <StyledSelect
              id="category"
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

          <CheckboxRow>
            <CheckboxLabelGroup>
              <CheckboxTitle>Custo Fixo Mensal?</CheckboxTitle>
              <CheckboxSubtitle>Repete automaticamente todos os meses</CheckboxSubtitle>
            </CheckboxLabelGroup>
            <SpecialCheckBox setState={setState} state={state} />
          </CheckboxRow>

          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

          <StyledAddButton onClick={handleAddExpense} isLoading={isLoading}>
            {isLoading ? <Loading /> : "+ Adicionar Transação"}
          </StyledAddButton>
        </div>
      </div>
    </RootPopUp>
  );
};
