import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
      <nav className="navbar sticky-top  navbar-expand-lg bg-white ">
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
            <div className="offcanvas-body">
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
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Dashboard
                  </a>
                </li>
              </ul>
              <button
                className="btn fw-bold  text-white text-uppercase "
                style={{
                  backgroundColor: "#fd7e14",
                  fontSize: "14px",
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
