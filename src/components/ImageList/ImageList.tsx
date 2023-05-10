import { FC } from 'react'
import styled from 'styled-components'
import ImageListItem, { IImageListItem } from './ImageListItem';
import { BREAKPOINTS } from 'src/styles/variables';


type ListDirection = 'row' | 'column';
interface IImageList {
    items: IImageListItem[],
    direction?: ListDirection
}

const ImageList : FC<IImageList> = ({items,direction}) => {
    return (
        <StyledImageList direction={direction}>
            {
                items.map((item) => <ImageListItem key={item.title} title={item.title} text={item.text} image={item.image} />)
            }
        </StyledImageList>
    )
}

export const StyledImageList = styled.ul<{direction?:ListDirection}>`
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: ${(props) => props.direction || 'column'};
    align-items: flex-start;
    justify-items: space-between;
    
    @media only screen and (${BREAKPOINTS.small}){
        flex-direction: column;
    }
`;


export default ImageList