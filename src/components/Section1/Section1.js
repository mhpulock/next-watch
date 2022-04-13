import React from "react";
import "./Section1.css";
import logo1 from "../../image2/1.png";
import logo2 from "../../image2/2.png";
import logo3 from "../../image2/3.png";
import logo4 from "../../image2/4.png";
import logo5 from "../../image2/5.png";
import logo6 from "../../image2/7.png";
import banner from "../../image2/banner.png";

const Section1 = () => {
  return (
    <div className="Section1_body">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <img src={logo1} alt="logo" />
          </div>
          <div className="col-lg-2">
            <img src={logo2} alt="logo" />
          </div>
          <div className="col-lg-2">
            <img src={logo3} alt="logo" />
          </div>
          <div className="col-lg-2">
            <img src={logo4} alt="logo" />
          </div>
          <div className="col-lg-2">
            <img src={logo5} alt="logo" />
          </div>
          <div className="col-lg-2">
            <img src={logo6} alt="logo" />
          </div>
        </div>
        <div className="Section1_banner">
          <img src={banner} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
