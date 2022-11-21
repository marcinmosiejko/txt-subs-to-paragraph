import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html {
     box-sizing: border-box;
     font-size: 62.5%;
     line-height: 1;
}

*, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
}

body {
    font-family: 'Montserrat', sans-serif;
    height: 100vh;
    width: 100%;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.background};
}

a, button {
    font-family: 'Montserrat', sans-serif;
}

`;
