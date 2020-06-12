import styled from "styled-components";
import { logo } from "./imgs/logo.pgn";

export const HeaderContainer = styled.div`
    background-color: #292440;
    width: 100vw;
    height: 12vh;
    display: flex;
    justify-content: space-around;
`

export const Icone = styled.div`
    width: 50px;
    height: auto;
    background-image: url(logo);
`

export const ButtonLogout = styled.div`
    width: 50px;
    height: 100%;
`