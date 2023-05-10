import { FC, useState } from 'react'
import styled from 'styled-components'
import { TESTIMONIALS } from 'src/data/testimonials';
import StarRating from '../StarRating';
import Paragraph, { StyledParagraph } from '../Paragraph';
import Heading, { HeadingLevel } from '../Heading';
import SliderControls from './SliderControls';
import { BREAKPOINTS } from 'src/styles/variables';
import { motion, useAnimate } from 'framer-motion';

const TestimonialSlider : FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const testimonials = [...TESTIMONIALS];
    const [scope, animate] = useAnimate()

    const handleSlideChange = async (slideIndex:number) => {
        await animate(scope.current, { opacity: 0, y: 10 });
        setCurrentSlide(slideIndex);
        await animate(scope.current, { opacity: 1, y: 0 });
    }

    return (
        <StyledTestimonialSlider ref={scope}>
            <SliderPhoto>
                <img src={testimonials[currentSlide].photo} alt="Testimonial photo" />
            </SliderPhoto>
            <StarRating rating={testimonials[currentSlide].rating} />
            <Paragraph textAlign='center'>{testimonials[currentSlide].review}</Paragraph>
            <Heading alignCenter level={HeadingLevel.h6}>
                {testimonials[currentSlide].name}
                <StyledRole>{testimonials[currentSlide].role}</StyledRole>
            </Heading>
            <SliderControls count={testimonials.length} currentSlide={currentSlide} handleSlideChange={handleSlideChange}  />
        </StyledTestimonialSlider>
    )
}

const StyledTestimonialSlider = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    width: 65%;
    margin: 6rem auto 0 auto;

    ${StyledParagraph} {
        margin-top: 2rem;
    }

    @media only screen and (${BREAKPOINTS.burger}){
        width: 100%;
    }
`;

const SliderPhoto = styled.figure`
    --photo-size: 11.5rem;
    width: var(--photo-size);
    height: var(--photo-size);
    border-radius: 50%;
    background: var(--color-grey-light);

    overflow: hidden;

    & > img {
        object-fit: contain;
        object-position: center;;
    }
`;

const StyledRole = styled.p`
    font-size: 1.5rem;
    color: var(--color-grey);
    font-weight: var(--fw-regular);
`

export default TestimonialSlider