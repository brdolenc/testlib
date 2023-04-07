import { MouseEventHandler, FC } from 'react';

interface ButtonProps {
    variant?: 'contained' | 'outlined' | 'ghost';
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps>;

export { Button };
