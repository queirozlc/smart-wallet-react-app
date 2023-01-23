import styled from "styled-components";
import { LoginSection } from "../../../Login/styled";

export const Container = styled(LoginSection)`

    > div {
        min-width: 65%;
    }

    .btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2.5rem;
        margin-top: .75rem;
    }

    .btn > button, a > button {
        width: 300px;
    }

    > div > form > div {
        min-width: 100%;
    }

    > div > form > div > div {
        display: flex;
        width: 100%;

        > div {
            width: 100%;
        }

        > div:not(:last-child) {
            margin-right: 1rem;
        }
    }

    .row > div {
        min-width: 50%;
    }

    .row-3 > div {
        max-width: unset;
    }

`;