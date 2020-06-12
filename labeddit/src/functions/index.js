import { useState, useEffect } from "react";
import axios from "axios";

export const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit";

export const useForm = (initialValues) => {
  const [form, setForm] = useState(initialValues);

  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const resetForm = () => {
    setForm(initialValues);
  };

  return { form, onChange, resetForm };
};

export const getPosts = async () => {
  const token = window.localStorage.getItem("token");

  const response = wait axios.get(`${baseUrl}/posts`, {
    headers: {
      Authorization: token,
    },
  });

  return response.data.posts;
};

export const signUpRequest = (form) => {
  const body = {
    email: form.email,
    password: form.password,
    username: form.username,
  };
  axios
    .post(`${baseUrl}/signup`, body)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const loginRequest = (form) => {
  const body = {
    email: form.email,
    password: form.password,
  }
  const response = axios
  .post(`${baseUrl}/login`,body)
  .then((res) => {
    window.alert("Login efetuado com sucesso!")
  })
  .catch((err) => {
    window.alert("Ocorreu um erro no login.")
  })
  window.localStorage.setItem("token", response.data.token)
}