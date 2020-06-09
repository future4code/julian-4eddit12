import React from "react";
import { FeedContainer } from "./style";
import Post from "../../components/Post";
export function Feed() {
  return (
    <FeedContainer>
      <Post />
    </FeedContainer>
  );
}

export default Feed;
