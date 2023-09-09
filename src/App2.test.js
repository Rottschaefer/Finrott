import { logRoles, render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "./App";

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

  // act(() => {
  //   user.type(nameInput, "Teste");
  //   user.type(emailInput, "teste4@gmail.com");
  //   user.type(passwordInput, "123456");

  //   signUpButton.click();
  // });

  // await user.type(nameInput, "Teste");
  // await user.type(emailInput, "teste4@gmail.com");
  // await user.type(passwordInput, "123456");

  // signUpButton.click();

  // logRoles(<App />);

  // act(() => {
  //   userEvent.type(nameInput, "Teste");
  //   userEvent.type(emailInput, "teste4@gmail.com");
  //   userEvent.type(passwordInput, "123456");
  //   userEvent.click(signUpButton);
  // });

  await act(async () => {
    await userEvent.type(nameInput, "Teste");
    await userEvent.type(emailInput, "teste@gmail.com");
    await userEvent.type(passwordInput, "123456");
    userEvent.click(signUpButton);
  });

  const budgetText = await screen.findByText(/Quanto posso gastar:/i);
  expect(budgetText).toBeInTheDocument();
});
