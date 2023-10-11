import React from "react";
import * as S from "./style";

interface IIconProps {
  url: string;
  isActive: boolean;
}

const Icon = ({ url, isActive }: IIconProps) => {
  return <S.Image src={url} alt="icon" isActive={isActive} />;
};

export default Icon;
