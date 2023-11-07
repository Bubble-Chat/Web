import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "../style";
import Modal from "../../../common/Modal";
import Input from "../../../common/Input";
import Button from "../../../common/Button";
import { relateFriend } from "../../../../asset/Apis/Friend";
import { toast } from "react-toastify";

const AddFriend = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState<string>("");

  const setActiveModal = () => {
    setActive(false);
  };
  const relateFriendHandler = () => {
    if (email !== "")
      relateFriend(email)
        .then(() => window.location.reload())
        .catch(() => toast.warning("친구의 계정을 다시 확인 해주세요!"));
  };

  return (
    <Modal title="친구 추가" handler={setActiveModal}>
      <S.InputContentWrap>
        <S.InputWrap>
          <S.InputTitle>친구 추가</S.InputTitle>
          <Input
            state={email}
            setState={setEmail}
            placeholder="친구의 이메일을 입력해주세요."
            padding="16px"
            width={250}
            fontSize={14}
          />
          <Button
            handler={relateFriendHandler}
            fontSize="12px"
            padding="10px 14px"
            margin="0px 0px 0px 20px"
            height="50px"
          >
            추가
          </Button>
        </S.InputWrap>
      </S.InputContentWrap>
    </Modal>
  );
};

export default AddFriend;
