import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

interface Props {
    isActive: boolean;
}

export const CardContainer = styled.div<Props>`

    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,.65);
    display: ${({ isActive }) => isActive === true ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    transition: .5s;
    left: -400%;
    ${({ isActive }) => isActive && css`
        left: 0;
    `};
`;

export const Table = styled.table`
    width: 100%;
    box-shadow: 5px 5px 24px 2px rgba(0,0,0,0.47);
    text-align: left;
    overflow: hidden;

    > thead > tr > th {
        padding: 1rem 2rem;
        text-transform: uppercase;
        letter-spacing: .1rem;
        font-weight: 700;
        border-bottom: 2px solid ${({ theme }) => theme.colors["base-white"]};
    }

    > tbody > tr:not(:last-child) {
        border-bottom: 1px solid #fff;
    }

    > tbody > tr {
        transition: background .4s;

        :hover {
            background-color: ${({ theme }) => theme.colors["base-background"]};
        }
    }

    > tbody > tr > td {
        padding: 1rem 2rem;
        text-align: center;
        font-weight: 800;
    }

    > tbody > tr > td > button {
        width: 75px;
        border-color: ${({ theme }) => darken(0.1, theme.colors["base-background"])};
        border-radius: 10px;

        :hover {
            background-color: ${({ theme }) => darken(0.034, theme.colors["base-background"])}
        }
    }

    > tbody > tr > td:last-child {
    padding: 1rem .75rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    }

`;