import React from "react";
import "./Header.css";
import logo from "../../image/travel-logo.png";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
  const { user, logout } = useFirebase();

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/home">
            <div className="navber-logo">
              <h1>Fab</h1>
              <img className="img-logo" src={logo} alt="logo" />
            </div>
          </Link>
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
                <Link className="nav-link link-button cursor" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link link-button cursor" to="/Service">
                  Servive
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-button cursor" to="/login">
                  Sign-In/Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-button" to="">
                  {user.displayName}
                </Link>
              </li>
              {user?.email && (
                <li className="nav-item">
                  <button onClick={logout} className="link-button cursor">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
