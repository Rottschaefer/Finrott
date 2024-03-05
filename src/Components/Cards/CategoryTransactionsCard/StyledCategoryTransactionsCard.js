import styled from "styled-components";
import { BiSolidEdit } from "react-icons/bi";

export const StyledCategoryCard = styled.div`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  /* background-color: white; */
  height: 10vh;

  width: 80vw;
  border-radius: 20px;
  box-shadow: 0px 3px 8px 0px rgba(74, 85, 104, 0.07);
  transition: all 0.8s;
  /* transform-style: preserve-3d; */

  transform-style: ${(props) => (props.flipCard ? "preserve-3d" : "")};

  transform: ${(props) =>
    props.flipCard ? "rotateX(180deg)" : "rotateX(0deg)"};
`;

export const StyledSides = styled.div`
  backdrop-filter: blur(20.2px);
  -webkit-backdrop-filter: blur(20.2px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  border-radius: 20px;
`;

export const StyledFrontSide = styled(StyledSides)`
  opacity: ${(props) => (props.flipCard ? 0 : 1)};
  color: white;
  transition: all 1.5s;
`;

export const StyledBackSide = styled(StyledSides)`
  justify-content: space-between;
  opacity: ${(props) => (props.flipCard ? 1 : 0)};

  transition: all 1.5s;

  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  transform: rotateX(180deg);
`;
export const StyledBackSideInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;

  height: 80%;
  width: 50%;
  margin-left: 30px;
`;

export const StyledBackSideInfoText = styled.h2`
  width: auto;
  margin: 0px;
`;

export const StyledBackSideImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  height: 80%;
  width: 20%;
  margin-right: 10px;
`;

export const StyledEditImage = styled(BiSolidEdit)`
  width: 45%;
  height: 45%;
  color: black;
  opacity: 1;
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
`;
