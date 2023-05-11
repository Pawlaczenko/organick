import { FC } from 'react'
import Heading, { HeadingLevel } from 'src/components/Heading';
import ImageList, { StyledImageList } from 'src/components/ImageList/ImageList';
import { IImageListItem } from 'src/components/ImageList/ImageListItem';
import Paragraph, { StyledParagraph } from 'src/components/Paragraph';
import Section from 'src/layout/Section';
import styled from 'styled-components'
import {FaCartArrowDown,FaLeaf,FaBusinessTime,FaMoneyCheck} from "react-icons/fa";
import chooseImage from 'src/assets/images/choose.jpg';
import { BREAKPOINTS } from 'src/styles/variables';

const ChooseSection : FC = () => {
    const aboutListItems : IImageListItem[] = [
        {
            title: "Return Policy",
            text:"Simply dummy text of the printintypesetting industry.",
            image: FaCartArrowDown
        },
        {
            title: "100% Fresh",
            text:"Simply dummy text of the printintypesetting industry.",
            image: FaLeaf 
        },
        {
            title: "Secured Payment",
            text:"Simply dummy text of the printintypesetting industry.",
            image: FaMoneyCheck 
        }
    ]
    return (
        <ChooseSectionWrapper>
            <StyledChooseSection>
                <ChooseSectionInfo>
                    <Heading level={HeadingLevel.h2} upperText='Why Choose Us?'>We do not buy from the open market & traders.</Heading>
                    <Paragraph>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</Paragraph>
                    <Paragraph>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</Paragraph>
                     <ImageList items={aboutListItems} direction='column' />
                </ChooseSectionInfo>
                <ChooseSectionImage />
            </StyledChooseSection>
        </ChooseSectionWrapper>
    )
}

const ChooseSectionWrapper = styled(Section)`
    background: var(--color-light-1);
    padding: var(--section-padding) 0;
`;


const StyledChooseSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;

    @media only screen and (${BREAKPOINTS.big}){
        flex-direction: column;
    }
`;

const ChooseSectionInfo = styled.div`
    flex: 1;

    & > ${StyledParagraph} {
        margin: 2rem 0 3rem 0;
    }

    & > ${StyledImageList} {
        & p {
            width: 85%;
        }
    }
`;

const ChooseSectionImage = styled.figure`
    border-radius: 3rem;
    background: url(${chooseImage}) center / cover no-repeat;
    width: min(60rem, 75%);
    aspect-ratio: 1/0.854;
`

export default ChooseSection