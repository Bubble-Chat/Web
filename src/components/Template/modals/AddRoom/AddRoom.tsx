import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "./style";
import API from "../../../../util/Api";
import { createRoom } from "../../../../asset/Apis/Room";

const AddRoom = ({
  setActive,
}: {
  setActive: Dispatch<SetStateAction<boolean>>;
}) => {
  const [name, setName] = useState<string>("");

  const setActiveModal = () => {
    console.log("dfdf");
    setActive(false);
  };
  const CreateRoom = async () => {
    const result = createRoom(name);
    console.log(result);
  };
  return (
    <S.Container>
      <S.MainContentsBox>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={CreateRoom}>send</button>
      </S.MainContentsBox>
      <S.Container onClick={setActiveModal} />
    </S.Container>
  );
};

export default AddRoom;
