import { StyledProgressBar, StyledTotalProgress } from "./StyledProgressBar";

export const ProgressBar = ({ expense }) => {
  const relation = (expense.spent / expense.toSpend) * 100;

  return (
    <StyledProgressBar>
      <StyledTotalProgress width={relation} />
    </StyledProgressBar>
  );
};
