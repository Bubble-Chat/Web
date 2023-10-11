import React from "react";
import SideBar from "../components/sidebar/SideBar";
import FriendContentsBox from "../components/contentsBox/FriendContentsBox";
import ContentsBox from "../components/contents/ContentsBox";
import { useParams } from "react-router-dom";
import MainBackground from "../components/contents/background/MainBackground";

interface Ivalue {
  name: string;
  introduce: string;
  id: string;
  idx: number;
}

const Friend = () => {
  const { id } = useParams();
  const value: Ivalue[] = [
    {
      name: "나",
      introduce: "안녕하세요 웹싸개 입니다.",
      id: "gmbae06@gmail.com",
      idx: 0,
    },
    {
      name: "조근호",
      introduce: "안녕하세요 iOS싸개 입니다.",
      id: "whqkrqkr1@icloud.com",
      idx: 1,
    },
    {
      name: "우영기",
      introduce: "안녕하세요 안드싸개 입니다.",
      id: "wkpark@gmail.com",
      idx: 2,
    },
    {
      name: "이재진",
      introduce: "안녕하세요 서버싸개 입니다.",
      id: "jaejin@gmail.com",
      idx: 3,
    },
    {
      name: "김민균",
      introduce: "안녕하세요 안드싸개 입니다.",
      id: "kimmin@gamil.com",
      idx: 4,
    },
  ];
  return (
    <>
      <SideBar title="친구창" index={1}>
        <>
          {value.map((val, index) => {
            return (
              <FriendContentsBox
                key={index}
                name={val.name}
                introduce={val.introduce}
                id={val.id}
                idx={val.idx}
              />
            );
          })}
        </>
      </SideBar>
      <MainBackground />
      {id && (
        <ContentsBox
          friend={{
            title: value[parseInt(id)].name,
            id: value[parseInt(id)].id,
            introduce: value[parseInt(id)].introduce,
            idx: value[parseInt(id)].idx,
          }}
        />
      )}
    </>
  );
};

export default Friend;
