import { FC } from 'react'
import styled from 'styled-components'
import { FaStar,FaRegStar } from "react-icons/fa";

const StarRating : FC<{rating: number}> = ({rating}) => {
    const MAX_RATING = 5;
    const actualRating = Math.min(rating,MAX_RATING);
    return (
        <StyledStarRating>
            {[...Array(actualRating)].map((star,index) => <Star key={"star-"+index}><FaStar/></Star>)}
            {[...Array(MAX_RATING-actualRating)].map((star,index) => <Star key={"star-"+index}><FaRegStar/></Star>)}
        </StyledStarRating>
    )
}

export const StyledStarRating = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .2rem;
`;

const Star = styled.li`
    --star-size: 1.5rem;
    width: var(--star-size);
    height: var(--star-size);

    & > svg {
        fill: #FFA858;
    }
`;


export default StarRating