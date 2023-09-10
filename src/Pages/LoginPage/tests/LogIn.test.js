import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../../../App.js";
import { server } from "../../../mocks/server.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Login flow", () => {
  test("Execute the login error flow correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    const loginButton = screen.getByRole("button", { name: /entrar/i });

    await act(async () => {
      await user.type(emailInput, "teste@gmail.com");
      await user.type(passwordInput, "12345678ebtebt"); //wrong password
      user.click(loginButton);
    });

    const errorText = await screen.findByText(/senha incorreta/i);
    expect(errorText).toBeInTheDocument();
  });

  test("Execute the login flow correctly", async () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <App />
      </MemoryRouter>
    );
    const user = userEvent.setup();

    const emailInput = screen.getByPlaceholderText(/e-mail/i);
    const passwordInput = screen.getByPlaceholderText(/senha/i);

    const loginButton = screen.getByRole("button", { name: /entrar/i });

    await act(async () => {
      await user.type(emailInput, "teste@gmail.com");
      await user.type(passwordInput, "123456");
      user.click(loginButton);
    });

    const budgetText = await screen.findByText(/Quanto posso gastar/i);
    expect(budgetText).toBeInTheDocument();
  });
});
