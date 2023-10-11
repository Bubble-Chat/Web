import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Freind from "./Friend";
import Room from "./Room";
import Setting from "./Setting";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";

const Router = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path={"/home"} element={<Freind />} />
            <Route path={"/home/:id"} element={<Freind />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/rooms/:id" element={<Room />} />
            <Route path="/setting" element={<Setting />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default Router;
