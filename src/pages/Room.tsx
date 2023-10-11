import React from "react";
import SideBar from "../components/sidebar/SideBar";
import RoomContentsBox from "../components/contentsBox/RoomContentsBox";
import ContentsBox from "../components/contents/ContentsBox";

const Room = () => {
  return (
    <>
      <SideBar title="채팅방" index={2}>
        <>
          <RoomContentsBox
            name="근르릉"
            lastMessage="ㅋㅋㅋㅋㅋㅋㅋ"
            NumOfPersons={16}
          />
          <RoomContentsBox
            name="임베 2-3반"
            lastMessage="알겠습니다."
            NumOfPersons={19}
          />
          <RoomContentsBox
            name="거북이의 보금자리"
            lastMessage="(이모티콘)"
            NumOfPersons={18}
          />
          <RoomContentsBox
            name="안뇽"
            lastMessage="사진을 보냈습니다."
            NumOfPersons={12}
          />
          <RoomContentsBox name="백룸" lastMessage="노현우" NumOfPersons={11} />
        </>
      </SideBar>
      <ContentsBox room={{ title: "ddd" }} />
    </>
  );
};

export default Room;
