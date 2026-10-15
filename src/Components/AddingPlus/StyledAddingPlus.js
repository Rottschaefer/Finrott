import styled from "styled-components";
import { FaPlus } from "react-icons/fa6";

export const StyledPlusDiv = styled.div`
  position: fixed;
  bottom: 2.25rem;
  right: 2.25rem;
  z-index: 90;

  @media (max-width: 640px) {
    bottom: 5.5rem;
    right: 1.25rem;
  }
`;

export const StyledPlusButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 1.4rem;
  background: linear-gradient(135deg, #ECC472, #C59828);
  color: #160408;
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  border: none;
  border-radius: 999px;
  box-shadow: 0 8px 25px rgba(212, 175, 55, 0.35);
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 12px 30px rgba(212, 175, 55, 0.55);
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;
