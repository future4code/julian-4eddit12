import styled from "styled-components";
import { CleanButton } from "../../components/Common";
export const SignUpContainer = styled.div`
  min-height: 99vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  border: 2px black solid;
  width: 40%;
  background-color: #e8e3f1;
  border-radius: 10px;
  padding: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  input {
    width: 60%;
  }
`;

export const Input = styled.input``;

export const Botao = styled(CleanButton)``;
