import React, { useContext } from "react";
import { useAuthContext } from "../context/Authcontext";
import Login from "../landingpage/Login/Login";

function PrivateRouting(props) {
  const { isAuthanticated } = useAuthContext();
  const { Component } = props;
  if (!isAuthanticated) {
    return <Login />;
  }
  return <Component />;
}

export default PrivateRouting;
