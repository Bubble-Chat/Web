import React, { ReactElement } from "react";
import * as S from "./style";

interface IButtonProps extends S.IButtonStyleProps {
  handler: () => void;
  disabled?: boolean;
  children: ReactElement | string;
}

const Button = ({
  width,
  height,
  padding,
  fontSize,
  radius,
  handler,
  disabled,
  fontWeight,
  margin,
  children,
  ...props
}: IButtonProps) => {
  return (
    <S.Button
      width={width}
      height={height}
      padding={padding}
      fontSize={fontSize}
      radius={radius}
      fontWeight={fontWeight}
      margin={margin}
      onClick={() => !disabled && handler()}
      {...props}
    >
      <p>{children}</p>
    </S.Button>
  );
};

export default Button;
