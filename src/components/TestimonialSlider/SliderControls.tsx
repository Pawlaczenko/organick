import { FC } from 'react'
import styled from 'styled-components'
import { flexCenter } from '../../styles/mixins'
import { BREAKPOINTS } from '../../styles/variables';

interface ISLiderControlsProps {
    currentSlide: number;
    count: number;
    handleSlideChange: (slideIndex:number)=>void
}

const SliderControls : FC<ISLiderControlsProps> = ({count,currentSlide,handleSlideChange}) => {
    return (
        <StyledSliderControls>
            {
                [...Array(count)].map((value,index) => {
                    let key = `${Math.random()}-${index}`;
                    return <ControlButton key={key} isActive={index===currentSlide} onClick={() => {handleSlideChange(index)}} />
                })
            }
        </StyledSliderControls>
    )
}

const StyledSliderControls = styled.div`
    ${flexCenter};
    gap: 1rem;
`;

const ControlButton = styled.button<{isActive: boolean}>`
    --button-size: 1.5rem;
    width: var(--button-size);
    height: var(--button-size);
    border-radius: 50%;

    background-color: ${(props) => props.isActive ? 'var(--color-secondary)' : '#c4c4c4'};
    border: none;
    padding: 0;
    cursor: pointer;

    @media only screen and (${BREAKPOINTS.burger}){
        --button-size: 2.2rem;
    }
`;


export default SliderControls