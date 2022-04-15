import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ManageProductItem from "../ManageProductItem/ManageProductItem";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const buttonclick = () => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  return (
    <div className="product_body">
      <div className="container">
        <div className="manage_custom_row">
          {product ? (
            product.map((product) => (
              <ManageProductItem
                key={product.id}
                product={product}
                buttonclick={buttonclick}
              ></ManageProductItem>
            ))
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
