import styled from "styled-components";

export const StyledSummaryPage = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    padding: 3rem 2rem 6rem;
  }
`;

export const AccountsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: 3px solid var(--border-beige);
`;

export const AccountsTitle = styled.h1`
  font-family: var(--font-pixel-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--border-beige);
  text-shadow: 2px 2px 0px #22050C;
  letter-spacing: -0.02em;
`;

export const AccountsSubtitle = styled.p`
  font-family: var(--font-pixel-mono);
  font-size: 0.8rem;
  color: var(--border-subtle);
  margin-top: 0.35rem;
`;

export const AccountsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

export const EmptyAccountsState = styled.div`
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
    color: var(--border-beige);
  }

  h4 {
    font-family: var(--font-pixel-display);
    font-size: 1.05rem;
    color: var(--text-secondary);
    text-shadow: 1px 1px 0px #22050C;
  }

  p {
    font-family: var(--font-pixel-mono);
    font-size: 0.85rem;
    max-width: 340px;
  }
`;
