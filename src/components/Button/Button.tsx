import styled, { css } from 'styled-components';
import { flexCenter } from 'src/styles/mixins';

export type ButtonType = 'default' | 'yellow' | 'white';

const Button = styled.button<{buttonType: ButtonType}>`
    font-size: var(--fs-quote);
    font-weight: var(--fw-bold);
    font-family: var(--family-primary);

    width: fit-content;
    padding: var(--input-padding) 4.5rem;
    ${flexCenter};
    gap: 1rem;
    
    border-radius: var(--input-radius);
    border: none;
    background-color: var(--btn-color-back);
    color: var(--btn-color-text);
    cursor: pointer;

    ${({buttonType}) => handleButtonStyle(buttonType)};

    transition: var(--transition-primary);
    &:hover {
        background-color: var(--btn-color-text);
        color: var(--btn-color-back);
    }
`;

const handleButtonStyle = (type:ButtonType) => {
    switch(type){
        case 'white': return WhiteButton;
        case 'yellow': return YellowButton;
        default: return DefaultButton;
    }
}

const DefaultButton = css`
    --btn-color-back: var(--color-primary);
    --btn-color-text: white;
`;

const YellowButton = css`
    --btn-color-back: var(--color-accent);
    --btn-color-text: var(--color-primary);
`;

const WhiteButton = css`
    --btn-color-back: white;
    --btn-color-text: var(--color-primary);
    border: 1px solid var(--color-primary);
`;

export default Button;