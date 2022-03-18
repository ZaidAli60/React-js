

import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";

  import Blogs from "../pages/blog/blog";
  import LandingPages from "../module/landingPage/landingPages"
import NavigationBar from "../commonComponent/navigationBar/navigationBar";
import Documentation from "../pages/documentation/documentation";


  function Routing() {
      return (
          <div>
              <BrowserRouter>
              <NavigationBar />
              {/* <LandingPages /> */}
               <Routes>
                  <Route path ="/" element ={<LandingPages />}/>
                  <Route path ="/blog" element ={<Blogs />}/>
                  <Route path ="/document" element ={<Documentation />}/>
              </Routes>
              </BrowserRouter>
             
          </div>
      )
  }

  export default Routing;