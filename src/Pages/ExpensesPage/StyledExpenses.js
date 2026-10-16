import styled from "styled-components";

export const StyledExpensesPage = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem 0.85rem 7.5rem;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.4s ease;
  overflow-x: hidden;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem 6rem;
  }
`;

export const TopNavBar = styled.header`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid var(--border-beige);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
    padding-bottom: 1.25rem;
  }
`;

export const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    justify-content: flex-start;
  }
`;

export const BrandLogo = styled.h1`
  font-family: var(--font-pixel-display);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--border-beige);
  text-shadow: 2px 2px 0px #22050C;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BrandBadge = styled.span`
  font-family: var(--font-pixel-mono);
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.55rem;
  background: #9F1239;
  color: var(--border-beige);
  border: 2px solid #22050C;
  border-radius: 0px;
  box-shadow: 2px 2px 0px #22050C;
`;

export const StyledMonthPicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 0.4rem;
  background: var(--bg-card);
  border: 3px solid #22050C;
  outline: 2px solid var(--border-beige);
  border-radius: 0px;
  padding: 0.35rem 0.5rem;
  box-shadow: 4px 4px 0px #22050C, var(--pixel-inset);

  @media (min-width: 768px) {
    width: auto;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.4rem 0.75rem;
  }
`;

export const MonthArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  min-width: 30px;
  border-radius: 0px;
  background: var(--bg-surface);
  border: 2px solid #22050C;
  color: var(--border-beige);
  box-shadow: 2px 2px 0px #22050C;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s, background 0.1s;

  &:hover {
    background: #9F1239;
    color: #FFF8E7;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px #22050C;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const StyledMonthPickerText = styled.span`
  font-family: var(--font-pixel-display);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-primary);
  flex: 1;
  text-align: center;
  text-shadow: 1px 1px 0px #22050C;
  white-space: nowrap;

  @media (min-width: 768px) {
    font-size: 0.85rem;
    min-width: 140px;
    flex: initial;
  }
`;

export const CurrentMonthBadge = styled.button`
  font-family: var(--font-pixel-mono);
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.2rem 0.45rem;
  border-radius: 0px;
  background: var(--border-beige);
  color: #22050C;
  border: 2px solid #22050C;
  box-shadow: 2px 2px 0px #22050C;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s, background 0.1s;

  &:hover {
    background: #FFF6D6;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 0px 0px 0px #22050C;
  }
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const PrimaryActionBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  background: var(--border-beige);
  color: #22050C;
  font-family: var(--font-pixel-display);
  font-size: 0.75rem;
  font-weight: 700;
  border-radius: 0px;
  border: 3px solid #22050C;
  outline: 2px solid var(--border-beige);
  box-shadow: 4px 4px 0px #22050C;
  cursor: pointer;
  transition: transform 0.1s, box-shadow 0.1s, background 0.1s;

  @media (min-width: 768px) {
    width: auto;
    font-size: 0.8rem;
    padding: 0.65rem 1.25rem;
  }

  &:hover {
    background: #FFF6D6;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #22050C;
  }
`;

export const HeroSummaryCard = styled.div`
  background: #7F1D1D;
  border: 3px solid var(--border-beige);
  outline: 3px solid #22050C;
  border-radius: 0px;
  padding: 1.15rem 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  min-width: 0;
  box-shadow: 5px 5px 0px #22050C, var(--pixel-inset);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2.5rem;
    margin-bottom: 2rem;
    gap: 1.25rem;
    box-shadow: 6px 6px 0px #22050C, var(--pixel-inset);
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  min-width: 0;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const HeroSubtitle = styled.span`
  font-family: var(--font-pixel-mono);
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--border-subtle);
`;

export const HeroAmount = styled.h2`
  font-family: var(--font-pixel-display);
  font-size: clamp(1.3rem, 5.2vw, 2.35rem);
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #FFF8E7;
  text-shadow: 3px 3px 0px #22050C;
  word-break: break-word;
`;

export const HeroStatsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.55rem;
  width: 100%;

  & > div:nth-child(3) {
    grid-column: span 2;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    flex-wrap: wrap;
    width: auto;

    & > div:nth-child(3) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: rgba(34, 5, 12, 0.55);
  border: 2px solid #22050C;
  border-radius: 0px;
  padding: 0.5rem 0.65rem;
  box-shadow: 2px 2px 0px #22050C;
  min-width: 0;
`;

export const StatLabel = styled.span`
  font-family: var(--font-pixel-mono);
  font-size: 0.65rem;
  font-weight: 600;
  color: var(--border-subtle);
  text-transform: uppercase;
  letter-spacing: 0.03em;
`;

export const StatValue = styled.span`
  font-family: var(--font-pixel-display);
  font-size: clamp(0.75rem, 3.3vw, 0.95rem);
  font-weight: 700;
  color: ${(props) => props.color || "var(--text-primary)"};
  text-shadow: 1px 1px 0px #22050C;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MainSplitGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (min-width: 1024px) {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 2.5rem;
    align-items: start;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-width: 0;
  width: 100%;
`;

export const SectionTitle = styled.h3`
  font-family: var(--font-pixel-display);
  font-size: clamp(0.78rem, 3.5vw, 1rem);
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.75rem;
  text-shadow: 2px 2px 0px #22050C;
  letter-spacing: -0.02em;
  width: 100%;
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  min-width: 0;
`;

export const ChartCard = styled.div`
  background: var(--bg-card);
  border: 3px solid var(--border-beige);
  outline: 2px solid #22050C;
  border-radius: 0px;
  padding: 1.15rem 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-width: 0;
  box-shadow: 4px 4px 0px #22050C, var(--pixel-inset);

  @media (min-width: 768px) {
    padding: 1.5rem;
  }
`;

export const RightSplitPanel = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: sticky;
    top: 2rem;
    background: var(--bg-card);
    border: 3px solid var(--border-beige);
    outline: 2px solid #22050C;
    border-radius: 0px;
    padding: 1.75rem;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    box-shadow: 6px 6px 0px #22050C, var(--pixel-inset);
  }
`;

export const EmptyDetailState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 1.5rem;
  gap: 0.75rem;
  color: var(--text-tertiary);
  font-family: var(--font-pixel-mono);
  background: rgba(34, 5, 12, 0.4);
  border: 2px dashed var(--border-subtle);
  border-radius: 0px;

  svg {
    width: 44px;
    height: 44px;
    color: var(--border-subtle);
    opacity: 0.6;
  }

  h4 {
    font-family: var(--font-pixel-display);
    font-size: 0.95rem;
    color: var(--text-secondary);
  }

  p {
    font-size: 0.8rem;
    max-width: 280px;
  }
`;

export const SplitDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 2px solid #22050C;
`;

export const SplitDetailTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const SplitDetailTitle = styled.h3`
  font-family: var(--font-pixel-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  text-shadow: 1px 1px 0px #22050C;
`;

export const SplitDetailTotal = styled.span`
  font-family: var(--font-pixel-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--border-gold);
  text-shadow: 1px 1px 0px #22050C;
`;

export const SplitTransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;
