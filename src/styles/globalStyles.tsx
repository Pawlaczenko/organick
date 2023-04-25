import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { BREAKPOINTS, variables } from "./variables";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${variables}

    html {
        font-size: 62.5%;

        @media only screen and (${BREAKPOINTS.remToggle}){
            font-size: 50%;
        }
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-size: var(--fs-body);
    }
`;

export default GlobalStyles;