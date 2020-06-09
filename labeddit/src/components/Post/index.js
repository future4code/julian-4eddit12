import React from "react";
import {
  PostContainer,
  PostTitle,
  PostText,
  Botao,
  BotoesContainer,
  TextContainer,
} from "./style";

function Post() {
  return (
    <PostContainer>
      <BotoesContainer>
        <Botao>/\</Botao>
        <Botao>\/</Botao>
      </BotoesContainer>
      <TextContainer>
        <PostTitle>Título do Post</PostTitle>
        <PostText>
          “The individual has always had to struggle to keep from being
          overwhelmed by the tribe. If you try it, you will be lonely often, and
          sometimes frightened. But no price is too high to pay for the
          privilege of owning yourself.”
        </PostText>
        <Botao>Comentarios</Botao>
      </TextContainer>
    </PostContainer>
  );
}

export default Post;
