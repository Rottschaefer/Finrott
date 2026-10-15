import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const StyledExpensesPage = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.5rem 1.25rem 6rem;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  transition: opacity 0.4s ease;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem 6rem;
  }
`;

export const TopNavBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.12);
`;

export const BrandGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const BrandLogo = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #FFF8F6 30%, #F5D38C 70%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  align-items: center;
`;

export const BrandBadge = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.55rem;
  background: rgba(185, 28, 28, 0.2);
  color: var(--primary);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 999px;
`;

export const StyledMonthPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(28, 9, 15, 0.85);
  border: 1px solid rgba(212, 175, 55, 0.18);
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  backdrop-filter: blur(12px);
`;

export const MonthArrowButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: transparent;
  color: var(--text-secondary);
  transition: all 0.2s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.12);
    color: var(--primary);
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const StyledMonthPickerText = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  min-width: 140px;
  text-align: center;
`;

export const CurrentMonthBadge = styled.button`
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.25rem 0.6rem;
  border-radius: 999px;
  background: rgba(212, 175, 55, 0.15);
  color: var(--primary);
  border: 1px solid rgba(212, 175, 55, 0.3);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(212, 175, 55, 0.25);
  }
`;

export const TopActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const PrimaryActionBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.25rem;
  background: var(--gold-btn-gradient);
  color: #160408;
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  border-radius: 999px;
  box-shadow: 0 4px 16px rgba(212, 175, 55, 0.35);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 22px rgba(212, 175, 55, 0.5);
  }
`;

export const HeroSummaryCard = styled.div`
  background: radial-gradient(circle at 100% 0%, rgba(185, 28, 28, 0.32) 0%, rgba(30, 9, 16, 0.88) 55%);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 24px;
  padding: 1.75rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.4), 0 0 30px rgba(185, 28, 28, 0.12);

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 2.5rem;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const HeroSubtitle = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-tertiary);
`;

export const HeroAmount = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);

  @media (min-width: 768px) {
    font-size: 2.75rem;
  }
`;

export const HeroStatsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const StatLabel = styled.span`
  font-size: 0.75rem;
  color: var(--text-tertiary);
`;

export const StatValue = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: ${(props) => props.color || "var(--text-primary)"};
`;

export const MainSplitGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 1024px) {
    grid-template-columns: 1.1fr 1fr;
    gap: 2.5rem;
    align-items: start;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
`;

export const SectionTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const CategoriesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ChartCard = styled.div`
  background: rgba(28, 9, 15, 0.78);
  border: 1px solid rgba(212, 175, 55, 0.14);
  border-radius: 20px;
  padding: 1.5rem;
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
`;

export const RightSplitPanel = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    position: sticky;
    top: 2rem;
    background: rgba(28, 9, 15, 0.85);
    border: 1px solid rgba(212, 175, 55, 0.16);
    border-radius: 24px;
    padding: 1.75rem;
    backdrop-filter: blur(14px);
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
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

  svg {
    width: 48px;
    height: 48px;
    color: var(--text-tertiary);
    opacity: 0.5;
  }

  h4 {
    font-size: 1.1rem;
    color: var(--text-secondary);
  }

  p {
    font-size: 0.85rem;
    max-width: 280px;
  }
`;

export const SplitDetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.12);
`;

export const SplitDetailTitleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const SplitDetailTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
`;

export const SplitDetailTotal = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--primary);
`;

export const SplitTransactionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;
