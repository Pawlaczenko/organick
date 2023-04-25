import { FC } from 'react';
import styled from 'styled-components';
import Section from '../../layout/Section';
import Heading, { HeadingLevel, StyledHeading } from '../Heading/Heading';
import heroBackgroundImage from '../../assets/images/home-hero.jpg';
import LinkButton from '../LinkButton/LinkButton';
import { BREAKPOINTS } from '../../styles/variables';
import { flexCenter } from '../../styles/mixins';

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
    padding: 24.5rem 0;

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