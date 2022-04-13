import React from "react";
import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Dashboardbar.css";

const Dashboardbar = () => {
  let { url } = useRouteMatch();
  return (
    <div className="navbar_body ">
      <div>
        <ul className="navbar-nav ">
          <li className="nav-item ">
            <Link
              className="nav-link link-buttons cursor"
              to={`${url}/payment`}
            >
              Payment
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

          <br />

          <span>
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
          </span>
        </ul>
      </div>
    </div>
  );
};

export default Dashboardbar;
