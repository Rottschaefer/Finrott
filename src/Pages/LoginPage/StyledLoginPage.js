import styled from "styled-components";

const color = "#5e2129";

export const StyledLoginPage = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  opacity: ${(props) => (props.fade ? "1" : "0")};
  transition: all 1s;
`;

export const StyledTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  font-family: "IBM Plex Sans", sans-serif;
  color: #373737;
  line-height: 47px;
  margin: 10px;
`;

export const StyledSubTitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  font-family: "IBM Plex Sans", sans-serif;
  color: #000000;
  line-height: 21px;
  margin: 0px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 107px;
`;

export const StyledInput = styled.input`
  width: 78vw;
  max-width: 363px;
  height: 60px;
  font-family: "Noto Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border: 1px #d5d8de solid;
  border-radius: 4px;
  padding-left: 16px;
`;

export const StyledContinueButton = styled.button`
  cursor: pointer;
  width: 78vw;
  max-width: 365px;
  height: 51px;
  border-radius: 27px;
  border: none;
  background-color: ${color};
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  color: white;
  margin-top: 56px;
  opacity: ${(props) => (props.isLoading ? "0.5" : "1")};

  transition: all 1s;
`;

export const StyledSignUpButton = styled.button`
  cursor: pointer;
  width: 78vw;
  max-width: 365px;
  height: 51px;
  border-radius: 27px;
  border: 1px solid ${color};
  background-color: white;
  font-family: "Noto Sans", sans-serif;
  font-size: 18px;
  line-height: 25px;
  font-weight: 700;
  color: ${color};
  margin-top: 18px;
`;

export const StyledDiv = styled.div`
  background-color: ${color};
  width: 78vw;
  max-width: 363px;
  height: 1px;
  margin-top: 18px;
`;

export const StyledErrorMessage = styled.p`
  text-align: center;
  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;

  width: 78vw;
  max-width: 363px;
  color: red;
  margin-bottom: -40px;
`;
