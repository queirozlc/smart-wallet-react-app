import styled from "styled-components";

export const InputContainer = styled.div`

    max-width: 300px;

    label {
        display: inline-block;
        margin-bottom: 10px;
    }

    input {
        border: 1px solid ${({ theme }) => theme.colors["base-dark"]};
        height: 55px;
        padding: 0 2rem;
        width: 100%;
        transition: background .5s;
        font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
        border-radius: 100px;

        &:focus{
            border-color: ${({ theme }) => theme.colors["base-background"]};
        }
    }
`;