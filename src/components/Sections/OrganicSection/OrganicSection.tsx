import React, { FC } from 'react'
import styled from 'styled-components'
import Section from '../../../layout/Section';
import { BREAKPOINTS } from '../../../styles/variables';
import Heading, { HeadingLevel, StyledHeading } from '../../Heading/Heading';
import LinkButton, { StyledLinkButton } from '../../LinkButton/LinkButton';
import ProductsGrid, { StyledProductsGrid } from '../../ProductsGrid/ProductsGrid';
import { getProducts } from '../../../data/products';

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
    padding: 18rem 0;

    @media only screen and (${BREAKPOINTS.burger}) {
        padding: 9rem 0;
    }
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