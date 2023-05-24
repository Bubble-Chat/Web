import React from "react";
import SideBar from "../components/common/sidebar/SideBar";
import FriendContentsBox from "../components/common/contentsBox/FriendContentsBox";
import MainBackground from "../components/common/contents/MainBackground";

interface Ivalue {
  name: string;
  introduce: string;
  id: string;
  isMe?: boolean;
}

const Friend = () => {
  const value: Ivalue[] = [
    {
      name: "나",
      introduce: "안녕하세요 웹싸개 입니다.",
      id: "gmbae06@gmail.com",
      isMe: true,
    },
    {
      name: "조근호",
      introduce: "안녕하세요 iOS싸개 입니다.",
      id: "whqkrqkr1@icloud.com",
    },
    {
      name: "우영기",
      introduce: "안녕하세요 안드싸개 입니다.",
      id: "wkpark@gmail.com",
    },
    {
      name: "이재진",
      introduce: "안녕하세요 서버싸개 입니다.",
      id: "jaejin@gmail.com",
    },
    {
      name: "김민균",
      introduce: "안녕하세요 안드싸개 입니다.",
      id: "kimmin@gamil.com",
    },
  ];
  return (
    <>
      <SideBar title="친구창" index={1}>
        <>
          {value.map((val, index) => {
            console.log(val.isMe ? true : false);
            return (
              <FriendContentsBox
                key={index}
                name={val.name}
                introduce={val.introduce}
                id={val.id}
                isMe={val.isMe ? true : false}
              />
            );
          })}
        </>
      </SideBar>
      <MainBackground></MainBackground>
    </>
  );
};

export default Friend;
