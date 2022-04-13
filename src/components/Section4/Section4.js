import React from "react";
import "./Section4.css";
import banner from "../../image2/banner.jpg";
import banner1 from "../../image2/banner1.jpg";
import banner2 from "../../image2/banner2.jpg";

const Section4 = () => {
  return (
    <div className="container p-5">
      <div className="row g-5">
        <div className="col-lg-4 sec4_banner">
          <img src={banner1} alt="banner" />
          <div className="posit">
            <h5>MINIMUM 10% OFF </h5>
            <h5>NEW WATCH</h5>
          </div>
        </div>
        <div className="col-lg-4 sec4_banner">
          <img src={banner2} alt="banner" />
        </div>
        <div className="col-lg-4 sec4_banner">
          <img src={banner} alt="banner" />
          <div className="posit">
            <h5>MINIMUM 40% OFF </h5>
            <h5>GOLD WATCH</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
