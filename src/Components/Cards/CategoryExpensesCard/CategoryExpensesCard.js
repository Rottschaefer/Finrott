import React from "react";
import { getCategoryMeta } from "../../../Assets/categoriesIcons";
import {
  StyledCategoryCard,
  LeftSection,
  StyledImgDiv,
  InfoColumn,
  CategoryTitle,
  CategorySubtitle,
  RightSection,
  FormattedAmount,
  PercentageBadge,
  ProgressBarWrapper,
  ProgressBarFill,
} from "./StyledCategoryExpensesCard";

export const CategoryExpensesCard = ({
  amount,
  handleOnClick,
  totalMonth = 0,
  isSelected = false,
}) => {
  const numAmount = Number(amount.total_amount) || 0;
  const numTotal = Number(totalMonth) || 0;
  const percentage = numTotal > 0 ? ((numAmount / numTotal) * 100).toFixed(1) : "0";

  const formattedValue = numAmount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const categoryName = amount.category || "Outros";
  const meta = getCategoryMeta(categoryName);
  const IconComponent = meta.svg;

  return (
    <StyledCategoryCard
      onClick={() => handleOnClick && handleOnClick(amount)}
      isSelected={isSelected}
      accentColor={meta.color}
    >
      <LeftSection>
        <StyledImgDiv bg={meta.bg} iconColor={meta.color}>
          <IconComponent />
        </StyledImgDiv>
        <InfoColumn>
          <CategoryTitle>{categoryName}</CategoryTitle>
          <CategorySubtitle>
            {percentage}% do total do mês
          </CategorySubtitle>
        </InfoColumn>
      </LeftSection>

      <RightSection>
        <FormattedAmount>{formattedValue}</FormattedAmount>
        <PercentageBadge color={meta.color}>
          {percentage}%
        </PercentageBadge>
      </RightSection>

      <ProgressBarWrapper>
        <ProgressBarFill
          percent={Number(percentage)}
          color={meta.color}
        />
      </ProgressBarWrapper>
    </StyledCategoryCard>
  );
};
