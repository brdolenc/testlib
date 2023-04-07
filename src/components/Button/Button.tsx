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
  fill = 'primary',
  size = 'md',
  icon,
  text,
  onClick,
}) => {
  const ButtonVariant = ButtonVariants[variant];
  return (
    <ButtonVariant fill={fill} size={size} onClick={onClick}>
      {icon && icon}
      9 {' '}
      {text}
    </ButtonVariant>
  );
};

export default Button;
