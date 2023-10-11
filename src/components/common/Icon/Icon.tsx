import React from "react";
import * as S from "./style";

interface IIconProps {
  url: string;
  handler?: () => void;
  isActive?: boolean;
}

const Icon = ({ url, handler, isActive }: IIconProps) => {
  return <S.Image src={url} alt="icon" isActive={isActive} onClick={handler} />;
};

export default Icon;
