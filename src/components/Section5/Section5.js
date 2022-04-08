import React from "react";
import "./Section5.css";
import background3 from "../../images/background3.jpg";
import contactpeople from "../../images/contact-people.png";

const Section5 = () => {
  return (
    <div
      className="section5body"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
url(${background3})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div>
              <img className="people" src={contactpeople} alt="people" />
            </div>
          </div>
          <div className="col-lg-7 d-flex justify-content-center align-item-center">
            <div className="contact">
              <form className="">
                <h4>CONTACT US</h4>
                <p>
                  Just pack and go! Let leave your travel plan to travel
                  experts!
                </p>
                <input
                  className="my-2 inputfield"
                  type="email"
                  placeholder=" Enter your Name"
                />

                <input
                  className="my-2 inputfield"
                  type="email"
                  placeholder=" Enter your Email"
                />

                <textarea
                  className="my-2 inputfield"
                  rows="4"
                  cols="50"
                  name="comment"
                  form="usrform"
                  placeholder="Comments here"
                ></textarea>
                <input
                  className="my-2 submitbutton"
                  type="submit"
                  value="SEND"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
