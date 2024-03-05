import styled from "styled-components";
import { categoriesIcons } from "../../../Assets/categoriesIcons";
import {
  StyledCategoryCard,
  StyledExpensesInfo,
  StyledExpensesInfoDiv,
  StyledImgDiv,
  StyledSvg,
} from "./StyledCategoryExpensesCard";
import { GrMoney } from "react-icons/gr";
import FadeIn from "react-fade-in/lib/FadeIn";

export const CategoryExpensesCard = ({ amount, handleOnClick }) => {
  const formattedValue = `R$${Number(amount.total_amount).toLocaleString(
    "pt-BR",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )}`;

  const CategoryIcon = categoriesIcons[`${amount.category}`]
    ? categoriesIcons[`${amount.category}`]
    : { svg: GrMoney, color: "black" };

  const StyledIcon = styled(CategoryIcon.svg)`
    color: ${CategoryIcon.color};
    height: 30%;
    width: 30%;
  `;

  return (
    // <FadeIn>
    <StyledCategoryCard onClick={() => handleOnClick(amount)}>
      <StyledImgDiv>
        <StyledIcon />
      </StyledImgDiv>
      <StyledExpensesInfoDiv>
        <StyledExpensesInfo>{amount.category || "Outros"}</StyledExpensesInfo>
        <StyledExpensesInfo>{formattedValue}</StyledExpensesInfo>
      </StyledExpensesInfoDiv>
    </StyledCategoryCard>
    // </FadeIn>
  );
};
