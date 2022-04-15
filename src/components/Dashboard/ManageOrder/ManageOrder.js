import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./ManageOrder.css";
import ManageOrderItem from "../ManageOrderItem/ManageOrderItem";

const ManageOrder = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/myorder")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const buttonclick = () => {
    fetch("http://localhost:5000/myorder")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  return (
    <div className="product_body">
      <div className="container">
        <div className="manage_custom_row">
          {product ? (
            product.map((product) => (
              <ManageOrderItem
                key={product.id}
                product={product}
                buttonclick={buttonclick}
              ></ManageOrderItem>
            ))
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
