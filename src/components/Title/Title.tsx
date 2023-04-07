import React, { FC } from 'react';

import { TitleStyle } from './Title.style';
import { TitleProps } from './Title.types';

const Title: FC<TitleProps> = ({
  text,
}) => (
  <TitleStyle>{text}</TitleStyle>
);

export default Title;
