import styled from "styled-components";

export const CardGlass = styled.div`
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(9.85px);
    -webkit-backdrop-filter: blur(8.8px);
    width: 55%;
    padding: 3.5rem;
    transition: .4s;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 2rem;


    h1 {
        text-align: center;
    }

    p {
        font-weight: 500;
        font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
        margin-right: .5rem;
        text-align: center;
    }

    a {
        text-decoration: underline;
        font-weight: 300;
        margin-left: .35rem;
        text-align: center;
        color:${({ theme }) => theme.colors["base-white"]};
        transition: color .3s;

        &:hover {
            color: ${({ theme }) => theme.colors["base-link"]};
        }
    }
`;