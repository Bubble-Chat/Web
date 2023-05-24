import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/Login.style";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

export const Login = () => {
  const Navigate = useNavigate();
  const googleSocialLogin = useGoogleLogin({
    scope: "email profile",
    onSuccess: async ({ code }) => {
      console.log(code);
    },
    onError: (errorResponse) => {
      console.error(errorResponse);
    },
    flow: "auth-code",
  });
  return (
    <S.MainNav>
      <S.ContentContainer>
        <S.Title>Login</S.Title>
        <S.GoogleLoginBtn onClick={googleSocialLogin}>
          구글로 시작하기
        </S.GoogleLoginBtn>
        <S.LoginBtn onClick={() => Navigate("/home")}>
          계정이 있다면 로그인하기
        </S.LoginBtn>
      </S.ContentContainer>
    </S.MainNav>
  );
};
