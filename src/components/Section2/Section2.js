import React from "react";
import { Link } from "react-router-dom";
import people from "../../image/people.gif";
import love from "../../image/love.png";
import view from "../../image/view.png";
import comment from "../../image/comment.png";
import tour1 from "../../images/tour-1.jpg";
import tour2 from "../../images/tour-2.jpg";
import tour3 from "../../images/tour-3.jpg";
import "./Section2.css";

const Section2 = () => {
  return (
    <div className="section2-body">
      <div class="container ">
        <div className="d-flex align-item-center justify-content-start ">
          <p className="mx-2">PACK AND GO</p>
          <hr />
          <img className="people-logo" src={people} alt="people" />
        </div>
        <h2 className="d-flex justify-content-start fontStyle">
          AWESOME TOURS
        </h2>

        <div class="row g-4 my-4">
          <div class="col-lg-4">
            <div class="card-design">
              <div className="overflow-hidden">
                <img src={tour1} alt="logo" />
              </div>
              <Link className="saleButton"></Link>
              <h4 className="city cursor2">NEWYORK CITY</h4>
              <div className="cardWidth">
                <div className="row">
                  <Link
                    className="col-4 reaction"
                    style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
                  >
                    <div className="socialReaction">
                      <img src={view} alt="view" />
                      <span>334</span>
                    </div>
                  </Link>
                  <Link
                    className="col-4 reaction"
                    style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
                  >
                    <div className="socialReaction">
                      <img src={love} alt="love" />
                      <span>254</span>
                    </div>
                  </Link>
                  <Link className="col-4 reaction">
                    <div className="socialReaction">
                      <img src={comment} alt="comment" />
                      <span>224</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="p-5">
                <div>
                  <p className="position">
                    <span className="dolar">$</span>
                    <span className="number">350</span> 3 days 2 nights
                  </p>
                </div>
                <div>
                  <p>
                    Really good travel writing inspires us to get up, go out and
                    see the world.
                  </p>
                </div>
                <br />
                <div className="pb-3">
                  <Link className="bookNow">Book Now</Link>
                  <Link className="addList">Add To List</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card-design ">
              <div className="overflow-hidden">
                <img src={tour2} alt="logo" />
              </div>
              <h4 className="city cursor2">PARIS CITY</h4>
              <div className="cardWidth">
                <div className="row">
                  <Link
                    className="col-4 reaction"
                    style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
                  >
                    <div className="socialReaction">
                      <img src={view} alt="view" />
                      <span>334</span>
                    </div>
                  </Link>
                  <Link
                    className="col-4 reaction"
                    style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
                  >
                    <div className="socialReaction">
                      <img src={love} alt="love" />
                      <span>254</span>
                    </div>
                  </Link>
                  <Link className="col-4 reaction">
                    <div className="socialReaction">
                      <img src={comment} alt="comment" />
                      <span>224</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-5">
                <div>
                  <p className="position">
                    <span className="dolar">$</span>
                    <span className="number">350</span> 3 days 2 nights
                  </p>
                </div>
                <div>
                  <p>
                    Really good travel writing inspires us to get up, go out and
                    see the world.
                  </p>
                </div>
                <br />
                <div className="pb-3">
                  <Link className="bookNow">Book Now</Link>
                  <Link className="addList">Add To List</Link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card-design">
              <div className="overflow-hidden">
                <img src={tour3} alt="logo" />
              </div>
              <h4 className="city cursor2">TOKYO CITY</h4>
              <div className="cardWidth">
                <div className="row">
                  <Link
                    className="col-4 reaction"
                    style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
                  >
                    <div className="socialReaction">
                      <img src={view} alt="view" />
                      <span>334</span>
                    </div>
                  </Link>
                  <Link
                    className="col-4 reaction"
                    style={{ borderRight: "1px ridge rgb(180, 172, 172)" }}
                  >
                    <div className="socialReaction">
                      <img src={love} alt="love" />
                      <span>254</span>
                    </div>
                  </Link>
                  <Link className="col-4 reaction">
                    <div className="socialReaction">
                      <img src={comment} alt="comment" />
                      <span>224</span>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="p-5">
                <div>
                  <p className="position">
                    <span className="dolar">$</span>
                    <span className="number">350</span> 3 days 2 nights
                  </p>
                </div>
                <div>
                  <p>
                    Really good travel writing inspires us to get up, go out and
                    see the world.
                  </p>
                </div>
                <br />
                <div>
                  <Link className="bookNow">Book Now</Link>
                  <Link className="addList">Add To List</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <Link className="moreButton">More Tours</Link>
      </div>
    </div>
  );
};

export default Section2;
