import { FC } from 'react'
import styled from 'styled-components'
import { IProduct } from 'src/data/products';
import { flexCenter } from 'src/styles/mixins';
import StarRating from '../StarRating';
import { NavLink } from 'react-router-dom';

const ProductItem : FC<IProduct> = (props) => {
    let actualPrice = props.price * (props.discount ?? 1);

    const getPrice = (price:number) : string => {
        return `$${price.toFixed(2)}`;
    }

    return (
        <StyledProductItem to={`/product/${props.id}`}>
            <ProductCategory>{props.category}</ProductCategory>
            <ProductImage>
                <img src={props.image_path} alt={props.name} />
            </ProductImage>
            <ProductName>{props.name}</ProductName>
            <ProductInfo>
                { props.discount && <DiscountPrice>{getPrice(props.price)}</DiscountPrice>}
                <ProductPrice>{getPrice(actualPrice)}</ProductPrice>
                <StarRating rating={props.rating} />
            </ProductInfo>
        </StyledProductItem>
    )
}

const StyledProductItem = styled(NavLink)`
    background: var(--color-light-1);
    padding: 3rem;
    border-radius: 3rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition-primary);

    &:hover {
        background-color: var(--color-light-2);

        img {
            transform: scale(1.2);
        }
    }
`;

const ProductCategory = styled.span`
    background-color: var(--color-primary);
    font-size: 1.5rem;
    color: white;

    border-radius: .8rem;
    padding: .6rem 1.2rem;
    font-weight: var(--fw-semi-bold);
`;

const ProductImage = styled.figure`
    flex: 1;
    ${flexCenter};

    & > img {
        width: 100%;
        display: block;
        object-fit: contain;
        mix-blend-mode: darken;

        transition: var(--transition-primary);
    }
`;

const ProductName = styled.p`
    font-size: var(--fs-quote);
    color: var(--color-primary);
    font-weight: 600;
`

const ProductInfo = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: .8rem;
    width: 100%;

    border-top: var(--border-thin);
    padding-top: .6rem;
    margin-top: 1.2rem;
`;

const ProductPrice = styled.span`
    font-size: var(--fs-paragraph);
    font-weight: var(--fw-bold);
    color: var(--color-primary);
    margin-right: auto;
`;

const DiscountPrice = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    color: #B8B8B8;
    text-decoration: line-through;
`;

export default ProductItem