import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Sidebar.style";
import Home from "../../../../asset/sidebar/Footer/home.active.svg";
import Room from "../../../../asset/sidebar/Footer/room.svg";
import Storage from "../../../../asset/sidebar/Footer/storage.svg";
import Setting from "../../../../asset/sidebar/Footer/setting.svg";

const SidebarFooter = () => {
  const Navigate = useNavigate();
  return (
    <S.MainFooterContainer>
      <S.Icon Image={Home} onClick={() => Navigate("/home")} />
      <S.Icon Image={Room} onClick={() => Navigate("/rooms")} />
      <S.Icon Image={Storage} onClick={() => Navigate("/storage")} />
      <S.Icon Image={Setting} onClick={() => Navigate("/setting")} />
    </S.MainFooterContainer>
  );
};

export default SidebarFooter;
