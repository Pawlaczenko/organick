import { FC } from 'react'
import styled from 'styled-components'
import ImageListItem, { IImageListItem } from './ImageListItem';

const ImageList : FC<{items: IImageListItem[]}> = ({items}) => {
    return (
        <StyledImageList>
            {
                items.map((item) => <ImageListItem key={item.title} title={item.title} text={item.text} image={item.image} />)
            }
        </StyledImageList>
    )
}

export const StyledImageList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;


export default ImageList