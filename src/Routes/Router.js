import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage.js";
import { BudgetPage } from "../Pages/BudgetPage/BudgetPage.js";
import { SignUpPage } from "../Pages/SignUpPage/SignUpPage.js";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<HomePage />} /> */}
        <Route path="budget" element={<BudgetPage />} />
        <Route path="signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
