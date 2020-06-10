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

export const getPosts = () => {
  const token = window.localStorage.getItem("token");

  const response = axios
    .get(
      {
        headers: {
          Authorization: token,
        },
      },
      `${baseUrl}/posts`
    )
    .catch((err) => {
      window.alert("Ocorreu um erro ao buscar os posts");
    });

  return response;
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
