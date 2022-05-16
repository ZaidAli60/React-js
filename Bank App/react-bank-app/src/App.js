import "./App.css";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Routers from "./component/Router/Routers";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routers />
      </div>
  );
}

export default App;
