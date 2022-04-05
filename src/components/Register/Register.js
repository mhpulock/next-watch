import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h2>Please Register to Continue</h2>
      <br />
      <form className="justify-content-center">
        <input className="my-1" type="email" placeholder="Enter your Name" />
        <br />
        <input className="my-1" type="email" placeholder="Enter your Email" />
        <br />
        <input
          className="my-1"
          type="password"
          placeholder="Enter your Password"
        />
        <br />
        <input className="my-1" type="submit" value="Submit" />
      </form>
      <Link className="text-decoration-none text-success" to="/login">
        Already Register
      </Link>
    </div>
  );
};

export default Register;
