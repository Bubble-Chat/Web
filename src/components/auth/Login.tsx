import { useNavigate } from "react-router-dom";
import * as S from "../../styles/Login.style";
import { GoogleLogin } from "@react-oauth/google";
import API from "../../util/Api";
import { toast } from "react-toastify";
export const Login = () => {
  const Navigate = useNavigate();

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
        </S.LoginBtnWrap>
      </S.ContentContainer>
    </S.MainNav>
  );
};
