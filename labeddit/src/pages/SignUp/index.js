import React from "react";
import { SignUpContainer, FormContainer, Form, Input } from "./style";
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
          <Input name="email" type="email" required />
          <Input name="username" type="text" required />
          <Input name="password" type="password" required />
        </Form>
      </FormContainer>
    </SignUpContainer>
  );
}

export default SignUp;
