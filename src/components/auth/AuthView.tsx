import React from "react";
import { Login } from "./Login";
import SideBar from "./sideBar/AuthSideBar";
import * as S from "../../styles/AuthView.style";

const AuthView = () => {
  return (
    <S.MainNav>
      <S.SubNav>
        <SideBar></SideBar>
        <Login></Login>
      </S.SubNav>
    </S.MainNav>
  );
};

export default AuthView;
