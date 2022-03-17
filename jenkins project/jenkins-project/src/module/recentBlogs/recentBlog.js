
import { blogsData } from "../../blogsData/blogsData";
import RecentData from "./recentData";
function RecentBlogs() {
    return (
        <div>
            
            {
                blogsData.map((items) =>{
                    return <RecentData dataPass={items} /> 
                })
            }
        </div>
    )
}

export default RecentBlogs;