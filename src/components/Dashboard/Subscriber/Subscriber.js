import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Subscriberitem from "../Subscriberitem/Subscriberitem";
import "./Subscriber.css";

const Subscriber = () => {
  const [sub, setSub] = useState([]);
  const [spiners, setSpiners] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/subscriber")
      .then((res) => res.json())
      .then((data) => {
        setSub(data);
        setSpiners(true);
      });
  }, []);

  const buttonclick = () => {
    fetch("http://localhost:5000/subscriber")
      .then((res) => res.json())
      .then((data) => {
        setSub(data);
        setSpiners(true);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="custom_row_sub">
          {spiners ? (
            sub.map((sub) => (
              <Subscriberitem
                key={sub.id}
                sub={sub}
                buttonclick={buttonclick}
              ></Subscriberitem>
            ))
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscriber;
