import { StyledPlus, StyledPlusDiv } from "./StyledAddingPlus";

export const AddingPlus = ({ handleOnClick }) => {
  return (
    <StyledPlusDiv>
      <StyledPlus onClick={handleOnClick} />
    </StyledPlusDiv>
  );
};
