import React, { FC } from 'react'
import styled from 'styled-components'

interface IInputProps {
    placeholder: string,
    type?: React.HTMLInputTypeAttribute,
    labelText?: string
}

const Input : FC<IInputProps> = (props) => {
    return (
        <StyledInputWrapper>
            {
                props.labelText && <StyledLabel>{props.labelText}</StyledLabel>
            }
            <StyledInput type={props.type || 'text'} placeholder={props.placeholder} />
        </StyledInputWrapper>
    )
}

const StyledInputWrapper = styled.label`

`;

const StyledLabel = styled.span`

`;

const StyledInput = styled.input`
    padding: var(--input-padding);
    width: 35rem;
    border-radius: var(--input-radius);

    background: white;
    border: none;
    color: var(--color-primary);
    font-size: var(--fs-paragraph);
    font-family: var(--family-primary);

    &::placeholder {
        color: #ABABAB;
        font-style: italic;
    }

    &:focus {
        outline: 2px solid var(--color-primary);
    }
`;


export default Input