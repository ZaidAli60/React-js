import "./App.css";
import MainHeader from "./component/landingpage/mainHeader/MainHeader";
import Navbar from "./component/landingpage/navbar/Navbar";
import Services from "./component/landingpage/services/Services";
import Time from "./component/landingpage/time/Time";
function App() {
  return (
    <div className="App">
      <Time />
      <Navbar />
      <MainHeader />
      <Services />
    </div>
  );
}

export default App;
