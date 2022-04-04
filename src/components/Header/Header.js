import React from "react";
import "./Header.css";
import logo from "../../image/travel-logo.png";

const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="navber-logo">
              <h1>Fab</h1>
              <img className="img-logo" src={logo} alt="logo" />
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item ">
                <a className="nav-link link-button cursor" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link link-button cursor" href="#">
                  Servive
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-button cursor" href="#">
                  Sign-In/Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
