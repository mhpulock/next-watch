import React from "react";
import "./ManageOrderItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageOrderItem = (props) => {
  const {
    _id,
    fullName,
    email,
    img,
    model,
    price,
    quantity,
    rating,
    orderStatus,
  } = props.product;
  const updateStatus = "Approved";

  const handleapprove = (Id) => {
    const user = { updateStatus };
    fetch(`https://ancient-springs-87051.herokuapp.com/updateStatus/${Id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.modifiedCount) {
          // alert('Order Successfully Completed');
          props.buttonclick();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Approved Successfully",
            showConfirmButton: false,
            timer: 2000,
          });
        }
        console.log(res);
      });

    // e.preventDefault();
  };
  const handledelete = (Id) => {
    const procced = window.confirm("Are You sure, you want to delete?");

    if (procced) {
      const url = `https://ancient-springs-87051.herokuapp.com/dashboard/myorder/${Id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.deletedCount > 0) {
            // alert('Product Added Successfully');
            props.buttonclick();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Delete Successfully",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    }
  };

  return (
    <div className="section2_cart">
      <img className="manage_cart_image" src={img} alt="logo" />
      <div className="manage_cart_b_height">
        <h6 className=" ">{model}</h6>
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
      <h6>CustOrderName : {fullName}</h6>
      <h6 className=" ">{email}</h6>
      <small> P-ID : {_id}</small>
      <div>
        <Link to="/dashboard/manageorder">
          <button
            className="manage_order_button"
            onClick={() => handledelete(_id)}
          >
            DELETE
          </button>
        </Link>
        <Link to="/dashboard/manageorder">
          <button
            className="manage_order_button"
            onClick={() => handleapprove(_id)}
          >
            APPROVE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ManageOrderItem;
