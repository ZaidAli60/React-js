import React from "react";
import "./Contact.css";
import { IoLocation } from "react-icons/io5";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <div className="bg-light py-4">
      <div className="container">
        <h1 className="bankercontact text-center">Contact</h1>
        <div className="row py-3">
          <div className="col-lg-4 col-md-4 col-sm-6 col-xm-12 text-center">
            <IoLocation className="bankercontact fs-1 my-3" />
            <p className="opacity-50">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xm-12 text-center">
            <AiTwotonePhone className="bankercontact fs-1 my-3" />
            <p className="bankercontact">+1 232 3235 324</p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xm-12 text-center">
            <AiOutlineMail className="bankercontact fs-1 my-3" />
            <p className="bankercontact">youremail@domain.com</p>
          </div>
        </div>
      </div>
      <div className="container bg-white">
        <div className="p-5">
          <h5>Contact Form</h5>
          <form className="py-4">
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control rounded-top-4" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control rounded-top-4" />
              </div>
              <div className="mb-3">
                <label className="form-label">E-mail</label>
                <input type="email" className="form-control rounded-top-4" />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control rounded-top-4" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control form-textarea"
                  rows="5"
                  aria-label="With textarea"
                  placeholder="Write your notes or questions here..."
                ></textarea>
              </div>
            </div>
              <button type="submit" className="btn text-white px-4 py-2" style={{
                backgroundColor:"#fd7e14",
              }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
