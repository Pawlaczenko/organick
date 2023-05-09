/* eslint-disable react-refresh/only-export-components */
import { css } from "styled-components";

export const BREAKPOINTS = {
    remToggle: "max-width:93.75em",
    big: "max-width: 910px",
    burger: "max-width: 750px",
    small: "max-width: 500px"
}

export const variables = css`
    html {
        //COLORS    
        --color-primary: #274C5B;
        --color-secondary: #7EB693;
        --color-accent: #EFD372;
        --color-grey: #525C60;
        --color-grey-light: #D4D4D4;
        --color-light-1: #F9F8F8;
        --color-light-2: #EFF6F1;


        //TYPOGRAPHY
        --fs-h1: 7rem;
        --fs-h2: 5rem;
        --fs-h3: 4rem;
        --fs-h4: 3.5rem;
        --fs-h5: 3rem;
        --fs-h6: 2.5rem;
        --fs-quote: 2rem;
        --fs-paragraph: 1.8rem;

        @media only screen and (${BREAKPOINTS.small}){
            --fs-h1: 6rem;
        }

        --fw-regular: 400;
        --fw-medium: 500;
        --fw-semi-bold: 600;
        --fw-bold: 700;
        --fw-extra-bold: 900;

        --family-primary: 'Roboto', sans-serif;
        --family-secondary: 'Open Sans', sans-serif;

        //SIZE
        --website-width: 140rem;
        --section-padding: 15rem;
        @media only screen and (${BREAKPOINTS.burger}){
            --section-padding: 9.5rem;
        }
        
        --input-radius: 1.6rem;
        --input-padding: 2.5rem;

        //BORDERS
        --border-thin: .1rem solid #E0E0E0;

        //ANIMATIONS
        --transition-primary: all .2s ease-in-out;
    }
`;