import { useState } from "react";
import {
  StyledArrow,
  StyledMenu,
  StyledOptions,
  StyledSeparator,
} from "./StyledMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";

export const Menu = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  const handleOnClick = (option) => {
    setIsMenuOpen(!isMenuOpen);

    if (option.text === "Sair da Conta") {
      localStorage.clear();
    }

    goToPage(navigate, option.url);
  };

  const options2 = [
    { text: "Contas bancárias", url: "/accounts" },
    // { text: "Conectar Conta", url: "/add-account" },
    { text: "Transações por categoria", url: "/expenses" },
    { text: "Sair da Conta", url: "/login" },
  ];

  const MenuOptions = options2.map((option) => {
    return (
      <>
        <StyledOptions onClick={() => handleOnClick(option)}>
          {option.text}
        </StyledOptions>
        <StyledSeparator />
      </>
    );
  });

  return (
    <>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <StyledMenu isMenuOpen={isMenuOpen}>
          <StyledArrow onClick={handleOnClick} isMenuOpen={isMenuOpen} />
          {isMenuOpen && MenuOptions}
        </StyledMenu>
      )}
    </>
  );
};
