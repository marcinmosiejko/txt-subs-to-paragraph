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
    width: 100%;
    height: 100vh;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.4rem;
    
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.background};

    overflow: auto;
}

a, button {
    font-family: 'Montserrat', sans-serif;
}

`;
