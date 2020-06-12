import React, { useState } from "react";
import { FeedContainer } from "./style";
import Post from "../../components/Post";
import { getPosts } from "../../functions";

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
      <button onClick={teste}>Teste</button>
      <Post />
    </FeedContainer>
  );
}

export default Feed;
