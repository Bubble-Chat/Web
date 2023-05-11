import React from "react";
import * as S from "./ContentsBox.style";
import { IFriendContents } from "../../../types/IFriendContents";

const FriendContentsBox = (props: IFriendContents) => {
  return (
    <S.MainContainerBox>
      <S.FriendImage></S.FriendImage>
      <S.ContextWrap>
        <S.Title>{props.name}</S.Title>
        <S.Context>{props.introduce}</S.Context>
      </S.ContextWrap>
    </S.MainContainerBox>
  );
};

export default FriendContentsBox;
