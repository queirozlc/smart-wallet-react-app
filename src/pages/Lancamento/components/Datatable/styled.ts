import styled from "styled-components";

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
    transition: all .5s;
    top: ${({ isActive }) => isActive === true ? 0 : '-400%'};
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

    > tbody {
        transition: background .4s;

        :hover {
            background-color: ${({ theme }) => theme.colors["base-background"]}
        }
    }

    > tbody > tr > td {
        padding: 1rem 2rem;
        font-weight: 800;
    }

    > tbody > tr > td > button {
        width: 100px;
        background-color: ${({ theme }) => theme.colors["base-button"]};
        border: none;
        
        :hover {
            background-color:${({ theme }) => theme.colors["base-button"]}
        }
    }

`;