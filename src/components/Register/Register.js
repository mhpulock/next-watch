import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import email from "../../image/email.png";
import password from "../../image/password.png";
import name from "../../image/name.png";

const Register = () => {
  return (
    <div className="registerBody">
      <br />
      <h1 className="registerTitle">Register Now</h1>
      <br />

      <div class="container">
        <div class="row">
          <div class="col-lg-4"></div>
          <div class="col-lg-4">
            <div className="cardRegisterbody">
              <form className="justify-content-center">
                <div>
                  <img className="icon" src={name} alt="name" />
                  <input
                    className="my-1"
                    type="email"
                    placeholder="Enter your Name"
                  />
                </div>
                <br />
                <div>
                  <img className="icon" src={email} alt="user" />
                  <input
                    className="my-1"
                    type="email"
                    placeholder="Enter your Email"
                  />
                </div>
                <br />
                <div>
                  <img className="icon" src={password} alt="password" />
                  <input
                    className="my-1"
                    type="password"
                    placeholder="Enter your Password"
                  />
                </div>
                <br />
                <input
                  className="my-1 registerbuttondesign bg-dark text-light"
                  type="submit"
                  value="Sign UP"
                />
              </form>
              <br />
              <br />
              <button className="registerbuttondesign">
                <Link className="text-decoration-none " to="/login">
                  Already Register
                </Link>
              </button>
            </div>
          </div>
          <div class="col-lg-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
