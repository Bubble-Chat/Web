import React from "react";

interface IChattingBox {
  title: string;
}

const ChattingBox = (props: IChattingBox) => {
  return (
    <div>
      <div>{props.title}</div>
    </div>
  );
};

export default ChattingBox;
