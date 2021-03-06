import React, { useState, useEffect } from "react";
import {
  FeedContainer,
  NewPostContainer,
  PostText,
  Input,
  Botao,
  Form,
} from "./style";
import Post from "../../components/Post";
import { getPosts, useForm, sendPost, gateKeeper } from "../../functions";
import { Header } from "../../components/header";
import { LoaderAnimation } from "../../pages/Comments/style";
import { useHistory } from "react-router-dom";

export function Feed() {
  const [posts, setPosts] = useState([]);

  const history = useHistory();
  useEffect(() => {
    gateKeeper(history);
    getPosts().then((resposta) => setPosts(resposta));
  }, []);

  const { form, onChange, resetForm } = useForm({
    title: "",
    text: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    onChange(name, value);
  };

  const submitFunction = async (e) => {
    e.preventDefault();

    await sendPost(form);
    resetForm();
  };

  return (
    <FeedContainer>
      <Header />
      <NewPostContainer>
        <h1>nova postagem</h1>
        <Form onSubmit={submitFunction}>
          <Input
            placeholder="Digite aqui o título do seu post"
            name="title"
            value={form.postTitle}
            onChange={handleInput}
          />
          <PostText
            placeholder="Digite aqui o conteúdo do seu post"
            name="text"
            value={form.postText}
            onChange={handleInput}
          />
          <Botao type="submit">Postar!</Botao>
        </Form>
      </NewPostContainer>
      {posts === undefined ? (
        <LoaderAnimation />
      ) : (
        posts.map((post) => <Post key={post.id} post={post} />)
      )}
    </FeedContainer>
  );
}

export default Feed;
