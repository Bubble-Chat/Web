import React from "react";
import * as S from "./FriendBox.style";

interface IChattingBox {
  title: string;
}

const FriendBox = (props: IChattingBox) => {
  return (
    <S.MainContainer>
      <div>
        <S.UserImage />
        <S.UserName>{props.title}</S.UserName>
        <S.UserId>ID : 친구추가용 id</S.UserId>
        <S.StatusContainer>
          <S.StatusTitle>상태 메세지</S.StatusTitle>
          <S.StatusMessage>상태 메세지입니다.</S.StatusMessage>
        </S.StatusContainer>
        <button>프로필 편집</button>
      </div>
    </S.MainContainer>
  );
};

export default FriendBox;
