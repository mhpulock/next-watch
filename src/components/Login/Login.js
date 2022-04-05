import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Login = () => {
  const { signInUsingGoogle } = useFirebase();

  return (
    <div>
      <br />
      <h2>Please Login to Continue</h2>
      <br />
      <form className="justify-content-center">
        <input className="my-1" type="email" placeholder="Enter your Email" />
        <br />
        <input
          className="my-1"
          type="password"
          placeholder="Enter your Password"
        />
        <br />
        <input className="my-1" type="submit" value="Login" />
      </form>
      <br />
      <button onClick={signInUsingGoogle}>Google Sign in</button>
      <br />
      <br />
      <Link className="text-decoration-none text-success" to="/register">
        Register Here
      </Link>
    </div>
  );
};

export default Login;
