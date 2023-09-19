import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const color = "#5e2129";

export const StyledDeleteExpensePopUp = styled.div`
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: auto;
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

export const StyledInput = styled.textarea`
  resize: none;
  width: 80%;
  height: auto;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  line-height: 22px;
  border: 1px #d5d8de solid;
  border-radius: 4px;
  padding-left: 16px;

  ::placeholder {
    font-size: 0.5;
    vertical-align: middle;
  }
`;

export const StyledDeleteButton = styled.button`
  cursor: pointer;
  width: 80%;
  height: 3rem;
  border-radius: 20px;
  border: none;
  background-color: ${color};
  font-family: "Noto Sans", sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: white;
  opacity: ${(props) => (props.isLoading ? "0.5" : "1")};

  transition: all 1s;
`;

export const StyledFadeforPopUp = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.6;
  height: 200vh;
  width: 100vw;
  z-index: 1;
`;
