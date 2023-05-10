import { FC } from 'react'
import styled from 'styled-components'
import { getMoth } from 'src/helpers/helpers';

const DateCircle : FC<{date:Date}> = ({date}) => {
    return (
        <StyledDateCircle>
            <span>{date.getDate()}</span>
            {getMoth(date)}
        </StyledDateCircle>
    )
}

const StyledDateCircle = styled.div`
    --circle-size: 8.2rem;
    width: var(--circle-size);
    height: var(--circle-size);
    border-radius: 50%;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: var(--fs-quote);
    color: var(--color-primary);
    font-weight: var(--fw-extra-bold);
    text-align: center;
    line-height: 1;

    & > span {
        font-size: var(--fs-h6);
    }
`

export default DateCircle