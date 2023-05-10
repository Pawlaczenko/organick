import { FC } from 'react'
import styled from 'styled-components'
import { BREAKPOINTS } from 'src/styles/variables'
import { addColorOverlay } from 'src/styles/mixins'
import Heading, { HeadingLevel, HeadingType } from './Heading'

interface IOfferWindowProps {
    text: string,
    upperText: string,
    variant: 'light' | 'dark',
    backgroundImage: string
}

const OfferWindow : FC<IOfferWindowProps> = ({text,upperText,variant,backgroundImage}) => {
    const headingType : HeadingType = variant === 'dark' ? 'white' : 'primary';
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
        ${(props) => addColorOverlay(props.overlayType,'var(--offer-background)')};
    }
`;


export default OfferWindow