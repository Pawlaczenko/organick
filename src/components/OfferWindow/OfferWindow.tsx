import React, { FC } from 'react'
import styled from 'styled-components'
import { BREAKPOINTS } from '../../styles/variables'
import { flexCenter } from '../../styles/mixins'
import Heading, { HeadingLevel, HeadingType } from '../Heading/Heading'

interface IOfferWindowProps {
    text: string,
    upperText: string,
    variant: 'light' | 'dark',
    backgroundImage: string
}

const OfferWindow : FC<IOfferWindowProps> = ({text,upperText,variant,backgroundImage}) => {
    const headingType : HeadingType = variant === 'dark' ? 'primary' : 'white';
    return (
        <StyledOfferWindow overlayType={variant} backImgUrl={backgroundImage}>
            <Heading upperText={upperText} level={HeadingLevel.h3} type={headingType}>{text}</Heading>
        </StyledOfferWindow>
    )
}

const StyledOfferWindow = styled.div<{backImgUrl: string, overlayType: 'light' | 'dark'}>`
    padding: 10rem 5.5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    --offer-background: url(${(props)=>props.backImgUrl}) center / cover no-repeat;
    background: var(--offer-background);
    border-radius: 3rem;

    & > * {
        width: 50%;
    }

    @media only screen and (${BREAKPOINTS.burger}){
        & > * {width: 100%;}

        --overlay-color: ${(props) => props.overlayType==='dark' ? "rgba(255,255,255,.6)" : "rgba(0,0,0,.4)"};
        background: 
            linear-gradient(180deg, var(--overlay-color) 0%, var(--overlay-color) 100%), 
            var(--offer-background);
    }
`;


export default OfferWindow