import React from "react";
import { IContentsBoxProps } from "../../../types/IContentsBoxProps";
import FriendBox from "./box/friend/FriendBox";
import MainBackground from "./background/MainBackground";
import * as S from "./ContentsBox.style";
import ChattingBox from "./box/room/ChattingBox";
import SettingBox from "./box/setting/SettingBox";

const ContentsBox = (props: IContentsBoxProps) => {
  return (
    <S.MainContentsBox>
      <MainBackground />
      {props.friend && <FriendBox title={props.friend.title} />}
      {props.room && <ChattingBox title={props.room.title} />}
      {props.setting && <SettingBox />}
    </S.MainContentsBox>
  );
};

export default ContentsBox;
