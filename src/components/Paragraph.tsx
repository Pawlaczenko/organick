import React, { FC } from 'react'
import styled from 'styled-components'

interface IParagraphProps {
    textAlign?: 'center' | 'left' | 'right',
    children: React.ReactNode
}

const Paragraph : FC<IParagraphProps> = ({textAlign,children}) => {
    return (
        <StyledParagraph textAlign={textAlign}>
            {children}
        </StyledParagraph>
    )
}

export const StyledParagraph = styled.p<IParagraphProps>`
    font-size: var(--fs-paragraph);
    color: var(--color-grey);
    text-align: ${(props) => props.textAlign || "left"};
    margin: 1rem 0;
`;


export default Paragraph