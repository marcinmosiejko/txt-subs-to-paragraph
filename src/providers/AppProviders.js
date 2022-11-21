import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { DataProvider } from 'hooks/useData';
import { theme } from 'assets/styles/theme';

const AppProviders = ({ children }) => {
  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <DataProvider>
            <GlobalStyle />
            {children}
          </DataProvider>
        </ThemeProvider>
      </Router>
    </>
  );
};

export default AppProviders;
