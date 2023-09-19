import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { server } from "../../../mocks/server.js";
import { BudgetPage } from "../BudgetPage.js";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Add expense correctly", async () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <BudgetPage />
    </MemoryRouter>
  );
  const user = userEvent.setup();

  const addExpenseButton = screen.getByRole("button", {
    name: /Adicionar gasto/i,
  });

  await user.click(addExpenseButton);

  const nameInput = screen.getByPlaceholderText(/nome da despesa/i);
  const spentInput = screen.getByPlaceholderText(/quanto você já gastou/i);
  const toSpendInput = screen.getByPlaceholderText(/valor total/i);

  const confirmAddExpenseButton = screen.getByRole("button", {
    name: /adicionar no orçamento/i,
  });

  await act(async () => {
    await user.type(nameInput, "Teste AddExpense");
    await user.type(spentInput, "1400");
    await user.type(toSpendInput, "20000");
    user.click(confirmAddExpenseButton);
  });

  const newExpense = await screen.findByText(/Teste AddExpense/i);
  expect(newExpense).toBeInTheDocument();
});
