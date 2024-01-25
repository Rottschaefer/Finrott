import styled from "styled-components";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

export const StyledExpensesPage = styled.div`
  padding-top: 7vh;
  min-height: 70vh;
  height: auto;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  overflow-y: scroll;
`;

export const StyledMonthPicker = styled.div`
  /* position: fixed;
  top: 10vh; */
  height: 5vh;
  width: 70vw;
  color: white;
  display: flex;
  /* gap: 1.5rem; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledArrowLeft = styled(FaArrowAltCircleLeft)`
  height: 2rem;
  width: auto;

  /* transition: all 1s; */
`;

export const StyledArrowRight = styled(FaArrowAltCircleRight)`
  height: 2rem;
  width: auto;

  /* transition: all 1s; */
`;

export const StyledMonthPickerText = styled.p`
  margin: 13px;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 0.9rem;
  line-height: 22px;
`;

export const StyledPlus = styled(FaPlusCircle)`
  height: 2rem;
  width: auto;
  color: white;

  /* transition: all 1s; */
`;

export const StyledPlusDiv = styled.div`
  height: 5vh;
  padding-bottom: 20vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTotalText = styled.p`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 550;
  font-size: 1.5rem;
  line-height: 22px;
  color: white;
`;
