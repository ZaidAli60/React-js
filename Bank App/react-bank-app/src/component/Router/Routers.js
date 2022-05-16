import React from 'react'
import MainContent from "../mainContent/MainContent";
import Accounts from "../Accounts/Accounts";
import Time from "../Time/Time";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function Routers() {
  return (
    <>
      <BrowserRouter>
        <Time />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/create-account" element={<Accounts />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routers;