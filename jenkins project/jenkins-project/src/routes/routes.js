

import {
    BrowserRouter,
    Routes,
    Route,
    
  } from "react-router-dom";

  import Blogs from "../pages/blog/blog";
  import LandingPages from "../module/landingPage/landingPages"
import NavigationBar from "../commonComponent/navigationBar/navigationBar";
import Documentation from "../pages/documentation/documentation";
import Plugins from "../pages/plugins/plugins";


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
                  <Route path ="/plugins" element ={<Plugins />}/>
              </Routes>
              </BrowserRouter>
             
          </div>
      )
  }

  export default Routing;