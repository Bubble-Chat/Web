import React from "react";
import * as S from "./FriendBox.style";

interface IChattingBox {
  title: string;
  introduce: string;
  id: string;
  idx: number;
}

const FriendBox = (props: IChattingBox) => {
  return (
    <S.MainContainer>
      <S.UserImage />
      <S.UserName>{props.title}</S.UserName>
      <S.UserId>ID : {props.id}</S.UserId>
      <S.StatusContainer>
        <S.StatusTitle>상태 메세지</S.StatusTitle>
        <S.StatusMessage>{props.introduce}</S.StatusMessage>
      </S.StatusContainer>
      <button>프로필 편집</button>
    </S.MainContainer>
  );
};

export default FriendBox;
