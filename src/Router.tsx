import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import Auth from "./pages/Auth";
import Freind from "./pages/Friend";
import Room from "./pages/Room";
import Setting from "./pages/Setting";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path={"/home"} element={<Freind />} />
        <Route path={"/home/:id"} element={<Freind />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/:id" element={<Room />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
