import styled from "styled-components";

export const LoginContainer = styled.div`
  border: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxLogin = styled.div`
  width: 600px;
  height: 300px;
  background: #e8e3f1;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const TextLink = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.span`
  color: black;
`;

export const TextContainer = styled.div`
  color: black;
  margin: 30px 20px;
  font-size: 0.8em;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  input {
    width: 80%;
  }
`;

export const Input = styled.input`
  height: 30px;
  border: 2px #6b59be solid;
  margin: 5px;
  border-radius: 10px;
`;

export const FormContainer = styled.div`
  width: 90%;
  background-color: #e8e3f1;
  border-radius: 10px;
  padding: 10px;
  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;
