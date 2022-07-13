import React from "react";
import "./MeetTeam.css";
import Pic1 from "../../../Assets/pic1.jpg";
import MeetData from "./MeetTeamData";
function MeetTeam() {
  return (
    <div className="container">
      <h1 className="meetTeam">Meet Team</h1>
      <p className="py-3 opacity-50">
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia.
      </p>
      <div className="row">
        {MeetData.map((item) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xm-12 py-4">
              {/* <div className="card"> */}
                <img src={item.img} className="card-img-top" alt="pic" />
                <div >
                  <h5 className="pt-3">{item.heading}</h5>
                  <p className="opacity-50">{item.des}</p>
                </div>
              {/* </div> */}
            </div>
          );
        })}

        {/* <div className="col">
          <img src={Pic1} alt="pic1" />
        </div> */}
      </div>
    </div>
  );
}

export default MeetTeam;
