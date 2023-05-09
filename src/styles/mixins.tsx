import { css } from "styled-components";

export const flexCenter = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const flexSpaceBetween = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const flexStart = css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const addColorOverlay = (type:'dark' | 'light', background: string) => {
    return css`
        --overlay-color: ${type==='dark' ? "rgba(0,0,0,.4)" : "rgba(255,255,255,.6)"};
        background: 
            linear-gradient(180deg, var(--overlay-color) 0%, var(--overlay-color) 100%), 
            ${background};
    `
}