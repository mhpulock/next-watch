import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./Product.css";

const Product = () => {
  const [product, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="product_body">
      <div className="container">
        <div className="section2_custom_row">
          {product ? (
            product.map((product) => (
              <SingleProduct key={product.id} product={product}></SingleProduct>
            ))
          ) : (
            <Spinner animation="border" variant="warning" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
