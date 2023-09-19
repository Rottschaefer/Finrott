import { render, screen, within } from "@testing-library/react";
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

  const expenseToDelete = await screen.findByText(/Mobilidade/i);

  const deleteExpenseButton = within(expenseToDelete).screen.getByRole(
    "button",
    { name: /delete/i }
  );

  await user.click(deleteExpenseButton);

  const confirmDeleteExpenseButton = screen.getByRole("button", {
    name: /deseja deletar a despesa/i,
  });

  await user.click(confirmDeleteExpenseButton);
  expect(expenseToDelete).not.toBeInTheDocument();
});
