import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1.5rem;
  opacity: ${(props) => (props.fade ? "1" : "0")};
  transition: opacity 0.4s ease;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 420px;
  background: rgba(28, 9, 15, 0.88);
  border: 1px solid rgba(212, 175, 55, 0.18);
  border-radius: 24px;
  padding: 2.5rem 2rem;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 35px rgba(185, 28, 28, 0.15);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  background: linear-gradient(135deg, #FFF8F6 30%, #F5D38C 70%, #D4AF37 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

export const StyledSubTitle = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 2rem;
  line-height: 1.4;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 12px;
  padding: 0 1.15rem;
  font-size: 0.95rem;
  color: var(--text-primary);
  transition: all 0.2s ease;

  &:focus {
    border-color: var(--primary);
    box-shadow: 0 0 14px rgba(212, 175, 55, 0.3);
    background: rgba(255, 255, 255, 0.08);
  }

  &::placeholder {
    color: var(--text-tertiary);
  }
`;

export const StyledContinueButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, #ECC472, #C59828);
  color: #160408;
  font-family: 'Outfit', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  box-shadow: 0 4px 20px rgba(212, 175, 55, 0.35);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${(props) => (props.isLoading ? "0.6" : "1")};
  pointer-events: ${(props) => (props.isLoading ? "none" : "auto")};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(212, 175, 55, 0.5);
  }
`;

export const StyledSignUpButton = styled.button`
  cursor: pointer;
  background: transparent;
  color: var(--text-secondary);
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 1.25rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--primary);
  }
`;

export const StyledDiv = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(212, 175, 55, 0.12);
  margin-top: 1.25rem;
`;

export const StyledErrorMessage = styled.div`
  width: 100%;
  background: rgba(225, 29, 72, 0.14);
  border: 1px solid rgba(225, 29, 72, 0.3);
  color: #FB7185;
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.6rem 0.75rem;
  border-radius: 10px;
  margin-top: 1rem;
  text-align: center;
`;
