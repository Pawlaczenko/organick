import { FC } from 'react'
import styled from 'styled-components'
import { createCircle, flexCenter } from '../../styles/mixins';

interface ICircleLink {
    icon: React.ReactElement,
    url: string
}

const CircleLink : FC<ICircleLink> = ({icon,url}) => {
    return (
        <StyledCircleLink href={url} target="_blank">
            {icon}
        </StyledCircleLink>
    )
}

const StyledCircleLink = styled.a`
    ${flexCenter}
    
    --linkSize: 6rem;
    ${createCircle('var(--linkSize)')};

    background: var(--color-light-2);
    & > svg {
        fill: var(--color-primary);
        width: 2rem;
        height: 2rem;
    }

    &:hover {
        background-color: var(--color-primary);
        & > svg {
            fill: var(--color-light-2);
        }
    }
`;


export default CircleLink