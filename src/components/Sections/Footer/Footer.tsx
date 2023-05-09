import { FC } from 'react'
import styled from 'styled-components'
import Section from '../../../layout/Section';
import Logo from '../../Logo/Logo';
import Paragraph, { StyledParagraph } from '../../Paragraph/Paragraph';
import { flexCenter } from '../../../styles/mixins';
import { SOCIALS, SOCIAL_ICONS, COMPANY_INFO } from '../../../data/socials';
import CircleLink from '../../CircleLink/CircleLink';
import Heading, { HeadingLevel } from '../../Heading/Heading';
import FooterGroup, { IFooterGroupItem } from './FooterGroup';
import { BREAKPOINTS } from '../../../styles/variables';

const Footer : FC = () => {
    const footerSocials = [
        {icon: SOCIAL_ICONS.facebook,url: SOCIALS.facebook},
        {icon: SOCIAL_ICONS.twitter,url: SOCIALS.twitter},
        {icon: SOCIAL_ICONS.instagram,url: SOCIALS.instagram},
        {icon: SOCIAL_ICONS.pinterest,url: SOCIALS.pinterest}
    ];

    const contactItems : IFooterGroupItem[] = [
        {label: "Email", text: COMPANY_INFO.email, url: COMPANY_INFO.email, urlPrefix: "mailto:"},
        {label: "Phone", text: COMPANY_INFO.phone, url: COMPANY_INFO.phone, urlPrefix: "tel:"},
        {label: "Address", text: COMPANY_INFO.address},
    ]

    const pages : IFooterGroupItem[] = [
        {text: "404 Not Found", url: '/404', insideLink: true},
        {text: "Password Protected", url: '/password', insideLink: true},
        {text: "About", url: '/about', insideLink: true},
        {text: "Services", url: '/services', insideLink: true},
    ]

    return (
        <FooterWrapper as="footer">
            <StyledFooter>
                <FooterContact>
                    <Heading level={HeadingLevel.h5}>Contact Us</Heading>
                    <FooterGroup items={contactItems} align="right" />
                </FooterContact>
                <FooterCenter>
                    <Logo />
                    <Paragraph textAlign='center'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing </Paragraph>
                    <LinkGroup>
                        {footerSocials.map((social,index) => <CircleLink icon={social.icon} url={social.url} key={'footersocial-'+index} />)}
                    </LinkGroup>
                </FooterCenter>
                <FooterUtility>
                    <Heading level={HeadingLevel.h5}>Utility Pages</Heading>
                    <FooterGroup items={pages} align='left' />
                </FooterUtility>
                <FooterBottom>
                    <Paragraph textAlign='center'>Copyright © <b>Organick</b> | Designed by <b>VictorFlow</b> Templates - Powered by <b>Webflow</b> </Paragraph>
                </FooterBottom>
            </StyledFooter>
        </FooterWrapper>
    )
}

const FooterWrapper = styled(Section)`

`;

const FooterContact = styled.address`
    grid-area: contact;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;

    padding-right: var(--footer-spacing);
    font-style: normal;

    @media only screen and (${BREAKPOINTS.small}){
        align-items: center;
        padding-right: 0;
    }
`

const FooterCenter = styled.div`
    grid-area: center;
    ${flexCenter};
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 5.5rem;

    border-left: var(--border-thin);
    border-right: var(--border-thin);

    & > ${StyledParagraph} {
        margin-top: 3rem;
    }

    @media only screen and (${BREAKPOINTS.burger}){
        padding: 0 1rem;
    }
`

const LinkGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    margin-top: 5rem;
`;

const FooterUtility = styled.div`
    grid-area: utility;
    padding-left: var(--footer-spacing);

    @media only screen and (${BREAKPOINTS.small}){
        padding-left: 0;
        text-align: center;
    }
`;

const FooterBottom = styled.div`
    grid-area: bottom;
    padding: .7rem 0;
    margin-top: 5rem;
    border-top: var(--border-thin);
`;

const StyledFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-areas: "contact center utility" "bottom bottom bottom";

    --footer-spacing: 5rem;

    @media only screen and (${BREAKPOINTS.big}){
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "center center" "utility contact" "bottom bottom";
        gap: 5rem;
    }

    @media only screen and (${BREAKPOINTS.small}){
        grid-template-columns: 1fr;
        grid-template-areas: "center" "contact" "utility" "bottom";
    }
`;

export default Footer