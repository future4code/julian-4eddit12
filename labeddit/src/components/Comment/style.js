import styled from "styled-components";
import { CleanButton } from "../../components/Common";

export const CommentContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: 6% 94%;
`;

export const DetailsText = styled.p`
  font-size: 0.7em;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

export const Botao = styled(CleanButton)`
  padding: 6px;
`;

export const BotoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommentText = styled.p`
  font-size: 1.5em;
`;
