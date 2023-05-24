import React from "react";
import { IContentsBoxProps } from "../../../types/IContentsBoxProps";
import FriendBox from "./box/friend/FriendBox";
import MainBackground from "./background/MainBackground";
import * as S from "./ContentsBox.style";

const ContentsBox = (props: IContentsBoxProps) => {
  return (
    <S.MainContentsBox>
      <MainBackground />
      {props.friend && <FriendBox title={props.friend.title} />}
      {props.room && <FriendBox title={props.room.title} />}
      {props.setting && <FriendBox title={props.setting.title} />}
    </S.MainContentsBox>
  );
};

export default ContentsBox;
