import styled from "styled-components";
import { CleanButton } from "../../components/Common";
export const FeedContainer = styled.div``;

export const PostText = styled.textarea`
  height: 150px;
  width: 600px;
  border: 2px #6b59be solid;
  margin: 5px;
  border-radius: 10px;
`;

export const Input = styled.input`
  height: 30px;
  border: 2px #6b59be solid;
  margin: 5px;
  border-radius: 10px;
  width: 30%;
`;
export const NewPostContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  width: 83%;
  margin: auto;
  background-color: #e8e3f1;
  border-radius: 10px;
  text-align: left;
  h1 {
    margin-left: 20px;
  }
`;

export const Botao = styled(CleanButton)``;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  text-align: left;
`;
