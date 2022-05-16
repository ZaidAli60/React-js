import "./App.css";
  import { ToastContainer } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
import Routers from "./component/Router/Routers";

function App() {
  // toast("Hello!", {
  //   className: css({
  //     background: "#00FF00 !important",
  //   }),
  // });
  // const myToast = () => (
  //   <div style={{ backgroundColor: myColors.green }}>
  //     ...some text content...
  //   </div>
  // );
  return (
    <div className="App">
      {/* <ToastContainer /> */}
      {/* <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      /> */}

      <ToastContainer toastStyle={{ backgroundColor: "crimson" }} />
      <Routers />
    </div>
  );
}

export default App;
