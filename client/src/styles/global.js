import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    padding: 0 5px;
    background: #F0F2F5 ;
    -webkit-font-smoothing: antialiased;
    overflow-y: hidden;
  overflow-x: hidden;
    
  }
  body, input, button {
    font: 16px "Calibri", sans-serif;
  }
  button {
    cursor: pointer;
  }
`;
