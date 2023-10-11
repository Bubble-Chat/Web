import React from "react";
import * as S from "./style";

interface IButtonProps extends S.IButtonStyleProps {
  handler: () => void;
  disabled: boolean;
  children: React.ReactElement;
}

const Button = ({
  width,
  padding,
  fontSize,
  radius,
  handler,
  disabled,
  fontWeight,
  margin,
  children,
}: IButtonProps) => {
  return (
    <S.Button
      width={width}
      padding={padding}
      fontSize={fontSize}
      radius={radius}
      fontWeight={fontWeight}
      margin={margin}
      onClick={() => !disabled && handler()}
    >
      <p>{children}</p>
    </S.Button>
  );
};

export default Button;
