import React from "react";
import { StyledPlusDiv, StyledPlusButton } from "./StyledAddingPlus";
import { FaPlus } from "react-icons/fa6";

export const AddingPlus = ({ handleOnClick, label = "Nova Transação" }) => {
  return (
    <StyledPlusDiv>
      <StyledPlusButton onClick={handleOnClick}>
        <FaPlus />
        <span>{label}</span>
      </StyledPlusButton>
    </StyledPlusDiv>
  );
};
