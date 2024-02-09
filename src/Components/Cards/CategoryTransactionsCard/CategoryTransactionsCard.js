import { useState } from "react";
import {
  StyledCategoryCard,
  StyledTransactionInfo,
  StyledTransactionInfoDiv,
  StyledImgDiv,
  StyledFrontSide,
  StyledBackSide,
} from "./StyledCategoryTransactionsCard";
import { TransactionInfoPopUp } from "../../PopUps/TransactionInfoPopUp/TransactionInfoPopUp";
import { categoriesIcons } from "../../../Assets/categoriesIcons";
import { GrMoney } from "react-icons/gr";
import styled from "styled-components";

export const CategoryTransactionsCard = ({ transaction, setUpdatePage }) => {
  const [showTransactionInfoPopUp, setShowTransactionInfoPopUp] =
    useState(false);

  const [flipCard, setFlipCard] = useState(false);

  const handleCardOnClick = () => {
    setFlipCard(!flipCard);
    // setShowTransactionInfoPopUp(true);
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
    <div>
      <StyledCategoryCard flipCard={flipCard} onClick={handleCardOnClick}>
        <StyledFrontSide>
          <StyledImgDiv>
            <StyledIcon />
          </StyledImgDiv>
          <StyledTransactionInfoDiv>
            <StyledTransactionInfo>
              {transaction.description}
            </StyledTransactionInfo>
            <StyledTransactionInfo>{formattedValue}</StyledTransactionInfo>
          </StyledTransactionInfoDiv>
        </StyledFrontSide>
        <StyledBackSide>
          <h1>Back of the Card</h1>
        </StyledBackSide>
      </StyledCategoryCard>

      {showTransactionInfoPopUp && (
        <TransactionInfoPopUp
          transaction={transaction}
          setShowTransactionInfoPopUp={setShowTransactionInfoPopUp}
          setUpdatePage={setUpdatePage}
        />
      )}
    </div>
  );
};
