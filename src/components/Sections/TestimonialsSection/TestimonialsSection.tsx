import React, { FC } from 'react'
import styled from 'styled-components'
import Section from '../../../layout/Section';
import BackgroundImage from '../../../assets/images/testimonial-background.png';
import Heading, { HeadingLevel } from '../../Heading/Heading';
import LineBreak from '../../../layout/LineBreak';
import StatisticsGroup from '../../StatisticsGroup/StatisticsGroup';
import { TESTIMONIAL_STATISTICS } from '../../../data/testimonials';
import { BREAKPOINTS } from '../../../styles/variables';
import TestimonialSlider from '../../TestimonialSlider/TestimonialSlider';
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