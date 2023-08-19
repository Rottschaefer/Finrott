import { Footer, Menu } from "../../Components/Footer/Menu";
import {
  CashVisionCard,
  CashVisionSection,
} from "../../Components/Cards/CashVisionCard/CashVisionCard";
import { PatrimonyCard } from "../../Components/Cards/PatrimonyCard/PatrimonyCard";
import { Header } from "../../Components/Header/Header";
import {
  StyledCard,
  StyledCardBalance,
  StyledCardBudget,
  StyledCardBudgetText,
  StyledCardBudgetText1,
  StyledCardBudgetText2,
  StyledCardBudgetText3,
  StyledCardCash,
  StyledCardCashText1,
  StyledCardCashText2,
  StyledCardCashTitle,
  StyledCardText,
  StyledDivCardsCash,
  StyledDivCash,
  StyledHomePage,
  StyledTextDiv,
} from "./StyledHomePage";

export const HomePage = () => {
  return (
    <>
      <Header />
      <StyledHomePage>
        <PatrimonyCard />
        <StyledCardBudget>
          <StyledTextDiv>
            <StyledCardBudgetText1>Orçamento para Junho</StyledCardBudgetText1>
            <StyledCardBudgetText2>Caixa Disponível</StyledCardBudgetText2>
          </StyledTextDiv>
          <StyledCardBudgetText3>R$2300</StyledCardBudgetText3>
        </StyledCardBudget>
        <CashVisionSection />
        <Menu />
      </StyledHomePage>
    </>
  );
};
