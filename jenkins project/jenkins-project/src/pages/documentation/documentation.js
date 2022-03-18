import Footer from "../../commonComponent/footer/footer";
import "./documentation.css"

function Documentation() {
    return (
        <div>
            <div className="container">
                <div className="documPara">
                    <h1>Jenkins User Documentation</h1>
                    <p>
                        Welcome to the Jenkins user documentation - for people wanting to use Jenkins’s existing functionality and plugin features.

                        If you want to extend the functionality of Jenkins by developing your own Jenkins plugins, please refer to the Extend Jenkins (developer documentation).
                    </p>
                </div>

                <div className="para2" >
                    <h1>What is Jenkins?</h1>
                    <p>
                        Jenkins is a self-contained, open source automation server which can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software <br />.
                        Jenkins can be installed through native system packages, Docker, or even run standalone by any machine with a Java Runtime Environment (JRE) installed.
                    </p>
                </div>
                <div className="para2" >
                    <h1>About this documentation</h1>
                    <p>
                    This documentation begins with a Guided Tour to help you get up and running with Jenkins and introduce you to Jenkins’s main feature, Pipeline. <br /> <br />
                    There are also tutorials geared to developers who want to orchestrate and automate building their project in Jenkins using Pipeline and Blue Ocean. <br /> <br />
                    If you’ve never used Jenkins before or have limited Jenkins experience, then the Guided Tour and introductory tutorials are good places to start.

                    </p>
                </div>
                <div className="para2" >
                    <h1>Documentation scope</h1>
                    <p>
                    This documentation begins with a Guided Tour to help you get up and running with Jenkins and introduce you to Jenkins’s main feature, Pipeline. <br /> <br />
                    There are also tutorials geared to developers who want to orchestrate and automate building their project in Jenkins using Pipeline and Blue Ocean. <br /> <br />
                    If you’ve never used Jenkins before or have limited Jenkins experience, then the Guided Tour and introductory tutorials are good places to start.

                    </p>
                </div>




            </div>
            <Footer />
        </div>
    );
}

export default Documentation;