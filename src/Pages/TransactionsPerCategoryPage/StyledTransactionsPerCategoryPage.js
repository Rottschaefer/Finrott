import styled from "styled-components";

export const StyledTransactionsPerCategoryPage = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 1.25rem 1rem 9rem;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.4s ease;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem 8rem;
  }
`;

export const CategoryHeaderCard = styled.div`
  background: #7F1D1D;
  border: 3px solid var(--border-beige);
  outline: 3px solid #22050C;
  border-radius: 0px;
  padding: 1.25rem 1.15rem;
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
  box-shadow: 6px 6px 0px #22050C, var(--pixel-inset);

  @media (min-width: 768px) {
    padding: 1.5rem 1.75rem;
    margin-bottom: 2rem;
  }
`;

export const HeaderTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
`;

export const BackButton = styled.button`
  position: fixed;
  bottom: 2.25rem;
  left: 2.25rem;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.7rem 0.95rem;
  border-radius: 0px;
  background: var(--bg-surface);
  border: 3px solid var(--border-beige);
  outline: 2px solid #22050C;
  color: var(--border-beige);
  font-family: var(--font-pixel-display);
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 4px 4px 0px #22050C;
  transition: transform 0.1s, box-shadow 0.1s, background 0.1s;

  @media (max-width: 640px) {
    bottom: 5.25rem;
    left: 0.9rem;
    padding: 0.65rem 0.75rem;
    font-size: 0.68rem;
  }

  &:hover {
    background: #9F1239;
    color: #FFF8E7;
    transform: translate(-2px, -2px);
    box-shadow: 6px 6px 0px #22050C;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #22050C;
  }

  svg {
    width: 13px;
    height: 13px;
  }
`;

export const CategoryMetaBadge = styled.span`
  font-family: var(--font-pixel-display);
  font-size: 0.75rem;
  color: var(--border-beige);
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  background: rgba(34, 5, 12, 0.6);
  border: 2px solid #22050C;
  outline: 1px solid var(--border-subtle);
  padding: 0.4rem 1rem;
  border-radius: 0px;
  box-shadow: 3px 3px 0px #22050C;
  width: 100%;

  @media (min-width: 480px) {
    width: auto;
    min-width: 200px;
  }
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
  border-radius: 0px;
  background: ${(props) => props.bg || "#9F1239"};
  border: 3px solid #22050C;
  outline: 1px solid var(--border-beige);
  box-shadow: 3px 3px 0px #22050C;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 24px;
    height: 24px;
    color: ${(props) => props.color || "var(--primary)"};
  }
`;

export const CategoryHeading = styled.h2`
  font-family: var(--font-pixel-display);
  font-size: clamp(0.95rem, 4.2vw, 1.35rem);
  font-weight: 700;
  color: var(--text-primary);
  text-shadow: 2px 2px 0px #22050C;
  word-break: break-word;
`;

export const CategoryCount = styled.span`
  font-family: var(--font-pixel-mono);
  font-size: 0.75rem;
  color: var(--border-subtle);
`;

export const TotalAmountBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.2rem;

  @media (min-width: 480px) {
    align-items: flex-end;
  }
`;

export const TotalLabel = styled.span`
  font-family: var(--font-pixel-mono);
  font-size: 0.7rem;
  color: var(--border-subtle);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const TotalValue = styled.span`
  font-family: var(--font-pixel-display);
  font-size: clamp(1.1rem, 4.8vw, 1.5rem);
  font-weight: 700;
  color: var(--border-beige);
  text-shadow: 2px 2px 0px #22050C;
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
  background: var(--bg-card);
  border: 3px dashed var(--border-subtle);
  border-radius: 0px;
  color: var(--text-tertiary);
  box-shadow: 4px 4px 0px #22050C;

  svg {
    width: 44px;
    height: 44px;
    opacity: 0.6;
    color: var(--border-subtle);
  }

  h4 {
    font-family: var(--font-pixel-display);
    font-size: 1rem;
    color: var(--text-secondary);
    text-shadow: 1px 1px 0px #22050C;
  }

  p {
    font-family: var(--font-pixel-mono);
    font-size: 0.8rem;
    max-width: 320px;
  }
`;
