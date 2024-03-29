import React from "react";
import SideBar from "../common/Sidebar/SideBar";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Setting = () => {
  const Navigate = useNavigate();
  return (
    <>
      <SideBar title="설정" index={4}>
        <>
          <S.ContentsContainer>
            <S.Icon></S.Icon>
            <S.ContentsContext>버블챗 공지</S.ContentsContext>
          </S.ContentsContainer>
          <S.ContentsContainer>
            <S.Icon></S.Icon>
            <S.ContentsContext>버블챗 사용법</S.ContentsContext>
          </S.ContentsContainer>
          <S.ContentsContainer>
            <S.Icon></S.Icon>
            <S.ContentsContext>고객 센터</S.ContentsContext>
          </S.ContentsContainer>
          <S.ContentsContainer>
            <S.Icon></S.Icon>
            <S.ContentsContext>차단 맴버 관리</S.ContentsContext>
          </S.ContentsContainer>
          <S.ContentsContainer
            onClick={() => {
              localStorage.removeItem("accessToken");
              toast.error("로그아웃하셨습니다.");
              Navigate("/");
            }}
          >
            <S.Icon></S.Icon>
            <S.ContentsContext>로그아웃</S.ContentsContext>
          </S.ContentsContainer>
        </>
      </SideBar>
    </>
  );
};

export default Setting;
