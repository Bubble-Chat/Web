import React, { ReactElement } from "react";
import { Background } from "./style";
import { useRecoilState } from "recoil";
import {
  isActiveAddFriendAtom,
  isActiveAddRoomAtom,
  isActiveSearchAtom,
} from "../../store/friendAtom";
import Search from "./modals/Search";
import AddFriend from "./modals/AddFriend";
import AddRoom from "./modals/AddRoom";

interface IDefaultTemplateProps {
  children: ReactElement;
}

const DefaultTemplate = ({ children }: IDefaultTemplateProps) => {
  const [isActiveSearch, setIsActiveSearch] =
    useRecoilState<boolean>(isActiveSearchAtom);
  const [isActiveAddRoom, setIsActiveAddRoom] =
    useRecoilState<boolean>(isActiveAddRoomAtom);
  const [isActiveAddFriend, setIsActiveAddFriend] = useRecoilState<boolean>(
    isActiveAddFriendAtom
  );

  return (
    <>
      {isActiveSearch && <Search setActive={setIsActiveSearch} />}
      {isActiveAddFriend && <AddFriend setActive={setIsActiveAddFriend} />}
      {isActiveAddRoom && <AddRoom setActive={setIsActiveAddRoom} />}
      <Background />
      {children}
    </>
  );
};

export default DefaultTemplate;
