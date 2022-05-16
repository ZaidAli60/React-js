import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./component/footer/Footer";
import MainContent from "./component/mainContent/MainContent";
import Navbar from "./component/navbar/Navbar";
import Time from "./component/Time/Time";
// import CreateAccount from './component/mainContent/Modal';
import Accounts from "./component/Accounts/Accounts";

function App() {
  return (
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
  );
}

export default App;
