import React from "react";
import "./Section5.css";
import logo1 from "../../image2/sp1.jpg";
import logo2 from "../../image2/sp2.jpg";
import logo3 from "../../image2/sp3.jpg";
import special from "../../image2/special.png";

const Section5 = () => {
  return (
    <div className=" sec5_body">
      <img className="pb-5" src={special} alt="logo" />
      <div className="container">
        <div className="sec5_row">
          <div className="">
            <img className="sec5_img" src={logo1} alt="logo" />
            <div>
              <h4>25 January 2022</h4>
              <h5>This is very special watch</h5>
              <small>By: Jhon Dio.</small>
            </div>
          </div>
          <div className="">
            <img className="sec5_img" src={logo2} alt="logo" />
            <div>
              <h4>07 February 2022</h4>
              <h5>Very Nice and Gorgious</h5>
              <small>By: Alex De.</small>
            </div>
          </div>
          <div className="">
            <img className="sec5_img" src={logo3} alt="logo" />
            <div>
              <h4>20 February 2022</h4>
              <h5>This watch has Amezing Features</h5>
              <small>By: Jhon Emiot.</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
