import { FC } from 'react'
import styled from 'styled-components'
import Section from '../../../layout/Section';
import Heading, { HeadingLevel } from '../../Heading/Heading';
import ProductsGrid, { StyledProductsGrid } from '../../ProductsGrid/ProductsGrid';
import { PRODUCTS } from '../../../data/products';
import { BREAKPOINTS } from '../../../styles/variables';
import LinkButton, { StyledLinkButton } from '../../LinkButton/LinkButton';

const OurProductsSection : FC = () => {
    return (
        <OurProductsSectionWrapper>
            <StyledOurProductsSection>
                <Heading level={HeadingLevel.h2} upperText='Categories' alignCenter>Our Products</Heading>
                <ProductsGrid productsArray={PRODUCTS} />
                <LinkButton type='default' to='/products'>Shop Now</LinkButton>
            </StyledOurProductsSection>
        </OurProductsSectionWrapper>
    )
}

const OurProductsSectionWrapper = styled(Section)`
    margin: 15rem 0;
    @media only screen and (${BREAKPOINTS.burger}){
        margin: 7.5rem 0;
    }
`;


const StyledOurProductsSection = styled.div`
    & > ${StyledProductsGrid} {
        margin-top: 4rem;
    }

    & > ${StyledLinkButton} {
        margin: 12rem auto;
    }
`;


export default OurProductsSection 