import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPages from "../landingpage/index";
import Login from "./Login/Login";
import Register from "./register/Register";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
