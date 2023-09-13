import React from "react";
import { IContentsBoxProps } from "../../../types/IContentsBoxProps";
import FriendBox from "./box/friend/FriendBox";
import * as S from "./ContentsBox.style";
import ChattingBox from "./box/room/ChattingBox";
import SettingBox from "./box/setting/SettingBox";

const ContentsBox = (props: IContentsBoxProps) => {
  return (
    <S.MainContentsBox>
      {props.friend && (
        <FriendBox
          title={props.friend.title}
          id={props.friend.id}
          idx={props.friend.idx}
          introduce={props.friend.introduce}
        />
      )}
      {props.room && <ChattingBox title={props.room.title} />}
      {props.setting && <SettingBox />}
    </S.MainContentsBox>
  );
};

export default ContentsBox;
