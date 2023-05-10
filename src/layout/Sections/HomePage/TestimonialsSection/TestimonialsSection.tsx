import { FC } from 'react'
import styled from 'styled-components'
import Section from 'src/layout/Section';
import BackgroundImage from 'src/assets/images/testimonial-background.png';
import Heading, { HeadingLevel } from 'src/components/Heading/Heading';
import LineBreak from 'src/layout/LineBreak';
import StatisticsGroup from 'src/components/StatisticsGroup/StatisticsGroup';
import { TESTIMONIAL_STATISTICS } from 'src/data/testimonials';
import { BREAKPOINTS } from 'src/styles/variables';
import TestimonialSlider from 'src/components/TestimonialSlider/TestimonialSlider';
import { AnimatePresence } from 'framer-motion';

const TestimonialsSection : FC = () => {
    return (
        <TestimonialsSectionWrapper>
            <StyledTestimonialsSection>
                <AnimatePresence>
                    <Heading level={HeadingLevel.h2} upperText='Testimonials' alignCenter >What Are Our Customers Saying?</Heading>
                    <TestimonialSlider />
                    <LineBreak />
                    <StatisticsGroup items={TESTIMONIAL_STATISTICS} />
                </AnimatePresence>
            </StyledTestimonialsSection>
        </TestimonialsSectionWrapper>
    )
}

const TestimonialsSectionWrapper = styled(Section)`
    background: url(${BackgroundImage}) center/cover no-repeat, var(--color-light-1);
    padding: var(--section-padding) 0;
`;


const StyledTestimonialsSection = styled.div`
    margin: 0 14rem;
    @media only screen and (${BREAKPOINTS.burger}) {
        margin: 0;
    }
`;


export default TestimonialsSection