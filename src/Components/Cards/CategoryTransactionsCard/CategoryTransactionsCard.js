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

export const CategoryTransactionsCard = ({ transaction }) => {
  const [showTransactionInfoPopUp, setShowTransactionInfoPopUp] =
    useState(false);

  const handleCardOnClick = () => {
    console.log("here");
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
          <StyledTransactionInfo>R${transaction.amount}</StyledTransactionInfo>
        </StyledTransactionInfoDiv>
      </StyledCategoryCard>
      {showTransactionInfoPopUp && (
        <TransactionInfoPopUp
          transaction={transaction}
          setShowTransactionInfoPopUp={setShowTransactionInfoPopUp}
        />
      )}
    </>
  );
};
