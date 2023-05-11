import React from "react";
import * as S from "./ContentsBox.style";

const FriendContentsBox = () => {
  return (
    <S.MainContainerBox>
      <S.FriendImage></S.FriendImage>
      <S.ContextWrap>
        <S.Title>이름</S.Title>
        <S.Context>안녕하세요오오...............</S.Context>
      </S.ContextWrap>
    </S.MainContainerBox>
  );
};

export default FriendContentsBox;
