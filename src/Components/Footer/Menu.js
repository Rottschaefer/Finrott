import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";
import { NavContainer, NavItem } from "./StyledMenu";
import { FaReceipt, FaBuildingColumns, FaArrowRightFromBracket } from "react-icons/fa6";

export const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide on login and signup
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const handleNavigation = (url) => {
    if (url === "/login") {
      localStorage.clear();
    }
    goToPage(navigate, url);
  };

  const isExpensesActive =
    location.pathname === "/" ||
    location.pathname === "/expenses" ||
    location.pathname.startsWith("/expenses/");

  const isAccountsActive = location.pathname === "/accounts";

  return (
    <NavContainer>
      <NavItem
        isActive={isExpensesActive}
        onClick={() => handleNavigation("/expenses")}
      >
        <FaReceipt />
        <span>Despesas</span>
      </NavItem>

      <NavItem
        isActive={isAccountsActive}
        onClick={() => handleNavigation("/accounts")}
      >
        <FaBuildingColumns />
        <span>Contas</span>
      </NavItem>

      <NavItem
        isActive={false}
        onClick={() => handleNavigation("/login")}
        title="Encerrar sessão"
      >
        <FaArrowRightFromBracket />
        <span>Sair</span>
      </NavItem>
    </NavContainer>
  );
};
