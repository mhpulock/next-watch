import React from "react";
import "./Banner.css";
import { Carousel } from "react-bootstrap";
import banner1 from "../../slider/banner1.png";
import banner2 from "../../slider/banner2.png";
import banner3 from "../../slider/banner3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner ">
      <Carousel>
        <Carousel.Item>
          <div className="row ">
            <div className="col-lg-5 d-flex justify-content-center align-items-center">
              <div className="article1">
                <h5>Feel Free to Buy and Enjoy The Quality Products</h5>
                <h1>100% Product Guarantee</h1>
                <Link to="/product">
                  <button className="button_design">SHOP NOW</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <img
                className="d-block banner_logo"
                src={banner1}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row ">
            <div className="col-lg-5 d-flex justify-content-center align-items-center">
              <div className="article1">
                <h5>
                  Welcome to Fashion. No Worries About the Product, 100%
                  Original
                </h5>
                <h1>MEN'S WATCH</h1>
                <Link to="/product">
                  <button className="button_design">SHOP NOW</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <img
                className="d-block banner_logo"
                src={banner2}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row ">
            <div className="col-lg-5 d-flex justify-content-center align-items-center">
              <div className="article1">
                <h5>
                  Best Bujet and Best Watch. Order now to maintain your nobility{" "}
                </h5>
                <h1>Unique Quality</h1>
                <Link to="/product">
                  <button className="button_design">SHOP NOW</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-7">
              <img
                className="d-block banner_logo"
                src={banner3}
                alt="First slide"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
