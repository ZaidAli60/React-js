import NavigationBar from "../../commonComponent/navigationBar/navigationBar";
import Header from "../header/header";
import Slider from "../slider/slider";
import Feature from "../jenkinsFeature/feature";
import Watch from "../watchVideo/watch";
import Companys from "../company/company";
import Footer from "../../commonComponent/footer/footer";
import RecentBlogs from "../recentBlogs/recentBlog";


function LandingPage() {
    return (<div>
        <NavigationBar />
        <Header />
        <Slider />
        <Feature />
        <Watch />

      
        <RecentBlogs />

     
        <Companys />
        <Footer />
 
           
        
      
     

    </div>)
}

export default LandingPage;