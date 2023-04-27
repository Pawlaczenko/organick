import React from 'react'
import { FC } from 'react';
import Button, { ButtonType } from '../Button/Button';
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa';
import { flexCenter } from '../../styles/mixins';
import { NavLink } from 'react-router-dom';

interface ILinkButtonProps {
    type: ButtonType,
    to: string,
    children: React.ReactNode,
}

const LinkButton : FC<ILinkButtonProps> = (props) => {
  return (
    <StyledLinkButton to={props.to}>
        <Button buttonType={props.type}>
            {props.children}
            <LinkArrowIcon><FaArrowRight/></LinkArrowIcon>
        </Button>
    </StyledLinkButton>
  )
}

export const StyledLinkButton = styled(NavLink)`
    width: fit-content;
`

const LinkArrowIcon = styled.figure`
    --arrow-size: 1.9rem;
    --arrow-color: #335B6B;
    width: var(--arrow-size);
    height: var(--arrow-size);
    ${flexCenter};

    border-radius: 50%;
    background-color: var(--arrow-color);

    & > svg {
        fill: white;
        width: .8rem;
    }
`;

export default LinkButton