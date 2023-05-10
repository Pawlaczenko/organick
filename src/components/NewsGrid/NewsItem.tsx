import { FC } from 'react'
import styled from 'styled-components'
import { IArticle } from 'src/data/articles';
import DateCircle from './DateCircle';
import { FaUserAlt } from 'react-icons/fa';
import Heading, { HeadingLevel } from '../Heading';
import Paragraph from '../Paragraph';
import LinkButton, { StyledLinkButton } from '../LinkButton';
import { BREAKPOINTS } from 'src/styles/variables';

const NewsItem : FC<IArticle> = (props) => {
    return (
        <StyledNewsItem>
            <NewsItemBackground url={props.thumbnail} />
            <DateCircle date={props.date} />
            <NewsInfo>
                <Author><FaUserAlt /><figcaption>By {props.author}</figcaption></Author>
                <Heading level={HeadingLevel.h6}>{props.title}</Heading>
                <Paragraph>{props.introduction}</Paragraph>
                <LinkButton to={`/news/${props.id}`} type='yellow'>Read More</LinkButton>
            </NewsInfo>
        </StyledNewsItem>
    )
}

const StyledNewsItem = styled.li`
    border-radius: 3rem;
    padding: 4.2rem;
    position: relative;
    overflow: hidden;

    @media only screen and (${BREAKPOINTS.small}){
        padding: 3.6rem 1rem;
    }
`;

const NewsItemBackground = styled.div<{url: string}>`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: calc(85%);
    z-index: -1;
    border-radius: inherit;
    background: url(${(props) => props.url}) center / cover no-repeat;
`

const NewsInfo = styled.div`
    background: white;
    border-radius: 3rem;    
    padding: 4.6rem 5.7rem;
    margin-top: 10rem;

    box-shadow: 0 2rem 3.5rem 0 rgba(167,167,167,.25);
    & > ${StyledLinkButton} {
        margin-top: 1.5rem;
    }

    @media only screen and (${BREAKPOINTS.small}){
        padding: 4.6rem;
    }
`;

const Author = styled.figure`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: .8rem;
    margin-bottom: 1.5rem;

    & > svg {
        width: 1.8rem;
        height: 2rem;
        fill: var(--color-accent);
    }
    & > figcaption {
       font-family: var(--family-primary);
       font-size: var(--fs-paragraph);
       color: var(--color-primary); 
    }
`

export default NewsItem