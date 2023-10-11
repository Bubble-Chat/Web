import React from "react";
import * as S from "./SidebarHeader.style";
import Icon from "../../Icon";
import AddFriend from "../../../../asset/Icon/AddFriends.svg";
import AddChatRoom from "../../../../asset/Icon/AddChatRoom.svg";
import Search from "../../../../asset/Icon/Search.svg";

interface IHeaderProps {
  title: string;
  index: number;
}

const SidebarHeader = (props: IHeaderProps) => {
  return (
    <S.MainHeaderContainer>
      <S.TitleElement>{props.title}</S.TitleElement>
      <S.IconContainer>
        {props.index === 1 && <Icon url={AddFriend} />}
        {props.index !== 3 && props.index !== 4 && <Icon url={AddChatRoom} />}
        {props.index !== 4 && <Icon url={Search} />}
      </S.IconContainer>
    </S.MainHeaderContainer>
  );
};

export default SidebarHeader;
