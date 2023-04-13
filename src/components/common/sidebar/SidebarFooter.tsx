import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarFooter = () => {
  const Navigate = useNavigate();
  return (
    <footer>
      <div onClick={() => Navigate("/home")}>home</div>
      <div onClick={() => Navigate("/rooms")}>rooms</div>
      <div onClick={() => Navigate("/storage")}>storage</div>
      <div onClick={() => Navigate("/ex")}>ex</div>
    </footer>
  );
};

export default SidebarFooter;
