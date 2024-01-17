import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage.js";
import { BudgetPage } from "../Pages/BudgetPage/BudgetPage.js";
import { SignUpPage } from "../Pages/SignUpPage/SignUpPage.js";
import { LoginPage } from "../Pages/LoginPage/LoginPage.js";
import { PluggyPage } from "../Pages/PluggyPage/PluggyTestPage.js";
import { SummaryPage } from "../Pages/SummaryPage/SummaryPage.js";
import { ExpensesPage } from "../Pages/ExpensesPage/ExpensesPage.js";
import { TransactionsPerCategoryPage } from "../Pages/TransactionsPerCategoryPage/TransactionsPerCategoryPage.js";

export const Router = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route index element={<SignUpPage />} />
      {/* <Route path="budget/:id" element={<BudgetPage />} /> */}
      <Route path="signup" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="summary" element={<SummaryPage />} />
      <Route path="expenses" element={<ExpensesPage />} />
      <Route
        path="expenses/:category"
        element={<TransactionsPerCategoryPage />}
      />
      <Route path="add-account" element={<PluggyPage />} />
    </Routes>
    // </BrowserRouter>
  );
};
