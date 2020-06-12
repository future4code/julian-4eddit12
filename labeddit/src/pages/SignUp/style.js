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
  width: 80%;
  background-color: #e8e3f1;
  border-radius: 10px;
  padding: 10px;
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;

export const Form = styled.form`
  height: 30vh;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  input {
    width: 60%;
  }
`;

export const Input = styled.input`
  height: 30px;
  border: 2px #6b59be solid;
  margin: 5px;
  border-radius: 10px;
`;

export const Botao = styled(CleanButton)``;
