import React from "react";
import * as S from "./SidebarHeader.style";

interface IHeaderProps {
  index: number;
}

const SidebarHeader = (props: IHeaderProps) => {
  return (
    <S.MainHeaderContainer>
      {props.index === 3 ? (
        <p>친구창</p>
      ) : props.index === 2 ? (
        <p>채팅창</p>
      ) : props.index === 1 ? (
        <p>저장소</p>
      ) : (
        <p>설정</p>
      )}
      <S.IconContainer>
        {props.index === 3 ? (
          <>
            <S.AddFriendIcon></S.AddFriendIcon>
            <S.AddRoomIcon></S.AddRoomIcon>
            <S.SearchIcon></S.SearchIcon>
          </>
        ) : props.index === 2 ? (
          <>
            <S.AddRoomIcon></S.AddRoomIcon>
            <S.SearchIcon></S.SearchIcon>
          </>
        ) : props.index === 1 ? (
          <S.SearchIcon></S.SearchIcon>
        ) : null}
      </S.IconContainer>
    </S.MainHeaderContainer>
  );
};

export default SidebarHeader;
