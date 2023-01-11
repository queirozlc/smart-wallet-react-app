import styled from "styled-components";

export const Card = styled.div`

    background: linear-gradient(50deg, rgba(88,18,93,100) 21%, rgba(31,33,104,20) 71%);
    width: 80%;
    height: 80%;
    border-radius: 80px;
    padding: 4rem;
    box-shadow: inset 6px 6px 34px 4px rgba(0,0,0,0.6);
    flex-direction: column;
    gap: 4rem;

    > div > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5rem;
        width: 100%;
    }

    >div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    > div > div > h1 {
        text-align: center;
        margin: 0 auto;
    }

    > div > div > svg {
        position: relative;
        top: 0;
        right: 1rem;
        transition: color .4s;

        :hover {
            color: ${({ theme }) => theme.colors["base-link"]}
        }
    }
    
`;