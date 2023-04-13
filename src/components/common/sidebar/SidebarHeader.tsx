import React from "react";

interface IHeaderProps {
  index: number;
}

const SidebarHeader = (props: IHeaderProps) => {
  return (
    <header>
      <p>title</p>
      {props.index === 3 ? (
        <>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </>
      ) : props.index === 2 ? (
        <>
          <div>1</div>
          <div>2</div>
        </>
      ) : props.index === 1 ? (
        <div>1</div>
      ) : null}
    </header>
  );
};

export default SidebarHeader;
