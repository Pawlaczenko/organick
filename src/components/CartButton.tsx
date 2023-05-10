import { FC } from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from "react-icons/fa";
import { flexCenter, flexStart } from 'src/styles/mixins';

const CartButton : FC = () => {
  return (
    <StyledCartButton>
        <CartIcon>
            <FaShoppingCart />
        </CartIcon>
        Cart (0) 
    </StyledCartButton>
  )
}

export const StyledCartButton = styled.button`
    --circle-scale: 1;
    width: 16rem;
    padding: .4rem;
    ${flexStart};
    overflow: hidden;
    
    font-size: var(--fs-paragraph);
    color: var(--color-primary);
    font-weight: 600;

    background: none;
    border: var(--border-thin);
    border-radius: 3.3rem;
    cursor: pointer;
    transition: var(--transition-primary);

    &:hover {
        color: white;
        --circle-scale: 4.5;
    }
`;

const CartIcon = styled.figure`
    --button-size: 5.6rem;
    width: var(--button-size);
    height: var(--button-size);
    margin-right: 1.2rem;
    position: relative;

    border-radius: 50%;
    background-color: var(--color-primary);
    flex-shrink: 0;
    ${flexCenter};

    & > svg {
        fill: white;
        width: 2.3rem;
        height: 2.3rem;
    }

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;

        transition: var(--transition-primary);
        background-color: var(--color-primary);
        border-radius: inherit;
        z-index: -1;
        transform: scale(var(--circle-scale));
    }
`;

export default CartButton