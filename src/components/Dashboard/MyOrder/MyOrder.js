import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import MyOrderItem from "../MyOrderItem/MyOrderItem";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useAuth();
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myorder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user?.email]);

  const buttonclick = () => {
    fetch(`http://localhost:5000/myorder/${user.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  return (
    <div className="product_body">
      <div className="container">
        <div className="manage_custom_row">
          {product ? (
            product.map((product) => (
              <MyOrderItem
                key={product.id}
                product={product}
                buttonclick={buttonclick}
              ></MyOrderItem>
            ))
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
