import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ManageProductItem from "../ManageProductItem/ManageProductItem";
import "./ManageProduct.css";

const ManageProduct = () => {
  const [product, setProducts] = useState([]);
  const [spiners, setSpiners] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSpiners(true);
      });
  }, []);

  const buttonclick = () => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
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
              <ManageProductItem
                key={product.id}
                product={product}
                buttonclick={buttonclick}
              ></ManageProductItem>
            ))}
          </div>
        </div>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </div>
  );
};

export default ManageProduct;
