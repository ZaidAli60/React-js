import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Footer from "./component/footer/Footer";
import MainContent from "./component/mainContent/MainContent";
import Navbar from "./component/navbar/Navbar";
import Time from "./component/Time/Time";
// import CreateAccount from './component/mainContent/Modal';
import Accounts from "./component/Accounts/Accounts";
import AccountContext from "./AccountContext";

function App() {
  return (
    <AccountContext.Provider>
      <div className="App">
        <BrowserRouter>
          <Time />
          <Navbar />
          <Routes>
            <Route path="/" element={<MainContent />} />
            {/* <Route path='/dashboard' element={<MainContent />} /> */}
            <Route path="/create-account" element={<Accounts />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </AccountContext.Provider>
  );
}

export default App;
