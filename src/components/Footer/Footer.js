import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faLocationArrow,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import logo from "../../image/travel-logo.png";
import facebook from "../../image/facebook.png";
import linkedin from "../../image/linkedin.png";
import twitter from "../../image/twitter.png";
import instagram from "../../image/instagram.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 d-flex justify-content-center my-5">
            <div className="footer-logo">
              <h1>Fab</h1>
              <img className="img2-logo" src={logo} alt="logo" />
            </div>
          </div>
          <div className="col-lg-2 mt-3 ">
            <h3 className="footer-font" style={{ color: "#367adb" }}>
              Book Now
            </h3>
            <div className="d-flex justify-content-center">
              <div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <h6 className="ms-2 footer-font">Flights</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <h6 className="ms-2 footer-font">Tours</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <h6 className="ms-2 footer-font">Pakages</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <h6 className="ms-2 footer-font">Transfer</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <h6 className="ms-2 footer-font">Car Rent</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faHandPointRight} />
                  <h6 className="ms-2 footer-font">Cruises</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-3">
            <h3 className="footer-font" style={{ color: "#367adb" }}>
              Top Deals
            </h3>
            <div className="d-flex justify-content-center">
              <div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <h6 className="ms-2 footer-font">Tour Pakages Singapur</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <h6 className="ms-2 footer-font">Tour Pakages Manila</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <h6 className="ms-2 footer-font">Tour Pakages New York</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <h6 className="ms-2 footer-font">Tour Pakages Sanghai</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <h6 className="ms-2 footer-font">Tour Pakages Hongkong</h6>
                </div>
                <div className="d-flex justify-content-start align-items-center cursor2">
                  <FontAwesomeIcon icon={faLocationArrow} />
                  <h6 className="ms-2 footer-font">Tour Pakages Tokyo</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 mt-3">
            <h3 className="footer-font" style={{ color: "#367adb" }}>
              Contact US
            </h3>

            <div className="mt-3">
              <div className="d-flex justify-content-start ">
                <FontAwesomeIcon icon={faLocationDot} />
                <h6 className="ms-3 footer-font">
                  House-70, road-13, block-g, Gulsan-1, Dhaka
                </h6>
              </div>
              <div className="d-flex justify-content-start ">
                <FontAwesomeIcon icon={faPhone} />
                <h6 className="ms-3 ">+8801733-235567, +8801992-98982323</h6>
              </div>
              <div className="d-flex justify-content-start ">
                <FontAwesomeIcon icon={faEnvelope} />
                <h6 className="ms-5 ">fabtravel@gmail.com</h6>
              </div>
            </div>
            <div className="social">
              <img className="social-logo" src={facebook} alt="icon" />
              <img className="social-logo" src={twitter} alt="icon" />
              <img className="social-logo" src={linkedin} alt="icon" />
              <img className="social-logo" src={instagram} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
