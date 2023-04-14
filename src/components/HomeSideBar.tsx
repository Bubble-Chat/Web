import React from "react";
import * as S from "../styles/Sidebar.style";
import SidebarFooter from "./common/sidebar/footer/SidebarFooter";
import SidebarHeader from "./common/sidebar/header/SidebarHeader";

const HomeSideBar = () => {
  return (
    <S.MainContainer>
      <SidebarHeader index={3} />
      <SidebarFooter />
    </S.MainContainer>
  );
};

export default HomeSideBar;
