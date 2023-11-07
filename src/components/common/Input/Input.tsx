import React from "react";
import { IInputProps } from "./type";
import * as S from "./style";

const Input = ({
  width,
  fontSize,
  borderRadius,
  padding,
  placeholder,
  state,
  setState,
  ...props
}: IInputProps) => {
  return (
    <S.Input
      type="text"
      value={state}
      onChange={(event) => setState(event.target.value)}
      placeholder={placeholder}
      width={width}
      fontSize={fontSize}
      borderRadius={borderRadius}
      padding={padding}
      {...props}
    />
  );
};

export default Input;
