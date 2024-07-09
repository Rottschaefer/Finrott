import { useState } from "react";
import {
  StyledCategoryCard,
  StyledTransactionInfo,
  StyledTransactionInfoDiv,
  StyledImgDiv,
  StyledFrontSide,
  StyledBackSide,
  StyledBackSideInfo,
  StyledBackSideInfoText,
  StyledBackSideImageDiv,
  StyledEditImage,
} from "./StyledCategoryTransactionsCard";
import { TransactionInfoPopUp } from "../../PopUps/TransactionInfoPopUp/TransactionInfoPopUp";
import { categoriesIcons } from "../../../Assets/categoriesIcons";
import { GrMoney } from "react-icons/gr";
import styled from "styled-components";

export const CategoryTransactionsCard = ({ transaction, setUpdatePage }) => {
  const [showTransactionInfoPopUp, setShowTransactionInfoPopUp] =
    useState(false);

  const [flipCard, setFlipCard] = useState(false);
  const [changeInfo, setChangeInfo] = useState(false);

  const handleCardOnClick = () => {
    setFlipCard(!flipCard);
  };

  const handleEditOnClick = (e) => {
    e.stopPropagation();
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

  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).format(new Date(transaction.date));

  return (
    <div>
      <StyledCategoryCard flipCard={flipCard} onClick={handleCardOnClick}>
        <StyledFrontSide flipCard={flipCard}>
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
        <StyledBackSide flipCard={flipCard}>
          <StyledBackSideInfo>
            <StyledBackSideInfoText>{formattedDate}</StyledBackSideInfoText>
            <StyledBackSideInfoText>
              {transaction.category}
            </StyledBackSideInfoText>
          </StyledBackSideInfo>
          <StyledBackSideImageDiv onClick={(e) => handleEditOnClick(e)}>
            <StyledEditImage />
          </StyledBackSideImageDiv>
        </StyledBackSide>
      </StyledCategoryCard>

      {/* {showTransactionInfoPopUp && (
        <TransactionInfoPopUp
          transaction={transaction}
          showTransactionInfoPopUp = {showTransactionInfoPopUp}
          setShowTransactionInfoPopUp={setShowTransactionInfoPopUp}
          setUpdatePage={setUpdatePage}
        />
      )} */}
      <TransactionInfoPopUp
        transaction={transaction}
        showTransactionInfoPopUp={showTransactionInfoPopUp}
        setShowTransactionInfoPopUp={setShowTransactionInfoPopUp}
        setUpdatePage={setUpdatePage}
      />
    </div>
  );
};
