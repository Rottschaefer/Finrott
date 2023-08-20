import { StyledProgressBar, StyledTotalProgress } from "./StyledProgressBar.js";

export const ProgressBar = ({ expense }) => {
  const relation = (expense.spent / expense.toSpend) * 100;

  return (
    <StyledProgressBar>
      <StyledTotalProgress width={relation} />
    </StyledProgressBar>
  );
};
