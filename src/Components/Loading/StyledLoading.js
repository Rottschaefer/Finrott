import styled from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

export const StyledLoading = styled(AiOutlineLoading)`
  width: ${(props) => props.svgSize};
  height: ${(props) => props.svgSize};
  color: white;
  animation: rotate infinite 1s linear;
  @keyframes rotate {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 360deg;
    }
  }
`;

export const StyledLoadingConteiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${(props) => props.conteinerSize};
  opacity: ${(props) => (props.fadeIn ? 0 : 1)};
`;

export const StyledBoatImg = styled.img`
  position: fixed;
  bottom: 43%;
  left: -50px;
  right: 0;
  width: 50vw;
  height: auto;

  animation: navigateCombined 5s linear infinite;

  /* @keyframes navigateCombined {
    0% {
      transform: rotate(-10deg);
      bottom: 43%;
      left: -40vw;
    }
    10% {
      transform: rotate(-30deg);
      left: -30vw;
      bottom: 47%;
    }
    20% {
      transform: rotate(-25deg);
      bottom: 47%;

      left: -20vw;
    }
    30% {
      transform: rotate(10deg);
      left: 0vw;
      bottom: 45%;
    }
    40% {
      transform: rotate(-15deg);
      bottom: 47%;

      left: 10vw;
    }
    50% {
      transform: rotate(10deg);
      left: 30vw;
      bottom: 44%;
    }
    70% {
      transform: rotate(-30deg);
      left: 40vw;
      bottom: 45%;
    }

    100% {
      transform: rotate(10deg);
      left: 100vw;
    }
  } */

  @keyframes navigateCombined {
    0% {
      transform: rotate(-15deg);
      bottom: 47%;

      left: 10vw;
    }
    33% {
      transform: rotate(10deg);
      left: 30vw;
      bottom: 44%;
    }
    66% {
      transform: rotate(-30deg);
      left: 40vw;
      bottom: 45%;
    }

    100% {
      transform: rotate(10deg);
      left: 100vw;
    }
  }
`;

export const StyledSeaImg = styled.img`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  width: 190vw;
  height: 120vh;

  animation: vibrate 2s linear infinite;

  @keyframes vibrate {
    0% {
      left: 0vw;
    }

    50% {
      left: -5vw;
    }

    100% {
      left: 0vw;
    }
  }
`;
