import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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

  const response = await axios.get(`${baseUrl}/posts`, {
    headers: {
      Authorization: token,
    },
  });

  return response.data.posts;
};

export const signUpRequest = (form, history) => {
  const body = {
    email: form.email,
    password: form.password,
    username: form.username,
  };
  axios
    .post(`${baseUrl}/signup`, body)
    .then((res) => {
      window.alert("Usuário cadastrado com sucesso!");
    })
    .catch((err) => {
      window.alert("Seu cadastro possui dados inválidos");
    });

  history.replace("/login");
};

export const loginRequest = async (form, history) => {
  const body = {
    email: form.email,
    password: form.password,
  };
  const response = await axios
    .post(`${baseUrl}/login`, body)
    .then((response) =>
      window.localStorage.setItem("token", response.data.token)
    );

  history.push("/home");
};

export const fetchComments = async (postID) => {
  const token = window.localStorage.getItem("token");
  const response = await axios.get(`${baseUrl}/posts/${postID}`, {
    headers: { Authorization: token },
  });

  return response.data.post;
};

export const upVote = (postID) => {
  const body = {
    direction: 1,
  };

  const token = window.localStorage.getItem("token");

  axios.put(`${baseUrl}/posts/${postID}/vote`, body, {
    headers: {
      Authorization: token,
    },
  });
};

export const downVote = (postID) => {
  const body = {
    direction: -1,
  };
  const token = window.localStorage.getItem("token");

  axios.put(`${baseUrl}/posts/${postID}/vote`, body, {
    headers: {
      Authorization: token,
    },
  });
};

export const upVoteComment = (postID, commentID) => {
  const body = {
    direction: 1,
  };

  const token = window.localStorage.getItem("token");

  axios
    .put(`${baseUrl}/posts/${postID}/comment/${commentID}/vote`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.data);
    });
};

export const downVoteComment = (postID, commentID) => {
  const body = {
    direction: -1,
  };

  const token = window.localStorage.getItem("token");

  axios.put(`${baseUrl}/posts/${postID}/comment/${commentID}/vote`, body, {
    headers: {
      Authorization: token,
    },
  });
};

export const createComment = (postID, postText) => {
  const body = {
    text: postText,
  };
  const token = window.localStorage.getItem("token");

  axios.post(`${baseUrl}/posts/${postID}/comment`, body, {
    headers: {
      Authorization: token,
    },
  });
};

export const gateKeeper = (history) => {
  const token = window.localStorage.getItem("token");

  if (token === null) {
    history.push("/login");
  }
};

export const sendPost = (form) => {
  const body = form;

  const token = window.localStorage.getItem("token");

  axios
    .post(`${baseUrl}/posts`, body, { headers: { Authorization: token } })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.data);
    });
};
