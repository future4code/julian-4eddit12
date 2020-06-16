import React, { useState, useEffect } from "react";
import {
  CommentContainer,
  DetailsText,
  TextWrapper,
  BotoesContainer,
  Botao,
  CommentText,
} from "./style";
import { useHistory, useParams } from "react-router-dom";
import UpVote from "../../imgs/upvote-icon.svg";
import DownVote from "../../imgs/downvote-icon.svg";
import { upVoteComment, downVoteComment } from "../../functions";

export function Comment(props) {
  const [date, setDate] = useState();

  useEffect(() => {
    getDate();
  }, []);
  const getDate = (createdAt) => {
    let date = Date(props.comment.createdAt);
    setDate(date.toString());
  };

  const voteComment = () => {
    const postID = props.post.id;
    const commentID = props.comment.id;

    upVoteComment(postID, commentID);
  };

  const voteCommentdown = () => {
    const postID = props.post.id;
    const commentID = props.comment.id;

    downVoteComment(postID, commentID);
  };

  return (
    <CommentContainer>
      <BotoesContainer>
        <Botao onClick={voteComment}>
          <img src={UpVote} width="10px" alt="Upvote" />
        </Botao>
        {props.comment.votesCount}
        <Botao onClick={voteCommentdown}>
          <img src={DownVote} width="10px" alt="Downvote" />
        </Botao>
      </BotoesContainer>
      <TextWrapper>
        <DetailsText>
          <strong>{props.comment.username} </strong>em {date}
        </DetailsText>
        <CommentText>{props.comment.text}</CommentText>
      </TextWrapper>
    </CommentContainer>
  );
}

export default Comment;
