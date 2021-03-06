import { useState } from "react";
import "./Gallerly.css";
import GallerlyData from "./galleryData";
function Gallerly() {
  const [data, setdata] = useState(GallerlyData);

  const menuItems = [...new Set(GallerlyData.map((Val) => Val.category))];
  const filterData = (curval) => {
    const newItems = GallerlyData.filter((item) => {
      return item.category === curval;
    });
    setdata(newItems);
  };
  return (
    <div className=" my-5">
      <h1 className="gallerly ">Gallerly</h1>
      <div className="gallerlyBtn mt-5 text-center">
        <button
          className="btns text-uppercase"
          onClick={() => setdata(GallerlyData)}
        >
          All
        </button>
        {menuItems.map((item,index) => {
          return (
            <button key={index}
              className="btns text-uppercase "
              onClick={() => filterData(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <div className="container">
        <div className="row">
          {data.map((item) => {
            return (
              <div key={item.id} className="col-lg-4 col-md-3 col-sm-6 col-xm-12 ">
                <img src={item.img} className="card-img-top my-3" alt="pic" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallerly;
