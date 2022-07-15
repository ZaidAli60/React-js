import "./App.css";
import Authcontext from "./component/context/Authcontext";
import Routers from "./component/landingpage/routers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Authcontext>
        <Routers />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Authcontext>
    </div>
  );
}

export default App;
