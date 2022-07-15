import React, { useContext, useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { ImFacebook } from "react-icons/im";
import { AiOutlineGoogle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { Authcontext } from "../../context/Authcontext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isAuthanticated, setisAuthanticated } = useContext(Authcontext);
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      userName,
      password,
    }
    console.log(formData)

    setisAuthanticated(true);
    // navigate("/dashboard");
  };
  return (
    <div className="login-form">
      <div className="d-flex justify-content-center align-items-center min-vh-100 ">
        <div className="card loginCard">
          <div className="card-body">
            <h5 className="card-title text-uppercase text-center mt-4 fw-bold fs-3">
              Login
            </h5>
            <form className="mt-5 text-center">
              <input
                type="email"
                className="form-control inputField "
                placeholder="Enter Your E-mail"
                value={userName}
                onChange={(e) => setuserName(e.target.value)}
              />

              <input
                type="password"
                className="form-control my-4"
                placeholder="Password"
                value={password}
                onChange={(e)=> setpassword(e.target.value)}
              />
              <div>
                <a href="#">Forget Password</a>
              </div>
              <div className="mt-5">
                <button
                  className="btn text-uppercase loginBtn text-white fw-bold"
                  onClick={submitHandler}
                >
                  Login
                </button>
              </div>
              <div className="mt-5 mb-5 d-flex justify-content-evenly">
                <button className="btn btn-primary">
                  <ImFacebook className="fs-5" />
                </button>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#dd4b39", border: "none" }}
                >
                  <AiOutlineGoogle className="fs-5" />
                </button>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: "#1da1f2", border: "none" }}
                >
                  <AiOutlineTwitter className="fs-5" />
                </button>
              </div>
              <div>
                <Link to="/register">SIGN UP</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
