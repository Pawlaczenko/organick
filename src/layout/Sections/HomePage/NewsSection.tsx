import { FC } from 'react'
import styled from 'styled-components'
import Section from 'src/layout/Section';
import Heading, { HeadingLevel, StyledHeading } from 'src/components/Heading';
import LinkButton, { StyledLinkButton } from 'src/components/LinkButton';
import NewsGrid, { StyledNewsGrid } from 'src/components/NewsGrid/NewsGrid';
import { BREAKPOINTS } from 'src/styles/variables';

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