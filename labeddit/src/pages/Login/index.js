import React from "react";
import {
  LoginContainer,
  BoxLogin,
  Text,
  TextLink,
  TextContainer,
  Form,
  Input,
  FormContainer,
} from "./style";
import { Botao } from "../../components/Post/style";
import { useForm, loginRequest } from "../../functions";
import { useHistory } from "react-router-dom";

export function Login() {
  const history = useHistory();
  const { form, onChange, resetForm } = useForm({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    onChange(name, value);
  };

  const submitFunction = async (e) => {
    e.preventDefault();

    loginRequest(form, history);
  };

  const pushToSignUp = () => {
    history.push("/signup");
  };
  return (
    <LoginContainer>
      <BoxLogin>
        <FormContainer>
          <Form onSubmit={submitFunction}>
            <Input
              name="email"
              type="email"
              placeholder="Email"
              required
              onChange={handleInput}
              value={form.email}
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              required
              onChange={handleInput}
              value={form.password}
            />

            <Botao type="submit">Entrar</Botao>
          </Form>
        </FormContainer>
        <TextContainer>
          <Text>Caso ainda não esteja registrado, faça seu cadastro </Text>
          <TextLink onClick={pushToSignUp}>
            <strong>aqui</strong>
          </TextLink>
        </TextContainer>
      </BoxLogin>
    </LoginContainer>
  );
}

export default Login;
