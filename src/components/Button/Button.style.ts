import styled, { css } from 'styled-components';

export const ButtonCp = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    border: ${theme.border.weight.sm} solid ${theme.brand.primary};
    background-color: ${theme.brand.primary};
  `}
`;
