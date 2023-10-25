import React from "react";
import * as S from "./style";

interface IIconProps {
  url: string;
  handler?: () => void;
  isActive?: boolean;
}

const Icon = ({ url, handler, isActive, ...Iconprops }: IIconProps) => {
  return (
    <S.Image
      src={url}
      alt="icon"
      className="pointer"
      isActive={isActive}
      onClick={handler}
      {...Iconprops}
    />
  );
};

export default Icon;
