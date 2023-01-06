import styled from "styled-components";

export const ButtonComponent = styled.button`
    width: 250px;
    padding: 12px 10px;
    border-radius: 50px;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-white"]};
    transition: background-color .4s;
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
    font-weight: 600;

    :hover {
        background-color: ${({ theme }) => theme.colors["base-background"]};
    }
`;