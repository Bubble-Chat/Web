import React from "react";
import SidebarHeader from "./header/SidebarHeader";
import * as S from "../../../styles/Sidebar.style";
import SidebarFooter from "./footer/SidebarFooter";

interface ISideBarProps {
  title: string;
  index: number;
}

const SideBar = (props: ISideBarProps) => {
  return (
    <S.MainContainer>
      <SidebarHeader title={props.title} index={props.index} />
      <div>contents</div>
      <SidebarFooter index={props.index} />
    </S.MainContainer>
  );
};

export default SideBar;
