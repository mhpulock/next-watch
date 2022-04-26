import React from "react";
import "./TrackOrder.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const TrackOrder = (props) => {
  const {
    _id,
    fullName,
    email,
    Name,
    img,
    model,
    shortdes,
    price,
    quantity,
    rating,
    orderStatus,
    cityname,
    address,
    zip,
    mobile,
    description,
    date,
  } = props.trackitem;

  return (
    <div className="section2_cart">
      <img className="manage_cart_image" src={img} alt="logo" />
      <div className="manage_cart_b_height">
        <small>P-ID : {_id}</small>
        <h6 className=" ">{model}</h6>
        <h6>{shortdes}</h6>
      </div>

      {rating == 1 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className="high" icon={faStar} />
        </div>
      ) : rating == 2 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className="high" icon={faStar} />
        </div>
      ) : rating == 3 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className=" high" icon={faStar} />
          <FontAwesomeIcon className="high" icon={faStar} />
        </div>
      ) : rating == 4 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="high" icon={faStar} />
        </div>
      ) : rating == 5 ? (
        <div>
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
          <FontAwesomeIcon className="single_icon_color high" icon={faStar} />
        </div>
      ) : (
        <div></div>
      )}

      <h5 className="pb-2">
        PRICE : <span className="sec2_dolar">$</span>
        <span className="sec2_price">{price}</span>
      </h5>
      <h6>Quantity : {quantity}</h6>
      <h5>ORDER : {orderStatus}</h5>
      <h6 className=" ">Email : {email}</h6>
      <h6>Order Name : {fullName}</h6>
      <h6>User Name : {Name}</h6>
      <h6>City : {cityname}</h6>
      <h6>Address : {address}</h6>
      <h6>Zip : {zip}</h6>
      <h6>Mobile : {mobile}</h6>
      <h6>Order Date : {date}</h6>
      <h6>Description : {description}</h6>
      <div></div>
    </div>
  );
};

export default TrackOrder;
