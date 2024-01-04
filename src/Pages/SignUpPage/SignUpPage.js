import { useEffect, useState } from "react";
import {
  StyledContinueButton,
  StyledLoginButton,
  StyledSignUpForm,
  StyledSignUpInput,
  StyledSignUpPage,
  StyledTitle,
  StyledWarning,
} from "./StyledSignUpPage.js";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Requests/userRequests.js";
import { goToLogInPage, goToSummaryPage } from "../../Routes/Coordinator.js";

export const SignUpPage = () => {
  const navigate = useNavigate();

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);
  //Fade-in quando trocar pra esta página

  const [isLoading, setIsLoading] = useState(false); //Estado que define a animação de carregando no botão

  const [badRequest, setBadRequest] = useState(false); //Estado que define se aparecerá uma mensagem de erro ou não
  const [errorMessage, setErrorMessage] = useState(""); //Mensagem de erro que irá aparecer

  //Controle dos inputs abaixo
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const createNewUser = async () => {
    try {
      if (!name || !password || !email) {
        setBadRequest(true);
        setErrorMessage(
          "É preciso preencher todos os campos para se cadastrar"
        );
      } else {
        setBadRequest(false);
        setIsLoading(true);
        const body = { user: { name, password, email } };

        await signUp(body);

        goToSummaryPage(navigate);
      }
    } catch (error) {
      setBadRequest(true);
      setIsLoading(false);

      setErrorMessage(error.message);
    }
  };

  return (
    <StyledSignUpPage fade={fade}>
      <StyledTitle>Olá, vamos fazer seu cadastro?</StyledTitle>
      <StyledSignUpForm>
        <StyledSignUpInput
          onChange={handleName}
          type="text"
          id="name"
          name="name"
          placeholder="Apelido"
        />
        <StyledSignUpInput
          onChange={handleEmail}
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
        />
        <StyledSignUpInput
          onChange={handlePassword}
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
        />
      </StyledSignUpForm>
      {badRequest && (
        <StyledWarning margin="-10px">{errorMessage}</StyledWarning>
      )}
      <StyledContinueButton onClick={createNewUser} isLoading={isLoading}>
        {isLoading ? "Só um instante..." : "Cadastrar"}
      </StyledContinueButton>
      <StyledLoginButton onClick={() => goToLogInPage(navigate)}>
        Já tenho uma conta :)
      </StyledLoginButton>
    </StyledSignUpPage>
  );
};
