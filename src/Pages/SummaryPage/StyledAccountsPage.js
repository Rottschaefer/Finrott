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
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`;

export const AccountsTitle = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
`;

export const AccountsSubtitle = styled.p`
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-top: 0.25rem;
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
  background: rgba(17, 24, 39, 0.6);
  border: 1px dashed rgba(255, 255, 255, 0.12);
  border-radius: 24px;
  color: var(--text-tertiary);

  svg {
    width: 48px;
    height: 48px;
    opacity: 0.4;
  }

  h4 {
    font-size: 1.2rem;
    color: var(--text-secondary);
  }

  p {
    font-size: 0.9rem;
    max-width: 340px;
  }
`;
