import React from "react";
import SideBar from "../components/common/sidebar/SideBar";
import FriendContentsBox from "../components/common/contentsBox/FriendContentsBox";
import MainBackground from "../components/common/contents/MainBackground";

const Friend = () => {
  return (
    <>
      <SideBar title="친구창" index={1}>
        <>
          <FriendContentsBox
            name="나"
            introduce="안녕하세요"
            id="gmbae06@gmail.com"
            isMe={true}
          />
          <FriendContentsBox
            name="조근호"
            introduce="안녕하세요오오오오"
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="우영기"
            introduce="안녕하세요 안드 싸개 입니다."
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="이재진"
            introduce="안녕하세요 서버 싸개 입니다"
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="김민균"
            introduce="안녕하세요"
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="우영기"
            introduce="안녕하세요 안드 싸개 입니다."
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="이재진"
            introduce="안녕하세요 서버 싸개 입니다"
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="김민균"
            introduce="안녕하세요"
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="우영기"
            introduce="안녕하세요 안드 싸개 입니다."
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="이재진"
            introduce="안녕하세요 서버 싸개 입니다"
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="김민균"
            introduce="안녕하세요"
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="우영기"
            introduce="안녕하세요 안드 싸개 입니다."
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="이재진"
            introduce="안녕하세요 서버 싸개 입니다"
            id="gmbae06@gmail.com"
          />
          <FriendContentsBox
            name="김민균"
            introduce="안녕하세요"
            id="gmbae06@gmail.com"
          />
        </>
      </SideBar>
      <MainBackground></MainBackground>
    </>
  );
};

export default Friend;
