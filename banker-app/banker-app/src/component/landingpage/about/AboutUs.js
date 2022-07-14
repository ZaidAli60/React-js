import React from "react";
import Aboutus from "../../../Assets/aboutus.jpg";
import "./AboutUs.css"
function AboutUs() {
  return (
    <div
      className="container"
      style={{
        marginTop: "15rem",
        marginBottom: "15rem",
      }}
    >
      <h1
        style={{
          color: "#fd7e14",
          textAlign:"center"
        }}
      >
        About Us
      </h1>
      <p className="my-4 opacity-50 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima
        neque tempora reiciendis.
      </p>

      <div className="row py-5">
        <div className="col-lg-6 col-md-12 col-sm-12 mb-5">
          <img className="img-fluid" src={Aboutus} alt="aboutus" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="paragrahp ">
            <h3>We Solve Your Financial Problem</h3>
            <p className="opacity-50 py-3" >
              {" "}
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p className="opacity-50">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
