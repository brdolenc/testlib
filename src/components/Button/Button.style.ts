import styled, { css } from 'styled-components';

interface ButtonProps {
  fill: 'primary' | 'secondary' | 'error';
  size: 'sm' | 'md' | 'lg';
}

export const Button = styled.button<ButtonProps>`
    ${({ theme, size }) => css`
            display: flex;
            gap: 10px;
            justify-content: space-between;
            align-items: center;
            padding-left: ${theme.paddings.left[size]};
            padding-right: ${theme.paddings.right[size]};
            padding-top: ${theme.paddings.top[size]};
            padding-bottom: ${theme.paddings.bottom[size]};
            border-radius: ${theme.border.radius[size]};
            cursor: pointer;
        `
}
`;

export const ButtonGhost = styled(Button)`
    ${({ theme, fill }) => css`
            color: ${theme.brand[fill]};
            border: 1px solid transparent;
            background-color: transparent;
        `
}
`;

export const ButtonOutlined = styled(Button)`
    ${({ theme, fill }) => css`
            color: ${theme.brand[fill]};
            border: ${theme.border.weight.sm} solid ${theme.brand[fill]};
            background-color: transparent;
        `
}
`;

export const ButtonContained = styled(Button)`
    ${({ theme, fill }) => css`
            color: ${theme.colors.white};
            border: ${theme.border.weight.sm} solid ${theme.brand[fill]};
            background-color: ${theme.brand[fill]};
        `
}
`;
