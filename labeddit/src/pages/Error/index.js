import React from "react";
import { BgImg, ErrorContainer, ErrorMsgContainer } from "./style";
import { BgPic } from "../../imgs/bgimg.jpg";

function ErrorScreen() {
  return (
    <ErrorContainer
      style={{ backgroundImage: `url(${require("../../imgs/bgimg.jpg")})` }}
    >
      {/* <BgImg src={BgPic} alt="background image" /> */}
      <ErrorMsgContainer>
        <p>ERRO 404:</p>
        <p>ENDEREÇO NÃO EXISTE</p>
      </ErrorMsgContainer>
    </ErrorContainer>
  );
}

export default ErrorScreen;
