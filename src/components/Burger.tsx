import { FC } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "src/styles/variables";

interface IProps {
    isOpen: boolean,
    handleClick: React.MouseEventHandler 
}

const Burger : FC<IProps> = ({isOpen, handleClick}) => {
    return (
        <StyledBurger isOpen={isOpen} onClick={handleClick}>
            <div></div>
            <div></div>
            <div></div>
        </StyledBurger>
    )
}

export const StyledBurger = styled.button<{isOpen:boolean}>`
    --burger-gap: 3px;
    --burger-height: 4px;
    --burger-cross-width: 4.8rem;
    --burger-color: ${(props) => props.isOpen ? "var(--color-secondary)" : "var(--color-primary)"};
    --burger-translate: .85rem;

    display: none;
    min-width: 5rem;
    min-height: 5rem;
    
    border: none;
    cursor: pointer;
    background: white;
    border-radius: 50%;
    box-shadow: var(--shadow-light);

    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & div {
        width: 100%;        
        height: var( --burger-height);
        z-index: 150;
        position: relative;
        background-color: var(--burger-color);
        transition: all .2s ease-in-out;
        border-radius: 5px;
        
        &:nth-child(1){
            ${props => props.isOpen && `
                transform: translateY(175%) rotate(45deg);
            `};
        }

        &:nth-child(2){
            width: 85%;
            ${props => props.isOpen && `
                background-color: transparent; 
            `};
        }

        &:nth-child(3){

            ${props => props.isOpen && `
                transform: translateY(-175%) rotate(-45deg);
            `};
        }

        &:not(:last-child){
            margin-bottom: var(--burger-gap);
        }
    }

    @media only screen and (${BREAKPOINTS.burger}){
        display: flex;
    }
`;

export default Burger