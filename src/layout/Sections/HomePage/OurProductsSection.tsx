import { FC } from 'react'
import styled from 'styled-components'
import Section from 'src/layout/Section';
import Heading, { HeadingLevel } from 'src/components/Heading';
import ProductsGrid, { StyledProductsGrid } from 'src/components/ProductsGrid/ProductsGrid';
import LinkButton, { StyledLinkButton } from 'src/components/LinkButton';
import { getProducts } from 'src/data/products';

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