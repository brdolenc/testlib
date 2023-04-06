import React, { MouseEventHandler, FC } from 'react';

interface ButtonProps {
    type: 'primary' | 'secondary' | 'error';
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps>;

interface FlexoThemeProviderProps {
    theme?: object | boolean;
    children: React.ReactNode;
}
declare const FlexoThemeProvider: FC<FlexoThemeProviderProps>;

export { Button, FlexoThemeProvider };
