import {
  StyledCategoryCard,
  StyledTransactionInfo,
  StyledTransactionInfoDiv,
  StyledImgDiv,
} from "./StyledCategoryTransactionsCard";

export const CategoryTransactionsCard = ({ transaction }) => {
  return (
    <StyledCategoryCard>
      <StyledImgDiv>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.332 10.6667C29.3321 10.4247 29.2662 10.1873 29.1413 9.98001L25.5293 3.96001C25.2914 3.56646 24.9562 3.24077 24.5559 3.01426C24.1557 2.78775 23.7039 2.66805 23.244 2.66667H8.75335C7.82268 2.66667 6.94668 3.16267 6.46801 3.96134L2.85601 9.98001C2.73114 10.1873 2.66522 10.4247 2.66534 10.6667C2.66534 12.0067 3.18001 13.2187 3.99868 14.1573V26.6667C3.99868 27.0203 4.13915 27.3594 4.3892 27.6095C4.63925 27.8595 4.97839 28 5.33201 28H15.9987C16.3523 28 16.6914 27.8595 16.9415 27.6095C17.1915 27.3594 17.332 27.0203 17.332 26.6667V20H22.6653V26.6667C22.6653 27.0203 22.8058 27.3594 23.0559 27.6095C23.3059 27.8595 23.6451 28 23.9987 28H26.6653C27.019 28 27.3581 27.8595 27.6082 27.6095C27.8582 27.3594 27.9987 27.0203 27.9987 26.6667V14.1573C28.8173 13.2187 29.332 12.0067 29.332 10.6667ZM26.644 11.0013C26.562 11.6452 26.2482 12.2371 25.7613 12.6664C25.2744 13.0956 24.6478 13.3327 23.9987 13.3333C22.528 13.3333 21.332 12.1373 21.332 10.6667C21.332 10.576 21.2987 10.496 21.28 10.4107L21.3067 10.4053L20.292 5.33334H23.244L26.644 11.0013ZM13.3413 10.7533L14.424 5.33334H17.572L18.656 10.7533C18.6093 12.184 17.4387 13.3333 15.9987 13.3333C14.5587 13.3333 13.388 12.184 13.3413 10.7533ZM8.75335 5.33334H11.7053L10.692 10.4053L10.7187 10.4107C10.6987 10.496 10.6653 10.576 10.6653 10.6667C10.6653 12.1373 9.46935 13.3333 7.99868 13.3333C7.3496 13.3327 6.72299 13.0956 6.23609 12.6664C5.74919 12.2371 5.43537 11.6452 5.35334 11.0013L8.75335 5.33334ZM13.332 21.3333H7.99868V17.3333H13.332V21.3333Z"
            fill="#81B2CA"
          />
        </svg>
      </StyledImgDiv>
      <StyledTransactionInfoDiv>
        <StyledTransactionInfo>{transaction.description}</StyledTransactionInfo>
        <StyledTransactionInfo>R${transaction.amount}</StyledTransactionInfo>
      </StyledTransactionInfoDiv>
    </StyledCategoryCard>
  );
};
