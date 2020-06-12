import styled from "styled-components";
import { CleanButton } from "../../components/Common";

export const CommentContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 6% 94%;
  border-radius: 10px;
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

export const DetailsText = styled.p`
  font-size: 0.7em;
  background-color: white;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: auto auto auto 20px;
  background-color: white;
  width: 98%;
  height: 95%;
  border-radius: 10px;
`;

export const Botao = styled(CleanButton)`
  padding: 2px;
`;

export const BotoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommentText = styled.p`
  font-size: 1.5em;
`;
