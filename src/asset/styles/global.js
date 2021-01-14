import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

    body {
        margin: 0;
        font-family: 'Josefin Sans', sans-serif;
        font-size: 18px;

      }
      
      
  `;