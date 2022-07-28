import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ManageUserItem from "../ManageUserItem/ManageUserItem";
import "./ManageUser.css";

const ManageUser = () => {
  const [user, setUser] = useState([]);
  const [spiners, setSpiners] = useState(false);

  useEffect(() => {
    fetch("https://ancient-springs-87051.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setSpiners(true);
      });
  }, []);

  const buttonclick = () => {
    fetch("https://ancient-springs-87051.herokuapp.com/user")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setSpiners(true);
      });
  };

  return (
    <div className="user_body">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-2">
          <h6 className="text-lg-start">Name</h6>
        </div>
        <div className="col-lg-3">
          <h6 className="text-lg-start">Email</h6>
        </div>
        <div className="col-lg-4">
          <h6 className="">Last-Login-Date</h6>
        </div>
        <div className="col-lg-1">
          <h6 className="">Role</h6>
        </div>
        <div className="col-lg-2">
          <h6>Action</h6>
        </div>
      </div>
      {spiners ? (
        user.map((user) => (
          <ManageUserItem
            key={user.id}
            user={user}
            buttonclick={buttonclick}
          ></ManageUserItem>
        ))
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </div>
  );
};

export default ManageUser;
