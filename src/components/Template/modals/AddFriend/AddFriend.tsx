import React, { Dispatch, SetStateAction } from "react";
import * as S from "./style";

const AddFriend = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const setActiveModal = () => {
    setActive(false);
  };

  return (
    <S.Container>
      <S.MainContentsBox>
        <div></div>
      </S.MainContentsBox>
      <S.Container onClick={setActiveModal} />
    </S.Container>
  );
};

export default AddFriend;
