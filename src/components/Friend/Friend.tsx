import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../common/Sidebar/SideBar";
import Contents from "../common/Contents";
import Info from "./Info";
import API from "../../util/Api";
import { getFriendList } from "../../asset/Apis/Friend";
import { IFriendValue } from "./type";

const Friend = () => {
  const { id } = useParams();

  const [friendList, setFriendList] = useState<IFriendValue[]>([]);

  useEffect(() => {
    if (localStorage.getItem("accessToken"))
      getFriendList().then((value) => setFriendList(value));
  }, [localStorage.getItem("accessToken")]);

  return (
    <div style={{ display: "flex" }}>
      <SideBar title="친구창" index={1}>
        <>
          {friendList.map((val, index) => {
            return (
              <Contents
                key={index}
                location="home"
                contentIdx={val.idx}
                title={val.friend.name}
                context={val.friend.email}
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
