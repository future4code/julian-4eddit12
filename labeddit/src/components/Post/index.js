import React from "react";
import {
  PostContainer,
  PostTitle,
  PostText,
  Botao,
  BotoesContainer,
  TextContainer,
  AutorText,
} from "./style";
import UpVote from "../../imgs/upvote-icon.svg";
import DownVote from "../../imgs/downvote-icon.svg";
import { useHistory } from "react-router-dom";

function Post(props) {
  const history = useHistory();

  const openPost = () => {
    history.push(`/comment/${props.post.id}`);
  };

  return (
    <PostContainer>
      <BotoesContainer>
        <Botao>
          <img src={UpVote} alt="Upvote icon" height="30px" />
        </Botao>
        <p>{props.post.votesCount}</p>
        <Botao>
          <img src={DownVote} alt="Upvote icon" height="30px" />
        </Botao>
      </BotoesContainer>
      <TextContainer>
        <AutorText>por {props.post.username}</AutorText>
        <PostTitle onClick={openPost}>{props.post.title}</PostTitle>
        <PostText>{props.post.text}</PostText>
        <Botao onClick={openPost}>{props.post.commentsCount} Comentarios</Botao>
      </TextContainer>
    </PostContainer>
  );
}

export default Post;
