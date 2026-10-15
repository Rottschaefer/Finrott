import styled from "styled-components";

export const StyledCategoryCard = styled.div`
  width: 100%;
  padding: 1rem 1.15rem;
  background: ${(props) =>
    props.isSelected
      ? "linear-gradient(135deg, rgba(22, 33, 54, 0.95), rgba(17, 24, 39, 0.9))"
      : "rgba(17, 24, 39, 0.7)"};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid
    ${(props) =>
      props.isSelected
        ? "var(--primary)"
        : "rgba(255, 255, 255, 0.07)"};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${(props) =>
    props.isSelected
      ? "0 0 20px rgba(0, 210, 180, 0.18)"
      : "0 4px 20px rgba(0, 0, 0, 0.25)"};
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    border-color: ${(props) =>
      props.isSelected ? "var(--primary)" : "rgba(0, 210, 180, 0.3)"};
    background: rgba(22, 32, 51, 0.85);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${(props) => props.accentColor || "var(--primary)"};
    opacity: ${(props) => (props.isSelected ? 1 : 0)};
    transition: opacity 0.2s ease;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  min-width: 0;
`;

export const StyledImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bg || "rgba(0, 210, 180, 0.12)"};
  border: 1px solid ${(props) => props.borderColor || "transparent"};
  border-radius: 12px;
  width: 44px;
  height: 44px;
  min-width: 44px;
  transition: all 0.2s ease;

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.iconColor || "var(--primary)"};
  }
`;

export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 0;
`;

export const CategoryTitle = styled.h4`
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CategorySubtitle = styled.span`
  font-size: 0.75rem;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  gap: 0.35rem;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  padding-left: 0.75rem;
`;

export const FormattedAmount = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`;

export const PercentageBadge = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${(props) => props.color || "var(--primary)"};
  background: rgba(255, 255, 255, 0.04);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
`;

export const ProgressBarWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(255, 255, 255, 0.04);
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  width: ${(props) => Math.min(props.percent, 100)}%;
  background: ${(props) => props.color || "var(--primary)"};
  box-shadow: 0 0 6px ${(props) => props.color || "var(--primary)"};
  transition: width 0.4s ease;
`;
