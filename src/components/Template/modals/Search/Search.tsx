import React, { Dispatch, SetStateAction, useState } from "react";
import { relateFriend, searchFriend } from "../../../../asset/Apis/Friend";
import * as S from "../style";
import Modal from "../../../common/Modal";
import Input from "../../../common/Input";
import Button from "../../../common/Button";
import { ISearchFriendsValue } from "./type";

const Search = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const [name, setName] = useState<string>("");

  const [newFriendList, setNewFriendList] = useState<ISearchFriendsValue[]>([]);

  const searchFriendHandler = () => {
    if (name !== "")
      searchFriend(name).then((value) => {
        console.log(value);
        setNewFriendList(value.userList);
      });
  };

  const setActiveModal = () => {
    setActive(false);
  };

  return (
    <>
      <Modal title="친구 찾기" handler={setActiveModal}>
        <S.InputContentWrap>
          <S.InputWrap>
            <S.InputTitle>친구 찾기</S.InputTitle>
            <Input
              state={name}
              setState={setName}
              placeholder="친구의 이름을 입력해주세요."
              padding="16px"
              width={250}
              fontSize={14}
            />
            <Button
              handler={searchFriendHandler}
              fontSize="12px"
              padding="10px 14px"
              margin="0px 0px 0px 20px"
              height="50px"
            >
              찾기
            </Button>
          </S.InputWrap>
          <S.FriendList>
            {newFriendList.map((val, idx) => (
              <div key={idx}>
                <p>{val.name}</p>
                <p>{val.email}</p>
              </div>
            ))}
          </S.FriendList>
        </S.InputContentWrap>
      </Modal>
    </>
  );
};

export default Search;
