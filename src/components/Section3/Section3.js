import React from "react";
import { Link } from "react-router-dom";
import background1 from "../../images/background.jpeg";
import background2 from "../../images/video-bg.jpg";
import "./Section3.css";

const Section3 = () => {
  return (
    <div
      className="section3body"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background1})`,
      }}
    >
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="d-flex justify-content-start">
                <h5>
                  IT'S A <span className="section3title">BIG WORLD</span> OUT
                  THERE
                </h5>
              </div>
              <div className="d-flex justify-content-start">
                <h1 className="section3title2">GO EXPLORE</h1>
              </div>
              <div>
                <p className="testFormate">
                  There are many variations of passages of. Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't
                  look.
                </p>
              </div>
              <br />
              <div className="d-flex justify-content-start">
                <Link className="readButton">READ MORE</Link>
              </div>
            </div>
            <div className="col-lg-7">
              <div>
                <img className="img-position" src={background2} alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
