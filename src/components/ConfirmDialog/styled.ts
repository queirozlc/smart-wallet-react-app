import styled from "styled-components";

interface Props {
    visible: boolean
}

export const ConfirmContainer = styled.div<Props>`
    display: ${({ visible }) => visible === true ? 'flex' : 'none'};
    position: absolute;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const ConfirmStyled = styled.div<Props>`
    display: ${({ visible }) => visible === true ? 'flex' : 'none'};
    
    > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        background: ${({ theme }) => theme.colors["base-background"]};
        padding: 3rem 2rem;
        border-radius: 25px;
        box-shadow: inset 5px 5px 33px 11px rgba(0,0,0,0.2);
    }

    > div > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        > h3 {
            margin: 0 auto;
            font-size: ${({ theme }) => theme.textSizes["title-title-m"]};
        }

        > svg {
            cursor: pointer;
            transition: color .4s;

            &:hover {
                color: ${({ theme }) => theme.colors["base-link"]};
            }
        }

        > span {
            font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
            font-weight: 500;
            margin: 0 auto;
        }

        > div > button {
            border-color: ${({ theme }) => theme.colors["base-button"]};
            transition: background-color .4s;
            width: 150px;
            border-radius: 80px;

            &:hover {
                background-color: ${({ theme }) => theme.colors["base-button"]}
            }
        }

        > div > button:not(:last-child) {
            background-color: ${({ theme }) => theme.colors["base-button"]}
        } 

    }

    > div > div > div {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        gap: 1rem;
    }
`;