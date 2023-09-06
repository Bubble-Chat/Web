import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import Auth from "./pages/Auth";
import Freind from "./pages/Friend";
import Room from "./pages/Room";
import Setting from "./pages/Setting";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/home/:id" element={<Freind />} />
        <Route path="/rooms/:id" element={<Room />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
