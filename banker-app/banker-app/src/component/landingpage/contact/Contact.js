import React from "react";
import "./Contact.css";
import { IoLocation } from "react-icons/io5";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <div className="bg-light py-4">
      <div className="container">
        <h1 className="bankercontact">Contact</h1>
        <div className="row py-3">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xm-12">
            <IoLocation  className="bankercontact fs-1 my-3"/>
            <p className="opacity-50">203 Fake St. Mountain View, San Francisco, California, USA</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xm-12">
            <AiTwotonePhone  className="bankercontact fs-1 my-3"/>
            <p className="bankercontact">+1 232 3235 324</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xm-12">
            <AiOutlineMail  className="bankercontact fs-1 my-3"/>
            <p className="bankercontact">youremail@domain.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
