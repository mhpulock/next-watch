import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MyOrderItem from "../MyOrderItem/MyOrderItem";
import "./MyOrder.css";
import { useHistory } from "react-router-dom";

const MyOrder = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [product, setProducts] = useState([]);
  const [spiners, setSpiners] = useState(false);

  useEffect(() => {
    fetch(`https://ancient-springs-87051.herokuapp.com/myorder/${user.email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => {
        setProducts(data);
        setSpiners(true);
      });
  }, [user?.email]);

  const buttonclick = () => {
    fetch(`https://ancient-springs-87051.herokuapp.com/myorder/${user.email}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("idToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else if (res.status === 401) {
          history.push("/login");
        }
      })
      .then((data) => {
        setProducts(data);
        setSpiners(true);
      });
  };

  return (
    <div className="product_body">
      {spiners ? (
        <div className="container">
          <div className="manage_custom_row">
            {product.map((product) => (
              <MyOrderItem
                key={product.id}
                product={product}
                buttonclick={buttonclick}
              ></MyOrderItem>
            ))}
          </div>
        </div>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </div>
  );
};

export default MyOrder;
