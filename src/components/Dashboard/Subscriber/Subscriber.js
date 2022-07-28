import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Subscriberitem from "../Subscriberitem/Subscriberitem";
import "./Subscriber.css";

const Subscriber = () => {
  const [sub, setSub] = useState([]);
  const [spiners, setSpiners] = useState(false);

  useEffect(() => {
    fetch("https://ancient-springs-87051.herokuapp.com/subscriber")
      .then((res) => res.json())
      .then((data) => {
        setSub(data);
        setSpiners(true);
      });
  }, []);

  const buttonclick = () => {
    fetch("https://ancient-springs-87051.herokuapp.com/subscriber")
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
