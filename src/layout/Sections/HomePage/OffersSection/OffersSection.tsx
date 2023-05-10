import { FC } from 'react'
import styled from 'styled-components'
import Section from 'src/layout/Section';
import OfferWindow from 'src/components/OfferWindow/OfferWindow';
import offer_1 from 'src/assets/images/offer-1.jpg';
import offer_2 from 'src/assets/images/offer-2.jpg';

const OffersSection : FC = () => {
    return (
        <OffersSectionWrapper>
            <StyledOffersSection>
                <OfferWindow backgroundImage={offer_1} text='Get Garden Fresh Fruits' upperText='Natural!!' variant='dark' />
                <OfferWindow backgroundImage={offer_2} text='Get 10% off on Vegetables' upperText='Offer!!' variant='light' />
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