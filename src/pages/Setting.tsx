import React from "react";
import SideBar from "../components/sidebar/SideBar";
import * as S from "../styles/pages/Setting.style";
import ContentsBox from "../components/contents/ContentsBox";

const Setting = () => {
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
        </>
      </SideBar>
      <ContentsBox setting={{ title: "setting" }} />
    </>
  );
};

export default Setting;
