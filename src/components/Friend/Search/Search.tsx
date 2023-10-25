import React, { Dispatch, SetStateAction, useState } from "react";
import { relateFriend, searchFriend } from "../../../asset/Apis/Friend";
import * as S from "./style";

const Search = ({
  setIsActiveSearch,
}: {
  setIsActiveSearch: Dispatch<SetStateAction<boolean>>;
}) => {
  const [name, setName] = useState<string>("");
  const [Email, setEmail] = useState<string>("");

  const searchFriendHandler = () => {
    if (name !== "") searchFriend(name);
  };
  const relateFriendHandler = () => {
    if (Email !== "") relateFriend(Email);
  };

  const setActiveSearch = () => {
    setIsActiveSearch(false);
  };

  return (
    <S.Container>
      <S.MainContentsBox>
        <div onClick={setActiveSearch} className="pointer">
          X
        </div>
        <div>친구 찾기</div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={searchFriendHandler} className="pointer">
          찾기
        </button>
        <div>친구 추가</div>
        <input
          type="text"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={relateFriendHandler} className="pointer">
          추가
        </button>
      </S.MainContentsBox>
      <S.Container onClick={setActiveSearch}></S.Container>
    </S.Container>
  );
};

export default Search;
