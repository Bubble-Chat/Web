import React from "react";
import * as S from "./ContentsBox.style";
import { IFriendContents } from "../../types/IFriendContents";
import { useNavigate } from "react-router-dom";

const FriendContentsBox = (props: IFriendContents) => {
  const navigate = useNavigate();
  return (
    <S.MainContainerBox onClick={() => navigate(`/home/${props.idx}`)}>
      <S.FriendImage></S.FriendImage>
      <S.ContextWrap>
        <S.Title>{props.name}</S.Title>
        <S.Context>{props.introduce}</S.Context>
      </S.ContextWrap>
    </S.MainContainerBox>
  );
};

export default FriendContentsBox;
