import React from "react";
import "./Section2.css";
import logo1 from "../../image2/cat1.png";
import logo2 from "../../image2/cat2.png";
import logo3 from "../../image2/cat3.png";
import logo4 from "../../image2/cat4.jpg";
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div className="section2_body">
      <div className="container">
        <div className="section2_custom_row">
          <div className="section2_cart">
            <img className="section2_image" src={logo1} alt="logo" />
            <h6 className="py-3 cart_b_height">
              Fossil FS5799 Everett Chronograph Amber Eco Leather Men's Watch
            </h6>
            <h5 className="pb-2">
              PRICE : <span className="sec2_dolar">$</span>
              <span className="sec2_price">300</span>
            </h5>
            <Link>
              <button className="section2_button">ORDER</button>
            </Link>
          </div>
          <div className="section2_cart">
            <img className="section2_image" src={logo2} alt="logo" />
            <h6 className="py-3 cart_b_height">
              Fossil FS5652 FB-01 Three-Hand Date Stainless Steel Men’s Watch
            </h6>
            <h5 className="pb-2">
              PRICE : <span className="sec2_dolar">$</span>
              <span className="sec2_price">330</span>
            </h5>
            <Link>
              <button className="section2_button">ORDER</button>
            </Link>
          </div>
          <div className="section2_cart">
            <img className="section2_image" src={logo3} alt="logo" />
            <h6 className="py-3 cart_b_height">
              Fossil FS5773 Garrett Chronograph Black Stainless Steel Watch
            </h6>
            <h5 className="pb-2">
              PRICE : <span className="sec2_dolar">$</span>
              <span className="sec2_price">350</span>
            </h5>
            <Link>
              <button className="section2_button">ORDER</button>
            </Link>
          </div>
          <div className="section2_cart">
            <img className="section2_image" src={logo4} alt="logo" />
            <h6 className="py-3 cart_b_height">
              Fossil BQ2403 Fenmore Midsize Multifunction Watch
            </h6>
            <h5 className="pb-2">
              PRICE : <span className="sec2_dolar">$</span>
              <span className="sec2_price">310</span>
            </h5>
            <Link>
              <button className="section2_button">ORDER</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
