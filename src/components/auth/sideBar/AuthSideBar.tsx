import React from "react";
import * as S from "./AuthSideBar.Style";

const SideBar = () => {
  return (
    <S.MainBackground>
      <S.Wrap>
        <S.IconBox />
        <S.SloganTitle>간편한 메세지 플랫폼</S.SloganTitle>
        <S.SloganSubTitle>지금 시작하세요</S.SloganSubTitle>
      </S.Wrap>
    </S.MainBackground>
  );
};

export default SideBar;
