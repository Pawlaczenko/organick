import { FC } from 'react'
import Section from 'src/layout/Section';
import styled from 'styled-components'
import { AboutInfo, StyledAboutImage, StyledAboutSection } from '../HomePage/AboutSection';
import aboutImage from 'src/assets/images/bowl.png';
import Heading, { HeadingLevel } from 'src/components/Heading';
import Paragraph from 'src/components/Paragraph';
import ImageList from 'src/components/ImageList/ImageList';
import LinkButton from 'src/components/LinkButton';
import { IImageListItem } from 'src/components/ImageList/ImageListItem';
import { FaHouzz, FaTruckMoving } from 'react-icons/fa';

const AboutSection : FC = () => {
    const aboutListItems : IImageListItem[] = [
        {
            title: "Modern Agriculture Equipment",
            image: FaTruckMoving
        },
        {
            title: "No growth hormones are used",
            image: FaHouzz
        }
    ]
    return (
        <AboutSectionWrapper>
            <StyledAboutSection>
                <StyledAboutImage url={aboutImage} />
                <AboutInfo>
                    <Heading level={HeadingLevel.h2} upperText='About Us' >We do Creative<br /> Things for Success</Heading>
                    <Paragraph>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Paragraph>
                    <Paragraph>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</Paragraph>
                    <ImageList direction='row' items={aboutListItems} />
                    <LinkButton to="/shop" type='default'>Explore More</LinkButton>
                </AboutInfo>
            </StyledAboutSection>
        </AboutSectionWrapper>
    )
}

const AboutSectionWrapper = styled(Section)`
    padding: var(--section-padding) 0;
`;

export default AboutSection