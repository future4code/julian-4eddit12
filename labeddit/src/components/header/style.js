import styled from "styled-components";
import logo from "../../imgs/logo.png";
import { CleanButton } from "../../components/Common";
export const HeaderContainer = styled.div`
  background-color: #6b59be;
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: space-between;
`;

export const Icone = styled.img`
  height: 100%;
  margin: auto auto auto 5px;
  cursor: pointer;
`;

export const ButtonLogout = styled(CleanButton)``;
