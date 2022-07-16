import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import AddAccount from "./addAccount/AddAccount";

function DashboardRouting() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Dashboard />} />
        <Route path="addaccount" element={<AddAccount />} />
      </Route>
    </Routes>
  );
}

export default DashboardRouting;
