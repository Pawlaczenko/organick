import React, { FC } from 'react'
import styled from 'styled-components'
import Heading, { HeadingLevel } from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import { flexCenter, flexSpaceBetween, flexStart } from '../../styles/mixins';

export interface IImageListItem {
    title: string,
    text: string,
    image: string
}

const ImageListItem : FC<IImageListItem> = (props) => {
    return (
        <StyledImageListItem>
            <ItemImage>
                <props.image />
            </ItemImage>
            <ItemInfo>
                <Heading level={HeadingLevel.h6}>{props.title}</Heading>
                <Paragraph>{props.text}</Paragraph>
            </ItemInfo>
        </StyledImageListItem>
    )
}

const StyledImageListItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.9rem;

    &:not(:last-child){margin-bottom: 3rem;}
`;

const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
`;

const ItemImage = styled.figure`
    --image-size: 10rem;
    width: var(--image-size);
    height: var(--image-size);
    ${flexCenter};

    background: radial-gradient(circle, var(--color-accent) 0%, var(--color-accent) 15%, rgba(255,255,255,1) 15%);
    border-radius: 2rem;

    & > svg {
        fill: var(--color-secondary);
        width: 50%;
        height: 50%;
    }
`;


export default ImageListItem