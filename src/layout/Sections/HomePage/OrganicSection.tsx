import { FC } from 'react'
import styled from 'styled-components'
import Section from 'src/layout/Section';
import { BREAKPOINTS } from 'src/styles/variables';
import Heading, { HeadingLevel, StyledHeading } from 'src/components/Heading';
import LinkButton, { StyledLinkButton } from 'src/components/LinkButton';
import ProductsGrid, { StyledProductsGrid } from 'src/components/ProductsGrid/ProductsGrid';
import { getProducts } from 'src/data/products';

const OrganicSection : FC = () => {
    const products = getProducts(4,'Vegetable');
    return (
        <OrganicSectionWrapper>
            <StyledOrganicSection>
                <Heading level={HeadingLevel.h2} upperText='Offer' type='white'>We Offer Organic For You</Heading>
                <LinkButton to="/products" type='yellow'>View All Products</LinkButton>
                <ProductsGrid productsArray={products} />
            </StyledOrganicSection>
        </OrganicSectionWrapper>
    )
}

const OrganicSectionWrapper = styled(Section)`
    background: var(--color-primary);
    padding: var(--section-padding) 0;
`;


const StyledOrganicSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "heading button" "products products";
    gap: 5rem;
    align-items: center;

    @media only screen and (${BREAKPOINTS.burger}) {
        grid-template-columns: 1fr;
        grid-template-areas: "heading" "products" "button";
    }

    ${StyledHeading} {grid-area: heading;}
    ${StyledLinkButton} {
        grid-area: button;
        justify-self: end;
        @media only screen and (${BREAKPOINTS.burger}) {
            justify-self: center;
        }
    }
    ${StyledProductsGrid} {grid-area: products;}
`;


export default OrganicSection