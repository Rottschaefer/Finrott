import styled from "styled-components";

export const StyledCategoryCard = styled.div`
  position: relative;
  color: black;
  display: flex;
  align-items: center;
  background-color: white;
  height: 10vh;

  width: 80vw;
  border-radius: 20px;
  box-shadow: 0px 3px 8px 0px rgba(74, 85, 104, 0.07);
  transition: transform 0.8s;
  transform-style: preserve-3d;

  transform: ${(props) =>
    props.flipCard ? "rotateX(180deg)" : "rotateX(0deg)"};
`;

export const StyledSides = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
`;

export const StyledFrontSide = styled(StyledSides)`
  color: black;
`;

export const StyledBackSide = styled(StyledSides)`
  background-color: dodgerblue;
  color: black;
  transform: rotateX(180deg);
`;

export const StyledImgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(129, 178, 202, 0.14);
  height: 10vh;
  border-radius: 18px;
  height: 80%;
  width: 20%;
  margin-left: 8px;
`;

export const StyledTransactionInfoDiv = styled.div`
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

export const StyledTransactionInfo = styled.p`
  margin: 8px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 0.9rem;
  line-height: 22px;
  color: black;
`;
