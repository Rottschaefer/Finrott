import styled from "styled-components";

export const StyledSignUpPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 1.5rem;
  opacity: ${(props) => (props.fade ? "1" : "0")};
  transition: opacity 0.4s ease;
`;

export const SignUpCard = styled.div`
  width: 100%;
  max-width: 440px;
  background: var(--bg-card);
  border: 3px solid var(--border-beige);
  outline: 3px solid #22050C;
  border-radius: 0px;
  padding: 2.5rem 2rem;
  box-shadow: 8px 8px 0px #22050C, var(--pixel-inset);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledTitle = styled.h1`
  font-family: var(--font-pixel-display);
  font-size: 1.85rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--border-beige);
  text-shadow: 3px 3px 0px #22050C;
  margin-bottom: 0.5rem;
`;

export const StyledSubTitle = styled.p`
  font-family: var(--font-pixel-mono);
  font-size: 0.85rem;
  color: var(--border-subtle);
  margin-bottom: 2rem;
  line-height: 1.4;
`;

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const StyledSignUpInput = styled.input`
  width: 100%;
  height: 48px;
  background: #22050C;
  border: 2px solid var(--border-subtle);
  border-radius: 0px;
  padding: 0 1rem;
  font-family: var(--font-pixel-mono);
  font-size: 0.9rem;
  color: var(--text-primary);
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus {
    border-color: var(--border-beige);
    outline: 2px solid var(--border-beige);
    background: #380916;
    box-shadow: 3px 3px 0px #22050C;
  }

  &::placeholder {
    color: var(--border-subtle);
    opacity: 0.7;
  }
`;

export const StyledWarning = styled.div`
  width: 100%;
  background: #9F1239;
  border: 2px solid #22050C;
  color: #FFF8E7;
  font-family: var(--font-pixel-mono);
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.6rem 0.75rem;
  border-radius: 0px;
  margin-top: 0.75rem;
  text-align: center;
  box-shadow: 3px 3px 0px #22050C;
`;

export const StyledContinueButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 48px;
  border-radius: 0px;
  background: var(--border-beige);
  border: 3px solid #22050C;
  outline: 2px solid var(--border-beige);
  color: #22050C;
  font-family: var(--font-pixel-display);
  font-size: 0.95rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1.5rem;
  box-shadow: 4px 4px 0px #22050C;
  transition: transform 0.1s, box-shadow 0.1s, background 0.1s;
  opacity: ${(props) => (props.isLoading ? "0.6" : "1")};
  pointer-events: ${(props) => (props.isLoading ? "none" : "auto")};

  &:hover {
    background: #FFF6D6;
  }

  &:active {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #22050C;
  }
`;

export const StyledLoginButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  border-radius: 0px;
  color: var(--border-subtle);
  font-family: var(--font-pixel-mono);
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 1.25rem;
  transition: color 0.15s ease;

  &:hover {
    color: var(--border-beige);
    text-decoration: underline;
  }
`;
