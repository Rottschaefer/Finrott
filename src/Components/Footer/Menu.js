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

  console.log(location);

  const handleOnClick = (option) => {
    setIsMenuOpen(!isMenuOpen);

    if (option.text === "Sair da Conta") {
      localStorage.clear();
    }
    goToPage(navigate, option.url);
  };

  const options2 = [
    { text: "Início", url: "/summary" },
    { text: "Conectar Conta", url: "/add-account" },
    { text: "Sair da Conta", url: "/login" },
    { text: "Despesas", url: "/expenses" },
  ];

  return (
    <>
      {location.pathname !== "/signup" &&
        location.pathname !== "/login" &&
        location.pathname !== "/" && (
          <StyledMenu isMenuOpen={isMenuOpen}>
            <StyledArrow onClick={handleOnClick} isMenuOpen={isMenuOpen} />
            {isMenuOpen &&
              options2.map((option) => {
                return (
                  <>
                    <StyledOptions onClick={() => handleOnClick(option)}>
                      {option.text}
                    </StyledOptions>
                    <StyledSeparator />
                  </>
                );
              })}
          </StyledMenu>
        )}
    </>
  );
};
