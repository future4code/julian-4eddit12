import styled from "styled-components";
import { keyFrameLoading } from "../../components/Common/keyframes";

export const CleanButton = styled.button`
  display: inline-block;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #6b59be;
  color: #e8e3f1;
  letter-spacing: 1px;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:hover,
  &:focus {
    background: #292440;
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
`;

export const Loader = styled.div`
  position: absolute;
  margin-left: 30%;
  border: 4px solid transparent;
  height: 23vh;
  width: 10vw;
  border-bottom: 5px solid #e8e3f1;
  border-radius: 50%;
  animation: animate 1s linear infinite;
  animation-name: ${keyFrameLoading};
`;
