import React from "react";
import { LoginContainer, BoxLogin, ButtonContainer } from "./style";
import { FormContainer, Form, Input } from "../SignUp/style";
import { Botao } from "../../components/Post/style";

export function Login() {
/*   const { form, onChance, resetForm } = useForm({
    name: "",
    password: "",
  }) */

  return (
    <LoginContainer>
      <BoxLogin>
          <Form>
            <Input
            name="username"
            type="text"
            placeholder="Usuário"
            required
            />

            <Input
            name="email"
            type="email"
            placeholder="Senha"
            required
            />
          </Form>

          <Botao>Entrar</Botao>
      </BoxLogin>
    </LoginContainer>
  );
}

export default Login;