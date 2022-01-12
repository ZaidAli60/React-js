import jenkins from "./../../assets/jenkins.png"
import "./mainHeader.css"
function Mainheader() {
    return (
        <div>

        <p></p>
            <div className="container mt-5 ">
                <div className="row ">
                   <div className="displays py-4">
                   <div className="">
                        <img src={jenkins} alt="jenkins" />
                    </div>
                    <div>
                        <div className=" textContent">
                        <h1>Jenkins</h1>
                        <h3>Build great things at any scale</h3>
                        <p>The leading open source automation server,<br /> 
                           Jenkins provides hundreds of pluginsto support <br /> 
                           building, deploying and automating any project.</p>
                            
                        </div>
                        <div className="btns ">
                            <button className="me-2 btn btn1 text-light">Documentation</button>
                            <button className="btn2 btn text-light">Download</button>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
export default Mainheader;