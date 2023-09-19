import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../Requests/userRequests.js";
import {
  StyledContinueButton,
  StyledDiv,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledLoginPage,
  StyledSignUpButton,
  StyledSubTitle,
  StyledTitle,
} from "./StyledLoginPage.js";
import { goToBudgetPage, goToSignUpPage } from "../../Routes/Coordinator.js";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);
  //Fade-in quando trocar pra esta página

  //Controle de inputs abaixo
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const [badRequest, setBadRequest] = useState(false); //Estado que define se aparecerá uma mensagem de erro ou não
  const [errorMessage, setErrorMessage] = useState(""); //Mensagem de erro que irá aparecer
  const [isLoading, setIsLoading] = useState(false); //Estado que define a animação de carregando no botão

  const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
  const [loadingTimes, setLoadingTimes] = useState(0); //Estado para fazer com que a mensagem de erro não seja mostrada caso não tenha token no local storage

  useEffect(() => {
    setLoadingTimes(1);
    if (token) {
      handleLogIn();
    }
  }, []);

  const handleLogIn = async () => {
    try {
      let payload;
      if (token) {
        const body = { token };

        payload = await logIn(body);

        goToBudgetPage(navigate, payload.id);
      } else {
        if (!password || !email) {
          setBadRequest(true);
          setErrorMessage(
            "É preciso preencher todos os campos para se cadastrar"
          );
        } else {
          setBadRequest(false);
          setIsLoading(true);
          const body = { email, password, token };

          payload = await logIn(body);

          goToBudgetPage(navigate, payload.id);
        }
      }
    } catch (error) {
      setBadRequest(true);
      setErrorMessage(error.message);
    }
  };

  return (
    <StyledLoginPage fade={fade}>
      <StyledTitle>FinRott</StyledTitle>
      <StyledSubTitle>
        O projeto de controle das suas finanças :)
      </StyledSubTitle>

      <StyledForm>
        <StyledInput
          onChange={handleEmail}
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
        />
        <StyledInput
          onChange={handlePassword}
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
        />
      </StyledForm>
      {badRequest && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      <StyledContinueButton
        onClick={handleLogIn}
        onTouchStart={handleLogIn}
        isLoading={isLoading}
      >
        {isLoading ? "Só um instante" : "Entrar"}
      </StyledContinueButton>
      <StyledDiv />
      <StyledSignUpButton onClick={() => goToSignUpPage(navigate)}>
        Crie uma conta!
      </StyledSignUpButton>
    </StyledLoginPage>
  );
};
