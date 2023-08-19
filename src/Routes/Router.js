import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages/HomePage/HomePage";
import { BudgetPage } from "../Pages/BudgetPage/BudgetPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="budget" element={<BudgetPage />} />
        <Route path="signup" element={<p>Signup</p>} />
      </Routes>
    </BrowserRouter>
  );
};
