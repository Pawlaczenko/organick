import React, { FC } from 'react'
import styled from 'styled-components'
import Section from '../../../layout/Section';
import Heading, { HeadingLevel, StyledHeading } from '../../Heading/Heading';
import { ECOFRIENDLY_CONTENT, IEcofriendlyContent } from '../../../data/ecofriendly';
import Paragraph from '../../Paragraph/Paragraph';
import EcoBackground from '../../../assets/images/eco-background.jpg';
import { BREAKPOINTS } from '../../../styles/variables';

const EcoFriendlySection : FC = () => {
    const listItems : IEcofriendlyContent[] = [...ECOFRIENDLY_CONTENT];
    return (
        <EcoFriendlySectionWrapper>
            <StyledEcoFriendlySection>
                <StyledBackground />
                <Heading level={HeadingLevel.h2} upperText='Eco Friendly'>Econis is a Friendly Organic Store</Heading>
                <EcoList>
                    {
                        listItems.map((item,index) => {
                            return(
                                <EcoListItem>
                                    <Heading level={HeadingLevel.h6}>{item.title}</Heading>
                                    <Paragraph>{item.description}</Paragraph>
                                </EcoListItem>
                            )
                        })
                    }
                </EcoList>
            </StyledEcoFriendlySection>
        </EcoFriendlySectionWrapper>
    )
}

const EcoFriendlySectionWrapper = styled(Section)`
    padding: 11rem 0;
    position: relative;

    @media only screen and (${BREAKPOINTS.burger}){
        padding: 4.5rem 0;
    }
`;

const StyledBackground = styled.div`
    position: absolute;
    left: 0;
    top: 0;

    width: 50%;
    height: 100%;
    z-index: -1;
    background: url(${EcoBackground}) center/cover no-repeat;

    @media only screen and (${BREAKPOINTS.burger}){
        width: 100%;
    }
`;

const StyledEcoFriendlySection = styled.div`
    --box-padding: 9rem;
    background-color: white;
    padding: var(--box-padding);
    padding-right: 0;
    border-radius: 3rem;
    width: 50%;

    margin-left: calc(50% - var(--box-padding));

    @media only screen and (${BREAKPOINTS.burger}){
        margin: 0;
        padding: 6rem 2rem;
        width: 100%;

        & > ${StyledHeading} {
            text-align: center;
        }
    }
`;

const EcoList = styled.ul`
    list-style-type: none;
    margin: 3.5rem 0;
    padding: 0;

    @media only screen and (${BREAKPOINTS.burger}){
        margin: 5rem 0;
    }
`;

const EcoListItem = styled.li`
    &:not(:last-child){
        margin-bottom: 3.5rem;
    }
`;
      

export default EcoFriendlySection