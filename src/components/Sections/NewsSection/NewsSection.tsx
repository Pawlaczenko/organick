import React, { FC } from 'react'
import styled from 'styled-components'
import Section from '../../../layout/Section';
import Heading, { HeadingLevel, StyledHeading } from '../../Heading/Heading';
import LinkButton, { StyledLinkButton } from '../../LinkButton/LinkButton';
import Button from '../../Button/Button';
import NewsGrid, { StyledNewsGrid } from '../../NewsGrid/NewsGrid';
import { BREAKPOINTS } from '../../../styles/variables';

const NewsSection : FC = () => {
    return (
        <NewsSectionWrapper>
            <StyledNewsSection>
                <Heading level={HeadingLevel.h2} upperText='News'>Discover weekly content about organic food, & more</Heading>
                <LinkButton to='/news' type='white'>More News</LinkButton>
                <NewsGrid />
            </StyledNewsSection>
        </NewsSectionWrapper>
    )
}

const NewsSectionWrapper = styled(Section)`
    padding: var(--section-padding) 0;
`;


const StyledNewsSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4.8rem;
    grid-template-areas: "heading button" "news news";

    & > ${StyledHeading} {
        grid-area: heading;
    }

    & > ${StyledLinkButton} {
        justify-self: end; 
        align-self: end;
        grid-area: button;
    }

    & > ${StyledNewsGrid} {
        grid-area: news;
    }

    @media only screen and (${BREAKPOINTS.burger}){
        grid-template-columns: 1fr;
        grid-template-areas: "heading" "news" "button";
        & > ${StyledLinkButton} {
            justify-self: center; 
        }
    }
`;


export default NewsSection