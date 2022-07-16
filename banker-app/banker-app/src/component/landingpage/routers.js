import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../dashboard/layout/Dashboard";
import PrivateRouting from "../important/PrivateRouting";
import LandingPages from "../landingpage/index";
import Login from "./Login/Login";
import Register from "./register/Register";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../context/Authcontext";

function Routers() {
  const { isAuthanticated } = useContext(Authcontext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        {/* <Route
          path="/login"
          element={!isAuthanticated ? <Login /> : <Navigate to="/dashboard" />}
        /> */}
        {/* <Route
          path="/dashboard"
          element={<PrivateRouting Component={Dashboard} />}
        /> */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/register"
          element={
            !isAuthanticated ? <Register /> : <Navigate to="/dashboard" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
