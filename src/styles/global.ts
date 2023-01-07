import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
    }

    body {
        background: ${({ theme }) => theme.colors["base-dark"]};
        color: ${({ theme }) => theme.colors["base-white"]};
    }

    html {
        scroll-behavior: smooth;
    }
    
    a {
        text-decoration: none;
    }
    
    ul, li {
        list-style: none;
    }

    input, button {
        font-family: ${({ theme }) => theme.fonts.regular};
        font-weight: 500;
        font-size: ${({ theme }) => theme.textSizes["text-regular-m"]}
    }

    button { 
        cursor: pointer;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: ${({ theme }) => theme.fonts.title};
        font-weight: 600;
    }

    p,span, label, a {
        font-family: ${({ theme }) => theme.fonts.regular};
    }

    label {
        font-weight: 500;
    }
`;