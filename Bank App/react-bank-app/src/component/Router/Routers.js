import React from 'react'
import MainContent from "../mainContent/MainContent";
import Accounts from "../Accounts/Accounts";
import Time from "../Time/Time";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transcation from '../transcation/Transcation';
function Routers() {
  return (
    <>
      <BrowserRouter>
        <Time />
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/create-account" element={<Accounts />} />
          <Route
            path="/transactions"
            element={<Transcation />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default Routers;