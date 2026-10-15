import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

export const StyledAddExpensePopUp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  position: relative;
`;

export const StyledCloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: -0.5rem;
  right: -0.25rem;
  height: 1.5rem;
  width: 1.5rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--text-primary);
    transform: scale(1.1);
  }
`;

export const StyledTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

export const StyledLabel = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-align: left;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 44px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 0 1rem;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 12px rgba(0, 210, 180, 0.2);
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  height: 44px;
  background: #1F2937;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 0 1rem;
  color: var(--text-primary);
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 12px rgba(0, 210, 180, 0.2);
  }

  option {
    background: #111827;
    color: #F8FAFC;
    padding: 0.5rem;
  }
`;

export const StyledAddButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 12px;
  background: linear-gradient(135deg, #00D2B4, #00A389);
  color: #0B0F17;
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(0, 210, 180, 0.25);
  opacity: ${(props) => (props.isLoading ? "0.6" : "1")};
  pointer-events: ${(props) => (props.isLoading ? "none" : "auto")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 210, 180, 0.35);
  }
`;

export const StyledDeleteButton = styled.button`
  width: 100%;
  height: 44px;
  border-radius: 12px;
  background: rgba(244, 63, 94, 0.12);
  border: 1px solid rgba(244, 63, 94, 0.3);
  color: #F43F5E;
  font-family: 'Outfit', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isLoading ? "0.6" : "1")};
  pointer-events: ${(props) => (props.isLoading ? "none" : "auto")};

  &:hover {
    background: rgba(244, 63, 94, 0.22);
    border-color: #F43F5E;
    transform: translateY(-2px);
  }
`;
