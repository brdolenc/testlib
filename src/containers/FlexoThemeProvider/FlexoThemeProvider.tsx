import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import tokens from '../../theme/tokens';

export interface FlexoThemeProviderProps {
  theme?: object | boolean;
  children: React.ReactNode;
}

const FlexoThemeProvider: FC<FlexoThemeProviderProps> = ({ children, theme }) => {
  if (!theme) {
    return <ThemeProvider theme={tokens}>{children}</ThemeProvider>;
  }

  return (
    <ThemeProvider theme={tokens}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeProvider>
  );
};

FlexoThemeProvider.defaultProps = {
  theme: false,
};

export default FlexoThemeProvider;
