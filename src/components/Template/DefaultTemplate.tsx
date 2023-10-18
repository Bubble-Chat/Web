import React, { ReactElement } from "react";
import { Background } from "./style";

interface IDefaultTemplateProps {
  children: ReactElement;
}

const DefaultTemplate = ({ children }: IDefaultTemplateProps) => {
  return (
    <>
      <Background />
      {children}
    </>
  );
};

export default DefaultTemplate;
