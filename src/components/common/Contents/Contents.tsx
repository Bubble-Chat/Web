import React from "react";
import * as S from "./style";
import { IContentsStyleProps } from "./style";

interface IContentsProps extends IContentsStyleProps {
  title: string;
  context: string;
  image: string | null;
}

const Contents = ({
  title,
  context,
  image,
  imageBorder,
  titleFontSize,
  contextFontSize,
}: IContentsProps) => {
  return (
    <S.MainContiner>
      <S.InfoImage imageBorder={imageBorder}>
        {image && <img src={image} alt="df" />}
      </S.InfoImage>
      <S.InfoContextContents>
        <S.InfoTitle titleFontSize={titleFontSize}>{title}</S.InfoTitle>
        <S.InfoContextContext contextFontSize={contextFontSize}>
          {context}
        </S.InfoContextContext>
      </S.InfoContextContents>
    </S.MainContiner>
  );
};

export default Contents;
