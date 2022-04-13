import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointRight,
  faLocationArrow,
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import facebook from "../../image/facebook.png";
import linkedin from "../../image/linkedin.png";
import twitter from "../../image/twitter.png";
import instagram from "../../image/instagram.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="background_color">
      <div className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h1>
                <span className="footer_title">NEXT</span>WATCH
              </h1>
              <p className="footer_des">
                Next Watch is a best quality online shop. We never compromise on
                the quality of the product
              </p>
              <div className="social">
                <img className="social-logo" src={facebook} alt="icon" />
                <img className="social-logo" src={twitter} alt="icon" />
                <img className="social-logo" src={linkedin} alt="icon" />
                <img className="social-logo" src={instagram} alt="icon" />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-2">
              <h6>MY ACCOUNT</h6>
              <div className="item">
                <small className="cursor2">Mens</small>
                <br />
                <small className="cursor2">Womens</small>
                <br />
                <small className="cursor2">Accessories</small>
                <br />
                <small className="cursor2">Fetured</small>
                <br />
                <small className="cursor2">Mens</small>
                <br />
                <small className="cursor2">Womens</small>
              </div>
              <br />
            </div>
            <div className="col-lg-2">
              <h6>WHY WE CHOOSE</h6>
              <div className="item">
                <small className="cursor2">Shipping & Return</small>
                <br />
                <small className="cursor2">Secure Shopping</small>
                <br />
                <small className="cursor2">Best Quality Product</small>
                <br />
                <small className="cursor2">Best Customer Support</small>
                <br />
                <small className="cursor2">Affiliates</small>
                <br />
                <small className="cursor2">Gallary</small>
              </div>
            </div>
            <div className="col-lg-3">
              <h6>STORE INFORMATION</h6>
              <br />
              <div>
                <div className="d-flex justify-content-start ">
                  <FontAwesomeIcon
                    className="fonticon_color"
                    icon={faLocationDot}
                  />
                  <small className="ms-3 footer-font">
                    House-70, road-13, block-g, Gulsan-1, Dhaka
                  </small>
                </div>
                <div className="d-flex justify-content-start footer-font">
                  <FontAwesomeIcon className="fonticon_color" icon={faPhone} />
                  <small className="ms-3 ">
                    +8801733-235567, +8801992-98982323
                  </small>
                </div>
                <div className="d-flex justify-content-start footer-font">
                  <FontAwesomeIcon
                    className="fonticon_color"
                    icon={faEnvelope}
                  />
                  <small className="ms-5 ">nextwatch@gmail.com</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <span className="copy_write">
          ©2022 All Right Reserved by <span>NEXT</span>WATCH
        </span>
      </div>
    </div>
  );
};

export default Footer;
