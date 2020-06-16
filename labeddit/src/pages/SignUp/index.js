import React from "react";
import { SignUpContainer, FormContainer, Form, Input, Botao } from "./style";
import { useForm, signUpRequest } from "../../functions";
import { useHistory } from "react-router-dom";

export function SignUp() {
  const history = useHistory();

  const { form, onChange, resetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    onChange(name, value);
  };

  const submitFunction = async (e) => {
    e.preventDefault();

    await signUpRequest(form, history);

    resetForm();
  };

  return (
    <SignUpContainer>
      <FormContainer>
        <Form onSubmit={submitFunction}>
          <Input
            name="email"
            type="email"
            value={form.email}
            required
            patter="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            placeholder="Digite seu email"
            onChange={handleInput}
          />
          <Input
            name="username"
            type="text"
            value={form.username}
            placeholder="Digite seu nome de usuário"
            required
            pattern="^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$"
            onChange={handleInput}
          />
          <Input
            name="password"
            type="password"
            value={form.password}
            placeholder="Digite sua senha"
            required
            onChange={handleInput}
          />
          <Botao>Pronto!</Botao>
        </Form>
      </FormContainer>
    </SignUpContainer>
  );
}

export default SignUp;
