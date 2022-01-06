import Header from "./components/header";
// import Footer from "./components/footer";

import PersonalInformation from "./components/personal";
import Resdential from "./components/Residential";

import Submitform from "./components/submit"
import "./App.css"
import Parent from "./component2/parent"
function App() {
  return (
    <div className="mainfile">
      <Parent />
      {/* <Header /> */}
      {/* <h1>React js</h1>
      <p>Learn the react js</p>
      <Footer /> */}
      <h1>Sign in Form</h1>
      <h1>J.K.M.B Mallick High School</h1>
      <h2>Admission Form    </h2>
      <hr/>
      <PersonalInformation />
      <Resdential />
      <Submitform />


    </div>
  );
}

export default App;
