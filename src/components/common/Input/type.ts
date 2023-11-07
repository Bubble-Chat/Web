import { Dispatch, SetStateAction } from "react";

export interface IInputStyle {
  width?: number;
  fontSize?: number;
  borderRadius?: number;
  padding?: string;
}

export interface IInputProps extends IInputStyle {
  placeholder: string;
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}
