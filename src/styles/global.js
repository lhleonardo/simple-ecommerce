import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    background: #191919f0;
    -webkit-font-smoothing: antialiased;
  }


  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  div#root {
    max-width: 70vw;
    margin: 0 auto;
    
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }

`;

export default GlobalStyle;
