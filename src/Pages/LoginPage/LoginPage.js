import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logIn, logInWithToken } from "../../Requests/userRequests.js";
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
import {
  goToPage,
  goToSignUpPage,
  goToSummaryPage,
} from "../../Routes/Coordinator.js";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);
  //Fade-in quando trocar pra esta página

  //Controle de inputs abaixo
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
        const config = {
          headers: {
            Authorization: token,
          },
        };
        payload = await logInWithToken(config);

        goToPage(navigate, "/expenses");
      } else {
        if (!password || !email) {
          setBadRequest(true);
          setErrorMessage(
            "É preciso preencher todos os campos para se cadastrar"
          );
        } else {
          setBadRequest(false);
          setIsLoading(true);
          const body = { auth: { email, password } };

          await logIn(body);

          goToPage(navigate, "/expenses");
        }
      }
    } catch (error) {
      setIsLoading(false);

      setBadRequest(true);
      setErrorMessage(error.message);
    }
  };

  return (
    <StyledLoginPage fade={fade}>
      <StyledTitle>Finrott_</StyledTitle>
      <StyledSubTitle>Faça login e controle suas finanças</StyledSubTitle>

      <StyledForm>
        <StyledInput
          onChange={handleEmail}
          type="email"
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
      {badRequest && (
        <StyledErrorMessage margin="-10px">{errorMessage}</StyledErrorMessage>
      )}
      <StyledContinueButton
        onClick={handleLogIn}
        onTouchStart={handleLogIn}
        isLoading={isLoading}
      >
        {isLoading ? "Só um instante" : "Entrar"}
      </StyledContinueButton>
      {/* <StyledDiv /> */}
      <StyledSignUpButton onClick={() => goToSignUpPage(navigate)}>
        Crie uma conta!
      </StyledSignUpButton>
    </StyledLoginPage>
  );
};
