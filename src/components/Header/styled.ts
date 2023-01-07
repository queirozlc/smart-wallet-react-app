import styled from "styled-components";

export const HeaderComponent = styled.header`
    height: 5rem;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: transparent;
    display: flex;
    align-items: center;

    > div {
        padding: 3rem;
        
    }

    h2 {
        color: ${({ theme }) => theme.colors["base-white"]};
    }

    h3 {
        display: inline-block;
    }

    nav {
        width: 100%;
        max-width: 1200px;
    }

    nav > div {
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: 3rem;
    }

    nav > div > ul > li > a {
        font-weight: 600;
        font-size: ${({ theme }) => theme.textSizes["text-regular-l"]};
        color:${({ theme }) => theme.colors["base-white"]};
        cursor: pointer;
        transition: color .4s;

        &:hover {
            color: ${({ theme }) => theme.colors["base-link"]}
        }
    }
`;