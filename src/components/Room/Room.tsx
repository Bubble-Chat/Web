import React from "react";
import SideBar from "../common/Sidebar/SideBar";
import Contents from "../common/Contents";

const value = [
  {
    title: "근르릉",
    lastMessage: "ㅎㅇ",
    PeopleNumber: 10,
  },
  {
    title: "1학년 2반",
    lastMessage: "ㅋㅋㅋㅋㅋㅋㅋ",
    PeopleNumber: 19,
  },
  {
    title: "2학년 3반",
    lastMessage: "넵",
    PeopleNumber: 19,
  },
];

const Room = () => {
  return (
    <>
      <SideBar title="채팅방" index={2}>
        <>
          {value.map((val, idx) => (
            <Contents
              location="rooms"
              contentIdx={idx}
              title={val.title}
              subtitle={val.PeopleNumber + ""}
              context={val.lastMessage}
              titleFontSize={"20px"}
              contextFontSize={"16px"}
            />
          ))}
        </>
      </SideBar>
    </>
  );
};

export default Room;
