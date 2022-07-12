import React from "react";
import MainHeader from "./mainHeader/MainHeader";
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
    </>
  );
}

export default Index;
