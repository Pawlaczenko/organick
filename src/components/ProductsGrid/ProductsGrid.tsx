import { FC } from 'react'
import styled from 'styled-components'
import { IProduct } from '../../data/products'
import ProductItem from './ProductItem'

interface IProductsGridProps {
    productsArray: IProduct[]
}

const ProductsGrid : FC<IProductsGridProps> = ({productsArray}) => {
    return (
        <StyledProductsGrid>
            {
                productsArray.map((product,index) => {
                    return <ProductItem key={`${product.name}-${index}`} {...product} />
                })
            }
        </StyledProductsGrid>
    )
}

export const StyledProductsGrid = styled.div`
    --product-card-width: 33.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(var(--product-card-width),1fr));
    gap: 2rem; 
`;


export default ProductsGrid