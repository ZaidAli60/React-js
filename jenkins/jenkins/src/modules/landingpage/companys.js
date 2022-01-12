import cloudbees from "./../../assets/cloudbees.png"
import osl from "./../../assets/osuosl.png"
import cdf from "./../../assets/cdf.png"
import redhat from "./../../assets/redhat.png"
import github from "./../../assets/github.png"
import jfrog from "./../../assets/jfrog.png"
import aws from "./../../assets/aws.png"
import "./company.css"



function Companys() {
    return (
        <div>
            <div className="container">
                <p className="text-center">We thank the following organizations for their major commitments to support the Jenkins project.</p>
                <div className="row py-4 pics">
                    <img className="pic1 img-fluid col-lg-2 col-md-4 col-sm-6" src={cloudbees} alt="cloudbees" />
                    <img className=" img-fluid col-lg-2 col-md-4 col-sm-6" src={osl} alt="osl" />
                    <img className="pic2 img-fluid col-lg-2 col-md-4 col-sm-6" src={cdf} alt="cdf" />
                    <img className="img-fluid col-lg-2 col-md-4 col-sm-6" src={redhat} alt="redhat" />
                    <img className="img-fluid col-lg-3 col-md-4 col-sm-6" src={aws} alt="redhat" />

                </div>
                <div className="row pics2 ">
                <img className="img-fluid col-lg-3 col-md-4 col-sm-6" src={github} alt="redhat" />
                <img className="img-fluid col-lg-3 col-md-4 col-sm-6" src={jfrog} alt="redhat" />
                    
                </div>
            </div>
        </div>
    )
}

export default Companys;
