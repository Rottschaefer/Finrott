import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage.js";
import { BudgetPage } from "../Pages/BudgetPage/BudgetPage.js";
import { SignUpPage } from "../Pages/SignUpPage/SignUpPage.js";
import { LoginPage } from "../Pages/LoginPage/LoginPage.js";
import { PluggyTestPage } from "../Pages/PluggyTestPage/PluggyTestPage.js";
import { SummaryPage } from "../Pages/SummaryPage/SummaryPage.js";

export const Router = () => {
  return (
    // <BrowserRouter>
    <Routes>
      <Route index element={<PluggyTestPage />} />
      {/* <Route path="budget/:id" element={<BudgetPage />} /> */}
      <Route path="signup" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="summary" element={<SummaryPage />} />
    </Routes>
    // </BrowserRouter>
  );
};
