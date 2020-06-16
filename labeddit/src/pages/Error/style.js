import styled from "styled-components";

export const BgImg = styled.img`
  width: 100%;
`;

export const ErrorContainer = styled.div`
  height: 99vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
`;

export const ErrorMsgContainer = styled.div`
  background-color: #e8e3f1;
  border-radius: 20px;
  color: #6b59be;
  text-shadow: 1px 1px #2f2f2f;
  p {
    font-size: 2em;
  }
`;
