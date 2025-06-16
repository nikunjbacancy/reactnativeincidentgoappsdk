/**
 *
 * ThemeProvider
 *
 * This component provide the styled-component theme
 *
 */

// import { theme } from '../../../assets';
import theme from '../../../assets/theme'
// import { theme } from 'assets';
import React, { Children, FC } from 'react';
import { ThemeProvider as StyledThemeProvider } from '../../../utils/styled';

const ThemeProvider: FC = ({ children }) => (
  <StyledThemeProvider theme={theme}>
    {Children.only(children)}
  </StyledThemeProvider>
);

export { ThemeProvider };
