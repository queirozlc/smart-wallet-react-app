import styled from "styled-components";

export const ComboBoxContainer = styled.div`
    max-width: 300px;

    label {
        display: inline-block;
        margin-bottom: 10px;
    }

    select {
        border: 1px solid ${({ theme }) => theme.colors["base-dark"]};
        height: 55px;
        padding: 0 2rem;
        width: 100%;
        transition: background .5s;
        font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
        border-radius: 100px;
        appearance: none;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-position: right 1rem center;
        background-size: 16px 12px;

        &:focus{
            border-color: ${({ theme }) => theme.colors["base-background"]};
        }
    }
`;