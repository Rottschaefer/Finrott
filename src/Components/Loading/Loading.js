import {
  StyledBoatImg,
  StyledLoading,
  StyledLoadingConteiner,
  StyledSeaImg,
} from "./StyledLoading";
import boat from "../../Assets/sailBoat.png";
import sea from "../../Assets/sea.png";
import { useState } from "react";
import { useEffect } from "react";

export const Loading = ({ svgSize, conteinerSize, fadeIn }) => {
  // const [fadeIn, setFadeIn] = useState(false);

  // useEffect(() => {
  //   setTimeout(() => setFadeIn(true), 500);
  // }, []);

  return (
    <StyledLoadingConteiner fadeIn={fadeIn} conteinerSize={conteinerSize}>
      <StyledBoatImg src={boat} />
      <StyledSeaImg src={sea} />
      {/* <StyledLoading svgSize={svgSize} /> */}
    </StyledLoadingConteiner>
  );
};
