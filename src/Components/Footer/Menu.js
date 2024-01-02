import { useState } from "react";
import {
  StyledArrow,
  StyledMenu,
  StyledOptions,
  StyledSeparator,
} from "./StyledMenu";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../Routes/Coordinator";

export const Menu = () => {
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOnClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const options2 = [
    { text: "Início", url: "/summary" },
    { text: "Conectar Conta", url: "/add-account" },
  ];

  const options = ["Adicionar Conta", "Sair", "OtherOption", "Orçamento"];
  return (
    <StyledMenu isMenuOpen={isMenuOpen}>
      <StyledArrow onClick={handleOnClick} isMenuOpen={isMenuOpen} />
      {isMenuOpen &&
        options2.map((option) => {
          return (
            <>
              <StyledOptions
                onClick={() => {
                  goToPage(navigate, option.url);
                  handleOnClick();
                }}
              >
                {option.text}
              </StyledOptions>
              <StyledSeparator />
            </>
          );
        })}
    </StyledMenu>
  );
};
