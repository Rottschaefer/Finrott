import { useState } from "react";
import {
  StyledCategoryCard,
  StyledTransactionInfo,
  StyledTransactionInfoDiv,
  StyledImgDiv,
} from "./StyledCategoryTransactionsCard";
import { TransactionInfoPopUp } from "../../PopUps/TransactionInfoPopUp/TransactionInfoPopUp";
import { categoriesIcons } from "../../../Assets/categoriesIcons";
import { GrMoney } from "react-icons/gr";
import styled from "styled-components";

export const CategoryTransactionsCard = ({ transaction, setUpdatePage }) => {
  const [showTransactionInfoPopUp, setShowTransactionInfoPopUp] =
    useState(false);

  const handleCardOnClick = () => {
    setShowTransactionInfoPopUp(true);
  };

  const CategoryIcon = categoriesIcons[`${transaction.category}`]
    ? categoriesIcons[`${transaction.category}`]
    : { svg: GrMoney, color: "black" };

  const StyledIcon = styled(CategoryIcon.svg)`
    color: ${CategoryIcon.color};
    height: 30%;
    width: 30%;
  `;

  const formattedValue = `R$${Number(transaction.amount).toLocaleString(
    "pt-BR",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}`;

  return (
    <>
      <StyledCategoryCard onClick={handleCardOnClick}>
        <StyledImgDiv>
          <StyledIcon />
        </StyledImgDiv>
        <StyledTransactionInfoDiv>
          <StyledTransactionInfo>
            {transaction.description}
          </StyledTransactionInfo>
          <StyledTransactionInfo>{formattedValue}</StyledTransactionInfo>
        </StyledTransactionInfoDiv>
      </StyledCategoryCard>
      {showTransactionInfoPopUp && (
        <TransactionInfoPopUp
          transaction={transaction}
          setShowTransactionInfoPopUp={setShowTransactionInfoPopUp}
          setUpdatePage={setUpdatePage}
        />
      )}
    </>
  );
};
