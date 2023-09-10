import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
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
    await user.type(nameInput, "Teste");
    await user.type(emailInput, "teste@gmail.com");
    await user.type(passwordInput, "123456");
    user.click(signUpButton);
  });

  const budgetText = await screen.findByText(/Quanto posso gastar:/i);
  expect(budgetText).toBeInTheDocument();
});
