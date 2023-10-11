import React, { ReactElement } from "react";
import SidebarHeader from "./header/SidebarHeader";
import * as S from "../../../styles/Sidebar.style";
import SidebarFooter from "./footer/SidebarFooter";

interface ISideBarProps {
  title: string;
  index: number;
  children: ReactElement<any>;
}

const SideBar = (props: ISideBarProps) => {
  return (
    <S.MainContainer>
      <SidebarHeader title={props.title} index={props.index} />
      <S.SideBarContentsContainer>{props.children}</S.SideBarContentsContainer>
      <SidebarFooter index={props.index} />
    </S.MainContainer>
  );
};

export default SideBar;
