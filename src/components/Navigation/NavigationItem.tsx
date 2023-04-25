import React from 'react'
import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BREAKPOINTS } from '../../styles/variables';

export interface INavigationItem {
    label: string,
    to: string
}

const NavigationItem : FC<INavigationItem> = ({label,to}) => {
  return (
    <StyledNavigationItem>
        <NavigationLink to={to}>
            {label}
        </NavigationLink>
    </StyledNavigationItem>
  )
}

const StyledNavigationItem = styled.li`
    @media only screen and (${BREAKPOINTS.burger}){
        font-size: var(--fs-h5);
        width: 100%;
        text-align: center;
    }
`;

const NavigationLink = styled(NavLink)`
    color: var(--color-primary);
    font-weight: var(--fw-bold);
    font-size: fs-quote;
    transition: var(--transition-primary);

    &:hover,
    &:active,
    &.active {
        color: var(--color-secondary);
        position: relative;

        &::before {
            --marker-size: 1.5rem;

            content: "";
            position: absolute;
            z-index: -1;
            width: var(--marker-size);
            height: var(--marker-size);
            border-radius: 50%;

            background-color: var(--color-accent);
            opacity: .5;
            inset: 50%;
            transform: translate(-50%,-50%);
        }

        @media only screen and (${BREAKPOINTS.burger}){
            background: var(--color-secondary);
            color: white;
        }
    }

    @media only screen and (${BREAKPOINTS.burger}){
        width: 100%;
        height: 100%;
        padding: 1rem 0;
        display: block;
    }
`

export default NavigationItem