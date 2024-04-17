import styled from "styled-components";

export const StyledCategoryCard = styled.div`
  color: white;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  min-height: 10vh;
  height: 10vh;
  width: 80vw;
  border-radius: 20px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
`;

export const StyledImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(129, 178, 202, 0.14);
  border-radius: 18px;
  height: 80%;
  width: 20%;
  margin-left: 8px;
`;

export const StyledSvg = styled.svg`
  color: green;
  width: 100%;
  height: 100%;
`;

export const StyledExpensesInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  border-radius: 18px;
  height: 80%;
  width: 72%;
  margin-left: 6.5px;
`;

export const StyledExpensesInfo = styled.p`
  margin-right: 13px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 0.9rem;
  line-height: 22px;
`;
