import React from "react";
import Button from "../../common/Button";
import * as S from "./style";

const Info = () => {
  const LinkedHandler = () => {};
  return (
    <S.MainLayout>
      <S.MainContainer>
        <div>Image</div>
        <p>Name</p>
        <p>id</p>
        <p>상태메세지</p>
        <p>Introduce</p>
        <Button disabled handler={LinkedHandler} padding="1rem 2rem">
          <p>대화하러가기</p>
        </Button>
      </S.MainContainer>
    </S.MainLayout>
  );
};

export default Info;
