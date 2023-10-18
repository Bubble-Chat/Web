import React from "react";
import * as S from "./style";
import { IContentsStyleProps } from "./style";
import { useNavigate } from "react-router-dom";

interface IContentsProps extends IContentsStyleProps {
  location: string;
  title: string;
  subtitle?: string;
  context: string;
  image?: string | null;
  contentIdx: number;
}

const Contents = ({
  location,
  title,
  subtitle,
  context,
  image,
  imageBorder,
  titleFontSize,
  contextFontSize,
  contentIdx,
}: IContentsProps) => {
  const Navigate = useNavigate();
  return (
    <S.MainContiner onClick={() => Navigate(`/${location}/${contentIdx}`)}>
      <S.InfoImage imageBorder={imageBorder}>
        {image && <img src={image} alt="df" />}
      </S.InfoImage>
      <S.InfoContextContents>
        <S.TitleContainer>
          <S.InfoTitle titleFontSize={titleFontSize}>{title}</S.InfoTitle>
          <S.InfoSubTitle>{subtitle}</S.InfoSubTitle>
        </S.TitleContainer>
        <S.InfoContextContext contextFontSize={contextFontSize}>
          {context}
        </S.InfoContextContext>
      </S.InfoContextContents>
    </S.MainContiner>
  );
};

export default Contents;
