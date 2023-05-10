import { FC } from 'react'
import styled from 'styled-components'
import StatCircle, { IStatCircle } from '../StatCircle/StatCircle';

const StatisticsGroup : FC<{items: IStatCircle[]}> = ({items}) => {
    return (
        <StyledStatisticsGroup>
            {
                items.map((item, index) => <StatCircle {...item} key={`${index}-${item.name[0]}`} />)
            }
        </StyledStatisticsGroup>
    )
}

const StyledStatisticsGroup = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    --stat-circle-size: 21rem;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(var(--stat-circle-size),1fr));
    gap: 6rem; 
    justify-items: center;;
`;


export default StatisticsGroup