import styled from "styled-components";
import { CleanButton } from "../../components/Common";

export const PostContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;
  width: 80%;
  margin: 10px auto;
  border-radius: 10px;
  padding: 10px;
  background: rgb(135, 115, 223);
  background: linear-gradient(
    117deg,
    rgba(135, 115, 223, 1) 0%,
    rgba(80, 63, 152, 1) 12%,
    rgba(60, 50, 105, 1) 27%,
    rgba(107, 61, 80, 1) 46%,
    rgba(153, 71, 54, 1) 69%,
    rgba(242, 92, 5, 1) 99%
  );
`;

export const Botao = styled(CleanButton)`
  padding: 6px;
  border-radius: 10px;
`;

export const PostTitle = styled.h3`
  cursor: pointer;
`;

export const PostText = styled.p`
  font-size: 1.4em;
`;

export const AutorText = styled.p`
  font-size: 0.8em;
`;

export const BotoesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  text-align: left;
  margin-left: 50px;
  background-color: white;
  width: 96%;
  height: 99%;
  border-radius: 10px;
  @media screen and (max-width: 500px) {
    margin-left: 10px;
  }
`;
