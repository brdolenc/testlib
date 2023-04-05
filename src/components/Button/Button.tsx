import React, { FC } from 'react';

import { ButtonStyle } from './Button.style';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps>  = ({ type, text, onClick }) => {
    return (
        <ButtonStyle type="button" className={type} onClick={onClick}>
            {text}
        </ButtonStyle>
    )
};

export default Button;