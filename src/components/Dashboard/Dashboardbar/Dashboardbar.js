import React, { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { Spinner } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Dashboardbar.css";

const Dashboardbar = () => {
  let { url } = useRouteMatch();
  const { user } = useAuth();
  const [admin, setAdmin] = useState("");
  useEffect(() => {
    fetch(
      `https://ancient-springs-87051.herokuapp.com/findadmin/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role == "admin") {
          setAdmin("true");
        } else {
          setAdmin("false");
        }
      });
  }, [user?.email]);

  console.log("search admin " + admin);

  return (
    <div className="navbar_body ">
      <div>
        <ul className="navbar-nav ">
          {admin === "true" ? (
            <span>
              <li className="nav-item ">
                <Link
                  className="nav-link link-buttons cursor"
                  to={`${url}/manageuser`}
                >
                  MANAGE USER
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link link-buttons cursor"
                  to={`${url}/manageorder`}
                >
                  MANAGE ORDER
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link link-buttons cursor"
                  to={`${url}/addproduct`}
                >
                  ADD PRODUCT
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link link-buttons cursor"
                  to={`${url}/manageproduct`}
                >
                  MANAGE PRODUCT
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link link-buttons cursor"
                  to={`${url}/makeadmin`}
                >
                  MAKE ADMIN
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link link-buttons cursor"
                  to={`${url}/subscriber`}
                >
                  SUBSCRIBER
                </Link>
              </li>
            </span>
          ) : admin === "false" ? (
            <span>
              <li className="nav-item ">
                <Link
                  className="nav-link link-buttons cursor"
                  to={`${url}/payment`}
                >
                  PAYMENT
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link link-buttons cursor"
                  to={`${url}/myorder`}
                >
                  MY ORDER
                </Link>
              </li>
            </span>
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboardbar;
