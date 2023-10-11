import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./SidebarFooter.style";
import Icon from "../../Icon";
import ChatRoom from "../../../../asset/Icon/ChatRoom.svg";
import Friends from "../../../../asset/Icon/Friends.svg";
import Setting from "../../../../asset/Icon/Setting.svg";

interface IFooterProps {
  index: number;
}
const SidebarFooter = ({ index }: IFooterProps) => {
  const Navigate = useNavigate();
  const Location = useLocation();

  return (
    <S.MainFooterContainer>
      <Icon
        isActive={Location.pathname === "/home"}
        url={ChatRoom}
        handler={() => Navigate("/home")}
      />
      <Icon
        isActive={Location.pathname === "/rooms"}
        url={Friends}
        handler={() => Navigate("/rooms")}
      />
      <Icon
        isActive={Location.pathname === "/setting"}
        url={Setting}
        handler={() => Navigate("/setting")}
      />
    </S.MainFooterContainer>
  );
};

export default SidebarFooter;
