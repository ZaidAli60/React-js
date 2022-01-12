import "./footer.css"
import git from "./../../assets/git.png"
import license from "./../../assets/license.png"
import { ArrowRight } from 'react-bootstrap-icons';
function Footer() {
    return (
        <div>
            <footer className="footers">
                <div className="container">
                    <div className="row ">
                        <div className="footer-section">
                            <div className="col-lg-3 col-md-12 col-sm-12 ">
                                <p>
                                    <a href="#" className="text-light"> <img src={git} alt="git" />Improve this page</a>
                                    <a href="#" className="text-light"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                    </svg>Report a problem</a>
                                </p>
                                <div className="textContent">
                                    <img src={license} alt="license" />
                                    <p className="py-4 text-light">
                                        The content driving this site is licensed under the Creative
                                        Commons Attribution-ShareAlike 4.0 license.
                                    </p>
                                </div>
                            </div>
                            <div className="links">
                                {/* <div className="container"> */}
                                    <div className="row">
                                        <div className="col-lg-3 col-md-12 col-sm-12 text-light">
                                            <hr className="bg-light"/>
                                            <h4>Resources</h4>
                                            <ul>
                                                <li>Downlaods</li>
                                                <li>Blog</li>
                                                <li>Documentation</li>
                                                <li>plugin</li>
                                                <li>security</li>
                                                <li>plugin</li>

                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12 text-light">
                                            <hr />
                                            <h4>Resources</h4>
                                            <ul>
                                                <li>Downlaods</li>
                                                <li>Blog</li>
                                                <li>Documentation</li>
                                                <li>plugin</li>
                                                <li>security</li>
                                                <li>plugin</li>

                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12 text-light">
                                            <hr />
                                            <h4>Resources</h4>
                                            <ul>
                                                <li>Downlaods</li>
                                                <li>Blog</li>
                                                <li>Documentation</li>
                                                <li>plugin</li>
                                                <li>security</li>
                                                <li>plugin</li>

                                            </ul>
                                        </div>
                                        <div className="col-lg-3 col-md-12 col-sm-12 text-light">
                                            <hr />
                                            <h4>Resources</h4>
                                            <ul>
                                                <li>Downlaods</li>
                                                <li>Blog</li>
                                                <li>Documentation</li>
                                                <li>plugin</li>
                                                <li>security</li>
                                                <li>plugin</li>

                                            </ul>
                                        </div>
                                    </div>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;