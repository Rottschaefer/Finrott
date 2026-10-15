import React from "react";
import {
  StyledAccountCard,
  CardTop,
  StyledCardTitle,
  CardBottom,
  BalanceLabel,
  StyledBalance,
} from "./StyledAccountCard";
import { FaBuildingColumns } from "react-icons/fa6";

export const AccountCard = ({ account }) => {
  const formattedValue =
    account.balance !== null && account.balance !== undefined
      ? Number(account.balance).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })
      : "R$ 0,00";

  return (
    <StyledAccountCard color={account.primary_color}>
      <CardTop>
        <StyledCardTitle>{account.bank_name || "Conta Bancária"}</StyledCardTitle>
        <FaBuildingColumns style={{ color: "rgba(255, 255, 255, 0.7)", width: 22, height: 22 }} />
      </CardTop>
      <CardBottom>
        <BalanceLabel>Saldo Disponível</BalanceLabel>
        <StyledBalance>{formattedValue}</StyledBalance>
      </CardBottom>
    </StyledAccountCard>
  );
};
