import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/Login.style";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import API from "../../util/Api";
import { toast } from "react-toastify";
export const Login = () => {
  const Navigate = useNavigate();
  // const googleSocialLogin = useGoogleLogin({
  //   scope: "email profile",
  //   onSuccess: async (res) => {
  //     console.log("dfdfd", res);

  //     API.post("/api/v1/user/signin", null, {
  //       params: {
  //         provider: "google",
  //         token: code,
  //       },
  //     })
  //       .then((e) => console.log("d", e))
  //       .catch((e) => console.log("ddd", e));

  // let xhr = new XMLHttpRequest();

  // let params1: any = {
  //   provider: "google",
  //   token: code,
  // };

  // xhr.addEventListener("readystatechange", () => {
  //   if (xhr.readyState == 4) {
  //     console.log(xhr.status, xhr.response);
  //   }
  // });

  // xhr.open(
  //   "get",
  //   "http://10.80.161.132.nip.io:8080/api/v1/user/signin?provider=google&token=" +
  //     code
  // );
  // xhr.responseType = "json";
  // xhr.send();
  //   },
  //   onError: (errorResponse) => {
  //     console.error(errorResponse);
  //   },
  //   flow: "auth-code",
  // });
  return (
    <S.MainNav>
      <S.ContentContainer>
        <S.Title>Login</S.Title>
        <S.LoginBtnWrap>
          <GoogleLogin
            onSuccess={(res) => {
              console.log(res);
              API.post("/api/v1/user/signin", {
                email: "gmbae06@dgsw.hs.kr",
                name: "2307배경민",
              })
                .then(() => {
                  toast.success("로그인 하였습니다!");
                  Navigate("/home");
                })
                .catch((e) => console.log("ddd", e));
            }}
          />
          {/* <S.LoginBtn onClick={googleSocialLogin}>카카오로 시작하기</S.LoginBtn>
          <S.LoginBtn onClick={googleSocialLogin}>네이버로 시작하기</S.LoginBtn> */}
        </S.LoginBtnWrap>
        <S.LoginStateBtn onClick={() => Navigate("/home/")}>
          계정이 있다면 로그인하기
        </S.LoginStateBtn>
      </S.ContentContainer>
    </S.MainNav>
  );
};
