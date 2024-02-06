import {
  StyledAccountCard,
  StyledBalance,
  StyledCardTitle,
} from "./StyledAccountCard";

export const AccountCard = ({ account }) => {
  const formattedValue = `R$${Number(account.balance).toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
  return (
    <StyledAccountCard color={account.primary_color}>
      <StyledCardTitle>{account.bank_name}</StyledCardTitle>
      {account.balance !== null && (
        <StyledBalance>{`Saldo: ${formattedValue}`}</StyledBalance>
      )}
    </StyledAccountCard>
  );
};
