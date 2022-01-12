import Header from "../../commonComponents/header"
import Mainheader from "./mainHeader"
import Slider from "./silder";
import Watch from "./watch/watch"
import Companys from "./companys";
function LandingPage() {
    return(
        <div>
            <Header />
            <Mainheader />
            <Slider />
            <Watch />
            <Companys />
        </div>
    )
}
export default LandingPage;