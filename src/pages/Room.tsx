import React from "react";
import SideBar from "../components/common/sidebar/SideBar";
import RoomContentsBox from "../components/common/contentsBox/RoomContentsBox";

const Room = () => {
  return (
    <>
      <SideBar title="채팅방" index={2}>
        <>
          <RoomContentsBox />
          <RoomContentsBox />
          <RoomContentsBox />
          <RoomContentsBox />
          <RoomContentsBox />
        </>
      </SideBar>
    </>
  );
};

export default Room;
