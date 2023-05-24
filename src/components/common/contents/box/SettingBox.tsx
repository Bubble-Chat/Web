import React from "react";

interface IChattingBox {
  title: string;
}

const SettingBox = (props: IChattingBox) => {
  return (
    <div>
      <div>{props.title}</div>
    </div>
  );
};

export default SettingBox;
