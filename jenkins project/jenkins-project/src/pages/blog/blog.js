
import Footer from "../../commonComponent/footer/footer";
import { blogsData } from "../../blogsData/blogsData";
import Data from "./data";
import "./blog.css"
function Blogs() {
    return (
        <div className="bg-light">
            <div className="container">
                <h1 className="headingPost">Jenkins Community Blog</h1>
                <div>
                    {
                        blogsData.map((item) => {
                            return <Data item={item} />
                        })
                    }


                </div>
            </div>
            <Footer />


        </div>
    )
}
export default Blogs;