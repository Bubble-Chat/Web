import React from "react";
import * as S from "./SidebarHeader.style";

interface IHeaderProps {
  title: string;
  index: number;
}

const SidebarHeader = (props: IHeaderProps) => {
  return (
    <S.MainHeaderContainer>
      <S.TitleElement>{props.title}</S.TitleElement>
      <S.IconContainer>
        {props.index === 1 ? <S.IconElement /> : null}
        {props.index !== 3 && props.index !== 4 ? <S.IconElement /> : null}
        {props.index === 4 ? null : <S.IconElement />}
      </S.IconContainer>
    </S.MainHeaderContainer>
  );
};

export default SidebarHeader;
