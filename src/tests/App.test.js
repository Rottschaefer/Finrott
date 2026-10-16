import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import App from "../App";

describe("App Router Integration", () => {
  it("renders LoginPage when navigating to /login", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Faça login para controlar suas finanças")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument();
  });

  it("renders SignUpPage when navigating to /signup", () => {
    render(
      <MemoryRouter initialEntries={["/signup"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Crie sua conta e assuma o controle do seu dinheiro")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/nome ou apelido/i)).toBeInTheDocument();
  });

  it("renders bottom navigation Menu on protected routes", () => {
    localStorage.setItem("token", JSON.stringify("fake-token"));

    render(
      <MemoryRouter initialEntries={["/accounts"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText("Despesas")).toBeInTheDocument();
    expect(screen.getByText("Contas")).toBeInTheDocument();
    expect(screen.getByText("Sair")).toBeInTheDocument();
  });
});
