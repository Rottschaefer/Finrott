import { StyledArrow, StyledCardCash, StyledCardCashText1, StyledCardCashText2, StyledCardCashTitle, StyledDivCardsCash, StyledDivCash } from "./StyledCashVisionCard"
import { BsFillArrowUpCircleFill } from "react-icons/bs";

export const CashVisionSection = () => {
    return (
        <StyledDivCash>
            <StyledCardCashTitle>Cash</StyledCardCashTitle>
            <StyledDivCardsCash>
                <StyledCardCash>
                    <StyledArrow />
                    <div>
                    <StyledCardCashText1>
                        R$5000
                    </StyledCardCashText1>
                    <StyledCardCashText2>
                        Entradas
                    </StyledCardCashText2>
                    </div>
                </StyledCardCash>
                <StyledCardCash>
                    <StyledArrow rotate="180deg"/>
                    <div>
                    <StyledCardCashText1>
                        R$4000
                    </StyledCardCashText1>
                    <StyledCardCashText2>
                        Saídas
                    </StyledCardCashText2>
                    </div>
                </StyledCardCash>

            </StyledDivCardsCash>
        </StyledDivCash>
    )
}