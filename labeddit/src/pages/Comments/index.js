import React, { useEffect, useState } from "react";
import {
  PostContainer,
  DetailsText,
  CommentWrapper,
  BotoesContainer,
  Botao,
  CommentArea,
  CommentContainer,
  LoaderAnimation,
} from "./style";
import { useParams, useHistory } from "react-router-dom";
import {
  fetchComments,
  upVote,
  downVote,
  createComment,
  gateKeeper,
} from "../../functions";
import UpVote from "../../imgs/upvote-icon.svg";
import DownVote from "../../imgs/downvote-icon.svg";
import CommentIcon from "../../imgs/comment-icon.svg";
import { Comment } from "../../components/Comment";

export function CommentPage() {
  const pathParams = useParams();

  const history = useHistory();

  const [post, setPost] = useState({});

  const [date, setDate] = useState("");

  const [postText, setPostText] = useState("");

  useEffect(() => {
    gateKeeper(history);
    fetchComments(pathParams.postID)
      .then((res) => setPost(res))
      .then(getDate(post));
  }, []);

  const getDate = (post) => {
    let date = Date(post.createAt);
    setDate(date.toString());
  };

  const voteUp = () => {
    upVote(post.id);
  };

  const voteDown = () => {
    downVote(post.id);
  };

  const onChangeText = (e) => {
    setPostText(e.target.value);
  };

  const comment = () => {
    const postID = post.id;
    createComment(postID, postText);

    setPostText("");
  };

  return (
    <PostContainer>
      <BotoesContainer>
        <Botao onClick={voteUp}>
          <img src={UpVote} width="20px" alt="Upvote" />
        </Botao>
        {post.votesCount}
        <Botao onClick={voteDown}>
          <img src={DownVote} width="20px" alt="Downvote" />
        </Botao>
      </BotoesContainer>
      <CommentWrapper>
        <DetailsText>
          Postado por<strong> {post.username} </strong> em {date}
        </DetailsText>
        <h2>{post.title}</h2>
        <p>{post.text}</p>
        <h2>Quero dar meu pitaco</h2>
        <CommentArea value={postText} onChange={onChangeText} />
        <Botao onClick={comment}>
          <img src={CommentIcon} alt="Comment icon" width="22px" />
          Comentar
        </Botao>
      </CommentWrapper>
      <CommentContainer>
        {post.comments === undefined ? (
          <LoaderAnimation />
        ) : (
          post.comments.map((comment) => {
            return (
              <Comment key={comment.id} comment={comment} postID={post.id} />
            );
          })
        )}
      </CommentContainer>
    </PostContainer>
  );
}

export default CommentPage;
