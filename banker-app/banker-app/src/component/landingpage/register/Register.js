import { useState, useContext } from "react";
import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../context/Authcontext";
function Register() {
  const [userEmail, setuserEmail] = useState("");
  const [password, setpassword] = useState("");
  const { isAuthanticated, setisAuthanticated } = useContext(Authcontext);
  const navigate = useNavigate();
  const formSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, userEmail, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        toast.success("User has been sucessfully add", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // ...
        setisAuthanticated(true);
        setuserEmail("");
        setpassword("");
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        // console.log(errorCode);
        toast.error(`${errorCode}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // ..
      });
  };
  return (
    <div className="login-form">
      <div className="d-flex justify-content-center align-items-center min-vh-100 ">
        <div className="card loginCard">
          <div className="card-body">
            <h5 className="card-title text-uppercase text-center mt-4 fw-bold fs-3 opacity-50">
              CREATE AN ACCOUNT
            </h5>
            <form className="mt-5">
              <input
                type="email"
                className="form-control my-4"
                placeholder="Your Email"
                value={userEmail}
                onChange={(e) => setuserEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control my-4"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />

              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="invalidCheck2"
                    required
                  />
                  <label className="form-check-label" for="invalidCheck2">
                    I agree all statements in Terms of service
                  </label>
                </div>
              </div>

              <div className="mt-5 text-center ">
                <button
                  type="submit"
                  className="btn btn-primary text-uppercase fw-bold"
                  style={{ backgroundColor: "#f57224", border: "none" }}
                  onClick={formSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
