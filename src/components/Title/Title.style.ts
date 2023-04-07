import styled, { css } from 'styled-components';

export const TitleStyle = styled.h1`
    ${({ theme }) => css`
            color: ${theme.brand.secondary};
        `
}
`;
