import styled from "styled-components";
import backgroundImg from '../../assets/img/banner-bg.png'

export const LoginSection = styled.section`

    background-image: url(${backgroundImg});
    background-size: cover; 
    background-repeat: no-repeat;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    > div > form > div {
        min-width: 80%;
    }

    h1 {
        font-size: ${({ theme }) => theme.textSizes["title-title-l"]};
    }
`;