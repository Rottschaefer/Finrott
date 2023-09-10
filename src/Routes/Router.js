import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage.js";
import { BudgetPage } from "../Pages/BudgetPage/BudgetPage.js";
import { SignUpPage } from "../Pages/SignUpPage/SignUpPage.js";
import { LoginPage } from "../Pages/LoginPage/LoginPage.js";

export const Router = () => {
  return (
    // <BrowserRouter>
    <Routes>
      {/* <Route index element={<HomePage />} /> */}
      <Route path="budget/:id" element={<BudgetPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
    // </BrowserRouter>
  );
};
