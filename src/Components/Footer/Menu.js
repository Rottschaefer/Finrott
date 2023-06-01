import { StyledCircle1, StyledCircle2, StyledCircleCenter, StyledDivCenter, StyledDivSides, StyledMenu } from "./StyledMenu"

export const Menu = () => {
    return (
        <StyledMenu>
            <StyledDivSides />
            <StyledCircle1 />
            <StyledDivCenter />
            <StyledCircleCenter/>
            <StyledCircle2 />
            <StyledDivSides />
        </StyledMenu>
    )
}