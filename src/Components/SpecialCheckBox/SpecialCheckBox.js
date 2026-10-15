import React from "react";
import { StyledCheckBox, StyledCircle } from "./StyledSpecialCheckBox";

export const SpecialCheckBox = ({ setState, state }) => {
  const isChecked = Boolean(state && state.is_a_fixed_transaction);

  const handleOnClick = () => {
    setState((prev) => ({
      ...prev,
      is_a_fixed_transaction: !prev.is_a_fixed_transaction,
    }));
  };

  return (
    <StyledCheckBox
      onClick={handleOnClick}
      isClicked={isChecked}
      role="switch"
      aria-checked={isChecked}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleOnClick();
        }
      }}
      title={isChecked ? "Custo fixo ativado" : "Custo fixo desativado"}
    >
      <StyledCircle isClicked={isChecked} />
    </StyledCheckBox>
  );
};
