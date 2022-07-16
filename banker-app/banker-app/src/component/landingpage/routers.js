import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouting from "../important/PrivateRouting";
import LandingPages from "../landingpage/index";
import Login from "./Login/Login";
import Register from "./register/Register";
import { Navigate } from "react-router-dom";
import { Authcontext } from "../context/Authcontext";
import DashboardRouting from "../dashboard/pages/DashboardRouting";

function Routers() {
  const { isAuthanticated } = useContext(Authcontext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
        <Route index element={<LandingPages />} />
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
          element={<DashboardRouting />}
        />
        <Route
          path="/register"
          element={
            !isAuthanticated ? <Register /> : <Navigate to="/dashboard" />
          }
        />
          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
