import styled from "styled-components";

export const StyledTransactionsPerCategoryPage = styled.div`
  padding-top: 7vh;
  height: 80vh;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: scroll;
  color: white;
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};

  transition: all 1s;
`;

export const BackButton = styled.button`
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  background-color: white;
  border: none;
  width: 30vw;
  height: 50px;
  border-radius: 10px;
  opacity: 0.8;
`;
