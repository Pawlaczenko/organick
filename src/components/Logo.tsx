import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from 'src/assets/images/logo.svg';
import { BREAKPOINTS } from 'src/styles/variables';

const Logo : FC = () => {
  return (
    <StyledLogo to="/">
        <img src={LogoImage} alt="Organick Logo" />
        <LogoText>Organick</LogoText>
    </StyledLogo>
  )
}

export const StyledLogo = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: .8rem;

    & > img {
      width: 3.7rem;
      
      @media only screen and (${BREAKPOINTS.burger}){
        width: 3rem;
      }
    }
`;

const LogoText = styled.span`
    font-weight: var(--fw-bold);
    color: var(--color-primary);
    font-size: var(--fs-h4);

    @media only screen and (${BREAKPOINTS.burger}){
      font-size: var(--fs-h6);
    }
`;

export default Logo