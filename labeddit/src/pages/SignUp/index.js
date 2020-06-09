import React from "react";
import { SignUpContainer, FormContainer, Form, Input, Botao } from "./style";
import { useForm } from "../../functions";

export function SignUp() {
  const { form, onChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  return (
    <SignUpContainer>
      <FormContainer>
        <Form>
          <Input
            name="email"
            type="email"
            required
            placeholder="Digite seu email"
          />
          <Input
            name="username"
            type="text"
            placeholder="Digite seu nome de usuário"
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Digite sua senha"
            required
          />
          <Botao>Pronto!</Botao>
        </Form>
      </FormContainer>
    </SignUpContainer>
  );
}

export default SignUp;
