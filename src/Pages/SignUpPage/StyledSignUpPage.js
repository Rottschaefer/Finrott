import styled from "styled-components";

export const StyledSignUpPage = styled.main`
  display: flex;
  justify-content: CENTER;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  height: 100vh;
  opacity: ${(props) => (props.fade ? "1" : "0")};

  transition: all 1s;
`;

export const StyledTitle = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 33px;
  line-height: 43px;
  width: 78vw;
  max-width: 480px;
  /* max-width: 400px; */
  margin-top: 29px;

  color: #373737;
`;

export const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledSignUpInput = styled.input`
  border: 1px solid #d5d8de;
  border-radius: 4px;
  width: 78vw;
  max-width: 363px;
  height: 60px;
  display: flex;
  flex-direction: column;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #323941;
  padding-left: 16px;
`;

export const StyledWarning = styled.p`
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  width: 78vw;
  max-width: 363px;
  color: red;
  margin-bottom: ${(props) => (props.margin ? props.margin : "17px")};
`;

export const StyledHiddenCheckBox = styled.input`
  background-color: white;
`;

export const StyledCheckBox = styled.input`
  width: 16px;
  height: 16px;
  border: 1px solid #c4c4c4;
  border-radius: 2px;
  margin-right: 8px;
`;

export const StyledHighlightText = styled.span`
  color: #4088cb;
`;

export const StyledLabel = styled.p`
  width: 72vw;
  max-width: 373px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
`;

export const StyledCheckConteiner = styled.div`
  width: 78vw;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
`;

export const StyledContinueButton = styled.button`
  cursor: pointer;
  width: 78vw;
  max-width: 365px;
  height: 51px;
  border-radius: 20px;
  border: none;
  /* background-image: linear-gradient(to right, #ff6489, #f9b24e); */
  background-color: black;
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  color: white;
  margin-top: 28px;
  margin-bottom: 28px;

  opacity: ${(props) => (props.isLoading ? "0.5" : "1")};

  transition: all 1s;
`;
