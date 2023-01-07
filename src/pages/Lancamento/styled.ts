import styled from "styled-components";
import { LoginSection } from "../Login/styled";

export const LancamentoSection = styled(LoginSection)`

    > div > form {
        display: grid;
        justify-content: center;
    }

    > div > div {
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

`;