import React from "react";
import AboutUs from "./about/AboutUs";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import Gallerly from "./gallery/Gallerly";
import MainHeader from "./mainHeader/MainHeader";
import MeetTeam from "./meet team/MeetTeam";
import Navbar from "./navbar/Navbar";
import Services from "./services/Services";
import Time from "./time/Time";
import { Element } from "react-scroll";
function Index() {
  return (
    <>
      <Time />
      <Navbar />
      <MainHeader />
      <Services />
      <Element name="About" className="About">
        <AboutUs />
      </Element>
      <Element name="MeetTeam" className="MeetTeam">
        <MeetTeam />
      </Element>
      <Element name="Gallerly" className="Gallerly">
      <Gallerly />
      </Element>
      <Element name="Contact" className="Contact">
        <Contact />
      </Element>

      <Footer />
    </>
  );
}

export default Index;
