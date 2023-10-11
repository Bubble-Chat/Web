import React from "react";
import * as S from "./ContentsBox.style";
import { IRoomContents } from "../../types/IRoomContents";

const RoomContentsBox = (props: IRoomContents) => {
  return (
    <S.MainContainerBox>
      <S.RoomImage></S.RoomImage>
      <S.ContextWrap>
        <S.RoomTitleWrap>
          <S.Title>{props.name}</S.Title>
          <p>{props.NumOfPersons}</p>
        </S.RoomTitleWrap>
        <S.Context>{props.lastMessage}</S.Context>
      </S.ContextWrap>
    </S.MainContainerBox>
  );
};

export default RoomContentsBox;
