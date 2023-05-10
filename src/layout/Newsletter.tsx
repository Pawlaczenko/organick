import { FC } from 'react'
import styled from 'styled-components'
import Section from 'src/layout/Section';
import NewsletterBackground from 'src/assets/images/newsletter-background.png';
import Heading, { HeadingLevel, StyledHeading } from 'src/components/Heading';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import { BREAKPOINTS } from 'src/styles/variables';
import { addColorOverlay, flexCenter } from 'src/styles/mixins';

const Newsletter : FC = () => {
    return (
        <NewsletterWrapper>
            <StyledNewsletter>
                <Heading level={HeadingLevel.h2} type='white'>Subscribe to <br /> our Newsletter</Heading>
                <StyledNewsletterForm method='POST'>
                    <Input placeholder="Your Email Address" type='email'/>
                    <Button buttonType='default'>Subscribe</Button>
                </StyledNewsletterForm>
            </StyledNewsletter>
        </NewsletterWrapper>
    )
}

const NewsletterWrapper = styled(Section)`
    padding-bottom: var(--section-padding);    
`;


const StyledNewsletter = styled.div`
    --background: url(${NewsletterBackground}) bottom / cover no-repeat; 
    background: var(--background);
    border-radius: 3rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .6rem;
    flex-wrap: wrap;
    padding: 12rem 7rem;

    & > ${StyledHeading} {
        flex: 1;
    }

    @media only screen and (${BREAKPOINTS.big}){
        flex-direction: column;
        padding: 8rem 3rem;
        text-align: center;

        & > ${StyledHeading} {
            margin-bottom: 4rem;
        }
        ${addColorOverlay('dark','var(--background)')};
    }
`;

const StyledNewsletterForm = styled.form`
    ${flexCenter}
    flex-wrap: wrap;
    gap: .6rem;
`;

export default Newsletter