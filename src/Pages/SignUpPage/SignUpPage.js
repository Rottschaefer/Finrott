import React, { useEffect, useState } from "react";
import {
  StyledSignUpPage,
  SignUpCard,
  StyledTitle,
  StyledSubTitle,
  StyledSignUpForm,
  StyledSignUpInput,
  StyledWarning,
  StyledContinueButton,
  StyledLoginButton,
} from "./StyledSignUpPage.js";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../Requests/userRequests.js";
import { goToLogInPage, goToPage } from "../../Routes/Coordinator.js";

export const SignUpPage = () => {
  const navigate = useNavigate();

  const [fade, setFade] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [badRequest, setBadRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setFade(true);
  }, []);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isFormValid = () => {
    if (!name || !password || !email) {
      setBadRequest(true);
      setErrorMessage("É preciso preencher todos os campos para se cadastrar.");
      return false;
    } else if (name.length < 2) {
      setBadRequest(true);
      setErrorMessage("O seu nome precisa ter no mínimo 2 caracteres.");
      return false;
    } else if (!emailRegex.test(email)) {
      setBadRequest(true);
      setErrorMessage("Formato de e-mail inválido.");
      return false;
    }
    return true;
  };

  const createNewUser = async () => {
    try {
      if (!isFormValid()) {
        return;
      }

      setBadRequest(false);
      setIsLoading(true);

      const body = { user: { name, password, email } };
      await signUp(body);

      goToPage(navigate, "/expenses");
    } catch (error) {
      setBadRequest(true);
      setIsLoading(false);
      setErrorMessage(error.message || "Erro ao realizar cadastro.");
    }
  };

  return (
    <StyledSignUpPage fade={fade}>
      <SignUpCard>
        <StyledTitle>Finrott_</StyledTitle>
        <StyledSubTitle>Crie sua conta e assuma o controle do seu dinheiro</StyledSubTitle>

        <StyledSignUpForm onSubmit={(e) => { e.preventDefault(); createNewUser(); }}>
          <StyledSignUpInput
            id="name"
            name="name"
            type="text"
            placeholder="Nome ou Apelido"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <StyledSignUpInput
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <StyledSignUpInput
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {badRequest && <StyledWarning>{errorMessage}</StyledWarning>}

          <StyledContinueButton
            type="submit"
            isLoading={isLoading}
          >
            {isLoading ? "Criando conta..." : "Criar Conta"}
          </StyledContinueButton>
        </StyledSignUpForm>

        <StyledLoginButton onClick={() => goToLogInPage(navigate)}>
          Já tem uma conta? Faça login!
        </StyledLoginButton>
      </SignUpCard>
    </StyledSignUpPage>
  );
};
