import React, { ReactElement } from "react";
import SidebarHeader from "./header/SidebarHeader";
import * as S from "../../../styles/Sidebar.style";
import SidebarFooter from "./footer/SidebarFooter";

interface ISideBarProps {
  title: string;
  index: number;
  children: ReactElement<any>;
}

const SideBar = ({ title, index, children }: ISideBarProps) => {
  return (
    <S.MainContainer>
      <SidebarHeader title={title} index={index} />
      <S.SideBarContentsContainer>{children}</S.SideBarContentsContainer>
      <SidebarFooter index={index} />
    </S.MainContainer>
  );
};

export default SideBar;
