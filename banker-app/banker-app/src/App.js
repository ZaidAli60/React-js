import "./App.css";
import Authcontext from "./component/context/Authcontext";
import Routers from "./component/landingpage/routers";

function App() {
  return (
    <div className="App">
      <Authcontext>
        <Routers />
      </Authcontext>
    </div>
  );
}

export default App;
