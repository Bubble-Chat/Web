import React from "react";
import * as S from "./SidebarHeader.style";
import Icon from "../../Icon";
import AddFriend from "../../../../asset/Icon/AddFriends.svg";
import AddChatRoom from "../../../../asset/Icon/AddChatRoom.svg";
import Search from "../../../../asset/Icon/Search.svg";
import { useSetRecoilState } from "recoil";
import {
  isActiveAddFriendAtom,
  isActiveAddRoomAtom,
  isActiveSearchAtom,
} from "../../../../store/friendAtom";

interface IHeaderProps {
  title: string;
  index: number;
}

const SidebarHeader = ({ title, index }: IHeaderProps) => {
  const setIsActiveSearch = useSetRecoilState(isActiveSearchAtom);
  const setIsActiveAddRoom = useSetRecoilState(isActiveAddRoomAtom);
  const setIsActiveAddFriend = useSetRecoilState(isActiveAddFriendAtom);
  return (
    <S.MainHeaderContainer>
      <S.TitleElement>{title}</S.TitleElement>
      <S.IconContainer>
        {index === 1 && (
          <div onClick={() => setIsActiveAddFriend(true)}>
            <Icon url={AddFriend} />
          </div>
        )}
        {index !== 3 && index !== 4 && (
          <div onClick={() => setIsActiveAddRoom(true)}>
            <Icon url={AddChatRoom} />
          </div>
        )}
        {index !== 4 && (
          <div onClick={() => setIsActiveSearch(true)}>
            <Icon url={Search} />
          </div>
        )}
      </S.IconContainer>
    </S.MainHeaderContainer>
  );
};

export default SidebarHeader;
