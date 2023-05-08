import React, { FC } from 'react'
import styled from 'styled-components'
import Section from '../../../layout/Section';
import OfferWindow from '../../OfferWindow/OfferWindow';
import Heading, { HeadingLevel } from '../../Heading/Heading';
import offer_1 from '../../../assets/images/offer-1.jpg';
import offer_2 from '../../../assets/images/offer-2.jpg';
import { BREAKPOINTS } from '../../../styles/variables';

const OffersSection : FC = () => {
    return (
        <OffersSectionWrapper>
            <StyledOffersSection>
                <OfferWindow backgroundImage={offer_1} text='Get Garden Fresh Fruits' upperText='Natural!!' variant='light' />
                <OfferWindow backgroundImage={offer_2} text='Get 10% off on Vegetables' upperText='Offer!!' variant='dark' />
            </StyledOffersSection>
        </OffersSectionWrapper>
    )
}

const OffersSectionWrapper = styled(Section)`
    padding: var(--section-padding) 0;
`;


const StyledOffersSection = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(90%,68rem),1fr));
    gap: 3.6rem;
`;


export default OffersSection