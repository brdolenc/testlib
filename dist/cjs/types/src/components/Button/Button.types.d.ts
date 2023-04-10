import { MouseEventHandler, ReactNode } from 'react';
export interface ButtonProps {
    variant?: 'contained' | 'outlined' | 'ghost';
    fill?: 'primary' | 'secondary';
    size?: 'sm' | 'md' | 'lg';
    icon?: ReactNode | boolean;
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
