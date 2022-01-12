import Header from "../../commonComponents/header"
import Mainheader from "./mainHeader"
import Slider from "./silder";
import Watch from "./watch/watch"
import Companys from "./companys";
import Footer from "./../../commonComponents/footer/footer"
function LandingPage() {
    return(
        <div>
            <Header />
            <Mainheader />
            <Slider />
            <Watch />
            <Companys />
            <Footer />
        </div>
    )
}
export default LandingPage;