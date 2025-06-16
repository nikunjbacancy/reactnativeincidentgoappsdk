/**
 *
 * ThemeProvider
 *
 * This component provide the styled-component theme
 *
 */

// import { theme } from '../../../assets';
import theme from '../../../assets/theme';
// import { theme } from 'assets';
import React, { Children } from 'react';
import { ThemeProvider as StyledThemeProvider } from '../../../utils/styled';
const ThemeProvider = ({
  children
}) => /*#__PURE__*/React.createElement(StyledThemeProvider, {
  theme: theme
}, Children.only(children));
export { ThemeProvider };
//# sourceMappingURL=index.js.map