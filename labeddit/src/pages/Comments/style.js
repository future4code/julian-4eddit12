import styled from "styled-components";
import { CleanButton, Loader } from "../../components/Common";
export const PostContainer = styled.div`
  background-color: #e8e3f1;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: 5% 95%;
`;

export const DetailsText = styled.p`
  font-size: 0.7em;
`;

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 50px;
`;

export const Botao = styled(CleanButton)``;

export const BotoesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CommentArea = styled.textarea`
  height: 100px;
  width: 60%;
  border: 1px solid #292440;
`;

export const CommentContainer = styled.div`
  grid-column-start: 2;
  background-color: white;
`;

export const LoaderAnimation = styled(Loader)``;
