import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: rgb(25, 25, 32);
    background: linear-gradient(162deg, rgba(1,1,17,1) 10%, rgba(24,24,45,0.9864320728291317) 35%, rgba(5,5,14,0.98) 97%);

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  button {
    cursor: pointer;
  }
`;