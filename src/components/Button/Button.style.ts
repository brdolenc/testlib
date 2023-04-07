import styled, { css } from 'styled-components';

export const Button = styled.button`
    ${() => css`
            display: flex;
            gap: 10px;
            justify-content: space-between;
            align-items: center;
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
            border-radius: 10px;
            cursor: pointer;
        `
}
`;

export const ButtonGhost = styled(Button)`
    ${() => css`
            color: #000;
        `
}
`;

export const ButtonOutlined = styled(Button)`
    ${() => css`
            color: #000;
        `
}
`;

export const ButtonContained = styled(Button)`
    ${() => css`
            color: #000;
        `
}
`;
