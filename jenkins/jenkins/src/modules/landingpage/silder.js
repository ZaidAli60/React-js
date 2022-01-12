import "./slider.css"
import jenkins from "./../../assets/jenkins.png"
import Carousel from 'react-bootstrap/Carousel'

function Slider() {
    return (
        <div>
            <div className="slider-img slider">
                <Carousel variant="dark">
                    <Carousel.Item>
                   <div className="container mt-5">
                   <div className="row text-light textcontent ">
                         <div className="col-lg-6">
                                <h1>Jenkins is way !</h1>
                                <p className="para">We are looking for experiences of Jenkins <br /> 
                                   users from around the world showcasing how <br />
                                    they are building, deploying, and automating <br />
                                    great software with Jenkins. Check out their <br /> 
                                    user stories and share yours</p>
                                    <button className="btn bg-danger text-light">More info</button>
                         </div>
                         <div className="col-lg-6">
                                <img src={jenkins} alt="jenkins" />
                         </div>
                     </div>
                    
                   </div>
                    
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=eee"
                            alt="Second slide"
                        /> */}
                    <div className="container mt-5">
                    <div className="row text-light textcontent">
                         <div className="col-lg-6">
                                <h1>Jenkins is way !</h1>
                                <p>We are looking for experiences of Jenkins <br /> 
                                   users from around the world showcasing how <br />
                                    they are building, deploying, and automating <br />
                                    great software with Jenkins. Check out their <br /> 
                                    user stories and share yours</p>
                                    <button className="btn bg-danger text-light">More info</button>
                         </div>
                         <div className="col-lg-6">
                                <img src={jenkins} alt="jenkins" />
                         </div>
                     </div>
                    </div>
                      
                    </Carousel.Item>
                  
                </Carousel>
            </div>
        </div>
    )
}
export default Slider;