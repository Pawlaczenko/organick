import { FC, useState } from 'react'
import Section from '../../layout/Section/Section'
import styled from 'styled-components'
import Logo, { StyledLogo } from '../Logo/Logo'
import Navigation, { StyledNavigation } from '../Navigation/Navigation'
import CartButton, { StyledCartButton } from '../CartButton/CartButton'
import Burger, { StyledBurger } from '../Burger/Burger'
import { BREAKPOINTS } from '../../styles/variables'

const Header : FC = () => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleBurgerToogle = () => {
    setIsOpen(currState => !currState);
  }
  
  return (
    <HeaderWrapper as="header">
        <HeaderContainer>
            <Logo />
            <Navigation isOpen={isOpen} />
            <CartButton />
            <Burger isOpen={isOpen} handleClick={handleBurgerToogle} />
        </HeaderContainer>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled(Section)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
`;

const HeaderContainer = styled.div`
    padding: 6.9rem 0;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-areas: "logo nav cart";
    gap: 2rem;

    & > ${StyledLogo} {grid-area: logo};
    & > ${StyledNavigation} {grid-area: nav};
    & > ${StyledCartButton} {grid-area: cart};
    & > ${StyledBurger} {grid-area: cart};

    @media only screen and (${BREAKPOINTS.burger}) {
        & > ${StyledCartButton} {grid-area: nav; justify-self: end;}
        & > ${StyledLogo} {grid-area: logo;}

        padding: 4rem 0;
    }
`;

export default Header