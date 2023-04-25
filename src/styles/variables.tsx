/* eslint-disable react-refresh/only-export-components */
import { css } from "styled-components";

export const BREAKPOINTS = {
    remToggle: "max-width:93.75em",
    burger: "max-width: 750px"
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

        --fw-regular: 400;
        --fw-bold: 700;

        //SIZE
        --website-width: 140rem;

        //BORDERS
        --border-thin: .1rem solid #E0E0E0;

        //ANIMATIONS
        --transition-primary: all .2s ease-in-out;
    }
`;