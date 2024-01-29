import { StyledCheckBox, StyledCircle } from "./StyledSpecialCheckBox";

export const SpecialCheckBox = ({ setState, state }) => {
  const handleOnClick = () => {
    console.log(state);
    setState({
      ...state,
      is_a_fixed_transaction: !state.is_a_fixed_transaction,
    });
  };

  return (
    <StyledCheckBox
      onClick={handleOnClick}
      isClicked={state.is_a_fixed_transaction}
    >
      <StyledCircle isClicked={state.is_a_fixed_transaction} />
    </StyledCheckBox>
  );
};
