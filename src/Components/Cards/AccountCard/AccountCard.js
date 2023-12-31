import {
  StyledAccountCard,
  StyledBalance,
  StyledCardTitle,
} from "./StyledAccountCard";

export const AccountCard = (props) => {
  return (
    <StyledAccountCard color={props.color}>
      <StyledCardTitle>{props.bankName}</StyledCardTitle>
      {props.balance !== null && (
        <StyledBalance>{`Saldo: R$${props.balance}`}</StyledBalance>
      )}
    </StyledAccountCard>
  );
};
