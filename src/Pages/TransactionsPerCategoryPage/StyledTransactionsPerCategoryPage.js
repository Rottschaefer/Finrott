import styled from "styled-components";

export const StyledTransactionsPerCategoryPage = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 6rem;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.4s ease;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem 6rem;
  }
`;

export const CategoryHeaderCard = styled.div`
  background: radial-gradient(circle at 100% 0%, rgba(185, 28, 28, 0.35) 0%, rgba(30, 9, 16, 0.88) 55%);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 24px;
  padding: 1.5rem 1.75rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4), 0 0 30px rgba(185, 28, 28, 0.12);
`;

export const HeaderTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(212, 175, 55, 0.18);
  color: var(--text-primary);
  font-family: 'Outfit', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    border-color: rgba(212, 175, 55, 0.4);
    color: var(--primary);
    transform: translateX(-2px);
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const CategoryMetaBadge = styled.span`
  font-size: 0.8rem;
  color: var(--text-tertiary);
  font-weight: 500;
`;

export const HeaderMainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CategoryTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const CategoryIconBox = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: ${(props) => props.bg || "rgba(212, 175, 55, 0.12)"};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 26px;
    height: 26px;
    color: ${(props) => props.color || "var(--primary)"};
  }
`;

export const CategoryHeading = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
`;

export const CategoryCount = styled.span`
  font-size: 0.8rem;
  color: var(--text-tertiary);
`;

export const TotalAmountBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.2rem;
`;

export const TotalLabel = styled.span`
  font-size: 0.75rem;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TotalValue = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--primary);
  letter-spacing: -0.01em;
`;

export const TransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
`;

export const EmptyTransactionsState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  text-align: center;
  gap: 1rem;
  background: rgba(28, 9, 15, 0.5);
  border: 1px dashed rgba(212, 175, 55, 0.15);
  border-radius: 20px;
  color: var(--text-tertiary);

  svg {
    width: 48px;
    height: 48px;
    opacity: 0.4;
  }

  h4 {
    font-size: 1.15rem;
    color: var(--text-secondary);
  }

  p {
    font-size: 0.85rem;
    max-width: 320px;
  }
`;
