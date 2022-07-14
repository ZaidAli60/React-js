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

function Index() {
  return (
    <>
      <Time />
      <Navbar />
      <MainHeader />
      <Services />
      <AboutUs />
      <MeetTeam />
      <Gallerly />
      <Contact />
      <Footer />
    </>
  );
}

export default Index;
