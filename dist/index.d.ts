import React, { ReactNode, MouseEventHandler, FC } from 'react';

interface ButtonProps {
    variant?: 'contained' | 'outlined' | 'ghost';
    fill?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode | boolean;
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
