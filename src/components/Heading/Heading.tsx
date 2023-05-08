import React from 'react'
import { FC } from 'react';
import styled from 'styled-components';

export enum HeadingLevel {
    h1="h1",
    h2="h2",
    h3="h3",
    h4="h4",
    h5="h5",
    h6="h6",
}

export type HeadingType = 'primary' | 'white';

interface IHeadingProps {
    level: HeadingLevel,
    children: React.ReactNode,
    upperText?: string,
    type?: HeadingType
    alignCenter?: boolean
}


const Heading : FC<IHeadingProps> = (props) => {
  const headingStyle = {"--heading-size": `var(--fs-${props.level})`} as React.CSSProperties;
  
  return (
    <StyledHeading type={props.type} as={props.level} style={headingStyle} alignCenter={props.alignCenter}>
        {props.upperText && <StyledUpperText type={props.type}>{props.upperText}</StyledUpperText>}
        {props.children}
    </StyledHeading>
  )
}

export const StyledHeading = styled.h1<{type?:HeadingType,alignCenter?:boolean}>`
    font-size: var(--heading-size);
    font-family: var(--family-primary);
    color: ${({type}) => type==='primary' || !type ? 'var(--color-primary)' : 'white'};
    ${(props) => props.alignCenter && "text-align: center;"};
`;

const StyledUpperText = styled.span<{type?:HeadingType}>`
    font-size: var(--fs-h4);
    display: block;
    font-weight: 400;
    font-family: 'Yellowtail', cursive;
    color: ${({type}) => type==='primary' || !type ? 'var(--color-secondary)' : 'white'};
`;

export default Heading