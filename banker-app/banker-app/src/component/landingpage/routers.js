import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import PrivateRouting from "../important/PrivateRouting";
import LandingPages from "../landingpage/index";
import Login from "./Login/Login";
import Register from "./register/Register";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/dashboard" element={<PrivateRouting Component={Dashboard} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
