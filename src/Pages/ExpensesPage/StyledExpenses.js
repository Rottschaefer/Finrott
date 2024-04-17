import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const StyledExpensesPage = styled.div`
  opacity: ${(props) => (props.fadeIn ? 1 : 0)};
  padding-top: 7vh;
  height: 83vh;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: scroll;
  background-color: rgb(0, 204, 195, 0.05);
  transition: all 1s;
`;

export const StyledMonthPicker = styled.div`
  height: 5vh;
  width: 70vw;
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledArrowLeft = styled(FaArrowAltCircleLeft)`
  height: 2rem;
  width: auto;
`;

export const StyledArrowRight = styled(FaArrowAltCircleRight)`
  height: 2rem;
  width: auto;
`;

export const StyledMonthPickerText = styled.p`
  margin: 13px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 0.9rem;
  line-height: 22px;
`;

export const StyledTotalText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 1.5rem;
  line-height: 22px;
  text-align: center;
  color: white;
  width: 100%;
`;

export const StyledTotalTextDiv = styled.div`
  width: 58vw;
  background-color: black;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
`;
