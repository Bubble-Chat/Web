import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./SidebarFooter.style";
import Icon from "../../Icon";
import ChatRoom from "../../../../asset/Icon/ChatRoom.svg";
import Friends from "../../../../asset/Icon/Friends.svg";
import Setting from "../../../../asset/Icon/Setting.svg";

const SidebarFooter = () => {
  const Navigate = useNavigate();
  const Location = useLocation();

  const getPathName = (pathname: string) => {
    const spliceLocation = pathname.split("/");
    return spliceLocation[1];
  };

  return (
    <S.MainFooterContainer>
      <Icon
        isActive={getPathName(Location.pathname) === "home"}
        url={ChatRoom}
        handler={() => Navigate("/home")}
      />
      <Icon
        isActive={getPathName(Location.pathname) === "rooms"}
        url={Friends}
        handler={() => Navigate("/rooms")}
      />
      <Icon
        isActive={getPathName(Location.pathname) === "setting"}
        url={Setting}
        handler={() => Navigate("/setting")}
      />
    </S.MainFooterContainer>
  );
};

export default SidebarFooter;
