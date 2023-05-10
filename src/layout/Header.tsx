import { FC, useEffect, useState } from 'react'
import Section from 'src/layout/Section'
import styled from 'styled-components'
import Logo, { StyledLogo } from 'src/components/Logo'
import Navigation, { StyledNavigation } from 'src/components/Navigation/Navigation'
import CartButton, { StyledCartButton } from 'src/components/CartButton'
import Burger, { StyledBurger } from 'src/components/Burger'
import { BREAKPOINTS } from 'src/styles/variables'
import { useLocation } from 'react-router-dom'

const Header : FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  const handleBurgerToogle = () => {
    setIsOpen(currState => !currState);
  }

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  
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
`;

const HeaderContainer = styled.div`
  padding: 6rem 0;
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