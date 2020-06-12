import React, { useState, useEffect } from "react";
import { FeedContainer } from "./style";
import Post from "../../components/Post";
import { getPosts } from "../../functions";
import { Header } from "../../components/header";

export function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then((resposta) => setPosts(resposta));
  }, [])

  const teste = () => {
    console.log(posts)
  }
  return (
    <FeedContainer>
      <Header/>
      <button onClick={teste}>Teste</button>
      <Post />
    </FeedContainer>
  );
}

export default Feed;
