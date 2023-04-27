import { FC } from 'react'
import styled from 'styled-components'
import Section from '../../../layout/Section';
import aboutImage from '../../../assets/images/about-fruits.png';
import Heading, { HeadingLevel } from '../../Heading/Heading';
import Paragraph from '../../Paragraph/Paragraph';
import ImageList, { StyledImageList } from '../../ImageList/ImageList';
import { IImageListItem } from '../../ImageList/ImageListItem';
import {FaLeaf,FaMedal} from "react-icons/fa";
import LinkButton, { StyledLinkButton } from '../../LinkButton/LinkButton';
import { BREAKPOINTS } from '../../../styles/variables';

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
    padding: 18rem 0;
    background: var(--color-light-1);

    @media only screen and (${BREAKPOINTS.burger}){
        padding: 10rem 0;
    }
`;


const StyledAboutSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media only screen and (${BREAKPOINTS.burger}){
        grid-template-columns: 1fr;
    }
`;

const StyledAboutImage = styled.figure`
    background: url(${aboutImage}) center/contain no-repeat;
    min-height: 40rem;
`;

const AboutInfo = styled.div`
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