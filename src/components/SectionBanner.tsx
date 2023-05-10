import { FC } from 'react'
import styled from 'styled-components'
import Section from 'src/layout/Section';
import Heading, { HeadingLevel } from './Heading';

export interface ISectionBannerProps {
    title: string,
    image: string
}

const SectionBanner : FC<ISectionBannerProps> = ({title,image}) => {
    return (
        <SectionBannerWrapper background={image}>
            <StyledSectionBanner>
                <Heading level={HeadingLevel.h1} alignCenter>{title}</Heading>
            </StyledSectionBanner>
        </SectionBannerWrapper>
    )
}

const SectionBannerWrapper = styled(Section)<{background: string}>`
    background: url(${(props) => props.background}) center/cover no-repeat;
`;


const StyledSectionBanner = styled.div`
    padding: 20rem 0;
`;


export default SectionBanner