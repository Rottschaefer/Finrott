import { StyledLoading, StyledLoadingConteiner } from "./StyledLoading";

export const Loading = ({ svgSize, conteinerSize }) => {
  return (
    <StyledLoadingConteiner conteinerSize={conteinerSize}>
      <StyledLoading svgSize={svgSize} />
    </StyledLoadingConteiner>
  );
};
