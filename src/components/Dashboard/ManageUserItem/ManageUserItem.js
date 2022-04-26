import React from "react";
import "./ManageUserItem.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageUserItem = (props) => {
  const { _id, displayName, email, role, date } = props.user;

  const handledelete = (Id) => {
    const procced = window.confirm("Are You sure, you want to delete?");

    if (procced) {
      const url = `http://localhost:5000/dashboard/manageuser/${Id}`;
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
    <div>
      <hr className="hr_tag" />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-2">
          <p className="text-lg-start">{displayName}</p>
        </div>
        <div className="col-lg-3">
          <p className="text-lg-start">{email}</p>
        </div>
        <div className="col-lg-4">
          <small className="text-lg-start">{date}</small>
        </div>
        <div className="col-lg-1">
          <p className="">{role}</p>
        </div>
        <div className="col-lg-2">
          <Link to="/dashboard/manageuser">
            <button
              className="user_delete_button"
              onClick={() => handledelete(_id)}
            >
              DELETE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ManageUserItem;
