

import "./recentData.css"
function RecentData({ dataPass }) {

    return (<div className="container bg-light">
         
        <div className="container py-4">
        <h2 className="py-2 px-4 postsHeading ">Recent Blog Posts </h2>
            <div className="bg-white  py-4 px-4">
            <h4 className="text-primary">{dataPass.heading}</h4>
            <p className="description">{dataPass.description}</p>
            <p className="text-danger">{dataPass.para}</p>
            </div>
        </div>
    </div>)
}
export default RecentData;