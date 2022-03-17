

import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";

  import Blogs from "../pages/blog/blog";
  import LandingPages from "../module/landingPage/landingPages"
import NavigationBar from "../commonComponent/navigationBar/navigationBar";


  function Routing() {
      return (
          <div>
              <BrowserRouter>
              {/* <LandingPages /> */}
               <Routes>
                  <Route path ="/" element ={<LandingPages />}/>
                  <Route path ="/blog" element ={<Blogs />}/>
              </Routes>
              </BrowserRouter>
             
          </div>
      )
  }

  export default Routing;