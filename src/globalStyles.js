import { createGlobalStyle } from "styled-components";
import backgroundImage from "./Assets/background_compressed.jpeg";

const GlobalStyle = createGlobalStyle`
body {
  background-color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-size: 62.5%;
    background-size: 120%;
    /* background-image:url(${backgroundImage}); */


  }
`;

export default GlobalStyle;
