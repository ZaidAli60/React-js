import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPages from "../landingpage/index"
import Login from "./Login/Login";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
