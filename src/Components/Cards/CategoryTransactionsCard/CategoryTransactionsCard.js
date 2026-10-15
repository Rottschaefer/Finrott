import React, { useState } from "react";
import { getCategoryMeta } from "../../../Assets/categoriesIcons";
import {
  CardPerspective,
  StyledFlipInner,
  StyledFrontSide,
  StyledBackSide,
  FrontLeft,
  IconBox,
  DescriptionColumn,
  TransactionDesc,
  TransactionMeta,
  AmountText,
  BackInfo,
  BackDate,
  BackCategory,
  ActionGroup,
  ActionButton,
  FlipHint,
} from "./StyledCategoryTransactionsCard";
import { BiSolidEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { TransactionInfoPopUp } from "../../PopUps/TransactionInfoPopUp/TransactionInfoPopUp";

export const CategoryTransactionsCard = ({
  transaction,
  setUpdatePage,
  onEdit,
  onDelete,
}) => {
  const [flipCard, setFlipCard] = useState(false);
  const [showLocalModal, setShowLocalModal] = useState(false);

  const handleCardClick = () => {
    setFlipCard((prev) => !prev);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    if (onEdit) {
      onEdit(transaction);
    } else {
      setShowLocalModal(true);
    }
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    if (onDelete) {
      onDelete(transaction);
    }
  };

  const meta = getCategoryMeta(transaction.category);
  const IconComponent = meta.svg;

  const numAmount = Number(transaction.amount) || 0;
  const formattedValue = numAmount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  let formattedDate = "Data não informada";
  if (transaction.date) {
    try {
      formattedDate = new Intl.DateTimeFormat("pt-BR", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(new Date(transaction.date));
    } catch {
      formattedDate = transaction.date;
    }
  }

  return (
    <>
      <CardPerspective onClick={handleCardClick} title="Clique para ver detalhes / ações">
        <StyledFlipInner flipCard={flipCard}>
          {/* FRENTE DO CARD */}
          <StyledFrontSide>
            <FrontLeft>
              <IconBox bg={meta.bg} color={meta.color}>
                <IconComponent />
              </IconBox>
              <DescriptionColumn>
                <TransactionDesc>{transaction.description || "Sem descrição"}</TransactionDesc>
                <TransactionMeta>
                  <span>{transaction.category}</span>
                </TransactionMeta>
              </DescriptionColumn>
            </FrontLeft>

            <div style={{ display: "flex", alignItems: "center" }}>
              <AmountText>{formattedValue}</AmountText>
            </div>
          </StyledFrontSide>

          {/* VERSO DO CARD */}
          <StyledBackSide>
            <BackInfo>
              <BackDate>{formattedDate}</BackDate>
              <BackCategory>{transaction.category}</BackCategory>
            </BackInfo>

            <ActionGroup>
              <FlipHint>Virar ↺</FlipHint>
              <ActionButton
                title="Editar transação"
                onClick={handleEditClick}
              >
                <BiSolidEdit />
              </ActionButton>
              {onDelete && (
                <ActionButton
                  danger
                  title="Excluir transação"
                  onClick={handleDeleteClick}
                >
                  <FaTrashAlt />
                </ActionButton>
              )}
            </ActionGroup>
          </StyledBackSide>
        </StyledFlipInner>
      </CardPerspective>

      {/* Fallback de modal local caso não use gerenciamento na página */}
      {showLocalModal && (
        <TransactionInfoPopUp
          transaction={transaction}
          showTransactionInfoPopUp={showLocalModal}
          setShowTransactionInfoPopUp={setShowLocalModal}
          setUpdatePage={setUpdatePage}
        />
      )}
    </>
  );
};
