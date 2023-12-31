import {
  StyledAccountCard,
  StyledBalance,
  StyledCardTitle,
} from "./StyledAccountCard";

export const AccountCard = (props) => {
  return (
    <StyledAccountCard color={props.color}>
      <StyledCardTitle>{props.bankName}</StyledCardTitle>
      <StyledBalance>{props.balance}</StyledBalance>
    </StyledAccountCard>
  );
};
