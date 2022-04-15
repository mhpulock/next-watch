import React from "react";
import "./ManageProductItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageProductItem = (props) => {
  const { _id, img, model, shortdes, price, rating } = props.product;

  const handledelete = (Id) => {
    const procced = window.confirm("Are You sure, you want to delete?");

    if (procced) {
      const url = `http://localhost:5000/dashboard/manageproduct/${Id}`;
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
      <img className="section2_image" src={img} alt="logo" />
      <div className="cart_b_height">
        <h6 className=" ">{model}</h6>
        <h6 className=" ">{shortdes}</h6>
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
      <Link to="/dashboard/manageproduct">
        <button className="section2_button" onClick={() => handledelete(_id)}>
          DELETE
        </button>
      </Link>
    </div>
  );
};

export default ManageProductItem;
