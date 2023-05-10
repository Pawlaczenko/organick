import { FC } from 'react'
import styled from 'styled-components'
import Section from 'src/layout/Section';
import aboutImage from 'src/assets/images/about-fruits.png';
import Heading, { HeadingLevel } from 'src/components/Heading';
import Paragraph from 'src/components/Paragraph';
import ImageList, { StyledImageList } from 'src/components/ImageList/ImageList';
import { IImageListItem } from 'src/components/ImageList/ImageListItem';
import {FaLeaf,FaMedal} from "react-icons/fa";
import LinkButton, { StyledLinkButton } from 'src/components/LinkButton';
import { BREAKPOINTS } from 'src/styles/variables';

const AboutSection : FC = () => {

    const aboutListItems : IImageListItem[] = [
        {
            title: "Organic Foods Only",
            text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            image: FaLeaf
        },
        {
            title: "Quality Standards",
            text: "Simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            image: FaMedal
        }
    ]

    return (
        <AboutSectionWrapper>
            <StyledAboutSection>
                <StyledAboutImage />
                <AboutInfo>
                    <Heading level={HeadingLevel.h2} upperText='About Us' >We Believe in Working Accredited Farmers</Heading>
                    <Paragraph>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Paragraph>
                    <ImageList items={aboutListItems} />
                    <LinkButton to="/shop" type='default'>Shop Now</LinkButton>
                </AboutInfo>
            </StyledAboutSection>
        </AboutSectionWrapper>
    )
}

const AboutSectionWrapper = styled(Section)`
    padding: var(--section-padding) 0;
    background: var(--color-light-1);
`;


export const StyledAboutSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media only screen and (${BREAKPOINTS.burger}){
        grid-template-columns: 1fr;
    }
`;

export const StyledAboutImage = styled.figure`
    background: url(${aboutImage}) center/contain no-repeat;
    min-height: 40rem;
`;

export const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: start;

    & > ${StyledImageList} {
        width: 80%;
        margin: 4.5rem 0;
    }

    @media only screen and (${BREAKPOINTS.burger}){
        grid-row: 1;
        & ${StyledLinkButton} {
            align-self: center;
        }
        & > ${StyledImageList} {
            width: 100%;
        }
    }
`;

export default AboutSection