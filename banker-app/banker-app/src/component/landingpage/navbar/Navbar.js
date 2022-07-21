import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext, useAuthContext } from "../../context/Authcontext";
import "./Navbar.css";
import { Link as Scroll, animateScroll as scroll } from "react-scroll";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

function Navbar() {
  const { user, isAuthanticated } = useAuthContext();

  const handlerLogout = () => {
    signOut(auth)
      .then(() => {
        alert("logout");
      })
      .catch((e) => {
        alert("error");
      });
  };
  return (
    <nav className="navbar sticky-top navigationBar  navbar-expand-lg bg-white ">
      <div className="container">
        <a className="navbar-brand me-auto logoName fs-2" href="#">
          Banker
          <span>.</span>
        </a>
        <a
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          style={{
            border: "none",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </a>
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body text-center">
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto px-4">
              <li className="nav-item">
                <a
                  className="nav-link activecolor"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Scroll
                      className="dropdown-item"
                      activeClass="active"
                      to="About"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                    >
                      About Us
                    </Scroll>
                  </li>
                  <li>
                    <Scroll
                      className="dropdown-item"
                      activeClass="active"
                      to="MeetTeam"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                    >
                      MeetTeam
                    </Scroll>
                  </li>
                  <li>
                    <Scroll
                      className="dropdown-item"
                      activeClass="active"
                      to="Gallerly"
                      spy={true}
                      smooth={true}
                      offset={-90}
                      duration={500}
                    >
                      Gallerly
                    </Scroll>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Scroll
                  activeClass="active"
                  className="nav-link "
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  Contact
                </Scroll>
              </li>
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    className="nav-link "
                    to="dashboard"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    Dashboard
                  </Link>
                </li>
              
            

              <li className="nav-item">
                {!user.uid ? (
                  <Link
                    to="/login"
                    className="btn fw-bold  text-white text-uppercase "
                    style={{
                      backgroundColor: "#fd7e14",
                      fontSize: "14px",
                    }}
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    className="nav-link btn bg-danger text-white text-center"
                    onClick={handlerLogout}
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
