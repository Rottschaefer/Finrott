import styled from "styled-components";

export const NavContainer = styled.nav`
  position: fixed;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  display: flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 0.4rem 0.6rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 210, 180, 0.08);
  transition: all 0.25s ease;

  @media (max-width: 480px) {
    bottom: 0.75rem;
    width: calc(100% - 2rem);
    justify-content: space-around;
  }
`;

export const NavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  background: ${(props) =>
    props.isActive ? "rgba(0, 210, 180, 0.15)" : "transparent"};
  border: 1px solid
    ${(props) =>
      props.isActive ? "rgba(0, 210, 180, 0.35)" : "transparent"};
  color: ${(props) =>
    props.isActive ? "var(--primary)" : "var(--text-secondary)"};
  font-family: 'Outfit', sans-serif;
  font-size: 0.85rem;
  font-weight: ${(props) => (props.isActive ? 700 : 500)};
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;

  &:hover {
    color: var(--text-primary);
    background: ${(props) =>
      props.isActive ? "rgba(0, 210, 180, 0.2)" : "rgba(255, 255, 255, 0.06)"};
  }

  svg {
    width: 15px;
    height: 15px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.8rem;
  }
`;
