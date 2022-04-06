import React from "react";
import "./Section1.css";
import people from "../../image/people.gif";
import arrow from "../../image/arrow.png";
import enjoy from "../../images/enjoy.jpg";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="section1-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="d-flex align-item-center justify-content-start">
              <p className="mx-2">BE BORN AGIAN</p>
              <hr />
              <img className="people-logo" src={people} alt="people" />
            </div>
            <h2 className="d-flex justify-content-start fontStyle">
              WE ARE EXPLOORE
            </h2>

            <p className="textAlign">
              Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut eim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex commodo
              consequat uisas aute irure dolor ullamco laboris nisi in
              reprehenderit.
            </p>
            <div className="row">
              <div className="col-lg-5">
                <div className="d-flex">
                  <img style={{ height: "20px" }} src={arrow} alt="arrow" />
                  <p className="mx-2">First Class Flights</p>
                </div>
                <div className="d-flex">
                  <img style={{ height: "20px" }} src={arrow} alt="arrow" />
                  <p className="mx-2">5 Star Accommodations</p>
                </div>
                <div className="d-flex">
                  <img style={{ height: "20px" }} src={arrow} alt="arrow" />
                  <p className="mx-2">Inclusive Packages</p>
                </div>
                <div className="d-flex">
                  <img style={{ height: "20px" }} src={arrow} alt="arrow" />
                  <p className="mx-2">Latest Model Vehicles</p>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="d-flex">
                  <img style={{ height: "20px" }} src={arrow} alt="arrow" />
                  <p className="mx-2">Handpicked Hotels</p>
                </div>
                <div className="d-flex">
                  <img style={{ height: "20px" }} src={arrow} alt="arrow" />
                  <p className="mx-2">Accesibility managment</p>
                </div>
                <div className="d-flex">
                  <img style={{ height: "20px" }} src={arrow} alt="arrow" />
                  <p className="mx-2">10 Languages available</p>
                </div>
                <div className="d-flex">
                  <img style={{ height: "20px" }} src={arrow} alt="arrow" />
                  <p className="mx-2">+120 Premium city tours</p>
                </div>
              </div>
              <div className="col-lg-2"></div>
            </div>

            <div className="container">
              <div className="row ">
                <div className="col-lg-5">
                  <Link className="linkbutton me-auto" to="#">
                    PURCHASE NOW
                  </Link>
                </div>
                <div className="col-lg-5 d-flex  align-item-center">
                  <div>
                    <Link className="linkbutton2 " to="#">
                      READ MORE
                    </Link>
                  </div>
                </div>
                <div className="col-lg-2"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-5 px-5">
            <img src={enjoy} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
