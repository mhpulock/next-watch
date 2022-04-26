import "./Section2.css";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";

const Section2 = () => {
  const [products, setProducts] = useState([]);
  const [spiners, setSpiners] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/addproduct")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSpiners(true);
      });
  }, []);
  const product = products.slice(0, 4);

  return (
    <div className="section2_body">
      {spiners ? (
        <div className="container">
          <div className="section2_custom_row">
            {product.map((product) => (
              <SingleProduct key={product.id} product={product}></SingleProduct>
            ))}
          </div>
        </div>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
    </div>
  );
};

export default Section2;
