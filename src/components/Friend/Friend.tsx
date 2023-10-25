import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../common/Sidebar/SideBar";
import Contents from "../common/Contents";
import Info from "./Info";
import API from "../../util/Api";
import Search from "./Search";
import { useRecoilState } from "recoil";
import { isActiveSearchAtom } from "../../store/friendAtom";

interface Ivalue {
  name: string;
  introduce: string;
  id: string;
  idx: number;
}

const Friend = () => {
  const { id } = useParams();
  const [isActiveSearch, setIsActiveSearch] =
    useRecoilState<boolean>(isActiveSearchAtom);
  const value: Ivalue[] = [
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
    <div style={{ display: "flex" }}>
      {isActiveSearch && <Search setIsActiveSearch={setIsActiveSearch} />}
      <SideBar title="친구창" index={1}>
        <>
          {value.map((val, index) => {
            return (
              <Contents
                key={index}
                location="home"
                contentIdx={val.idx}
                title={val.name}
                context={val.introduce}
                imageBorder={true}
                titleFontSize={"20px"}
                contextFontSize={"16px"}
              />
            );
          })}
        </>
      </SideBar>
      <button
        onClick={() => {
          API.patch("/api/v1/user/change", { name: "조근호" })
            .then((e) => console.log(e))
            .catch((e) => console.log(e));
        }}
      >
        dfdfs
      </button>
      <button>dfd</button>
      {id && <Info />}
    </div>
  );
};

export default Friend;
