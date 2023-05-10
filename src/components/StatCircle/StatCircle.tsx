import { FC, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { flexCenter } from 'src/styles/mixins';
import { animate, motion, useInView } from 'framer-motion';

export interface IStatCircle {
    value: number;
    name: string;
    sign?: string;
}

const StatCircle : FC<IStatCircle> = ({value, name, sign}) => {
    const counterRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(counterRef,{once: true});

    useEffect(() => {        
        if(isInView) {
            animate(0,value, {
                duration: 1.5,
                ease: "easeOut",
                onUpdate(updatedValue) {
                    if (counterRef.current) counterRef.current.textContent = updatedValue.toFixed(0);
                }
            });
        }
    }, [value,isInView]);

    return (
        <StyledStatCircle>
            <CircleValue><span ref={counterRef}></span>{sign}</CircleValue>
            <CircleName>{name}</CircleName>
        </StyledStatCircle>
    )
}

const StyledStatCircle = styled.li`
    border-radius: 50%;
    width: var(--stat-circle-size);
    height: var(--stat-circle-size);
    ${flexCenter};
    flex-direction: column;

    color: var(--color-primary);
    background-color: #f1f1f1;
    border: .7rem solid white;
    box-shadow: 0 0 0 .4rem var(--color-secondary);
    font-family: var(--family-primary);
`;

const CircleValue = styled(motion.p)`
    font-size: var(--fs-h2);
    font-weight: var(--fw-extra-bold);
`;

const CircleName = styled.span`
    font-size: var(--fs-paragraph);
    font-weight: var(--fw-semi-bold);
`;

export default StatCircle