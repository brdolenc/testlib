import { MouseEventHandler } from 'react';
export interface ButtonProps {
    variant?: 'contained' | 'outlined' | 'ghost';
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
