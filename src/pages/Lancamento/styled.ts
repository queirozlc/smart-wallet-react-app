import styled from "styled-components";
import { LoginSection } from "../Login/styled";

export const LancamentoSection = styled(LoginSection)`

    > div {
        width: 75%;
    }

    > div > form {
        display: grid;
    }

    > div > form > div { 
        min-width: 50%;
    }

    > div > div {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        justify-content: start;
    }

`;