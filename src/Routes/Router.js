import { Route, Routes } from "react-router-dom";
import { SignUpPage } from "../Pages/SignUpPage/SignUpPage.js";
import { LoginPage } from "../Pages/LoginPage/LoginPage.js";
import { ExpensesPage } from "../Pages/ExpensesPage/ExpensesPage.js";
import { TransactionsPerCategoryPage } from "../Pages/TransactionsPerCategoryPage/TransactionsPerCategoryPage.js";
import { AccountsPage } from "../Pages/SummaryPage/AccountsPage.js";

export const Router = () => {
  return (
    <Routes>
      <Route index element={<ExpensesPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="accounts" element={<AccountsPage />} />
      <Route path="expenses" element={<ExpensesPage />} />
      <Route
        path="expenses/:category"
        element={<TransactionsPerCategoryPage />}
      />
    </Routes>
  );
};
