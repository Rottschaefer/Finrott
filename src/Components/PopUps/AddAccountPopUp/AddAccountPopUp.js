import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../constants";
import {
  StyledTitle,
  StyledCloseButton,
  FormRow,
  StyledLabel,
  StyledInput,
  ColorPickerRow,
  ColorSwatch,
  StyledAddButton,
} from "./StyledAddAccountPopUp.js";
import { RootPopUp } from "../RootPopUp/RootPopUp.js";
import { Loading } from "../../Loading/Loading.js";
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

const PRESET_COLORS = [
  { name: "Roxo Nubank", hex: "820AD1" },
  { name: "Laranja Inter/Itaú", hex: "FF5E00" },
  { name: "Vermelho Santander/Bradesco", hex: "CC0000" },
  { name: "Preto C6", hex: "1A1A1A" },
  { name: "Verde Fintech", hex: "00D2B4" },
  { name: "Azul Caixa", hex: "0066CC" },
];

export const AddAccountPopUp = ({
  setShowAddAccountPopUp,
  token,
  setUpdatePage,
}) => {
  const [bankName, setBankName] = useState("");
  const [balance, setBalance] = useState("");
  const [primaryColor, setPrimaryColor] = useState("820AD1");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateAccount = async () => {
    if (!bankName) {
      setErrorMessage("Informe o nome do banco ou da conta.");
      return;
    }

    try {
      setIsLoading(true);
      setErrorMessage("");

      const config = {
        headers: {
          Authorization: token,
        },
      };

      const numBalance = balance ? Number(balance.replace(",", ".")) : 0;

      const body = {
        account: {
          bank_name: bankName,
          balance: numBalance,
          primary_color: primaryColor,
        },
      };

      await axios.post(`${BASE_URL}/accounts`, body, config);

      setIsLoading(false);
      if (setUpdatePage) setUpdatePage((prev) => !prev);
      setShowAddAccountPopUp(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Erro ao salvar conta. Tente novamente.");
    }
  };

  return (
    <RootPopUp
      setShowPopUp={setShowAddAccountPopUp}
      showPopUp={true}
    >
      <div style={{ position: "relative", width: "100%" }}>
        <StyledCloseButton onClick={() => setShowAddAccountPopUp(false)} />
        <StyledTitle>Adicionar Conta</StyledTitle>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <FormRow>
            <StyledLabel htmlFor="bank_name">Nome do Banco / Instituição</StyledLabel>
            <StyledInput
              id="bank_name"
              placeholder="Ex: Nubank, Itaú, Carteira..."
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
            />
          </FormRow>

          <FormRow>
            <StyledLabel htmlFor="balance">Saldo Atual (R$)</StyledLabel>
            <StyledInput
              id="balance"
              type="text"
              placeholder="0,00"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
            />
          </FormRow>

          <FormRow>
            <StyledLabel>Cor do Cartão</StyledLabel>
            <ColorPickerRow>
              {PRESET_COLORS.map((preset) => (
                <ColorSwatch
                  key={preset.hex}
                  type="button"
                  title={preset.name}
                  color={`#${preset.hex}`}
                  isSelected={primaryColor === preset.hex}
                  onClick={() => setPrimaryColor(preset.hex)}
                />
              ))}
            </ColorPickerRow>
          </FormRow>

          {errorMessage && <ErrorText>{errorMessage}</ErrorText>}

          <StyledAddButton
            onClick={handleCreateAccount}
            isLoading={isLoading}
          >
            {isLoading ? <Loading /> : "+ Cadastrar Conta"}
          </StyledAddButton>
        </div>
      </div>
    </RootPopUp>
  );
};
