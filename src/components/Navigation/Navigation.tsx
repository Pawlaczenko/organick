import { FC } from 'react';
import styled from 'styled-components';
import NavigationItem, { INavigationItem } from './NavigationItem';
import { BREAKPOINTS } from '../../styles/variables';

const NAVIGATION_ITEMS : INavigationItem[] = [
    {label: "Home", to:"/"},
    {label: "About", to:"/about"},
    {label: "Shop", to:"/shop"},
    {label: "Projects", to:"/projects"},
    {label: "News", to:"/news"},
];

interface INavigationProps {
    isOpen: boolean
}

const Navigation : FC<INavigationProps> = ({isOpen}) => {
  return (
    <StyledNavigation isOpen={isOpen}>
        {
            NAVIGATION_ITEMS.map(navItem => <NavigationItem label={navItem.label} to={navItem.to} />)
        }
    </StyledNavigation>
  )
}

export const StyledNavigation = styled.ul<INavigationProps>`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    justify-self: center;

    list-style-type: none;
    padding: 0;
    transition: var(--transition-primary);

    @media only screen and (${BREAKPOINTS.burger}){
        position: fixed;
        z-index: 10;
        right: ${(props) => props.isOpen ? "0" : "-100%"};
        top: 0;

        width: 100%;
        height: 100vh;

        flex-direction: column;
        justify-content: center;
        background: white;
        gap: 1px;
    }
`;

export default Navigation