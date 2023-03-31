import { MouseEventHandler, FC } from 'react';

interface ButtonProps {
    type: 'primary' | 'secondary' | 'error';
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps>;

export { Button };
