import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Subscriberitem.css";

const Subscriberitem = (props) => {
  const { _id, subscribers } = props.sub;

  const handledelete = (Id) => {
    const procced = window.confirm("Are You sure, you want to delete?");

    if (procced) {
      const url = `http://localhost:5000/dashboard/subscriber/${Id}`;
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
    <div className="card_sub">
      <div className="">
        <h6>{subscribers}</h6>
      </div>
      <div className="">
        <Link to="/dashboard/subscriber">
          <button
            className="sub_delete_button"
            onClick={() => handledelete(_id)}
          >
            DELETE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Subscriberitem;
