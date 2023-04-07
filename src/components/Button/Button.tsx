import React, { FC } from 'react';

import { ButtonGhost, ButtonOutlined, ButtonContained } from './Button.style';
import { ButtonProps } from './Button.types';

const ButtonVariants = {
  contained: ButtonContained,
  ghost: ButtonGhost,
  outlined: ButtonOutlined,
};

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  text,
  onClick,
}) => {
  const ButtonVariant = ButtonVariants[variant];
  return (
    <ButtonVariant onClick={onClick}>
      9 d {' '}
      {text}
    </ButtonVariant>
  );
};

export default Button;
