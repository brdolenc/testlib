import React, { FC } from 'react';

import { ButtonCp } from './Button.style';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ type, text, onClick }) => (
  <ButtonCp type="button" className={`Button Button-${type}`} onClick={onClick}>
    {text}
  </ButtonCp>

);

export default Button;
