import styled from "styled-components";
import { BiSolidEdit } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

export const CardPerspective = styled.div`
  perspective: 1200px;
  width: 100%;
  height: 76px;
  cursor: pointer;
`;

export const StyledFlipInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform: ${(props) =>
    props.flipCard ? "rotateY(180deg)" : "rotateY(0deg)"};
  border-radius: 16px;
`;

export const SideBase = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  padding: 0.85rem 1.15rem;
  box-sizing: border-box;
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
`;

export const StyledFrontSide = styled(SideBase)`
  background: rgba(28, 9, 15, 0.78);
  border: 1px solid rgba(212, 175, 55, 0.12);
  justify-content: space-between;

  &:hover {
    border-color: rgba(212, 175, 55, 0.35);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  }
`;

export const StyledBackSide = styled(SideBase)`
  background: linear-gradient(135deg, rgba(50, 14, 25, 0.95), rgba(28, 9, 15, 0.95));
  border: 1px solid rgba(212, 175, 55, 0.35);
  transform: rotateY(180deg);
  justify-content: space-between;
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.18);
`;

export const FrontLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
  min-width: 0;
`;

export const IconBox = styled.div`
  width: 42px;
  height: 42px;
  min-width: 42px;
  border-radius: 12px;
  background: ${(props) => props.bg || "rgba(212, 175, 55, 0.12)"};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.color || "var(--primary)"};
  }
`;

export const DescriptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
`;

export const TransactionDesc = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TransactionMeta = styled.span`
  font-size: 0.75rem;
  color: var(--text-tertiary);
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const AmountText = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
  white-space: nowrap;
  margin-left: 0.75rem;
`;

export const BackInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
`;

export const BackDate = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
`;

export const BackCategory = styled.span`
  font-size: 0.75rem;
  color: var(--primary);
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ActionGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: ${(props) =>
    props.danger ? "rgba(225, 29, 72, 0.18)" : "rgba(212, 175, 55, 0.15)"};
  border: 1px solid
    ${(props) =>
      props.danger ? "rgba(225, 29, 72, 0.35)" : "rgba(212, 175, 55, 0.35)"};
  color: ${(props) => (props.danger ? "#FB7185" : "var(--primary)")};
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.06);
    background: ${(props) =>
      props.danger ? "rgba(225, 29, 72, 0.28)" : "rgba(212, 175, 55, 0.25)"};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const FlipHint = styled.span`
  font-size: 0.65rem;
  color: var(--text-tertiary);
  margin-right: 0.25rem;
`;
