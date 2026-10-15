import styled from "styled-components";

export const StyledAccountCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 170px;
  border-radius: 20px;
  padding: 1.5rem;
  background: ${(props) =>
    props.color
      ? `linear-gradient(135deg, #${props.color}dd, #${props.color}88), #111827`
      : "linear-gradient(135deg, #1E293B, #0F172A)"};
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4), 0 0 20px ${(props) => (props.color ? `#${props.color}33` : "transparent")};
  backdrop-filter: blur(12px);
  overflow: hidden;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    right: -20%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.12), transparent 70%);
    pointer-events: none;
  }
`;

export const CardTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCardTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -0.01em;
`;

export const CardBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const BalanceLabel = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
`;

export const StyledBalance = styled.span`
  font-family: 'Outfit', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #FFFFFF;
  letter-spacing: -0.01em;
`;
