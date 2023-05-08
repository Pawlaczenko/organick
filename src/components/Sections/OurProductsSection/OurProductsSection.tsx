import { FC } from 'react'
import styled from 'styled-components'
import Section from '../../../layout/Section';
import Heading, { HeadingLevel } from '../../Heading/Heading';
import ProductsGrid, { StyledProductsGrid } from '../../ProductsGrid/ProductsGrid';
import { BREAKPOINTS } from '../../../styles/variables';
import LinkButton, { StyledLinkButton } from '../../LinkButton/LinkButton';
import { getProducts } from '../../../data/products';

const OurProductsSection : FC = () => {
    const products = getProducts(8);
    return (
        <OurProductsSectionWrapper>
            <StyledOurProductsSection>
                <Heading level={HeadingLevel.h2} upperText='Categories' alignCenter>Our Products</Heading>
                <ProductsGrid productsArray={products} />
                <LinkButton type='default' to='/products'>Shop Now</LinkButton>
            </StyledOurProductsSection>
        </OurProductsSectionWrapper>
    )
}

const OurProductsSectionWrapper = styled(Section)`
    padding: var(--section-padding) 0;
`;


const StyledOurProductsSection = styled.div`
    & > ${StyledProductsGrid} {
        margin-top: 4rem;
    }

    & > ${StyledLinkButton} {
        margin: 9rem auto 0 auto;
    }
`;


export default OurProductsSection 