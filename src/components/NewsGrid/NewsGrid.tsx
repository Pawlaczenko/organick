import React, { FC } from 'react'
import styled from 'styled-components'
import { IArticle, NEWS_ARTICLES } from '../../data/articles';
import NewsItem from './NewsItem';

const NewsGrid : FC = () => {
    const articles : IArticle[] = [...NEWS_ARTICLES];
    return (
        <StyledNewsGrid>
            {
                articles.map((item,index) => <NewsItem key={'article'+index} {...item} />)
            }
        </StyledNewsGrid>
    )
}

export const StyledNewsGrid = styled.ul`
    grid-area: news;
    --card-size: 60rem;
    list-style-type: none;
    margin: 0;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(min(var(--card-size),100%),1fr));
    gap: 4.6rem;
`;


export default NewsGrid