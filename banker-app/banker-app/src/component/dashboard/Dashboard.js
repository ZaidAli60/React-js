import React,{useContext} from "react";
import { Authcontext } from "../context/Authcontext";
import {useNavigate} from "react-router-dom";

function Dashboard() {
  const { isAuthanticated, setisAuthanticated } = useContext(Authcontext);
  console.log(isAuthanticated)
  const navigate = useNavigate();
  const logoutHandler = (e) => {
    e.preventDefault();
    setisAuthanticated(false);
    navigate("/")
  };
  return (
    <div>
      <h1>Dashboard page</h1>
      <button onClick={logoutHandler} className="btn bg-danger text-white">
        Logout Page
      </button>
    </div>
  );
}

export default Dashboard;
