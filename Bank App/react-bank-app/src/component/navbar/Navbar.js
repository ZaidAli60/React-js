import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (


        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary navbars ">
                
                <div className="container">
                    <a className="navbar-brand text-white" href="#">Bank</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                </div>
                <div className="collapse navbar-collapse me-2" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-white " aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Accounts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Transaction</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;