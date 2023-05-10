import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Sidebar.style";

interface IFooterProps {
  index: number;
}
const SidebarFooter = (props: IFooterProps) => {
  const Navigate = useNavigate();

  const [currentLoaction, setCurrentLocation] = useState<string>(
    document.location.href.split("/")[3]
  );
  useEffect(() => {
    setCurrentLocation(document.location.href.split("/")[3]);
    console.log(currentLoaction);
  });
  return (
    <S.MainFooterContainer>
      <S.IconElement
        isActive={currentLoaction === "home"}
        onClick={() => Navigate("/home")}
      />
      <S.IconElement
        isActive={currentLoaction === "rooms"}
        onClick={() => Navigate("/rooms")}
      />
      <S.IconElement
        isActive={currentLoaction === "storage"}
        onClick={() => Navigate("/storage")}
      />
      <S.IconElement
        isActive={currentLoaction === "setting"}
        onClick={() => Navigate("/setting")}
      />
    </S.MainFooterContainer>
  );
};

export default SidebarFooter;
