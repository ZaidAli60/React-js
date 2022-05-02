import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (


        <>
          

            <nav className="navbar navbar-expand-lg navbar-light  bg-primary">
                <div className="container ">
                    <a className="navbar-brand flex-grow-1 text-white fs-2" href="#">Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse text-center " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-white fs-5" aria-current="page" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-5 px-4" href="#">Accounts</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fs-5" href="#">Transactions</a>
                            </li>
                        </ul>

                    </div>
                </div>


            </nav>

        </>
    )
}

export default Navbar;