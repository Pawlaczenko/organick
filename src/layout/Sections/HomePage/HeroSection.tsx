import { FC } from 'react';
import styled from 'styled-components';
import Section from 'src/layout/Section';
import Heading, { HeadingLevel, StyledHeading } from 'src/components/Heading';
import heroBackgroundImage from 'src/assets/images/home-hero.jpg';
import LinkButton from 'src/components/LinkButton';
import { BREAKPOINTS } from 'src/styles/variables';
import { flexCenter } from 'src/styles/mixins';

const HeroSection : FC = () => {
  return (
    <HeroSectionWrapper>
        <Heading 
            upperText='100% Natural Food' 
            level={HeadingLevel.h1}>
                Choose the best healthier way of life
        </Heading>
        <LinkButton to='/services' type='yellow'>Explore now</LinkButton>
    </HeroSectionWrapper>
  )
}

const HeroSectionWrapper = styled(Section)`
    --hero-background: url(${heroBackgroundImage}) center / cover no-repeat;
    background: var(--hero-background);
    padding: 20rem 0;

    & > ${StyledHeading} {
        width: 37%;
        margin-bottom: 2.3rem;

        @media only screen and (${BREAKPOINTS.small}){
            width: 90%;
        }
    }

    @media only screen and (${BREAKPOINTS.burger}){
        ${flexCenter};
        flex-direction: column;
        text-align: center;
        position: relative;
        background: 
            linear-gradient(180deg, rgba(255,255,255,.8) 0%, rgba(255,255,255,.3) 100%), 
            var(--hero-background);
    }
`;

export default HeroSection