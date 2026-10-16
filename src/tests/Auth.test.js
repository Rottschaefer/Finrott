import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { LoginPage } from "../Pages/LoginPage/LoginPage";
import { SignUpPage } from "../Pages/SignUpPage/SignUpPage";

describe("Authentication Pages & Validations", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  describe("LoginPage", () => {
    it("renders email, password inputs, submit button and signup link", () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );

      expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /entrar/i })).toBeInTheDocument();
      expect(screen.getByText(/não tem uma conta\? crie uma agora!/i)).toBeInTheDocument();
    });

    it("displays error message when submitting empty fields", async () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: /entrar/i });
      fireEvent.click(submitButton);

      expect(
        await screen.findByText(/é preciso preencher todos os campos para fazer login/i)
      ).toBeInTheDocument();
    });

    it("allows typing email and password", () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      );

      const emailInput = screen.getByPlaceholderText(/e-mail/i);
      const passwordInput = screen.getByPlaceholderText(/senha/i);

      fireEvent.change(emailInput, { target: { value: "usuario@teste.com" } });
      fireEvent.change(passwordInput, { target: { value: "senha123" } });

      expect(emailInput.value).toBe("usuario@teste.com");
      expect(passwordInput.value).toBe("senha123");
    });
  });

  describe("SignUpPage", () => {
    it("renders name, email, password inputs and login link", () => {
      render(
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>
      );

      expect(screen.getByPlaceholderText(/nome ou apelido/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/senha/i)).toBeInTheDocument();
      expect(screen.getByRole("button", { name: /criar conta/i })).toBeInTheDocument();
      expect(screen.getByText(/já tem uma conta\? faça login!/i)).toBeInTheDocument();
    });

    it("validates empty fields on submission", async () => {
      render(
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>
      );

      const submitButton = screen.getByRole("button", { name: /criar conta/i });
      fireEvent.click(submitButton);

      expect(
        await screen.findByText(/é preciso preencher todos os campos para se cadastrar/i)
      ).toBeInTheDocument();
    });

    it("validates name minimum length of 2 characters", async () => {
      render(
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>
      );

      fireEvent.change(screen.getByPlaceholderText(/nome ou apelido/i), {
        target: { value: "A" },
      });
      fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
        target: { value: "teste@email.com" },
      });
      fireEvent.change(screen.getByPlaceholderText(/senha/i), {
        target: { value: "123456" },
      });

      fireEvent.click(screen.getByRole("button", { name: /criar conta/i }));

      expect(
        await screen.findByText(/o seu nome precisa ter no mínimo 2 caracteres/i)
      ).toBeInTheDocument();
    });

    it("validates invalid email format", async () => {
      render(
        <BrowserRouter>
          <SignUpPage />
        </BrowserRouter>
      );

      fireEvent.change(screen.getByPlaceholderText(/nome ou apelido/i), {
        target: { value: "Eduardo" },
      });
      fireEvent.change(screen.getByPlaceholderText(/e-mail/i), {
        target: { value: "email-invalido-sem-arroba" },
      });
      fireEvent.change(screen.getByPlaceholderText(/senha/i), {
        target: { value: "123456" },
      });

      const button = screen.getByRole("button", { name: /criar conta/i });
      fireEvent.submit(button.closest("form"));

      expect(
        await screen.findByText(/formato de e-mail inválido/i)
      ).toBeInTheDocument();
    });
  });
});
