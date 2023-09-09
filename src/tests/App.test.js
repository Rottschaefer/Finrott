import { logRoles, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../App";
import { server } from "../mocks/server";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Execute the signup flow correctly", async () => {
  render(
    <MemoryRouter initialEntries={["/signup"]}>
      <App />
    </MemoryRouter>
  );
  const user = userEvent.setup();

  const nameInput = screen.getByPlaceholderText(/apelido/i);
  const emailInput = screen.getByPlaceholderText(/e-mail/i);
  const passwordInput = screen.getByPlaceholderText(/senha/i);

  const signUpButton = screen.getByRole("button");

  await act(async () => {
    await userEvent.type(nameInput, "Teste");
    await userEvent.type(emailInput, "teste@gmail.com");
    await userEvent.type(passwordInput, "123456");
    userEvent.click(signUpButton);
  });

  const budgetText = await screen.findByText(/Quanto posso gastar:/i);
  expect(budgetText).toBeInTheDocument();
});
