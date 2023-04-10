import React, { FC } from 'react';
export interface FlexoThemeProviderProps {
    theme?: object | boolean;
    children: React.ReactNode;
}
declare const FlexoThemeProvider: FC<FlexoThemeProviderProps>;
export default FlexoThemeProvider;
