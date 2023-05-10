import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { BREAKPOINTS } from '../../../styles/variables'

export interface IFooterGroupItem {
    text: string
    label?: string,
    url?: string,
    urlPrefix?: string,
    insideLink?: boolean
}

const FooterGroup : FC<{items: IFooterGroupItem[],align?:'left'|'right'}> = ({items,align}) => {
    const getLink = (item: IFooterGroupItem) => {
        return item.url && item.insideLink
        ? <Link to={item.url}>{item.text}</Link>
        : <a href={`${item.urlPrefix}${item.url}`}>{item.text}</a>
    }
    return (
        <StyledFooterGroup align={align}>
            {
                items.map((item,index) => {
                    return (
                        <GroupItem align={align} key={'footergroupitem-'+index}>
                            {item.label && <GroupLabel>{item.label}</GroupLabel>}
                            {
                                item.url
                                ? getLink(item)
                                : <span>{item.text}</span>
                            }
                        </GroupItem>
                    )
                })
            }
        </StyledFooterGroup>
    )
}

const StyledFooterGroup = styled.ul<{align?: 'left' | 'right'}>`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: ${(props) => props.align === 'right' ? 'flex-end' : 'flex-start'};
    justify-content: flex-start;
    gap: 3rem;
    margin: 3.2rem 0;
    padding: 0;

    @media only screen and (${BREAKPOINTS.small}){
        align-items: center;
    }
`;

const GroupItem = styled.li<{align?: 'left' | 'right'}>`
    text-align: ${(props) => props.align || 'left'};
    color: var(--color-grey);

    @media only screen and (${BREAKPOINTS.small}){
        text-align: center;
    }
`
const GroupLabel = styled.p`
    font-weight: var(--fw-bold);
`;

export default FooterGroup