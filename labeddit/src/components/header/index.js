import React from "react";
import { HeaderContainer, Icone, ButtonLogout } from "./style";
import logo from "../../imgs/logo.png";
import { useHistory } from "react-router-dom";
export function Header() {
  const history = useHistory();

  const backToFeed = () => {
    history.push("/home");
  };

  const logoutFunction = () => {
    window.localStorage.clear();
    history.push("/login");
  };
  return (
    <HeaderContainer>
      <Icone src={logo} alt="icon" onClick={backToFeed} />
      <ButtonLogout onClick={logoutFunction}>Sair</ButtonLogout>
    </HeaderContainer>
  );
}

export default Header;
