import React from "react";
import "./MeetTeam.css";
import MeetData from "./MeetTeamData";
function MeetTeam() {
  return (
    <div className="container text-center">
      <h1 className="meetTeam">Meet Team</h1>
      <p className="py-3 opacity-50">
        A small river named Duden flows by their place and supplies it with the
        necessary regelialia.
      </p>
      <div className="row">
        {MeetData.map((item,index) => {
          return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-xm-12 py-4">
                <img src={item.img} className="card-img-top" alt="pic" />
                <div >
                  <h5 className="pt-3">{item.heading}</h5>
                  <p className="opacity-50">{item.des}</p>
                </div>
            </div>
          );
        })}


      </div>
    </div>
  );
}

export default MeetTeam;
