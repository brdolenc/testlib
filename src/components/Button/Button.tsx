import React, { FC } from 'react';

import { ButtonGhost, ButtonOutlined, ButtonContained } from './Button.style';
import { ButtonProps } from './Button.types';

const ButtonVariants = {
  contained: ButtonContained,
  ghost: ButtonGhost,
  outlined: ButtonOutlined,
};

console.log('error');

const Button: FC<ButtonProps> = ({
  variant = 'contained',
  fill = 'secondary',
  size = 'md',
  icon,
  text,
  onClick,
}) => {
  const ButtonVariant = ButtonVariants[variant];
  return (
    <ButtonVariant fill={fill} size={size} onClick={onClick}>
      {icon && icon}
      {' '}
      {text}
    </ButtonVariant>
  );
};

export default Button;
