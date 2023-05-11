import React from "react";
import * as S from "./ContentsBox.style";

const RoomContentsBox = () => {
  return (
    <S.MainContainerBox>
      <S.RoomImage></S.RoomImage>
      <S.ContextWrap>
        <S.RoomTitleWrap>
          <S.Title>이름</S.Title>
          <p>인원수</p>
        </S.RoomTitleWrap>
        <S.Context>마지막 채팅</S.Context>
      </S.ContextWrap>
    </S.MainContainerBox>
  );
};

export default RoomContentsBox;
