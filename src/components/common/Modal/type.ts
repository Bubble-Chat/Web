import { ReactElement } from "react";

export interface IModalStyle {
  borderRadius?: number;
  padding?: string;
  width?: number;
  height?: number;
  titleSize?: number;
  titleWeight?: number;
}

export interface IModalProps extends IModalStyle {
  title: string;
  children: ReactElement;
  handler: () => void;
}
