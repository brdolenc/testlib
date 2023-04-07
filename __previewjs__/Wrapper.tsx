import React from 'react';

import FlexoThemeProvider from '../src/containers/FlexoThemeProvider/FlexoThemeProvider';

export interface FlexoThemeProviderProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children } : FlexoThemeProviderProps) => (
  <FlexoThemeProvider>
    {children}
  </FlexoThemeProvider>
);
