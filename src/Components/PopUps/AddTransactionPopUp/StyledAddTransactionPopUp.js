import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const color = "#5e2129";

export const StyledAddExpensePopUp = styled.div`
  position: fixed;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 40vh;
  height: auto;
  width: 70vw;
  background-color: white;
  z-index: 1;
  border-radius: 10px;
  padding: 1rem;
  padding-bottom: 1.5rem;
`;

export const StyledCloseButton = styled(AiOutlineClose)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 1.5rem;
  width: 1.5rem;

  cursor: pointer;
`;

export const StyledTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
`;

export const StyledInput = styled.input`
  resize: none;
  width: 80%;
  height: 2rem;
  font-weight: 400;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;

  line-height: 100%;
  border: 1px #d5d8de solid;
  border-radius: 4px;
  padding-left: 16px;
  vertical-align: center;

  ::placeholder {
    font-size: 0.5;
    vertical-align: middle;
  }
`;

export const StyledAddButton = styled.button`
  cursor: pointer;
  width: 80%;
  height: 3rem;
  border-radius: 10px;
  border: none;
  background-color: black;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  opacity: ${(props) => (props.isLoading ? "0.5" : "1")};

  transition: all 1s;

  margin-top: 20px;
`;

export const StyledSelect = styled.select`
  background-color: black;
  color: white;
  width: 80%;
  height: 3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  border: 1px black solid;
  border-radius: 4px;
  text-align: center;
`;

export const StyledLabel = styled.label`
  width: 80%;
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  text-align: center;
`;
