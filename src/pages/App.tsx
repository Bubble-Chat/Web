import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { Colors } from "../styles/theme";
import FriendPage from "./FriendPage";
import RoomPage from "./RoomPage";
import SettingPage from "./SettingPage";

const Router = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={Colors}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<FriendPage />} />
            <Route path="/home/:id" element={<FriendPage />} />
            <Route path="/rooms" element={<RoomPage />} />
            <Route path="/rooms/:id" element={<RoomPage />} />
            <Route path="/setting" element={<SettingPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default Router;
